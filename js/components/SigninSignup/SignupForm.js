import {signup} from "../../models/users.js"

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="../../../css/signinsignup.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <form id="signup-form" >
        <h1>Create Account</h1>
        <div class="social-container">
            <a href="https://www.facebook.com/Remedia-111536797318273" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/RemediaV" class="social"><i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/remediavietnam/" class="social"><i class="fab fa-instagram"></i></a>
            <a href="mailto: remediavietnam@gmai.com" class="social"><i class="far fa-envelope"></i></a>

        </div>
        <input-wrapper id="name" type="text" placeholder="Name"></input-wrapper>
        <input-wrapper id="email" type="email" placeholder="Email"></input-wrapper>
        <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
        <input-wrapper id="password-confirmation" type="password" placeholder="Password Confirmation"></input-wrapper>
        <button style="margin-top: 10px"  id="realsignUp">Sign Up</button>
    </form>

    
`

export default class SignupForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$signupForm = this.shadowRoot.getElementById('signup-form')
        this.$name = this.shadowRoot.getElementById('name')
        this.$email= this.shadowRoot.getElementById('email')
        this.$password= this.shadowRoot.getElementById('password')
        this.$passwordConfirmation = this.shadowRoot.getElementById('password-confirmation')
    }

    // Được gọi duy nhất khi thẻ lần đầu tiên xuất hiện trong body
    connectedCallback() {
        this.$signupForm.onsubmit = (event) => {
            event.preventDefault();
            let name = this.$name.value;
            let email = this.$email.value;
            let password = this.$password.value;

            function require(value){
                return value != '';
            }
 
            function confirmPassword(value){
                return value == password;
            }    

            function validateEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }

            let isPassed = this.$name.validate(require,'Input your name') &
                (
                    this.$email.validate(require,'Input your email') &&
                    this.$email.validate(validateEmail,'Wrong email format')
                ) &
                
                this.$password.validate(require,'Input your password') & 
                (
                    this.$passwordConfirmation.validate(require,'Input your password confirmation') &&
                    this.$passwordConfirmation.validate(confirmPassword,'Password confirmation is not match')
                );
            
            if(isPassed){
                signup(name, email, password)
                console.log('Register successfully')
            }
        }
    }
}

window.customElements.define('signup-form', SignupForm)



