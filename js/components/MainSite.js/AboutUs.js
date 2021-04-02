//chưa có hiệu ứng

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <section id="about" class="section-padding about-section">
    <h1 class="heading">About us</h1>
    <br>
    <br>
    <section class="container" style="margin: 50 px">
        <div class="aboutus-content">
            <div class="container">
                <div class="posts" data-aos="fade-right">
                    <div class="section_title">
                        <br>
                        <div class="section_subtitle" style="padding-left: 20px;">We care about you!</div>
                        <h2 class="section_main_title">THE <strong>FIRST</strong> MEDICAL FORUM IN VIETNAM</h2>
                    </div>
                    <div class="about-item">
                        <p>
                            <i style="color: #000080;" class="fas fa-capsules"></i>
                            Remedia is a platform where everyone from all over the world can have access to
                            medical and pharmaceutical treatment along with education. A sad reality of life in
                            Vietnam is that most people here rely on folk cures for ailments because they simply
                            cannot afford to pay for anything but the cheapest drugs. It is vital to raise
                            awareness about the availability of health care in the best light especially for
                            ones who have stayed in the dark due to lack of resources and the omnipresence of
                            fake drugs and quackery.
                            <br>
                            <br>
                            <i style="color: #000080;" class="fas fa-capsules"></i>
                            We strive to enhance knowledge on medical practices and connect concerns among
                            citizens through discussion, passion, and care.
                        </p>
                        <div class="hgt-20"></div>
                        <div class="home-button"><br>
                            <a style="    font-family: 'Poppins', sans-serif;   " href="" class="btn-color-background">Go to advisory</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <aside style="padding-top: 100px;" class="sidebar" data-aos="fade-left">
                    <div class="about-box">
                        <div class="box-overlay"></div>
                        <a href="www.youtube.com" class="videopopup">
                            <img src="../../assets/aboutus/about-us-banner.png" style="width: 100%" alt="">
                            <span class="sonar-wrapper">
                                <span class="sonar-emitter">
                                    <div class="sonar-wave"></div>
                                </span>
                            </span>
                        </a>
                    </div>
                </aside>
            </div>
        </div>
    </section>
</section>     
`

export default class AboutUs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}

window.customElements.define('about-us', AboutUs)