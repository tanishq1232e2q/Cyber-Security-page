function fun() {
    swal({ title: "Please enter your name for Facial Recognition",
    
    content:"input",
    type: "success"}).then(okay => {
      if (okay) {
       window.location.href = "/auth.html";
     }
   });
       
}


function fg() {
    alert("jh")
}
const synth = window.speechSynthesis;
const words = "Welcome to JMedia Corporation. Our cyber portal facial recognition authentication is required to enter into the dashboard and use its features. Our company is highly advanced in terms of security, authorization, and authentication."

const utterance1 = new SpeechSynthesisUtterance(words);
setTimeout(() => {

    speechSynthesis.speak(utterance1);
}, 2000);
speechSynthesis.cancel()














