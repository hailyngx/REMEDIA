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
            "href": "https://www.nytimes.com/2019/12/23/health/what-we-learned-2019.html",
            "title": "What We Learned in 2019: Health and Medicine"
        }'        
        date="DECEMBER 26, 2019 "
        image="../../../assets/blog/bp6-1.jpg"
        content="
        After using a vaping device to inhale nicotine, THC or a combination of the two,otherwise healthy individuals have ended up in an emergency room, gasping for breath. 

Since mid-August, 2,506 lung injury cases and 54 deaths linked to vaping have been reported. Most patients were otherwise healthy and in their late teens and 20s. But after using a vaping device to inhale nicotine, THC or a combination of the two, many ended up in an emergency room, gasping for breath.

The likely culprit: an additive made with vitamin E oil. Several states and cities have imposed bans, mainly on flavored e-cigarettes as a precaution. </p>

Ohio, where two counties are suing five drug industry defendants, had the second-highest rate of opioid-related overdose deaths in the country in 2017. </i>

As the number of opioid-related lawsuits against the pharmaceutical industry grew to nearly 3,000 nationwide this year, breakthroughs, however tentative, began to emerge. Oklahoma, the first state to go to trial, won a judgment against Johnson & Johnson for $465 million; the first federal trial, for two Ohio counties, settled just before opening arguments, for $20.4 million.

But there are indications that years of litigation lie ahead.

Purdue Pharma, which makes OxyContin, and the Sackler family who control the company, offered to settle all cases and sought bankruptcy protection to restructure. But two dozen states oppose the deal, saying the family itself should pay more. Three giant drug distributors and two manufacturers offered their own comprehensive settlement. But many states and thousands of local governments have flatly rejected it.

A colored transmission electron micrograph of the H.I.V. virus, in green, attaching to a white blood cell, in orange.

Nearly 12 years after the first person was cured of H.I.V., the virus that causes AIDS, researchers reported that they had cured a second patient. Their surprise success confirmed that a cure for H.I.V. is possible. Both milestones resulted from bone-marrow transplants given to the infected patients — to treat cancer, not H.I.V. While this is an unrealistic treatment option for millions of people living with H.I.V., rearming the body’s immune cells might work in the future.

Only about one in three men who are at high risk for H.I.V. infection is taking a drug to prevent transmission of the virus.

Among men who are at high risk for H.I.V. infection, only about one in three is taking a drug to prevent transmission of the virus, the Centers for Disease Control and Prevention says. One of the main reasons has to do with cost. In May, the Trump administration reached a deal with the makers of Truvada and Descovy to donate pre-exposure prophylaxis, or PrEP, drugs to 200,000 patients annually for more than a decade. Experts said the donation was a good start, but it filled only one-fifth of the need in the United States.

Dr. Shawn Lockhart, a fungal disease expert at the Centers for Disease Control and Prevention, holding a microscope slide with inactive Candida auris collected from an American patient. 

Drug-resistant germs of all types thrive in hospital settings and nursing homes, Over the last five years, the fungus Candida auris has hit a neonatal unit in Venezuela, forced a prestigious British medical center to shut down its intensive care unit and infected nearly 800 people in the United States, with half of patients dying within 90 days. Once C. auris takes root, it is hard to eradicate from a facility. Some hospitals have had to bring in special cleaning equipment and even rip out floor and ceiling tiles to get rid of it.
"
        author="
        Peter Horvath     
        "
    ></story-posts-session>
    <foo-ter></foo-ter>
`

export default class WhatWeLearnedIn2019HealthAndMedicine extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}



window.customElements.define('what-we-learned-in-2019-health-and-medicine', WhatWeLearnedIn2019HealthAndMedicine)