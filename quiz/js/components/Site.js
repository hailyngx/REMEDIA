const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
<link rel="stylesheet" href="./css/quiz.css">

<div class="wrapper">
<div class="quiz">
  <div class="quiz_header">
    <div class="quiz_user">
      <h4>Welcome <span class="name"></span>. 10 points each question, good luck!</h4>
    </div>
    <div class="quiz_timer">
      <span class="time">00:00</span>
    </div>
  </div>
  <div class="quiz_body">
    <div id="questions">
      <!-- <ul class="option_group">
        <li class="option">option 1</li>
        <li class="option">option 2</li>
        <li class="option">option 3</li>
        <li class="option">option 4</li>
      </ul> -->
    </div>
    <button class="btn-next" onclick="next()">Next Question</button>
  </div>
</div>
</div>
`;

export default class VideoContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true))
    }

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
  