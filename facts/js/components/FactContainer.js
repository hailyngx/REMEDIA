const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
<link rel="stylesheet" href="./css/facts.css">
<style>
html,body{
    padding: 0;
    border: 0;
    margin: 0%;
    box-sizing: border-box;
    overflow-x: hidden;
}


a{
    text-decoration: none;
   
}

.flex-row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

</style>
<section class="facts">
    <div class="container">
        <fact-info image="../assets/facts/cocacola.jpeg" factName="Coca-Cola" factContent ="Coca-Cola was invented by a pharmacist named John Pemberton. He carried the jug of
        the new product down the street to Jacob's Pharmacy where it was sampled and pronounced 'excellent' and placed on sale for 5 cents a glass as a soda fountain drink." readMore =""></fact-info>
        <fact-info image="../assets/facts/cocacola.jpeg" factName="Pharmaceuticals Market" factContent = "The global pharmaceuticals market is worth $300 billion." readMore =""></fact-info>
        <fact-info image="../assets/facts/cocacola.jpeg" factName="Best selling drug", factContent = 'Lipitor is the best-selling drug of all time. It was introduced in 1997 and its
        patent expired in 2011, making about $125 billion.' readMore =""></fact-info>
        <fact-info image="../assets/facts/cocacola.jpeg" factName="Most expensive drug" factContent = "The most expensive drug is Glybera at a wholesale cost of $1.21 million per year. It is a gene therapy that helps restore lipoprotein lipase enzyme activity in those with familial lipoprotein lipase deficiency. Only 1 million patients have this extremely rare condition." readMore =""></fact-info>
    </div>
</section>
`;

export default class FactContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true))
    }
}

window.customElements.define('fact-container', FactContainer)