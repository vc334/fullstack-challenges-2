const listItem = (content) => {
  // TODO: return the proper <li> HTML tag with its content (as a string)
  return `<li class="list-group-item">${content}</li>`;
};

const unorderedList = (items) => {
  // TODO: return the proper <ul> markup (as a string)
  const beginning = '<ul class="list-group">';
  const end = '</ul>';

  const newItems = items.map((item) => {
    return `<li class="list-group-item">${item}</li>`;
  });

  return beginning + newItems.toString().replace(',', '') + end;
};

module.exports = { listItem, unorderedList }; // Do not remove.
