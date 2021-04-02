import { register, validate, require, validateEmail } from "../js/utils.js";

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
<link rel="stylesheet" href="style.css">
<div id="appointment" class="container">
<header>APPOINTMENT BOOKING</header>
<div class="progress-bar">
    <div class="step">
        <p>Name</p>
        <div class="bullet">
            <span>1</span>
        </div>
        <div class="check fas fa-check">
        </div>
    </div>
    <div class="step">
        <p>Contact</p>
        <div class="bullet">
            <span>2</span>
        </div>
        <div class="check fas fa-check">
        </div>
    </div>
    <div class="step">
        <p>Details</p>
        <div class="bullet">
            <span>3</span>
        </div>
        <div class="check fas fa-check">
        </div>
    </div>
    <div class="step">
        <p>Submit</p>
        <div class="bullet">
            <span>4</span>
        </div>
        <div class="check fas fa-check">
        </div>
    </div>
</div>
<div class="form-outer">
    <form action="#">
        <div class="page slide-page">
            <div class="title">Basic Information</div>
            <div class="field">
                <div class="label">Full Name</div>
                <input id="name" type="text">
            </div>
            <div class="field">
                <div class="label">Date of Birth</div>
                <input id="dob" type="date">
            </div>
            <div class="field">
                <div class="label">Gender</div>
                <select id="gender">
                    <option>Select your gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
            </div>

            <div class="field">
                <button class="firstNext next">Next</button>
            </div>
        </div>

        <div class="page">
            <div class="title">Contact Information</div>
            <div class="field">
                <div class="label">Email Address</div>
                <input id="email" type="text">
            </div>
            <div class="field">
                <div class="label">Phone Number</div>
                <input id="phone" type="Number">
            </div>
            <div class="field btns">
                <button class="prev-1 prev">Previous</button>
                <button class="next-1 next">Next</button>
            </div>
        </div>
        <div class="page">
            <div class="title">Meeting Details</div>
            <div class="field">
                <div class="label">Scheduled Date</div>
                <input id="scheduled-date" type="date">
            </div>
            <div class="field">
                <div class="label">Scheduled Time (GMT +7)</div>
                <input id="scheduled-time" type="time">
            </div>
            <div class="field">
                <div class="label">Description of your case</div>
                <input id="description" type="text">

            </div>
            <div class="field btns">
                <button class="prev-2 prev">Previous</button>
                <button class="next-2 next">Next</button>
            </div>
        </div>
        <div class="page">
            <div class="title">Prioritized Experts</div>
            <div class="field">
                <div class="label">1st preference</div>
                <select id="1st">
                    <option>Select your 1st preference</option>
                    <option>Dr. Richard Webber 👨🏾‍⚕️</option>
                    <option>Dr. Miranda Bailey 🧑‍⚕️</option>
                    <option>Dr. Cristina Yang 👩🏻‍⚕️</option>
                    <option>Dr. Meredith Grey 👩🏼‍⚕️</option>
                    <option>Dr. Derek Shepherd 👨🏻‍⚕️</option>
                </select>
            </div>
            <div class="field">
                <div class="label">2nd preference</div>
                <select id="2nd">
                    <option>Select your 2nd preference</option>
                    <option>Dr. Richard Webber 👨🏾‍⚕️</option>
                    <option>Dr. Miranda Bailey 🧑‍⚕️</option>
                    <option>Dr. Cristina Yang 👩🏻‍⚕️</option>
                    <option>Dr. Meredith Grey 👩🏼‍⚕️</option>
                    <option>Dr. Derek Shepherd 👨🏻‍⚕️</option>
                </select>
            </div>
            <div class="field">
                <div class="label">3rd preference</div>
                <select id="3rd">
                    <option>Select your 3rd preference</option>
                    <option>Dr. Richard Webber 👨🏾‍⚕️</option>
                    <option>Dr. Miranda Bailey 🧑‍⚕️</option>
                    <option>Dr. Cristina Yang 👩🏻‍⚕️</option>
                    <option>Dr. Meredith Grey 👩🏼‍⚕️</option>
                    <option>Dr. Derek Shepherd 👨🏻‍⚕️</option>
                </select>
            </div>
            <div class="field btns">
                <button class="prev-3 prev">Previous</button>
                <button class="submit">Submit</button>
            </div>
        </div>
    </form>
