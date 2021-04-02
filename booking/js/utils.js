export function require(value) {
    return value != '';
}

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// chuyển đổi dữ liệu của document (dạng cloud firestore) => dữ liệu có thể thấy được
export function getDataFromDoc(doc) {
    return {
        id: doc.id,
        ...doc.data()
    };
}

export function getDataFromDocs(docs) {
    return docs.map((doc) => {
        return getDataFromDoc(doc);
    });
}

export async function register(name, dob, gender, email, phone, scheduledDate, scheduledTime, description, first, second, third) {
    let response = await firebase
        .firestore()
        .collection("appointments")
        .where("email", "==", email)
        .get();

    console.log(response);

    if (response.empty) {
        await firebase.firestore().collection("appointments").add({
            name: name,
            dob: dob,
            gender: gender,
            email: email,
            phone: phone,
            scheduledDate: scheduledDate,
            scheduledTime: scheduledTime,
            description: description,
            prioritizedExperts: [first, second, third],
        });
        alert("Register successfully");
    } 
}
