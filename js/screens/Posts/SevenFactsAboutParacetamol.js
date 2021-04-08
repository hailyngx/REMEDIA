const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/stories.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <nav-bar id='user-status'></nav-bar>
    <site-title></site-title>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <fact-posts-session
        source='{ 
            "href": "https://www.mayoclinic.org/healthy-lifestyle/consumer-health/in-depth/antibiotics/art-20045720",
            "title": "7 Important Facts Everyone Should Know About Paracetamol"
        }'        
        date="JULY, 29 2020"
        image="../../../assets/blog/prctm.png"
        content="
        Paracetamol is the most popular pain-killer found in almost every household, it is easily the first-choice drug used to treat all sorts of human-body aches.

        In 2015, The Health and Social Care Information Centre data revealed; paracetamol has been prescribed 22.9 million times in the England community sector, making it the 14th most popular prescribed drug. In comparison to anti-inflammatory drugs, paracetamol is portrayed as the safest pain-killer in the world.
                    
        Is paracetamol really safe? What is paracetamol? How does paracetamol work? What else don’t we know about paracetamol?
            
        Fact One: Paracetamol is also known as acetaminophen and has been clinically used since 1893.
            
        Fact Two: Following series of chemical sequencing acetanilide and phenacetin is metabolised to paracetamol as shown below.

        Fact Three: No one knows how paracetamol truly works. Best theory is; it increases pain threshold in the central nervous system (the brain and spinal cord).
            
        Fact Four: Paracetamol does not interact with other medication. UNLESS if taken with other paracetamol-containing drugs such as co-codamol which will then cause overdose.
                                        
        Fact Five: Paracetamol can be administered to everyone; children, pregnant women, elderly. EXCEPT individuals with liver dysfunction.
            
        Fact Six: Paracetamol overdose can be lethal. Ingesting high doses of paracetamol may cause severe liver damage.
            
        Fact Seven: Paracetamol has various formulations; oral solution, soluble tablet, caplet, capsule, suppositories. NOTE people with high blood pressure should avoid the soluble tablet due to the salt content.
        "
        author="
        By Pharmacist Diary
        "
    ></fact-posts-session>
    <foo-ter></foo-ter>
`

export default class SevenFactsAboutParacetamol extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}



window.customElements.define('seven-facts-about-paracetamol', SevenFactsAboutParacetamol)