import InfoCard from "./InfoCard.js";

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
<link rel="stylesheet" href="../../../css/InfoCard.css">
<link rel="stylesheet" href="../../../css/DrugLibrary2.css">
<link rel="stylesheet" href="../../../css/SearchBar.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

<div class="container">
<h1>&#x2728; DRUG SHELVES &#x2728;</h1>
<div id="searchWrapper">
    <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Search for a cure 🌈"
    />
</div>
</div>

<div class="row">
				<div class="col-md-12 text-center">
					<ul id="filter-list">
						<li class="filter active" data-filter="all">ALL</li>
						<li class="filter" data-filter="1">ALLERGY</li>
						<li class="filter" data-filter="2">COLD AND FLU</li>
						<li class="filter" data-filter="3">ACNE</li>
						<li class="filter" data-filter="4">COMING SOON</li>
					</ul>
				</div>
			</div>
		</div>

<section class="drug-book">
<section class="allergy">
    <h1 class="drugbook_heading">Allergy</h1>
</section>
    <div class="drugbook_container">
<info-card image="../assets/druglibrary/loratadine.jpg" name="Loratadine" description="Loratadine is used to treat sneezing, runny nose, watery eyes, hives, skin rash, itching, and other cold or allergy symptoms." reviewRates =" Review Rates: "></info-card>
<info-card image="../assets/druglibrary/acthar.jpg" name="Acthar" description="Acthar is used for allergy signs, asthma, adrenal gland problems, blood problems, skin rashes, or swelling problems." reviewRates =" Review Rates: "></info-card>
<info-card image="../assets/druglibrary/benadryl.jpg" name='Benadryl' description= 'Benadryl is used to treat sneezing, runny nose, watery eyes, hives, skin rash, itching, and other cold or allergy symptoms.' reviewRates =" Review Rates: "></info-card>
</div>
</section>

<section class="cold-flu">
<h1 class="drugbook_heading">Cold and Flu</h1>
<div class="drugbook_container">
<info-card image="../assets/druglibrary/nyquil.jpeg" name='NyQuil D' description= 'NyQuil D is a medicine used to treat headache, fever, body aches, sneezing caused by the common cold, or the flu.' reviewRates =" Review Rates: "></info-card>
<info-card image="../assets/druglibrary/coricidin.jpg" name='Coricidin' description= 'Coricidin is used to treat headache, runny nose, sneezing, watery eyes, and allergies, the common cold, or flu.' reviewRates =" Review Rates: "></info-card>
<info-card image="../assets/druglibrary/triaminic.png" name='Triaminic Allergy' description= 'Triaminic Allergy is used to treat runny nose, sneezing, itching, and watery eyes caused by allergies, the common cold, or the flu.' reviewRates =" Review Rates: "></info-card>
</div>
</section>

<section class="acne">
<h1 class="drugbook_heading">Acne</h1>
<div class="drugbook_container">
<info-card image="../assets/druglibrary/doxycycline.jpg" name='Doxycycline' description= 'Doxycycline is used to treat many different bacterial infections, such as acne, urinary tract infections, intestinal infections, respiratory infections, and others.'reviewRates =" Review Rates: "></info-card>
<info-card image="../assets/druglibrary/tretinoin.jpg" name='Tretinoin' description= 'Tretinoin (for the skin) is used to treat acne, to smooth rough facial skin, and to reduce the appearance of fine wrinkles and mottled skin discoloration.' reviewRates =" Review Rates: "></info-card>
<info-card image="../assets/druglibrary/epiduo.jpg" name='Epiduo' description= 'Epiduo gel is used to treat acne vulgaris (severe acne) in people who are at least 9 years old.' reviewRates =" Review Rates: "></info-card>
</div>
</section>

<section class="essential">
<h1 class="drugbook_heading">ESSENTIALS</h1>
<div class="cart-row">
</div>
<div style="display: flex" class="cart-items" id="cart-items">
</div>
<div class="cart-total">
</div>
</section>
`

export default class DrugContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))
        this.$searchBar = this.shadowRoot.getElementById('searchBar');
        this.$cardItems = this.shadowRoot.getElementById('cart-items');
    }

    connectedCallback() {
        this.$searchBar.onchange = (event) => {
            this.searchDrugs(event.target.value);
        }

        let $infoCards = this.shadowRoot.querySelectorAll('info-card')
        for (let $infoCard of $infoCards) {
            $infoCard.onAddToCart = () => {
                console.log($infoCard.getAttribute('name'))

            this.$cardItems.appendChild($infoCard.cloneNode(true))
            }
        }
    }

    searchDrugs(keyword) {
        let $infoCards = this.shadowRoot.querySelectorAll("info-card")
        console.log($infoCards)

        for (let $infoCard of $infoCards){
            let name = $infoCard.getAttribute('name');
            let found = name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            if (found) {
                $infoCard.style.display = "block";
            } else {
                $infoCard.style.display = "none";
            }
        }
    }

    filterDrugs(keyword) {
        let $infoCards = this.shadowRoot.querySelectorAll("info-card")
        console.log($infoCards)

        for (let $infoCard of $infoCards){
            let name = $infoCard.getAttribute('name');
            let found = name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            if (found) {
                $infoCard.style.display = "block";
            } else {
                $infoCard.style.display = "none";
            }
        }
    }
    
}

window.customElements.define('drug-container', DrugContainer)
