// H: Hente et element
const submitButton = document.querySelector("#submitButton");

// M: Modifisere noe som skal skje
submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Må være med pga. form-element i HTML.
    console.log("Button clicked?");

    // H: Hente en verdi fra et element
    // Metode 1:
    const userName = document.querySelector("#userName").value;
    console.log(userName);

    /*// Metode 2:
    const userName = document.querySelector("#userName");
    const userNameValue = userName.value;*/

    // H: Hente et elment
    const userGreeting = document.querySelector("#userGreeting");
    console.log(userGreeting);

    // S: Sender resultat
    // Metode 1: template litteral
    userGreeting.textContent = `Velkommen, ${userName}!`;

    /*// Metode 2: chaining
    userGreeting.textContent = "Velkommen, " + userName + "!"*/

    // H: Hent en verdi fra et element
    const amount = document.querySelector("#amount").value;
    console.log(amount);

    // H:
    const optionApple = document.querySelector("#optionApple").value;
    console.log(optionApple);

    // H:
    const optionBanana = document.querySelector("#optionBanana").value;
    console.log(optionBanana);
});