import VideoInfo from "./FactInfo.js";

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

<h1 class="heading">Videos</h1>
<section class="facts">
    <div class="container">
        <video-info iframe ="https://www.youtube.com/embed/m0V6DRJBBGY" video-name ="Penicillin and Antibiotic Resistance" video-content ="Watch this video to learn how penicillin and penicillin-related antibiotics disrupt the
        bacterial life cycle, and what molecular mechanisms bacteria employ to evade the action
        of these drugs." read-more ="https://www.youtube.com/watch?v=m0V6DRJBBGY"></video-info>
        <video-info iframe ="https://www.youtube.com/embed/zBkVCpbNnkU" video-name ="Side Effects of the Vaccine - How high is the risk?" video-content = "Vaccines are one of the most effective tools for preventing
        dangerous diseases, but they also have side effects. Will refusing to be vaccinated make you safer?" read-more ="https://youtu.be/zBkVCpbNnkU"></video-info>
        <video-info iframe ="https://www.youtube.com/embed/-RkhAP0_ms4" video-name ="The pharmacy of the future? Personalized pills, 3D printed at home" video-content = 'In a talk and concept demo, Kraft shares his vision for a future of
        personalized medication,
        unveiling a prototype 3D printer that could design pills that adapt to our individual
        needs.' read-more ="https://youtu.be/-RkhAP0_ms4"></video-info>
        <video-info iframe ="https://www.youtube.com/embed/xZbcwi7SfZE" video-name ="The Antibiotic Apocalypse Explained" video-content = "What is the Antibiotic Apocalypse? What is it all about? And how
        dangerous is it?" read-more ="https://www.youtube.com/watch?v=xZbcwi7SfZE"></video-info>
    </div>
</section>
`;

export default class VideoContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true))
    }
}

window.customElements.define('video-container', VideoContainer)
