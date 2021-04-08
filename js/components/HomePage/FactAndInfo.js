//chưa có hiệu ứng
import {facts} from '../../../js/data/fake.js'
const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <section class="container">
    <div class="site-content">
        <!--FACTS & VIDEO-->

        <div class="posts">
            <h1 class="heading">Facts</h1>
            <div class="post-list"></div>
        </div>
        <!--FACTS & VIDEO-->
        <!--INFOGRAPHICS-->


        <aside class="sidebar">
            <div class="popular-post">
                <h1 class="heading">Infographics</h1>
                <infographic-container
                image='../../../assets/infographic/info1.png'
                date='January 14,2020'
                title='Technology rises up'
                ></infographic-container>
                <infographic-container
                image='../../../assets/infographic/info2.jpg'
                date='July 29,2020'
                title='Pheumonia by the numbers'
                ></infographic-container>
                <infographic-container
                image='../../../assets/infographic/info3.png'
                date='March 14,2020'
                title='Flu myths versus flu facts'
                ></infographic-container>

            </div>
            <news-letter></news-letter>
        </aside>
    </div>
</section>


<!--FACTS AND INFOGRAPHICs-->
`

export default class FactAndInfo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$postList = this.shadowRoot.querySelector('.post-list')
    }

    connectedCallback(){
        for (let fact of facts){
            let $factContainer = document.createElement('fact-container-homepage')
            $factContainer.id = fact.id;
            $factContainer.setAttribute('image',fact.image)
            $factContainer.setAttribute('user',fact.user)
            $factContainer.setAttribute('date',fact.date)
            $factContainer.setAttribute('title',fact.title)
            $factContainer.setAttribute('preview-content',fact['preview-content'])
        this.$postList.appendChild($factContainer)
        }
    }
}

window.customElements.define('fact-and-info', FactAndInfo)