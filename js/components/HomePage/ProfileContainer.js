const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>   

    <div style="height:50% !important" class="card" data-aos="fade-up-right" data-aos-delay="400">
        <img src="../../../assets/profile/profile-cards-bg.png" alt="profile-bg" class="card-img">
        <img id="member-img" src="" alt="profile-image" class="profile-img">
        <h1 id="name"></h1>
        <p id="position" class="job-title"></p>
        <p id="about" style="font-family: 'Poppins', sans-serif;" class="about"></p>
        <a style=" font-family: 'Poppins', sans-serif;" href="#" class="btn">Contact</a>
        <ul class="social-media">
            <li><a id="facebook" href="#"><i class="fab fa-facebook-square"></i></a>
            </li>
            <li><a id="linkedin" href="#"><i class="fab fa-linkedin"></i></a>
            </li>
            <li><a id="email" href="#"><i class="fas fa-envelope-square"></i></a>
            </li>
        </ul>
    </div>
`

export default class ProfileContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$memberImg = this.shadowRoot.getElementById('member-img')
        this.$name = this.shadowRoot.getElementById('name')
        this.$position = this.shadowRoot.getElementById('position')
        this.$about = this.shadowRoot.getElementById('about')
        this.$facebook = this.shadowRoot.getElementById('facebook')
        this.$linkedin = this.shadowRoot.getElementById('linkedin')
        this.$email = this.shadowRoot.getElementById('email')

    }

    static get observedAttributes() {
        return ['member-img','name','position','about','facebook','instagram','email'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'member-img':
                this.$memberImg.setAttribute('src', newValue)
                break;

            case 'name':
                this.$name.innerHTML = newValue
                break;
        
            case 'position':
                this.$position.innerHTML = newValue
                break;

            case 'about':
                this.$about.innerHTML = newValue
                break

            case 'facebook':
                this.$facebook.setAttribute('href', newValue)
                break

            case 'linkedin':
                this.$linkedin.setAttribute('href', newValue)
                break

            case 'email':
                this.$email.setAttribute('href', newValue)
                break
        }

    }   
}

window.customElements.define('profile-container', ProfileContainer)