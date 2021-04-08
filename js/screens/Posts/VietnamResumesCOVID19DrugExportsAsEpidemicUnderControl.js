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
            "href": "https://e.vnexpress.net/news/news/vietnam-resumes-covid-19-drug-exports-as-epidemic-under-control-4095574.html",
            "title": "Vietnam resumes COVID-19 drug exports as epidemic under control"
        }'        
        date="MAY 7, 2020"
        image="../../../assets/blog/vietnam-covid.jpg"
        content="
        Nurses at an area for treating Covid-19 patients at the Hospital of Tropical Diseases in Ho Chi Minh City, April 10, 2020. Photo by VnExpress/Quynh Tran.

        With the COVID-19 epidemic controlled to a great extent, Vietnam has lifted a ban on the export of medicines used to treat it.

        The Drug Administration of Vietnam has written to drug producers and distributors saying they can resume exports of 37 medicines after a month-long ban.

        On April 10 the government had directed the Ministry of Health to halt exports of drugs like immunoglobulin 5 percent, vancomycin 500 mg, meropenem 500 mg, ceftriaxone, levotloxacin 250mg/50 ml, and ceftazidime to ensure enough supplies for domestic use.

        The administration said in an announcement that since the situation in Vietnam is stable, exports could return to normal.

        There have been no deaths so far from Covid-19, and the country has gone 21 days now without community transmission.

        Of the total 271 confirmed cases so far, 232 have been discharged from hospitals and the remaining 39 are being treated.

        The nation has eased its social distancing orders, sent students back in school and resumes local transportation.

        On Wednesday, the Steering Committee on the Prevention and Control of Covid-19 spearheaded by Deputy Prime Minister Vu Duc Dam suggested the government allow all non-essential businesses and services except bars and karaoke parlors to resume operation.

        The committee stressed the need to continue tightening control on all arrivals from abroad, as the condition inside Vietnam becomes stable.
        "
        author="
        By Minh Nga/VnExpress        
        "
    ></story-posts-session>
    <foo-ter></foo-ter>
`

export default class VietnamResumesCOVID19DrugExportsAsEpidemicUnderControl extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}



window.customElements.define('vietnam-resumes-covid19-drug-exports-as-epidemic-under-controls', VietnamResumesCOVID19DrugExportsAsEpidemicUnderControl)