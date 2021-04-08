import { getCurrentUser, signOut } from "../../models/users.js";

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <nav class="nav">
        <div style="display:flex" class="nav-menu">
            <div class="nav-brand" style="display:flex; align-items:center">
                <a id="home-page-btn" style="display: block; padding: 0px;"href="#">
                    <img src="../../../assets/logo/rectangle.png" class="text-gray" id="logo"style="margin:0;height: 80%;width: 100%;">
                </a>
            </div>
            <div class="toggle-collapse">
                <div class="toggle-icons">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
            <div>
                <ul style="padding: 0; " class="nav-items">
                    <li id="about-us-btn" class="nav-link">
                        <a id='about-us' class="nav-letter" href="#">ABOUT US</a>
                    </li>
                    <li id="advisory-btn" class="nav-link">
                        <a id = 'advisory' class="nav-letter" href="#">ADVISORY</a>
                    </li>
                    <li id="fact-and-info-btn" class="nav-link">
                        <a id="fact-and-info" class="nav-letter" href="#">FACTS & INFOGRAPHIC</a>
                    </li>
                    <li id ='stories-btn' class="nav-link">
                        <a id="stories" class="nav-letter" href="#">SRORIES</a>
                    </li>
                    <li id ="drug-library-btn" class="nav-link">
                        <a id="drug-library" class="nav-letter" href="#">DRUG LIBRARY</a>
                    </li>
                    <li id="signin" class="nav-link">
                        <a class="nav-letter" href="#" id="sign-in-btn">SIGN IN</a>
                    </li>
                    <li id='name-block' class="nav-link">
                        <a id='name' class="nav-letter" href="#"></a>
                    </li>
                    <li id='signout' class="nav-link" style="display: none">
                        <a class="nav-letter" href="#" id="sign-out-btn">SIGN OUT</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`

export default class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$homePageBtn = this.shadowRoot.getElementById('home-page-btn')
        this.$aboutUs = this.shadowRoot.getElementById('about-us')
        this.$aboutUsBtn = this.shadowRoot.getElementById('about-us-btn')
        this.$advisory = this.shadowRoot.getElementById('advisory')
        this.$advisoryBtn = this.shadowRoot.getElementById('advisory-btn')
        this.$factAndInfo = this.shadowRoot.getElementById('fact-and-info')
        this.$factAndInfoBtn = this.shadowRoot.getElementById('fact-and-info-btn')
        this.$stories = this.shadowRoot.getElementById('stories')
        this.$storiesBtn = this.shadowRoot.getElementById('stories-btn')
        this.$drugLibrary = this.shadowRoot.getElementById('drug-library')
        this.$drugLibraryBtn = this.shadowRoot.getElementById('drug-library-btn')
        this.$signIn = this.shadowRoot.getElementById('signin')
        this.$signInBtn = this.shadowRoot.getElementById('sign-in-btn')
        this.$name = this.shadowRoot.getElementById('name')
        this.$nameBlock = this.shadowRoot.getElementById('name-block')
        this.$signOutBtn = this.shadowRoot.getElementById('sign-out-btn')
        this.$signOut = this.shadowRoot.getElementById('signout')

    }

    static get observedAttributes() {
        return ['active'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log(newValue)
        switch(attrName) {
            case 'active':
                if (newValue == '0'){
                    this.$aboutUsBtn.classList.add("active")
                    this.$aboutUs.classList.add("white")
                } else if (newValue == '1') {
                    this.$advisoryBtn.classList.add("active")
                    this.$advisory.classList.add("white")
                }else if (newValue == '2') {
                    this.$factAndInfoBtn.classList.add("active")
                    this.$factAndInfo.classList.add("white")
                }else if (newValue == '3') {
                    this.$storiesBtn.classList.add("active")
                    this.$stories.classList.add("white")
                }else if (newValue == '4') {
                    this.$drugLibraryBtn.classList.add("active")
                    this.$drugLibrary.classList.add("white")
                }
                
                break;
        
           
        }

    }   

    async connectedCallback() {
        try {
            this.currentUser = await getCurrentUser();
            this.$signIn.style.display = 'none'
            this.$nameBlock.style.display = 'block'
            console.log(this.currentUser.token)
            console.log(this.currentUser.name)
            this.$name.innerHTML = this.currentUser.name
            this.$signOut.style.display = 'block'
        } catch (error) {
            console.log(error)
            this.$signIn.style.display = 'block'
            this.$name.style.display = 'none'
            this.$signOut.style.display = 'none'
        }
        this.$homePageBtn.onclick = (event) => {
            event.preventDefault()
            router.navigate('/homepage');
        }
        this.$aboutUs.onclick = (event) => {
            event.preventDefault()
            router.navigate('/aboutus');
        }
        this.$advisory.onclick = (event) => {
            event.preventDefault()
            router.navigate('/advisory');
        }
        this.$factAndInfo.onclick = (event) => {
            event.preventDefault()
            router.navigate('/factandinfo');
        }
        this.$stories.onclick = (event) => {
            event.preventDefault()
            router.navigate('/stories');
        }
        this.$drugLibrary.onclick = (event) => {
            event.preventDefault()
            router.navigate('/druglibrary');
        }
        this.$signIn.onclick = () => {
            router.navigate('/signinsignup');
        }
        this.$signInBtn.onclick = (event) => {
            event.preventDefault()
            router.navigate('/signinsignup');
        }
        this.$signOutBtn.onclick = () => {
            localStorage.clear();
            signOut()
        }
    }
}

window.customElements.define('nav-bar', NavBar)