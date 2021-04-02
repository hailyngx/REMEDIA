//chưa có hiệu ứng

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>  
    <h1 class="heading">Our mission</h1>
    <section id="mission" class="mission">
        <div class="container-2" data-aos="fade-down">
            <h2 style="text-align: center; color: white; font-size: 30px;">One platform of dynamic features</h2>
            
            <h4  style="  font-family: 'Poppins', sans-serif; text-align: center; color: white; font-size: 15px; margin-left: 60px; margin-right: 60px;">
                Our targeted clients range from dynamic cities to developing regions in mountainous areas where
                there is limited access to medical services and medicine. Remedia enables healthcare teams to order
                digital content and services as easily as they do medications today. Patients can then access these
                digital health tools from the provider’s portal, so that they can actively manage their health.</h4>
            
            <p>
                <img src="../../../assets/ourmission/flowchart-mission2.png" class="img-fluid" style="width: 100%" alt=""
                    data-aos="fade-up">
            </p>
        </div>
    </section>
`

export default class OurMission extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}

window.customElements.define('our-mission', OurMission)