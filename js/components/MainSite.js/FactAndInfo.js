//chưa có hiệu ứng

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <section class="container">
    <div class="site-content">
        <!--FACTS & VIDEO-->

        <div class="posts">
            <h1 class="heading">Facts</h1>
            <fact-container 
            image='../../../assets/fact/prctm.png'
            user='Admin'
            date='July 29,2019'
            title='7 Important Facts Everyone Should Know About Paracetamol'
            preview-content = '
            Paracetamol is the most popular pain-killer found in almost every household, it is easily the first-choice drug used to treat all sorts of human-body aches.

            In 2015, The Health and Social Care Information Centre data revealed; paracetamol has been prescribed 22.9 million times in the England community sector, making it the 14th most popular prescribed drug. In comparison to anti-inflammatory drugs, paracetamol is portrayed as the safest pain-killer in the world.
            
            Is paracetamol really safe? What is paracetamol? How does paracetamol work? What else don’t we know about paracetamol?          
            '
            ></fact-container>
            <hr>
            <fact-container
            image='../../../assets/fact/fact3.jpg'
            user='Admin'
            date='June 20,2020'
            title='A brief history of vaccines and how they changed the world'
            preview-content = '
            It is no secret that vaccinations have revolutionized global health. Arguably the single most life-saving innovation in the history of medicine, vaccines have eradicated smallpox, slashed child mortality rates, and prevented lifelong disabilities.

            Possibly lesser known, however, are the historic events and pioneers we can today thank for not only saving millions of lives each year, but for laying the foundations of future vaccine development – something that is front-of-mind as the world rushes to make a viable coronavirus vaccine.         
            '
            ></fact-container>
            <hr>

            <fact-container
            image='../../../assets/fact/fact1.jpg'
            user='Admin'
            date='June 20,2020'
            title='Consequences of extensive using of antibiotics'
            preview-content = "
            Antibiotics are important medications. It would be difficult to overstate the benefits of penicillin and other antibiotics in treating bacterial infections, preventing the spread of disease and reducing serious complications of disease.

            But some medications that used to be standard treatments for bacterial infections are now less effective or don't work at all. When an antibiotic no longer has an effect on a certain strain of bacteria, those bacteria are said to be antibiotic resistant. Antibiotic resistance is one of the world's most pressing health problems.
            "
            ></fact-container>

            <!--pagination-->

            <!-- <div class="pagination flex-row">
                <a href="#"><i class="fas fa-chevron-left"></i></a>
                <a href="#" class="pages">1</a>
                <a href="#" class="pages">2</a>
                <a href="#" class="pages">3</a>
                <a href="#"><i class="fas fa-chevron-right"></i></a>
            </div> -->

            <!--pagination-->

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
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}

window.customElements.define('fact-and-info', FactAndInfo)