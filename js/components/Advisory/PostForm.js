import { getCurrentUser, getUserByToken } from "../../models/users.js";
import {require} from '../../utils.js'
import {post} from "../../models/posts.js"



const $template = document.createElement('template');
$template.innerHTML = /*html*/ `

    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>    
    <form id="post-form" class="wrapper">
        <div class="title">
            <h1>Create Post</h1>
        </div>
        <div class="contact-form">
            <div class="input-fields">
                <div class="container">
                    <div class="wrapper-preview">
                        <div class="image">
                            <img src="" alt="">
                        </div>
                        <div class="content">
                            <div class="icon">
                                <i class="fas fa-cloud-upload-alt"></i>
                            </div>
                            <div class="text">
                                No file chosen, yet!
                            </div>
                        </div>
                        <div id="cancel-btn-preview-image">
                            <i class="fas fa-times"></i>
                        </div>
                        <div class="file-name">
                            File name here
                        </div>
                    </div>
                    <input id="default-btn" type="file" hidden accept="image/png, image/jpeg">
                </div>
                <label id="custom-btn" for="default-btn"> Choose an image (not required) </label>
                <input-wrapper-post id ="post-title" type="text" class="input" placeholder="Post Title"> </input-wrapper-post>
            </div>
            <div class="msg">
                <textarea-wrapper id="post-content" placeholder="Post Content"></textarea-wrapper>
                <div class="button-container" >
                    <button type="submit" class="btn">Send</button>
                    <button id="cancel-btn-post" class=" cancel btn">Cancel</button>
                </div>
            </div>
        </div>
    </form>

    <style type="text/css">
        @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            outline: none;
            font-family: 'Poppins', sans-serif;
        }
        .wrapper{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            max-width: 550px;
            background: rgba(0,0,0,0.8);
            padding: 30px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.3);
            z-index: 1000;
        }

        .wrapper .title h1{
            color: #c5ecfd;
            text-align: center;
            margin-bottom: 25px;
        }

        .contact-form{
            display: flex;
        }

        .input-fields{
            display: flex;
            flex-direction: column;
            margin-right: 4%;
        }

        .input-fields,
        .msg{
            width: 48%;
        }

        .input-fields .input
        {
            margin: 10px 0;
            background: transparent;
            border: 0px;
            padding-top: 10px;
            color: #c5ecfd;
            width: 100%;
        }

        label{
            margin: 10px 0;
            background: transparent;
            border: 0px;
            border-bottom: 2px solid #c5ecfd;
            padding: 10px;
            color: #c5ecfd;
            width: 100%;
            font-family: 'Poppins', sans-serif;
            font-size: 12px;
            cursor:pointer;

        }


        ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: #c5ecfd;
        }
        ::-moz-placeholder {
        /* Firefox 19+ */
        color: #c5ecfd;
        }
        :-ms-input-placeholder {
        /* IE 10+ */
        color: #c5ecfd;
        }

        .button-container{
            display:flex;
            text-align: center;
            justify-content: center;
        }
        .btn {
            background: #39b7dd;
            text-align: center;
            padding: 15px;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            text-transform: uppercase;
            width: 100%;
            margin: 0 10px
        }
        .cancel{
            background-color: grey
        }
        @media screen and (max-width: 600px){
            .contact-form{
                flex-direction: column;
            }
            .msg textarea-wrapper{
                height: 80px;
            }
            .input-fields,
            .msg{
                width: 100%;
            }
        }

        .wrapper-preview #cancel-btn i{
            position: absolute;
            font-size: 20px;
            right: 15px;
            top: 15px;
            color: #9658fe;
            cursor: pointer;
            display: none;
        }
        .wrapper-preview.active:hover #cancel-btn i{
            display: block;
        }
        .wrapper-preview #cancel-btn i:hover{
            color: #e74c3c;
        }
/* preview image*/
        .container{
            display: grid;
            place-items: center;
            text-align: center;
            padding-top: 30px;
        }
        .wrapper-preview{
            position: relative;
            width: 100%;
            border-radius: 10px;
            background: #fff;
            border: 2px dashed #000080;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            height: 135px;
        }
        .wrapper-preview.active{
            border: none;
        }
        .wrapper-preview .image{
            position: absolute;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .wrapper-preview img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        .wrapper-preview .icon{
            font-size: 50px;
            color: #000080;
        }
        .wrapper-preview .text{
            font-size: 12px;
            font-weight: 500;
            color: #5B5B7B;
        }
        .wrapper-preview #cancel-btn-preview-image i{
            position: absolute;
            font-size: 20px;
            right: 15px;
            top: 15px;
            color: #9658fe;
            cursor: pointer;
            display: none;
        }
        .wrapper-preview.active:hover #cancel-btn-preview-image i{
            display: block;
        }
        .wrapper-preview #cancel-btn-preview-image i:hover{
            color: #e74c3c;
        }
        .wrapper-preview .file-name{
            position: absolute;
            bottom: 0px;
            width: 100%;
            padding: 8px 0;
            font-size: 12px;
            color: #fff;
            display: none;
            background: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%);
        }
        .wrapper-preview.active:hover .file-name{
            display: block;
        }
    </style>
`

