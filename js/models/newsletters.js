export async function newsletter(email) {
    let response = await firebase
        .firestore()
        .collection("emails")
        .where("email", "==", email)
        .get();
    

        if (response.empty) {
            await firebase.firestore().collection("emails").add({
                email:email,
            });
            alert("Register successfully");
        }  else {
            alert("This email has been already registered!");
        }
}