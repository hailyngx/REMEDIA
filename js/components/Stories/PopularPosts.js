
const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/stories.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    

        <aside class="sidebar">
            <div class="popular-post">
                <h1 class="heading">Popular Posts</h1>
                <infographic-container
                image='../../../assets/story/overdose.jpg'
                date='January 14,2020'
                title='More than 2,000 Australians a year dying from drug overdoses'
                ></infographic-container>

                <infographic-container
                image='../../../assets/story/supplement.jpg'
                date='July 29,2020'
                title='Vietnamese pharmacy firms cash in on nutritional supplements, brokers say'
                ></infographic-container>

                <infographic-container
                image='../../../assets/story/medicine.jpg'
                date='March 14,2020'
                title='What We Learned in 2019: Health and Medicine'
                ></infographic-container>
        
                <infographic-container
                image='../../../assets/story/how.jpg'
                date='March 14,2020'
                title='How Medicine Became the Stealth Family-Friendly Profession'
                ></infographic-container>

            </div>
            <news-letter></news-letter>
        </aside>


<!--FACTS AND INFOGRAPHICs-->
`

export default class PopularPosts extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}

window.customElements.define('popular-posts', PopularPosts)