
const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/stories.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <section class="container">
    <div class="site-content">
        <!--FACTS & VIDEO-->

        <div class="posts">
            <h1 class="heading">Facts</h1>
            <fact-container-homepage 
            image='../../../assets/story/weightlosspill.jpg'
            user='Admin'
            date='January 14,2019'
            title='Over-the-counter weight-loss pills'
            preview-content = "
            There's no magic bullet for losing weight. The most effective way to lose weight and keep it off is by eating a healthy low-calorie diet and being more physically active.

            Weight-loss pills — prescription drugs, nonprescription drugs, herbal products or other dietary supplements — are all, at best, tools that may help with weight loss. But there is relatively little research about these products. The best studied of these are prescription weight-loss drugs.
         
            "
            ></fact-container-homepage>
            <hr>
            <fact-container-homepage
            image='../../../assets/story/story1.jpg'
            user='Admin'
            date='June 20,2020'
            title='Doctors Heavily Overprescribed Antibiotics Early in the Pandemic'
            preview-content = "
            The desperately ill patients who deluged the emergency room at Detroit Medical Center in March and April exhibited the telltale symptoms of the coronavirus: high fevers and infection-riddled lungs that left them gasping for air.

            With few treatment options, doctors turned to a familiar intervention: broad-spectrum antibiotics, the shot-in-the-dark medications often used against bacterial infections that cannot be immediately identified. They knew antibiotics are not effective against viruses, but they were desperate, and they feared the patients could be vulnerable to life-threatening secondary bacterial infections as well.
            "
            ></fact-container-homepage>
            <hr>

            <fact-container-homepage
            image='../../../assets/story/story3.jpg'
            user='Admin'
            date='June 20,2020'
            title='Vietnam resumes Covid-19 drug exports as epidemic under control'
            preview-content = "
            With the Covid-19 epidemic controlled to a great extent, Vietnam has lifted a ban on the export of medicines used to treat it.

            The Drug Administration of Vietnam has written to drug producers and distributors saying they can resume exports of 37 medicines after a month-long ban.

            On April 10 the government had directed the Ministry of Health to halt exports of drugs like immunoglobulin 5 percent, vancomycin 500 mg, meropenem 500 mg, ceftriaxone, levotloxacin 250mg/50 ml, and ceftazidime to ensure enough supplies for domestic use.

            "
            ></fact-container-homepage>

            <!--pagination-->

            <div class="pagination flex-row">
                <a href="#"><i class="fas fa-chevron-left"></i></a>
                <a href="#" class="pages">1</a>
                <a href="#" class="pages">2</a>
                <a href="#" class="pages">3</a>
                <a href="#"><i class="fas fa-chevron-right"></i></a>
            </div>

            <!--pagination-->

        </div>
        <!--FACTS & VIDEO-->
        <!--INFOGRAPHICS-->

        <popular-posts></popular-posts>
    </div>
</section>


<!--FACTS AND INFOGRAPHICs-->
`

export default class StoriesSession extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}

window.customElements.define('stories-session', StoriesSession)