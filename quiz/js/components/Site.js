const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
<link rel="stylesheet" href="./css/quiz.css">

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


let questions = [
    {
      id: 1,
      question: "How often do people download health mobile apps every year?",
      answer: "3.7 billion times a year",
      options: [
        "3.6 billion times a year",
        "3.7 billion times a year",
        "3.8 billion times a year",
        "3.9 billion times a year"
      ]
    },
    {
      id: 2,
      question: "Loratadine is mostly used to treat",
      answer: "Cold",
      options: [
        "Cold",
        "Pain",
        "Asthma",
        "Acne"
      ]
    },
    {
      id: 3,
      question: "Tretinoin is mostly used to treat",
      answer: "Acne",
      options: [
        "Pain",
        "Asthma",
        "Acne",
        "Flu"
      ]
    },
    {
      id: 4,
      question: "Coca-Cola has which of the following effect?",
      answer: "Pain relief",
      options: [
        "Increase pain",
        "Dizzy",
        "Pain relief",
        "Cure insomnia"
      ]
    },
    {
      id: 5,
      question: "How much does pharmacy markets worth in 2020?",
      answer: "$ 300 billions",
      options: [
        "$ 400 billions",
        "$ 200 billions",
        "$ 100 billions",
        "$ 300 billions"
      ]
    }
  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
     
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  