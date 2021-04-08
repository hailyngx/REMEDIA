const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <section class="site-title">
            <div class="content-background">
                <h2>Remedia</h2>
                <h2>Remedia</h2>
                <h3 style="color: white;" >DRUG ADVISORY AND DISTRIBUTION SERVICE</h3>
                <div class="move-down">
                    <button style="color: black;" class="btn"> EXPLORE </button>
            </div>
        </div>
    </section>        
`

export default class SiteTitle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}

window.customElements.define('site-title', SiteTitle)