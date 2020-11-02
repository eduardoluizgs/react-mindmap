/*
 * Return the HTML representation of a node.
 * The node is an object that has text, url, and category attributes;
 * all of them optional.
 */
const subnodesToHTML = (subnodes = [], fcolor) => {
  let color = fcolor || '';

  if (!fcolor && subnodes.length > 0 && subnodes[0].color) {
    color = `style="border-left-color: ${subnodes[0].color}"`;
  }

  return subnodes.map((subnode) => {
    let href = `href="${subnode.url}"`;
    let emoji = '';

    // Add emojis from WebFX
    if (subnode.category !== undefined && subnode.category !== null) {
      emoji = `<img class="mindmap-emoji" title="${subnode.category.replaceAll(':', '')}" src="https://www.webfx.com/tools/emoji-cheat-sheet/graphics/emojis/${subnode.category.replaceAll(':', '')}.png">`;
    }

    // If url is not specified remove the emoji and the href attribute,
    // so that the node isn't clickable, and the user can see that without
    // having to hover the node.
    if (!subnode.url) {
      href = '';
      emoji = '';
    }

    return `<div class="mindmap-subnode-group" ${color}>
      <a ${href}>${subnode.text || ''} ${emoji}</a>
      <div>${subnodesToHTML(subnode.nodes, color)}</div>
    </div>`;
  }).join('');
};

export default subnodesToHTML;
