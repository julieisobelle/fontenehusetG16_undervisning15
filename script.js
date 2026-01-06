// HENTER knapp-elementet som kontrolerer nårtid noe skal skje
// Metode 1: querySelector("#") for å hente id-navn
const submitButton = document.querySelector("#submitButton");
console.log(submitButton);

/*// Metode 2: getElementById("") for å hente ID-navn
const submitButton = document.getElementById("submitButton");
console.log(submitButton);*/

// Sette opp en hendelse lytter som skal LYTTE og SENDE resultat tilbake.
submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Må være med pga. form-element i HTML.
    console.log("Button clicked?");

    // HENTER verdien til et input-element 
    // Metode 1: Bruker .value på selve hentet
    const userName = document.querySelector("#userName").value;
    console.log(userName);

    /*// Metode 2: Lager separert variabel med verdi etter vi henter elementet
    const userName = document.querySelector("#userName");
    const userNameValue = userName.value;*/

    // HENTER tekst-element som skal vise resultatet av input-elementet
    const userGreeting = document.querySelector("#userGreeting");
    console.log(userGreeting);

    // MODIFISERER at vi gir tekst-elementet verdien til input-elementet
    // Metode 1: template litteral
    userGreeting.textContent = `Velkommen, ${userName}!`;

    /*// Metode 2: chaining
    userGreeting.textContent = "Velkommen, " + userName + "!"*/

    // !!Visuelt skille mellom koden over og under.!!

    // HENTER verdien til et input-element 
    const amount = document.querySelector("#amount").value;
    console.log(amount);

    // HENTER verdien til et input-element 
    const optionApple = document.querySelector("#optionApple").value;
    console.log(optionApple);

    // HENTER verdien til et input-element 
    const optionBanana = document.querySelector("#optionBanana").value;
    console.log(optionBanana);

     // HENTER tekst-element som skal vise resultatet av input-elementet
     const viewResults = document.querySelector("#viewResults");
     console.log(viewResults);

     // MODIFISERER at vi gir tekst-elementet verdien til input-elementet
     viewResults.textContent = `Vi har ${amount} ${optionApple} og ${optionBanana}`
});