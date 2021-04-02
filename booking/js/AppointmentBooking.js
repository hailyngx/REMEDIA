import { register, require, validateEmail } from "./utils.js";

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
<link rel="stylesheet" href="style.css">
<div id="appointment-booking" class="container">
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
                <input-wrapper id="name" type="text"></input-wrapper>
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
                <input-wrapper id="scheduled-date" type="date"></input-wrapper>
            </div>
            <div class="field">
                <div class="label">Scheduled Time (GMT +7)</div>
                <input id="scheduled-time" type="time">
            </div>
            <div class="field">
                <div class="label">Description of your case</div>
                <input-wrapper id="description" type="text"></input-wrapper>

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

        this.$appointmentBooking = this.shadowRoot.getElementById('appointment-booking');
        this.$name = this.shadowRoot.getElementById('name');
        this.$dob = this.shadowRoot.getElementById('dob');
        this.$gender = this.shadowRoot.getElementById('gender');
        this.$email = this.shadowRoot.getElementById('email');
        this.$phone = this.shadowRoot.getElementById('phone');
        this.$scheduledDate = this.shadowRoot.getElementById('scheduled-date');
        this.$scheduledTime = this.shadowRoot.getElementById('scheduled-time');
        this.$description = this.shadowRoot.getElementById('description');
        this.$1st = this.shadowRoot.getElementById('1st');
        this.$2nd = this.shadowRoot.getElementById('2nd');
        this.$3rd = this.shadowRoot.getElementById('3rd');

        this.$slidePage = this.shadowRoot.querySelector(".slide-page");
        this.$nextBtnFirst = this.shadowRoot.querySelector(".firstNext");
        this.$prevBtnSec = this.shadowRoot.querySelector(".prev-1");
        this.$nextBtnSec = this.shadowRoot.querySelector(".next-1");
        this.$prevBtnThird = this.shadowRoot.querySelector(".prev-2");
        this.$nextBtnThird = this.shadowRoot.querySelector(".next-2");
        this.$prevBtnFourth = this.shadowRoot.querySelector(".prev-3");
        this.$submitBtn = this.shadowRoot.querySelector(".submit");
        this.$progressText = this.shadowRoot.querySelectorAll(".step p");
        this.$progressCheck = this.shadowRoot.querySelectorAll(".step .check");
        this.$bullet = this.shadowRoot.querySelectorAll(".step .bullet");
        this.current = 1;

        this.$nextBtnFirst.addEventListener("click", (event) => {
            event.preventDefault();
            this.$slidePage.style.marginLeft = "-25%";
            this.$bullet[this.current - 1].classList.add("active");
            this.$progressCheck[this.current - 1].classList.add("active");
            this.$progressText[this.current - 1].classList.add("active");
            this.current += 1;
        });

        this.$nextBtnSec.addEventListener("click", (event) => {
            event.preventDefault();
            this.$slidePage.style.marginLeft = "-50%";
            this.$bullet[this.current - 1].classList.add("active");
            this.$progressCheck[this.current - 1].classList.add("active");
            this.$progressText[this.current - 1].classList.add("active");
            this.current += 1;
        });

        this.$nextBtnThird.addEventListener("click", (event) => {
            event.preventDefault();
            this.$slidePage.style.marginLeft = "-75%";
            this.$bullet[this.current - 1].classList.add("active");
            this.$progressCheck[this.current - 1].classList.add("active");
            this.$progressText[this.current - 1].classList.add("active");
            this.current += 1;
        });
        this.$submitBtn.addEventListener("click", () => {
            this.$bullet[this.current - 1].classList.add("active");
            this.$progressCheck[this.current - 1].classList.add("active");
            this.$progressText[this.current - 1].classList.add("active");
            this.current += 1;
            setTimeout(function () {
                alert("Your Form Successfully Signed up");
                location.reload();
            }, 800);
        });

        this.$prevBtnSec.addEventListener("click", (event) => {
            event.preventDefault();
            this.$slidePage.style.marginLeft = "0%";
            this.$bullet[this.current - 2].classList.remove("active");
            this.$progressCheck[this.current - 2].classList.remove("active");
            this.$progressText[this.current - 2].classList.remove("active");
            this.current -= 1;
        });
        this.$prevBtnThird.addEventListener("click", (event) => {
            event.preventDefault();
            this.$slidePage.style.marginLeft = "-25%";
            this.$bullet[this.current - 2].classList.remove("active");
            this.$progressCheck[this.current - 2].classList.remove("active");
            this.$progressText[this.current - 2].classList.remove("active");
            this.current -= 1;
        });
        this.$prevBtnFourth.addEventListener("click", (event) => {
            event.preventDefault();
            this.$slidePage.style.marginLeft = "-50%";
            this.$bullet[this.current - 2].classList.remove("active");
            this.$progressCheck[this.current - 2].classList.remove("active");
            this.$progressText[this.current - 2].classList.remove("active");
            this.current -= 1;
        });

    }

    connectedCallback() {
        this.$appointmentBooking.onsubmit = (event) => {
            event.preventDefault();

            let name = this.$name.value;
            let dob = this.$dob.value
            let gender = this.$gender.value
            let email = this.$email.value
            let phone = this.$phone.value
            let scheduledDate = this.$scheduledDate.value
            let scheduledTime = this.$scheduledTime.value
            let description = this.$description.value
            let first = this.$1st.value
            let second = this.$2nd.value
            let third = this.$3rd.value
    

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
