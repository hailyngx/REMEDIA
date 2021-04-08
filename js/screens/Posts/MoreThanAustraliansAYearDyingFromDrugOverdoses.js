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
            "href": "https://www.theguardian.com/australia-news/2020/aug/31/more-than-2000-australians-a-year-dying-from-drug-overdoses",
            "title": "More than 2,000 Australians a year dying from drug overdoses"
        }'        
        date="AUGUST 31, 2020"
        image="../../../assets/blog/bp5.jpg"
        content="
        A report has revealed that 1,556 of 2,070 fatal drug overdoses in Australia in 2018 were unintentional. Photograph: Paul Braven/AAP

        More than 2,000 Australians are dying from drug overdoses every year and there is a clear upwards trend in deaths, according to researchers, with most deaths unintentional and involving prescription medication.

        Australia’s Annual Overdose Report shows that in 2018, 2,070 people fatally overdosed, with a majority of the deaths involving opioids, stimulants and the use of multiple substances at the same time.
                            
        The report by independent health research unit the Penington Institute revealed that 1,556 of drug overdoses (75%) in 2018 were unintentional.

        It found 70% of victims were men and 400 more Australians died from an overdose than on the nation’s roads – and the gap was widening.

        The Penington Institute’s chief executive, John Ryan, said campaigning, investment in evidence-based policies and community education have done a great job of bringing down the road toll but “we must tackle our overdose crisis in the same way.”

        Overdose deaths cost the economy more than $13bn every year and the number of unintentional overdose deaths that involve four or more substances have almost quadrupled, he said.

        There is now a clear upward trend, with more than 2,000 Australians dying annually from overdoses for five consecutive years.

        “Overdose is our hidden health crisis – and it’s a crisis that is costing us billions. And what’s worse is these deaths are preventable. We simply can’t accept that 2,000 of our sons and daughters, mums and dads, and brothers and sisters die every year from a drug overdose.”
                                                                        </p>                                                              
        There were 1,612 unintentional drug overdose deaths in Australia in 2017 – or one death every 5.4 hours. Photograph: Doug Steley B/Alamy

        Ryan is calling on the commonwealth government to commit to a national overdose prevention strategy.

        “We want Australia’s Annual Overdose Report to encourage Australians from all walks of life to talk more about overdose and drug issues. That’s vital if we’re to bring this hidden crisis out of the shadows. The rich, middle and poor are all impacted by overdose,” he said .
            
        The report backs research by the National Drug and Alcohol Research Centre, showing heroin was once again the leading underlying opioid-induced accidental deaths.

        The CEO of Australian Injecting and Illicit Drug Users League, Melanie Walker, said there had also been an increase in deaths involving synthetic opioids like fentanyl and tramadol over the past decade.
            
        The country has projected beer production to rise to 4.1 billion liters in 2020, based on a Industry and Trade Ministry plan. 
        "
        author="
        By The Guardian    
        "
    ></story-posts-session>
    <foo-ter></foo-ter>
`

export default class MoreThanAustraliansAYearDyingFromDrugOverdoses extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}



window.customElements.define('more-than-australians-a-year-dying-from-drug-overdoses', MoreThanAustraliansAYearDyingFromDrugOverdoses)