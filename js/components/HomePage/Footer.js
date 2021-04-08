import {newsletter} from '../../models/newsletters.js'

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <footer class="footer">
        <div class="container">
            <div class="about-us" data-aos="fade-right" data-aos-delay="200"
                style="display:flex; flex-direction:column; align-items:center;">
                <h2>About us</h2>
                <p style="font-size: x-small; font-weight: bolder;"> Remedia is a platform where everyone from all over
                    the world can have access to medical and pharmaceutical treatment along with education.</p>
            </div>
            <div class="newsletter" data-aos="fade-right" data-aos-delay="200"
                style="display:flex; flex-direction:column; align-items:center;">
                <h2>Newsletter</h2>
                <p style=" font-size: x-small; font-weight: bolder">Stay update with our latest</p>
                <form id="newsletter-form" class="form-element">
                    <input id="newsletter" type="text" placeholder="Email">
                    <button id="pointer"><i class="fas fa-chevron-right"></i></button>
                </form>
            </div>
            <div class="instagram" data-aos="fade-left" data-aos-delay="200"
                style="display:flex; flex-direction:column; align-items:center;">
                <h2>Instagram</h2>

                <div class="flex-row">
                    <img src="../../../assets/footer/ins4.jpg" alt="insta4" style="width:2.5rem; height: 2.5rem; ">
                    <img src="../../../assets/footer/ins5.jpg" alt="insta5" style="width:2.5rem; height: 2.5rem; ">
                    <img src="../../../assets/footer/ins6.jpg" alt="insta6" style="width:2.5rem; height: 2.5rem; ">
                </div>
                <div class="flex-row">
                    <img src="../../../assets/footer/ins1.jpg" alt="insta1" style="width:2.5rem; height: 2.5rem; ">
                    <img src="../../../assets/footer/ins2.jpg" alt="insta2" style="width:2.5rem; height: 2.5rem; ">
                    <img src="../../../assets/footer/ins3.jpg" alt="insta3" style="width:2.5rem; height: 2.5rem; ">
                </div>
                <div class="flex-row">
                    <img src="../../../assets/footer/ins4.jpg" alt="insta4" style="width:2.5rem; height: 2.5rem; ">
                    <img src="../../../assets/footer/ins5.jpg" alt="insta5" style="width:2.5rem; height: 2.5rem; ">
                    <img src="../../../assets/footer/ins6.jpg" alt="insta6" style="width:2.5rem; height: 2.5rem; ">
                </div>
            </div>
            <div class="follow" data-aos="fade-left" data-aos-delay="200"
                style="display:flex; flex-direction:column; align-items:center;">
                <h2>Follow us</h2>
                <p style=" font-size: x-small; font-weight: bolder">Let us be Social</p>
                <div class="nav-brand" style="display:flex; align-items:center">
                    <img src="../../../assets/logo/white-rectangle.png" class="text-gray" id="logo"
                        style="margin:0;height: 100%;width: 100%;">
                </div>
                <div style="padding-top: 30px;">
                    <a href="https://www.facebook.com/Remedia-111536797318273"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/RemediaV"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/remediavietnam/"><i class="fab fa-instagram"></i></a>
                    <a href="mailto: remediavietnam@gmai.com"><i class="far fa-envelope"></i></a>
                </div>
            </div>
        </div>
        <div class="rights flex-row">
            <h4 class="text-gray">
                Copyright ©2020 All rights reserved | made by
                <a href="https://www.facebook.com/Remedia-111536797318273" target="_black">REMEDIA TEAM <i
                        id="last_icon" class="fab fa-facebook-square"></i>
                </a>
            </h4>
        </div>
        <div class="move-up">
            <span><i class="fas fa-chevron-circle-up"></i></span>
        </div>
    </footer>
`

export default class Footer extends HTMLElement {
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

window.customElements.define('foo-ter', Footer)