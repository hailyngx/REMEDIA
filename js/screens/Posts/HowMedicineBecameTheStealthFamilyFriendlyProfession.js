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
            "href": "https://www.nytimes.com/2019/08/21/upshot/medicine-family-friendly-profession-women.html",
            "title": "How Medicine Became the Stealth Family-Friendly Profession"
        }'        
        date="AUGUST 6, 2020"
        image="../../../assets/blog/bp8-1.jpg"
        content="
        Britni Hebert was chief resident, on track for a career in the highly demanding field of oncology, when she found out she was having twins. “Everything kind of just tilted on its head,” she said.
    
        She couldn’t imagine 80-hour workweeks with two newborns at home, while her husband was doing an equally intensive radiology fellowship. But she didn’t leave the profession. Instead, Dr. Hebert, 37, decided to practice internal medicine and geriatrics, with more control over her hours. She has been able to change her schedule three times as her family’s needs have changed (the twins are 6, and the couple has a baby), and now works about 85 percent of full-time hours.
    
        Medicine has become something of a stealth family-friendly profession, at a time when other professions are growing more greedy about employees’ time. Jobs increasingly require long, inflexible hours, and pay disproportionately more to people who work them. But if one parent is on call at work, someone else has to be on call at home. For most couples, that’s the woman — which is why educated women are being pushed out of work or into lower-paying jobs.

        But medicine has changed in ways that offer doctors and other health care workers the option of more control over their hours, depending on the specialty and job they choose, while still practicing at the top of their training and being paid proportionately.

        Women are now half of medical students. In some specialties, like pediatrics, geriatrics and child psychiatry, they are the majority. Female doctors are likelier than women with law degrees, business degrees or doctorates to have children. They’re also much less likely to stop working when they do.

        Flexible, predictable hours are the key — across occupations — to shrinking gender gaps, according to the body of research by Claudia Goldin, an economist at Harvard. As American employers struggle to adapt to the realities of modern family life and as younger generations of workers demand more balance, medicine offers a road map.

        Dr. Hebert, who lives in Lafayette, La., estimates that forgoing oncology halved her lifelong earnings. But she’s grateful that she had other options for practicing medicine — and can still meet her children at the school bus most afternoons.

        “I don’t want to pretend there aren’t sacrifices that come with the path that I’ve chosen,” she said, “but I just don’t think I could be employed at this time if not for being able to decide my schedule.”

        A generation ago, the typical doctor owned a private practice, and saw patients whenever they got sick. Today, doctors are much likelier to work for large group practices or hospitals and be on call at predictable times. Seventy percent of doctors under 40 are now employees, not owners, according to American Medical Association data. So are the majority of female doctors of all ages.

        Large group practices are more profitable because they can share resources, like clinic space or physician assistants, and more easily negotiate with health insurance plans.
        "
        author="
        By Claire Cain Miller/ The New York Times      
        "
    ></story-posts-session>
    <foo-ter></foo-ter>
`

export default class HowMedicineBecameTheStealthFamilyFriendlyProfession extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}



window.customElements.define('how-medicine-became-the-stealth-family-friendly-profession', HowMedicineBecameTheStealthFamilyFriendlyProfession)