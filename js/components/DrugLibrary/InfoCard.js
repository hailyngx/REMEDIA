const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="./css/InfoCard.css">
    <div class="card">
    <div class="imgBx">
        <img id="image" src="../assets/druglibrary/loratadine.jpg">
    </div>
    <div class="content">
        <h2 id="name">Loratadine</h2>
        <p id="description">Loratadine is used to treat sneezing, runny nose, watery eyes, hives, skin rash,
            itching, and other cold or allergy symptoms.
        </p>
        <h2 id="review-rates">Review Rates: 4.0 ⭐️</h2>
        <button id="add-to-essentials"class="btn btn-primary shop-item-button" type="button">ADD TO ESSENTIAL</button>
    </div>
</div>
`

export default class InfoCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$image = this.shadowRoot.getElementById('image');
        this.$name = this.shadowRoot.getElementById('name');
        this.$description = this.shadowRoot.getElementById('description');
        this.$reviewRates = this.shadowRoot.getElementById('review-rates');

        this.$add = this.shadowRoot.getElementById('add-to-essentials');

    }

    static get observedAttributes() {
        return ['name','description', 'image', 'review-rates'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'image':
                this.$image.setAttribute('src', newValue)
                break;

            case 'name':
                this.$name.innerHTML = newValue
                break;
        
            case 'description':
                this.$description.innerHTML = newValue
                break;

            case 'review-rates':
                this.$reviewRates.innerHTML = newValue
                break;
        }
    }   

    set onAddToCart (cb) {
        this.$add.onclick = () => {
            cb() 
        }
    } 
}

window.customElements.define('info-card', InfoCard)