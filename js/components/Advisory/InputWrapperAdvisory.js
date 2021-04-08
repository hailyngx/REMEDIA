const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <style type="text/css">

        @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
        *{
            margin: 0;
            padding: 0;
            outline: none;
            font-family: 'Poppins', sans-serif;
        }
        #input {
            display: block;
            width: 100%;
            height: 40px;
            border: 1px solid black;
            border-radius: 3px;
            padding: 0px;
            font-size: 17px;
            font-weight: 500;
        }
        #error {
            color: red; 
            text-align: left;
            font-size: 10px
        }
    </style>
    <div class="form-group">
        <input type = 'text' id='input' class='form-control' placeholder = ''>
        <div id='error'></div>
    </div>
`

export default class InputWrapperAdvisory extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$input = this.shadowRoot.getElementById('input')
        this.$error = this.shadowRoot.getElementById('error')
    }

    static get observedAttributes() {
        return ['type','placeholder','error','default'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'type':
                this.$input.type = newValue
                break;
        
            case 'placeholder':
                this.$input.placeholder = newValue
                break;

            case 'error':
                this.$error.innerHTML = newValue
                break

            case 'default':
                this.$input.value = newValue
                break

        }

    }   
    get value(){
        return this.$input.value;
    }

    set error(message){
        this.setAttribute('error',message)
    }

    validate(condition, message){
        if(condition(this.value)) {
            this.error = "";
            return true;
        } else {
            this.error = message;
            return false
        }
    }
}
window.customElements.define('input-wrapper-advisory', InputWrapperAdvisory)