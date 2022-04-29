function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var cemail = document.getElementById("subemail").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";



    var text;
    if (name.length < 5) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 11) {
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if (cemail.indexOf("@") == -1 || cemail.length < 6) {
        text = "Please confirm your Email";
        error_message.innerHTML = text;
        return false;
    }

    if (cemail != email) {
        text = "Your email doesn't match";
        error_message.innerHTML = text;
        return false;
    }


    if (message.length <= 10) {
        text = "Please Enter More Than 10 Characters";
        error_message.innerHTML = text;
        return false;
    }

    let date = document.forms["contact"]["appointment"].value;
    var d = new Date(date);
    var z = new Date();

    if (d.getDate() <= z.getDate() && d.getMonth() <= z.getMonth()) {
        text = "You have to chose 1 day in the future";
        error_message.innerHTML = text;
        return false;
    }
    confirm("Form Has Been Submitted Successfully\nName: " + name + "\nSubject: " + subject + "\nNumber: " + phone + "\nEmail: " + email + "\nDate: " + date + "\nMessage: " + message + "\nTo Send The Enquiry Click 'OK'");
    return true;
}