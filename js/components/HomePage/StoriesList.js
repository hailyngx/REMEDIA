const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <section style="padding-top: 1200px;">
            <div class="blog">
                <div class="container">
                    <h1 class="heading">Stories</h1>
                    <div class="owl-carousel owl-theme blog-post">
                        <story-container></story-container>
                        <story-container></story-container>
                        <story-container></story-container>
                        <story-container></story-container>
                    </div>
                    <div class="owl-navigation">
                        <span class="owl-nav-prev"><i class="fas fa-chevron-left"></i></span>
                        <span class="owl-nav-next"><i class="fas fa-chevron-right"></i></span>
                    </div>
                </div>
            </div>
        </section>
`

export default class StoriesList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }

    connectedCallback() {
        $(".owl-nav-prev").html('ngo')
    }


}

window.customElements.define('stories-list', StoriesList)