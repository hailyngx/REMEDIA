const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/blogpost.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <section class="container">
    <div class="site-content">
        <!--FACTS & VIDEO-->

        <div class="posts">
            <h1 class="heading">Story</h1>
            <!--pagination-->

            <div class="post-content" data-aos="zoom-in" data-aos-delay="400">
                <div class="post-title">
                    <div class="article"></div>
                    <h2><a id="source" class="title"
                            href="#">
                        </a></h2>
                    <br />
                    <div><time id="date"></time></div>

                    <div class="post-image">
                        <div>
                            <img id='image' src="assets/prctm.png" class="img" alt="blog1" width="100%">
                        </div>
                    </div>


                    <p id="content" style="white-space: pre-line ; ">
                    
                    <p><b id="author"></b></p>


                </div>
            </div>

        </div>
        <!--FACTS & VIDEO-->
        <!--INFOGRAPHICS-->

        <popular-posts></popular-posts>
    </div>
</section>


<!--FACTS AND INFOGRAPHICs-->
`

export default class StoryPostsSession extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$source = this.shadowRoot.getElementById('source')
        this.$date = this.shadowRoot.getElementById('date')
        this.$image = this.shadowRoot.getElementById('image')
        this.$content = this.shadowRoot.getElementById('content')
        this.$author = this.shadowRoot.getElementById('author')

    }

    static get observedAttributes() {
        return ['source','image','date','author','content'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'source':
                let source = JSON.parse(newValue);
                this.$source.setAttribute('href', source.href)
                this.$source.innerHTML = source.title
                break;

            case 'date':
                this.$date.innerHTML = newValue
                break;
        
            case 'image':
                this.$image.setAttribute('src', newValue)
                break;

            case 'content':
                this.$content.innerHTML = newValue
                break

            case 'author':
                this.$author.innerHTML = newValue
                break
        }
    }  
}

window.customElements.define('story-posts-session', StoryPostsSession)