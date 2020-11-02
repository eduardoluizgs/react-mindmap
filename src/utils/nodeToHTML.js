/*
 * Return the HTML representation of a node.
 * The node is an object that has text, url, and category attributes;
 * all of them optional.
 */
export default (node) => {
  let href = `href="${node.url}"`;
  let emoji = '';

  // Add emojis from WebFX
  if (node.category !== undefined && node.category !== null) {
    emoji = `<img class="mindmap-emoji" title="${node.category.replaceAll(':', '')}" src="https://www.webfx.com/tools/emoji-cheat-sheet/graphics/emojis/${node.category.replaceAll(':', '')}.png">`;
  }

  // If url is not specified remove the emoji and the href attribute,
  // so that the node isn't clickable, and the user can see that without
  // having to hover the node.
  if (!node.url) {
    href = '';
    emoji = '';
  }

  return `<a id="node-${node.index}" ${href}>${node.text || ''} ${emoji}</a>`;
};
