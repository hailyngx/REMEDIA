import Overlay from "../components/SigninSignup/Overlay.js";

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../css/signinsignup.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    

    <div class="container" id="container" >
        <div class="form-container sign-up-container">
            <signup-form></signup-form>
        </div>

        <div class="form-container sign-in-container">
            <login-form></login-form>
        </div>

        <div class="overlay-container">
            <div class="overlay">
                <over-lay id="overlay-left" class="overlay-left overlay-panel" title="Welcome Back!" information="To keep connected with us please login with your personal info" button="Sign In" ></over-lay>
                <over-lay id="overlay-right" class="overlay-right overlay-panel" title="Hello, Friend!" information="Enter your personal details and start journey with us" button="Sign Up" ></over-lay>
            </div>
        </div>
    </div>
    
`;

export default class SigninSignup extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$container = this.shadowRoot.getElementById('container')
        this.$overLayLeft = this.shadowRoot.getElementById('overlay-left')
        this.$overLayRight = this.shadowRoot.getElementById('overlay-right')
    }

    connectedCallback() {
        this.$overLayLeft.changeClasstoContainer = () => {
                this.$container.classList.remove("right-panel-active")
        }
        this.$overLayRight.changeClasstoContainer = () => {
                this.$container.classList.add("right-panel-active")
        }
    }
}



window.customElements.define('signin-signup', SigninSignup);