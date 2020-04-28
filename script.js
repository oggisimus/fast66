const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
navbarLinks.classList.toggle('active')
});

function validation()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var message = document.getElementById("message").value;
    var errormessage = document.getElementById("errormessage");
    var tekst;

    errormessage.style.padding = "5px";
    
    if(name.length <3) {
         tekst = "Ime mora sadržavati barem 3 slova";
         errormessage.innerHTML = tekst;
         return false;
    }

    if(email.indexOf("@") ==-1 || email.length < 6) {
        tekst = "Unesite točan email";
        errormessage.innerHTML = tekst;
        return false;
   }

    if(isNaN(number)) {
        tekst = "Unesite isključivo znamenke u polje";
        errormessage.innerHTML = tekst;
        return false;
   }
 
   if(message.length <= 20) {
    tekst = "Unesite minimalno 20 znakova";
    errormessage.innerHTML = tekst;
    return false;
}
 
    alert("Uspješno ispunjeno, zahvaljujemo na Vašem upitu")
    return true;

}
