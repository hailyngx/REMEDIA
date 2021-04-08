const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <style>
        appointment-booking{
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            overflow: hidden;

        }
    </style>

    <link rel="stylesheet" href="../../../css/navbarfooter.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <nav-bar id='user-status' active="1"></nav-bar>
    <site-title></site-title>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1 class="heading">Welcome To Our Community</h1>
    <post-list>
    </post-list>
    <br>
    <br>
    <h1 class="heading">Appointment Booking Service</h1>
    <appointment-booking></appointment-booking>
    <foo-ter></foo-ter>
`

export default class AdvisoryScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }

    connectedCallback(){
        window.scrollTo(0, 0);
    }
}



window.customElements.define('advisory-screen', AdvisoryScreen)