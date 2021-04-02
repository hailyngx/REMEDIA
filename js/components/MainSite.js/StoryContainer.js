const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <link rel="stylesheet" href="../../../css/aos.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <div class="blog-content" data-aos="flip-right" data-aos-delay="400">
        <div style="display: inline-block;"><img style=" height: 200px;"
                src="../../../assets/story/vietnam-covid.jpg" alt="stories1"></div>
        <div class="blog-title">
            <div class="only-title">
                <h3>Vietnam resumes Covid-19 drug exports as epidemic under control</h3>
            </div>
            <button class="btn btn-blog"><a href="./Vietnam_resumes_covid_19_drug_exports.html"
                    style="color: white; height: 200px;">More</a></button>
            <span> 2 minutes</span>
        </div>
    </div>
`

export default class StoryContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}

window.customElements.define('story-container', StoryContainer)