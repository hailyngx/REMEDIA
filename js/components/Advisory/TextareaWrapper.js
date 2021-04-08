const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <div class="form-group">
        <textarea id="input" placeholder="Post Content"></textarea>
        <div id="error" class="text-danger"></div>
    </div>
    <style>
        @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            outline: none;
            font-family: 'Poppins', sans-serif;
        }

        textarea{
            margin-top: 20px ;
            background: transparent;
            border: 0px;
            border-bottom: 2px solid #c5ecfd;
            padding: 10px;
            color: #c5ecfd;
            width: 100%;
            height: 195px;
            resize: none;
            font-size: 12px;
        }

        ::placeholder{
            font-size: 12px;
            color: #c5ecfd;

        }

        #error {
            color: red; 
            text-align: left;
            font-size: 10px;
            margin-bottom: 20px;

        }

    </style>
`;

export default class TextareaWrapper extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$input = this.shadowRoot.getElementById('input');
        this.$error = this.shadowRoot.getElementById('error');
    }

    static get observedAttributes() {
        return ['placeholder', 'error', 'default'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch (attrName) {

            case 'placeholder': 
                this.$input.placeholder = newValue;
                break;

            case 'error':
                this.$error.innerHTML = newValue;
                break;

            case 'default': 
                this.$input.value = newValue;
                break;
        }
    }

    get value() {
        return this.$input.value;
    }

    set error(message) {
        this.setAttribute('error', message);
    }

    // condition: callback
    validate(condition, message) {
        if(condition(this.value)) { 
            this.error = "";
            return true;
        } else {
            this.error = message;
            return false;
        }
    }
}

window.customElements.define('textarea-wrapper', TextareaWrapper);