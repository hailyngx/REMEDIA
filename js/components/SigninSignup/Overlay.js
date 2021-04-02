// import SigninSignup from "../../screens/SigninSignup.js";

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <!-- Font Awesome-->
    <link rel="stylesheet" href="../../../css/signinsignup.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <div id="overlay-panel">
        <h1 id="title"></h1>
        <p id = "information"></p>
        <button class="ghost" id="button"></button>
    </div>
`

export default class Overlay extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$title = this.shadowRoot.getElementById('title')
        this.$information = this.shadowRoot.getElementById('information')
        this.$button = this.shadowRoot.getElementById('button')
        this.$overlayPanel = this.shadowRoot.getElementById('overlay-panel')
    }

    static get observedAttributes() {
        return ['title','information','button'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'title':
                this.$title.innerHTML = newValue
                break;
        
            case 'information':
                this.$information.innerHTML = newValue
                break;

            case 'button':
                this.$button.innerHTML = newValue
                break
        }

    }   

    set changeClasstoContainer(callback) {
        this.$button.onclick = () => {
            callback()
        }
    }
    
}
window.customElements.define('over-lay', Overlay)