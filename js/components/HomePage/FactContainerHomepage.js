const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <div class="post-content" data-aos="zoom-in" data-aos-delay="400">
        <div class="post-image">
            <div>
                <img id="image" src="../../../assets/fact/prctm.png" class="img" alt="blog">
            </div>
    
            <div class="post-info flex-row">
                <span style="color: white;">
                    <i class="fas fa-user "></i>
                    <span id="user">Admin</span>
                </span>
                <span style="color: white;">
                    <i class="fas fa-calendar-alt "></i>
                    <span id="date">July 29,2019</span>
                </span>
            </div>
        </div>
        <div class="post-title">
            <a id="title" class="title" href="./7factsaboutparacetamol.html"></a>
            <p id="preview-content" style="white-space: pre-line ; ">

            </p>
            <button id="post-button" class="btn post-btn"><a id="link" style="color: white; font-size: medium;" href="//#endregion">Read More
                    &nbsp;&nbsp; <i class="fas fa-arrow-right"></i></a>
            </button>
        </div>
    </div>
`

export default class FactContainerHomepage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$image = this.shadowRoot.getElementById('image')
        this.$user = this.shadowRoot.getElementById('user')
        this.$date = this.shadowRoot.getElementById('date')
        this.$title = this.shadowRoot.getElementById('title')
        this.$previewContent = this.shadowRoot.getElementById('preview-content')
        this.$postButton = this.shadowRoot.getElementById('post-button')

    }

    static get observedAttributes() {
        return ['image','user','date','title','preview-content','post-button'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'image':
                this.$image.setAttribute('src', newValue)
                break;

            case 'user':
                this.$user.innerHTML = newValue
                break;
        
            case 'date':
                this.$date.innerHTML = newValue
                break;

            case 'title':
                this.$title.innerHTML = newValue
                this.$title.setAttribute('href', newValue)
                break

            case 'preview-content':
                this.$previewContent.innerHTML = newValue
                break

            // case 'post-button':
            //     connectedCallback() {
            //         this.$postButton.onsubmit = (event) => {
            //             event.preventDefault();
            //             router.navigate(newValue)
            //         }
            //     }
            //     break
        }

    }   

    
}

window.customElements.define('fact-container-homepage', FactContainerHomepage)