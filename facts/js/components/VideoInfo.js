const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="./css/fact-info.css">
    <div class="card" style="background-image: linear-gradient(to top, #dfe9f3 0%, white 100%)">
        <div class="imgBx" data-text="Video Title">
        <iframe id="iframe" src="https://www.youtube.com/embed/m0V6DRJBBGY" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>

        </div>

        <div class="content">
            <h3 id="video-name"></h3>
            <p id="video-content"></p>
            <a id="video-more" href="./cocacola.html">Read more</a>
        </div>
    </div>
`

export default class VideoInfo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$videoName = this.shadowRoot.getElementById('video-name');
        this.$videoContent = this.shadowRoot.getElementById('video-content');
        this.$readMore = this.shadowRoot.getElementById('read-more');
        this.$iframe = this.shadowRoot.getElementById('iframe');
    }

    static get observedAttributes() {
        return [ 'iframe','video-name','video-content', 'read-more'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'iframe':
                this.$iframe.setAttribute('src', newValue)
                break;

            case 'video-name':
                this.$videoName.innerHTML = newValue
                break;
        
            case 'video-content':
                this.$videoContent.innerHTML = newValue
                break;

            case 'read-more':
                this.$readMore.setAttribute('href', newValue)
                break;
        }
    }   
}

window.customElements.define('video-info', VideoInfo)