export default class PostForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$wrapper = this.shadowRoot.querySelector(".wrapper-preview");
        this.$fileName = this.shadowRoot.querySelector(".file-name");
        this.$defaultBtn = this.shadowRoot.querySelector("#default-btn");
        this.$customBtn = this.shadowRoot.querySelector("#custom-btn");
        this.$cancelBtn = this.shadowRoot.querySelector("#cancel-btn-preview-image");
        this.$img = this.shadowRoot.querySelector("img");

        this.$postForm = this.shadowRoot.getElementById("post-form");
        this.$postTitle = this.shadowRoot.getElementById("post-title");
        this.$defaultBtn = this.shadowRoot.getElementById("default-btn");
        this.$postContent = this.shadowRoot.getElementById("post-content");
        this.$cancelBtnPost = this.shadowRoot.getElementById("cancel-btn-post");

    }

    static get observedAttributes() {
        return ['y'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch (attrName) {

            case 'y': 
                this.$postForm.style.transform = `translate(-50%,${newValue}px)`;
                break;
        }
    }

    connectedCallback() {
        let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
        this.$customBtn.onclick = (event) => {
            event.preventDefault();
            this.$defaultBtn.click();
        }
        this.$defaultBtn.onchange = (event) => {
            event.preventDefault();
            let file = event.target.files[0];
            if(file){
                let reader = new FileReader();
                reader.onload = (event) => {
                    event.preventDefault();
                    let result = reader.result;
                    this.$img.setAttribute('src', result);
                    this.$wrapper.classList.add("active");
                }
                this.$cancelBtn.onclick = (event) => {
                    event.preventDefault();
                    this.$img.setAttribute('src', "");
                    this.$wrapper.classList.remove("active");
                }
                reader.readAsDataURL(file);
            }
            if(file){
                const valueStore = file.name.match(regExp);
                this.$fileName.textContent = valueStore;
                console.log(valueStore)
            }
        }
        this.$postForm.onsubmit = async (event) => {
            event.preventDefault();
            try {
                this.currentUser = await getCurrentUser();

                let currentUser = await getCurrentUser();
                console.log(currentUser)

                let isPassed = this.$postTitle.validate(require, "Input your Post Title") &
                this.$postContent.validate(require, "Input your Post Content");
            
                if (isPassed) {
                    let author = currentUser.name;
                    let date = new Date(Date.now()).toString()
                    let postTitle  = this.$postTitle.value
                    let image = this.$defaultBtn.files[0]
                    let image_name = Date.now() + image.name
                    let postContent = this.$postContent.value
                    post(author, date, postTitle, image, image_name, postContent)
                    console.log('passed')
                    this.$postForm.style.display = 'none'
                }
    

            } catch (error) {
                alert('Please sign in to your account to post a new thread')
            }


        }
        this.$cancelBtnPost.onclick = (event) => {
            event.preventDefault();
            this.$postForm.style.display = 'none'
        }


    }




}

window.customElements.define('post-form', PostForm)