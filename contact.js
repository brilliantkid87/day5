function showData() {
    let inputName = document.getElementById("input-name").value;
    let inputEmail = document.getElementById("input-email").value;
    let inputPhone = document.getElementById("input-phone").value;
    let inputSubject = document.getElementById("input-subject").value;
    let inputMessage = document.getElementById("input-messages").value;
   

    console.log(inputName);
    console.log(inputEmail);
    console.log(inputPhone);
    console.log(inputSubject);
    console.log(inputMessage);
    
    if (inputName == "") {
        return alert("Name is required")
    }
    if (inputEmail == "") {
        return alert("email is required")
    }
    if (inputPhone == "") {
        return alert("Phone is required")
    }
    if (inputSubject == "") {
        return alert("Subject is required")
    }
    if (inputMessage == "") {
        return alert("Message is required")
    }
    
    let emailReceiver = "Brilliantkid87@gmail.com"

    let a = document.createElement("a");
    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${inputSubject}&body=hallo Hello my name is ${inputName} ${inputMessage} %0d%0Aplease contact me ${inputPhone}`

    a.click()
}