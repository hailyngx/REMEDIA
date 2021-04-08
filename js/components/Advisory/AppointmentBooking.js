import {require, validateEmail } from "../../../js/utils.js";
import { registerAppointment } from "../../../js/models/appointments.js";

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
<link rel="stylesheet" href="../../../css/appointmentbooking.css">
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
        <form id="appointment-booking" action="#">
            <div class="page slide-page">
                <div class="title">Basic Information</div>
                <div class="field">
                    <div class="label">Full Name</div>
                    <input-wrapper-advisory id="name" type="text"></input-wrapper-advisory>
                </div>
                <div class="field">
                    <div class="label">Date of Birth</div>
                    <input-wrapper-advisory id="dob" type="date"></input-wrapper-advisory>
                </div>
                <div class="field">
                    <div class="label">Gender</div>
                    <select-wrapper-advisory id="gender" options='["Select your gender","Male","Female","Other"]'>
                    </select-wrapper-advisory>
                </div>
                <div class="field">
                    <button class="firstNext next">Next</button>
                </div>
            </div>
            <div class="page">
                <div class="title">Contact Information</div>
                <div class="field">
                    <div class="label">Email Address</div>
                    <input-wrapper-advisory id="email" type="text"></input-wrapper-advisory>
                </div>
                <div class="field">
                    <div class="label">Phone Number</div>
                    <input-wrapper-advisory id="phone" type="text"></input-wrapper-advisory>
                </div>
                <div class="field btns">
                    <button class="prev-1 prev">Previous</button>
                    <button class="next-1 next">Next</button>
                </div>
            </div>
            <div class="page">
                <div class="title">Meeting Details</div>
                <div class="field">
                    <div class="label">Scheduled Date Preference</div>
                    <input-wrapper-advisory id="scheduled-date" type="date"></input-wrapper-advisory>
                </div>
                <div class="field">
                    <div class="label">Scheduled Time Preference </div>
                    <input-wrapper-advisory id="scheduled-time" type="time"></input-wrapper-advisory>
                </div>
                <div class="field">
                    <div class="label">Description of your case</div>
                    <input-wrapper-advisory id="description" type="text"></input-wrapper-advisory>
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
                    <select-wrapper-advisory id="1st" options='["Select your 1st preference","Dr. Richard Webber 👨🏾‍⚕️","Dr. Miranda Bailey 🧑‍⚕️","Dr. Cristina Yang 👩🏻‍⚕️","Dr. Meredith Grey 👩🏼‍⚕️","Dr. Derek Shepherd 👨🏻‍⚕️"]'>
                    </select-wrapper-advisory>
                </div>
                <div class="field">
                    <div class="label">2nd preference</div>
                    <select-wrapper-advisory id="2nd" options='["Select your 1st preference","Dr. Richard Webber 👨🏾‍⚕️","Dr. Miranda Bailey 🧑‍⚕️","Dr. Cristina Yang 👩🏻‍⚕️","Dr. Meredith Grey 👩🏼‍⚕️","Dr. Derek Shepherd 👨🏻‍⚕️"]'>
                    </select-wrapper-advisory>
                </div>
                <div class="field">
                    <div class="label">3rd preference</div>
                    <select-wrapper-advisory id="3rd" options='["Select your 1st preference","Dr. Richard Webber 👨🏾‍⚕️","Dr. Miranda Bailey 🧑‍⚕️","Dr. Cristina Yang 👩🏻‍⚕️","Dr. Meredith Grey 👩🏼‍⚕️","Dr. Derek Shepherd 👨🏻‍⚕️"]'>
                    </select-wrapper-advisory>
                </div>
                <div class="field btns">
                    <button class="prev-3 prev">Previous</button>
                    <button type="submit" class="submit">Submit</button>
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

        // this.$submitBtn.addEventListener("click", () => {
        //     this.$bullet[this.current - 1].classList.add("active");
        //     this.$progressCheck[this.current - 1].classList.add("active");
        //     this.$progressText[this.current - 1].classList.add("active");
        //     this.current += 1;
        //     setTimeout(function () {
        //         alert("Your Form Successfully Signed up");
        //         location.reload();
        //     }, 800);
        // });

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
                this.$dob.validate(require, "Input your DOB")&
                this.$gender.validate("Input your Gender")&
                (
                    this.$email.validate(require, "Input your email") &&
                    this.$email.validate(validateEmail, "Wrong email format")
                )&
                this.$phone.validate(require, "Input your Phone")&
                this.$scheduledDate.validate(require, "Input your Schedule Date")&
                this.$scheduledTime.validate(require, "Input your Schedule Time")&
                this.$description.validate(require, "Input your description ")&
                this.$1st.validate("Input your first option")&
                this.$2nd.validate( "Input your second option")&
                this.$3rd.validate("Input your third option")
                ;

            if (isPassed) {
                registerAppointment(name, dob, gender, email, phone, scheduledDate, scheduledTime, description, first, second, third)
                console.log('hhhhh');
                this.$bullet[this.current - 1].classList.add("active");
                this.$progressCheck[this.current - 1].classList.add("active");
                this.$progressText[this.current - 1].classList.add("active");
                this.current += 1;
                setTimeout(function () {
                    alert("Your Form Successfully Signed up");
                    location.reload();
                }, 800);
            }
        }
    }
}

window.customElements.define('appointment-booking', AppointmentBooking);