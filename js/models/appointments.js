export async function registerAppointment(name, dob, gender, email, phone, scheduledDate, scheduledTime, description, first, second, third) {
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