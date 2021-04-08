import {signin} from '../../models/users.js'
import {require,validateEmail} from '../../utils.js'

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <!-- Font Awesome-->
    <link rel="stylesheet" href="../../../css/signinsignup.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <form id="login-form" class="p-3">
        <h1>Sign in</h1>
        <div class="social-container">
            <a href="https://www.facebook.com/Remedia-111536797318273" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/RemediaV" class="social"><i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/remediavietnam/" class="social"><i class="fab fa-instagram"></i></a>
            <a href="mailto: remediavietnam@gmai.com"class="social" ><i class="far fa-envelope"></i></a>
        </div>
        <input-wrapper id="email" type="email" placeholder="Email"></input-wrapper>
        <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
        <button style="margin-top: 10px" id="realsignIn">Sign In</button>
    </form>
`

export default class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$LoginForm = this.shadowRoot.getElementById('login-form')
        this.$email = this.shadowRoot.getElementById('email')
        this.$password= this.shadowRoot.getElementById('password')
        this.$button= this.shadowRoot.getElementById('realsignIn')
    }
    // Được gọi duy nhất khi thẻ lần đầu tiên xuất hiện trong body
    connectedCallback() {
        this.$LoginForm.onsubmit = (event) => {
            event.preventDefault();
            let email = this.$email.value;
            let password = this.$password.value;

            let isPassed = 
                (
                    this.$email.validate(require,'Input your email') &&
                    this.$email.validate(validateEmail,'Wrong email format')
                ) &
                
                this.$password.validate(require,'Input your password')
            
            if(isPassed){
                signin(email, password)
                // console.log('Signed in successfully')
            }

            const promise = firebase.auth().signInWithEmailAndPassword(email,password)
        }

    }

}

window.customElements.define('login-form', LoginForm)