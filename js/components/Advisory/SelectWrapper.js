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
        #select {
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
        <select id='select' class='form-control'>
        </select>
        <div id='error'></div>
    </div>
`

export default class SelectWrapperAdvisory extends HTMLElement {

    options;

    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$select = this.shadowRoot.getElementById('select')
        this.$error = this.shadowRoot.getElementById('error')
    }

    static get observedAttributes() {
        return ['error','options'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'error':
                this.$error.innerHTML = newValue
                break

            case 'options':
                this.options = JSON.parse(newValue)

                for(let option of this.options){
                    this.$select.innerHTML += `
                        <option>${option}</option>
                    `;
                }
        }

    }

    get value(){
        return this.$select.value;
    }

    set error(message){
        this.setAttribute('error', message)
    }

    validate(message){
        if(this.value == this.options[0]) {
            this.error = message;
            return false
        } else {
            this.error=''
            return true
        }
    }
}
window.customElements.define('select-wrapper-advisory', SelectWrapperAdvisory)