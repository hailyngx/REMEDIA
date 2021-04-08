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
            "href": "https://e.vnexpress.net/news/business/vietnamese-pharmacy-firms-cash-in-on-nutritional-supplements-brokers-say-3551085.html",
            "title": "Vietnamese pharmacy firms cash in on nutritional supplements, brokers say"
        }'        
        date="MARCH 6, 2017 "
        image="../../../assets/blog/bp4.jpg"
        content="
        Vietnam's annual beer consumption is expected to grow at nearly 5 percent annually for the next five years. Photo by Reuters
        
        Liver supplements marketed for detoxication and supporting liver functions have become big business.
        
        Many major pharmaceutical companies in Vietnam, one of Asia's top beer consumers, have stepped up selling liver supplements to boost their profits, company reports and a brokerage said.

        Duoc Hau Giang, Vietnam’s largest pharmaceutical company, reported that revenue last year rose 4.8 percent to VND3.78 trillion ($166 million) from 2015, fuelled by a surge in sales of liver supplements, Ho Chi Minh City-based Rong Viet Securities Co cited the firm's financial statement as showing.
        
        The company planned to more than double sales of liver supplement brand Naturenz to VND800 billion, accounting for 12 percent of total revenues in the next five years.
        
        Some major pharmaceutical companies have gradually reduced their antibiotics business in favor of other medicines, including supplements, in hope for greater profits.

        Hau Giang’s revenues from antibiotics fell to 40 percent of the firm's revenue last year, from 45 percent in 2008, based on financial reports. It has projected the antibiotics sales to fall further to 38.5 percent of revenue by 2020.

        Traphaco, Vietnam's second-biggest listed pharmaceutical company, reported that sales of its liver detox brand Boganic had doubled within a five-year period to VND200 billion in 2015 and that the sale has been rising 16 percent annually in recent year.

        Over the past five years, Vietnam has doubled its beer consumption to more than 3 billion liters per year. Last year it produced an estimated 3.8 billion liters of beer, up 18 percent from 2015, based on government data. Its well-known export brands include Bia Saigon and 333.

        The country has projected beer production to rise to 4.1 billion liters in 2020, based on a Industry and Trade Ministry plan.
        "
        author="
        By VnExpress        
        "
    ></story-posts-session>
    <foo-ter></foo-ter>
`

export default class VietnamesePharmacyFirmsCashInOnNutritionalSupplementsBrokersSay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}



window.customElements.define('vietnamese-pharmacy-firms-cash-in-on-nutritional-supplements-brokers-say', VietnamesePharmacyFirmsCashInOnNutritionalSupplementsBrokersSay)