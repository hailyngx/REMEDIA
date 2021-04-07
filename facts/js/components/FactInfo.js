const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="./css/fact-info.css">
    <div class="card" style="background-image: linear-gradient(to top, #dfe9f3 0%, white 100%)">
        <div class="imgBx" data-text="Video Title">
            <img id="image" src="../assets/facts/cocacola.jpeg">
        </div>

        <div class="content">
            <h3 id="fact-name"></h3>
            <p id="fact-content"></p>
            <a id="read-more" href="./cocacola.html">Read more</a>
        </div>
    </div>
`

export default class FactInfo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$factName = this.shadowRoot.getElementById('fact-name');
        this.$factContent = this.shadowRoot.getElementById('fact-content');
        this.$readMore = this.shadowRoot.getElementById('read-more');
        this.$image = this.shadowRoot.getElementById('image');
    }

    static get observedAttributes() {
        return ['image','fact-name','fact-content', 'read-more'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'image':
                this.$image.setAttribute('src', newValue)
                break;

            case 'fact-name':
                this.$factName.innerHTML = newValue
                break;
        
            case 'fact-content':
                this.$factContent.innerHTML = newValue
                break;

            case 'read-more':
                this.$readMore.setAttribute('href', newValue)
                break;
        }
    }   
}

window.customElements.define('fact-info', FactInfo)