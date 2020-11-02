
function clickCallback(node) {
  console.log('==> clickCallback', node);
}

function dragEndCallback(node) {
  console.log('==> dragEndCallback', node);
}

ReactDOM.render(
  React.createElement(MindMap.default, { 
    nodes: map.nodes, 
    connections: map.connections, 
    editable: true,
    onClick: clickCallback,
    onDragEnd: dragEndCallback
  }),
  document.getElementById('target'),
);
