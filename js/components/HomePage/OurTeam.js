//chưa có hiệu ứng

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="../../../css/homepage.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <section>
        <div class="container">
            <h1 class="heading">Our Team</h1>
            <div class="card-wrapper">
                <profile-container 
                    member-img = "../../../assets/profile/haily.jpg"
                    name="Nguyen Hai Ly" 
                    position ="Founder" 
                    about="Hai Ly is a student at Hanoi - Amsterdam High School"
                    facebook ="https://www.facebook.com/hailyngx/"
                    linkedin = "https://www.instagram.com/haily.ngx/"
                    email = "mailto: nguyenhaily.ams@gmail.com"
                    >
                </profile-container>

                <profile-container 
                    member-img = "../../../assets/profile/ngavu.jpg"
                    name="Vu Thu Nga" 
                    position ="Founder" 
                    about="Thu Nga is a student at Hanoi - Amsterdam High School"
                    facebook ="https://www.facebook.com/ngavucolennnn/"
                    linkedin = "https://www.instagram.com/haily.ngx/"
                    email = "mailto: vuthunga2002@gmail.com"
                    >
                </profile-container>
                
            </div>
        </div>
        </section>
        <!--OUR PROFILE-->
`

export default class OurTeam extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
}

window.customElements.define('our-team', OurTeam)