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
            "href": "https://www.weforum.org/agenda/2020/04/how-vaccines-changed-the-world/",
            "title": "A brief history of vaccines and how they changed the world"
        }'        
        date="August, 19 2020"
        image="../../../assets/blog/fact3.jpg"
        content="
        Possibly lesser known, however, are the historic events and pioneers we can today thank for not only saving millions of lives each year, but for laying the foundations of future vaccine development – something that is front-of-mind as the world rushes to make a viable coronavirus vaccine.
        
        Early attempts to inoculate people against smallpox – one of history’s most feared illnesses, with a death rate of 30% – were reported in China as early as the 16th Century. Smallpox scabs could be ground up and blown into the recipient’s nostrils or scratched into their skin.

        The practice, known as “variolation”, came into fashion in Europe in 1721, with the endorsement of English aristocrat Lady Mary Wortley Montagu, but was later met with public outcry after it transpired 2-3% of people died after inoculation, and further outbreaks were triggered.

        The next iteration of inoculation, which turned out to be much safer than variolation, originated from the observation that dairy farmers did not catch smallpox. The 18th Century English physician, Edward Jenner, hypothesised that prior infection with cowpox – a mild illness spread from cattle – might be responsible for the suspected protection against smallpox. And so, he set to work on a series of experiments, now considered the birth of immunology, vaccine therapy, and preventive health.

        In 1796, Jenner inoculated an eight-year-old boy by taking pus from the cowpox lesions on a milkmaid’s hands and introducing the fluid into a cut he made in the boy’s arm. Six weeks later, Jenner exposed the boy to smallpox, but he did not develop the infection then, or on 20 subsequent exposures.

        In the years that followed, Jenner collected evidence from a further 23 patients infected or inoculated with the cowpox virus, to support his theory that immunity to cowpox did indeed provide protection against smallpox.

        The earliest vaccination – the origin of the term coming from the Latin for cow (“vacca”) – was born. Jenner’s vaccination quickly became the major means of preventing smallpox around the world, even becoming mandatory in some countries.
        "
        author="
        By Pharmacist Diary
        "
    ></fact-posts-session>
    <foo-ter></foo-ter>
`

export default class ABriefHistoryOfVaccinesAndHowTheyChangedTheWorld extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}



window.customElements.define('a-brief-history-of-vaccines-and-how-they-changed-the-world', ABriefHistoryOfVaccinesAndHowTheyChangedTheWorld)