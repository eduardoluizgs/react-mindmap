import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  select,
  zoom,
  zoomIdentity,
} from 'd3';

import {
  d3Connections,
  d3Nodes,
  d3Drag,
  d3PanZoom,
  onTick,
} from './utils/d3';
import { getDimensions, getViewBox } from './utils/dimensions';
import subnodesToHTML from './utils/subnodesToHTML';
import nodeToHTML from './utils/nodeToHTML';
import '../sass/main.sass';


export default class MindMap extends Component {
  constructor(props) {
    super(props);

    // Create force simulation to position nodes that have no coordinates,
    // and add it to the state.
    const simulation = forceSimulation()
      .force('link', forceLink().id(node => node.text))
      .force('charge', forceManyBody())
      .force('collide', forceCollide());

    this.state = { simulation };

    this.onClickCallback = props.onClick;
    this.onDragEndCallback = props.onDragEnd;
  }

  /* eslint-disable no-param-reassign */
  /*
   * Generates HTML and dimensions for nodes and subnodes.
   */
  prepareNodes() {
    const render = (node) => {
      node.html = nodeToHTML(node);
      node.nodesHTML = subnodesToHTML(node.nodes);

      const dimensions = getDimensions(node.html, {}, 'mindmap-node');
      node.width = dimensions.width;
      node.height = dimensions.height;

      const nodesDimensions = getDimensions(node.nodesHTML, {}, 'mindmap-subnode-text');
      node.nodesWidth = nodesDimensions.width;
      node.nodesHeight = nodesDimensions.height;
    };

    this.props.nodes.forEach(node => render(node));
  }

  /*
   * Add new class to nodes, attach drag behavior, and start simulation.
   */
  prepareEditor(svg, conns, nodes, subnodes) {
    nodes
      .attr('class', 'mindmap-node mindmap-node--editable')
      .on('dblclick', (node) => {
        node.fx = null;
        node.fy = null;
      });

    const dragEndCallback = (node) => {
      if (this.onDragEndCallback !== undefined) {
        this.onDragEndCallback(node);
      }
    };

    nodes.call(d3Drag(this.state.simulation, svg, nodes).on('end', dragEndCallback));

    // Tick the simulation 100 times.
    for (let i = 0; i < 100; i += 1) {
      this.state.simulation.tick();
    }
    onTick(conns, nodes, subnodes);

    setTimeout(() => {
      this.state.simulation
        .alphaTarget(0.5).on('tick', () => onTick(conns, nodes, subnodes));
    }, 200);
  }
  /* eslint-enable no-param-reassign */

  /*
   * Render mind map using D3.
   */
  renderMap() {
    const svg = select(this.mountPoint);

    // Clear the SVG in case there's stuff already there.
    svg.selectAll('*').remove();

    // Add subnode group
    svg.append('g').attr('id', 'mindmap-subnodes');
    this.prepareNodes();

    // Bind data to SVG elements and set all the properties to render them.
    const connections = d3Connections(svg, this.props.connections);
    const { nodes, subnodes } = d3Nodes(svg, this.props.nodes);
    nodes.append('title').text(node => node.note);

    // Bind nodes and connections to the simulation.
    this.state.simulation
      .nodes(this.props.nodes)
      .force('link').links(this.props.connections);

    if (this.props.editable) {
      this.prepareEditor(svg, connections, nodes, subnodes);
    }

    // Tick the simulation 100 times.
    for (let i = 0; i < 100; i += 1) {
      this.state.simulation.tick();
    }
    onTick(connections, nodes, subnodes);

    // Add pan and zoom behavior and remove double click to zoom.
    svg.attr('viewBox', getViewBox(nodes.data()))
      .call(d3PanZoom(svg))
      .on('dblclick.zoom', null);

    // Add click callback funcion
    const clickCallback = (node) => {
      if (this.onClickCallback !== undefined) {
        this.onClickCallback(node);
      }
    };

    svg.selectAll('foreignObject')
      .on('click', clickCallback);
  }

  componentDidMount() {
    this.renderMap();
  }

  componentDidUpdate() {
    zoom().transform(select(this.refs.mountPoint), zoomIdentity);
    this.renderMap();
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <svg className="mindmap-svg" ref={(input) => { this.mountPoint = input; }} />
      </div>
    );
  }
}

MindMap.defaultProps = {
  nodes: [],
  connections: [],
  editable: false,
  onClick: PropTypes.func,
  onDragEnd: PropTypes.func,
};

MindMap.propTypes = {
  nodes: PropTypes.array,
  connections: PropTypes.array,
  editable: PropTypes.bool,
  onClick: PropTypes.func,
  onDragEnd: PropTypes.func,
};