</div>
</div>
`;

export default class AppointmentBooking extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$appointment = this.shadowRoot.getElementById('appointment');
    this.$name = this.shadowRoot.getElementById('name');
    this.$dob = this.shadowRoot.getElementById('dob');
    this.$gender = this.shadowRoot.getElementById('gender');
    this.$email = this.shadowRoot.getElementById('email');
    this.$phone = this.shadowRoot.getElementById('phone');
    this.$scheduledDate = this.shadowRoot.getElementById('scheduled-date');
    this.$scheduledTime = this.shadowRoot.getElementById('scheduled-time');
    this.$description = this.shadowRoot.getElementById('description');
    this.$first = this.shadowRoot.getElementById('1st');
    this.$second = this.shadowRoot.getElementById('2nd');
    this.$third = this.shadowRoot.getElementById('3rd');
  }

  connectedCallback() {
    this.$appointment.onsubmit = (event) => {
      event.preventDefault();

      let name = this.$name.value;
      let email = this.$email.value;

      let isPassed = this.$name.validate(require, "Input your name") &
        (
          this.$email.validate(require, "Input your email") &&
          this.$email.validate(validateEmail, "Wrong email format")
        );

      if (isPassed) {
        register(name, dob, gender, email, phone, scheduledDate, scheduledTime, description, first, second, third)
      }
    }
  }
}

window.customElements.define('appointment-booking', AppointmentBooking);

// const slidePage = document.querySelector(".slide-page");
// const nextBtnFirst = document.querySelector(".firstNext");
// const prevBtnSec = document.querySelector(".prev-1");
// const nextBtnSec = document.querySelector(".next-1");
// const prevBtnThird = document.querySelector(".prev-2");
// const nextBtnThird = document.querySelector(".next-2");
// const prevBtnFourth = document.querySelector(".prev-3");
// const submitBtn = document.querySelector(".submit");
// const progressText = document.querySelectorAll(".step p");
// const progressCheck = document.querySelectorAll(".step .check");
// const bullet = document.querySelectorAll(".step .bullet");
// let current = 1;

// nextBtnFirst.addEventListener("click", function (event) {
//   event.preventDefault();
//   slidePage.style.marginLeft = "-25%";
//   bullet[current - 1].classList.add("active");
//   progressCheck[current - 1].classList.add("active");
//   progressText[current - 1].classList.add("active");
//   current += 1;
// });

// nextBtnSec.addEventListener("click", function (event) {
//   event.preventDefault();
//   slidePage.style.marginLeft = "-50%";
//   bullet[current - 1].classList.add("active");
//   progressCheck[current - 1].classList.add("active");
//   progressText[current - 1].classList.add("active");
//   current += 1;
// });

// nextBtnThird.addEventListener("click", function (event) {
//   event.preventDefault();
//   slidePage.style.marginLeft = "-75%";
//   bullet[current - 1].classList.add("active");
//   progressCheck[current - 1].classList.add("active");
//   progressText[current - 1].classList.add("active");
//   current += 1;
// });
// submitBtn.addEventListener("click", function () {
//   bullet[current - 1].classList.add("active");
//   progressCheck[current - 1].classList.add("active");
//   progressText[current - 1].classList.add("active");
//   current += 1;
//   setTimeout(function () {
//     alert("Your Form Successfully Signed up");
//     location.reload();
//   }, 800);
// });

// prevBtnSec.addEventListener("click", function (event) {
//   event.preventDefault();
//   slidePage.style.marginLeft = "0%";
//   bullet[current - 2].classList.remove("active");
//   progressCheck[current - 2].classList.remove("active");
//   progressText[current - 2].classList.remove("active");
//   current -= 1;
// });
// prevBtnThird.addEventListener("click", function (event) {
//   event.preventDefault();
//   slidePage.style.marginLeft = "-25%";
//   bullet[current - 2].classList.remove("active");
//   progressCheck[current - 2].classList.remove("active");
//   progressText[current - 2].classList.remove("active");
//   current -= 1;
// });
// prevBtnFourth.addEventListener("click", function (event) {
//   event.preventDefault();
//   slidePage.style.marginLeft = "-50%";
//   bullet[current - 2].classList.remove("active");
//   progressCheck[current - 2].classList.remove("active");
//   progressText[current - 2].classList.remove("active");
//   current -= 1;
// });
