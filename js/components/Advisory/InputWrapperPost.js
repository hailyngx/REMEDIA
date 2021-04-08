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

        #input{
            background: transparent;
            border: 0px;
            width: 100%;
            color: #c5ecfd;

        }
        ::placeholder{
            color: #c5ecfd;
            font-size: 12px;
            padding-left: 10px;

        }
        #style{
            border-bottom: 2px solid #c5ecfd;
            padding-top: 10px;
            padding-right:-5px;

        }
        #error {
            color: red; 
            text-align: left;
            font-size: 10px;
            padding-top: 5px
        }
    </style>
    <div class="form-group">
        <input type = 'text' id='input' class='form-control' placeholder = ''>
        <div id="style"></div>
        <div id='error'></div>
    </div>
`

export default class InputWrapperPost extends HTMLElement {
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
window.customElements.define('input-wrapper-post', InputWrapperPost)