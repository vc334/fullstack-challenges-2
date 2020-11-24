// TODO: Autocomplete the input with AJAX calls.
const searchInput = document.getElementById("search");
console.log(searchInput);
const list = document.getElementById("results");

const getTheWord = (e) => {
  const newWord = e.currentTarget.value;
  list.innerHTML = '';
  updateList(newWord);
}


const updateList = (searchWord) => fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${searchWord}`)
  .then(response => response.json())
  .then((data) => {
    data.words.forEach((word) => {
      const newListItem = `
        <li>
          ${word}
        </li>
      `;
      list.insertAdjacentHTML('beforeend', newListItem);
    });
  });

searchInput.addEventListener('keyup', getTheWord);
