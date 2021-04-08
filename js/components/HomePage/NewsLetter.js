import {newsletter} from '../../models/newsletters.js'

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <div class="newsletter" data-aos="fade-up" data-aos-delay="300">
    <h2>Newsletter</h2>
    <form id="newsletter-form" class="form-element">
        <input id="newsletter" type="text" class="input-element" placeholder="Email">
        <button type="submit" class="btn form-btn">Subscribe</button>
    </form>
</div>
`

export default class NewsLetter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$newsLetterForm = this.shadowRoot.getElementById('newsletter-form')
        this.$newsLetter = this.shadowRoot.getElementById('newsletter')

    }

    connectedCallback() {
        this.$newsLetterForm.onsubmit = (event) => {
            event.preventDefault();
            let email = this.$newsLetter.value

            if( email == ""){
                alert('Please input your email')
            } else {
                newsletter(email)
            }
        }
    }
}

window.customElements.define('news-letter', NewsLetter)