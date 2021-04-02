import {md5} from '../utils.js'

export async function signup(name, email, password) {
    let response = await firebase
        .firestore()
        .collection('users')
        .where('email','==', email)
        .get();

    console.log(response);

    if(response.empty) {
        await firebase.firestore().collection('users').add({
            name: name,
            email: email,
            password: md5(password),
        });
    
        console.log('Register Successfully')
    }else {
        alert('This email has been used')
    }
}

export async function signin(email, password) {
    let response = await firebase
        .firestore()
        .collection('users')
        .where('email','==', email)
        .where("password", "==", md5(password))
        .get();

    if(response.empty) {
        alert('Your email or your password is incorrect')
    }else{
        console.log('Signin Successfully')
        router.navigate('/homepage');
    }


}

export function getUserInfo() {

}