const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/postcontainer.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <div class="blog-post">
        <div class="blog-post-img">
            <img id="post-image" src="../../../assets/profile/profile-cards-bg.png">
        </div>
        <div class="blog-post-info">
            <div class="blog-post-date">
                <span id ="post-author">Sunday</span>
                <span id ="post-date">October 27 2019</span>
            </div>
            <h1 id="post-title" class="blog-post-title"> Hello</h1>
            <p id="post-content" class="blog-post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae voluptates tempore impedit totam non natus, nobis quis unde ad optio distinctio ipsa molestias incidunt. Excepturi deleniti culpa fugit totam tempora obcaecati repellat ex, animi dolores sequi odit, omnis eaque rem a, quaerat nesciunt quia sapiente quis ullam eligendi. Similique, fugit autem. Sequi alias tenetur eum minus a hic ea neque! Quibusdam laboriosam libero nostrum magnam qui cum repudiandae quos adipisci, necessitatibus a porro amet nemo asperiores, quam tempora ut aliquid voluptates inventore voluptas nihil rerum voluptatem esse commodi impedit. Illum assumenda voluptates illo mollitia, similique a eaque incidunt molestias.</p>
            <a class="blog-post-button">Comment</a>
        </div>
    </div>
`

export default class PostContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$postImage = this.shadowRoot.getElementById('post-image')
        this.$postAuthor = this.shadowRoot.getElementById('post-author')
        this.$postDate = this.shadowRoot.getElementById('post-date')
        this.$postTitle = this.shadowRoot.getElementById('post-title')
        this.$postContent = this.shadowRoot.getElementById('post-content')

    }

    static get observedAttributes() {
        return ['image','author','date','title','content'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'image':
                this.$postImage.setAttribute('src', newValue)
                break;
        
            case 'author':
                this.$postAuthor.innerHTML = newValue
                break;

            case 'date':
                this.$postDate.innerHTML = newValue
                break

            case 'title':
                this.$postTitle.innerHTML = newValue
                break

            case 'content':
                this.$postContent.innerHTML = newValue
                console.log(newValue)
                break
        }

    }   
}

window.customElements.define('post-container', PostContainer)