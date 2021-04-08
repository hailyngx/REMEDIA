const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
<link rel="stylesheet" href="./css/quiz.css">
<div class="wrapper">
<div>
   <i class="fas fa-award award_icon"></i>
   <h3 class="username">Well done <span class="name"></span>!</h3>
   <p class="userpoints">Your Points <span class="points"></span>/50</p>
 <p class="usertime"> Time taken <span class="time_taken"></span> seconds</p>
</div>
</div>
<script src="https://kit.fontawesome.com/d56261bbb9.js"></script>
`;

export default class StartQuiz extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true))

    }
    let user_name = sessionStorage.getItem("name");
    let user_points = sessionStorage.getItem("points");
    let user_time = sessionStorage.getItem("time");
    document.querySelector("span.name").innerHTML = user_name;
    document.querySelector("span.points").innerHTML = user_points;
    document.querySelector("span.time_taken").innerHTML = user_time;
}

window.customElements.define('user-info', UserInfo)




