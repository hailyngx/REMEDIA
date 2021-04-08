const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/blogpost.css">
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
    <story-posts-session
        source='{ 
            "href": "https://www.mayoclinic.org/healthy-lifestyle/consumer-health/in-depth/antibiotics/art-20045720",
            "title": "Consequences of extensive using of antibiotics"
        }'        
        date="DECEMBER 26, 2019"
        image="../../../assets/blog/bp-7.png"
        content="
        Antibiotics are important medications. It would be difficult to overstate the benefits of penicillin and other antibiotics in treating bacterial infections, preventing the spread of disease and reducing serious complications of disease.
    
        But some medications that used to be standard treatments for bacterial infections are now less effective or don't work at all. When an antibiotic no longer has an effect on a certain strain of bacteria, those bacteria are said to be antibiotic resistant. Antibiotic resistance is one of the world's most pressing health problems.
    
        The overuse and misuse of antibiotics are key factors contributing to antibiotic resistance. The general public, doctors and hospitals all play a role in ensuring proper use of the medications and minimizing the development of antibiotic resistance.
        
        What causes antibiotic resistance?

        A bacterium resists a medication when the bacterium has changed in some way. The change either protects the bacterium from the action of the medication or neutralizes the medication.

        Any bacterium that survives an antibiotic treatment can multiply and pass on its resistant properties. Also, some bacteria can transfer their medication-resistant properties to other bacteria — as if passing along a cheat sheet to help each other survive.

        The fact that bacteria develop resistance to a medication is normal and expected. But the way that medications are used affects how quickly and to what extent resistance occurs.

        Overuse of antibiotics

        The overuse of antibiotics — especially taking antibiotics even when they're not the appropriate treatment — promotes antibiotic resistance. According to the Centers for Disease Control and Prevention, up to one-third to one-half of antibiotic use in humans
        is unnecessary or inappropriate.
        "
        author="
        By Mayo Clinics        
        "
    ></story-posts-session>
    <foo-ter></foo-ter>
`

export default class ConsequencesOfExtensiveUsingOfAntibiotics extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}



window.customElements.define('consequences-of-extensive-using-of-antibiotics', ConsequencesOfExtensiveUsingOfAntibiotics)