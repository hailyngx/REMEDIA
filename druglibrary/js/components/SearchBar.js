const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
<link rel="stylesheet" href="./css/SearchBar.css">
<link rel="stylesheet" href="./css/DrugLibrary.css">

<div class="container">
<h1>&#x2728; Drug Shelves &#x2728;</h1>
<div id="searchWrapper">
    <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Search for a cure 🌈"
    />
</div>
<drug-info></drug-info>
</div>
`

export default class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        // this.infoCards = document.getElementById('charactersList');
        // this.searchBar = document.getElementById('searchBar');    
        // let hpCharacters = [];
    }
}

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value.toLowerCase();
//     const filteredCharacters = hpCharacters.filter((character) => {
//         return (
//             character.name.toLowerCase().includes(searchString) ||
//             character.house.toLowerCase().includes(searchString)
//         );
//     });
//     displayCharacters(filteredCharacters);
// });

// const loadCharacters = async () => {
//     try {
//         const res = await fetch('https://hp-api.herokuapp.com/api/characters');
//         hpCharacters = await res.json();
//         displayCharacters(hpCharacters);
//     } catch (err) {
//         console.error(err);
//     }
// };

// const displayCharacters = (characters) => {
//     const htmlString = characters
//         .map((character) => {
//             return `
//             <li class="character">
//                 <h2>${character.name}</h2>
//                 <p>House: ${character.house}</p>
//                 <img src="${character.image}"></img>
//             </li>
//         `;
//         })
//         .join('');
//     charactersList.innerHTML = htmlString;
// };

// loadCharacters();


window.customElements.define('search-bar', SearchBar)