const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
<link rel="stylesheet" href="./css/quiz.css">
<div class="wrapper">
<div class="welcome_text">
    <h1><strong>Let's take a quiz with REMEDIA</strong></h1>
    <br>
    <form class="welcome_form" name="welcome_form" onsubmit="submitForm(event)">
        <input type="text" name="name">
        <button>Start Quiz</button>
    </form>
</div>
</div>
`;

export default class StartQuiz extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true))
    }
}

    submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    sessionStorage.setItem("name", name);
    location.href = "quiz.html";
  }

window.customElements.define('start-quiz', StartQuiz)

