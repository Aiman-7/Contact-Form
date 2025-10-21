
function validateForm(){

       let fname= document.forms["myForm"]["fname"].value;
       let email= document.forms["myForm"]["email"].value;
       let subject= document.forms["myForm"]["subject"].value;
       let message= document.forms["myForm"]["message"].value;
       
    if(fname == "" ||  email == "" || subject == "" || message == ""){
        alert("Please fill in all required fields.");
    }
   else{
   sendMail();
}
}

function sendMail(){
     let parms = {
    fname : document.getElementById("fname").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
   }

   emailjs.send("service_rsl1yzm", "template_dk6iflr", parms).then(alert("Email Sent !!"));
   }