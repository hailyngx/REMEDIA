const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="../../../css/requestform.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>   

    <section class="map">
    <div data-aos="fade-down">
    <div class="contact-in">
        <div class="contact-map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6200597842403!2d105.7992473143966!3d21.007861886009692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad15a3789c51%3A0xa1b9661a09fd952d!2zTWluZFggc2Nob29sIEhvw6BuZyDEkOG6oW8gVGjDunk!5e0!3m2!1svi!2s!4v1599253491232!5m2!1svi!2s"
                width="100%" height="auto" frameborder="0" style="border:0;" allowfullscreen=""
                aria-hidden="false" tabindex="0"></iframe>
        </div>
        <div class="contact-form">
            <h1>Request Form</h1>
            <form action="https://formspree.io/xwkrgkwo" method="POST">
                <input type="text" placeholder="Email" style="font-family: 'Poppins', sans-serif;"
                    class="contact-form-txt" name="email">
                <input type="text" placeholder="Address" style="font-family: 'Poppins', sans-serif;"
                    class="contact-form-txt" name="address">
                <textarea placeholder="Message" style="font-family: 'Poppins', sans-serif;"
                    class="contact-form-textarea" name="message"></textarea>
                <button type="submit" class="contact-form-btn">SUBMIT</button>
            </form>
        </div>
    </div>
</div>
</section>
`;

export default class RequestForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))
    }
}

window.customElements.define('request-form', RequestForm)

