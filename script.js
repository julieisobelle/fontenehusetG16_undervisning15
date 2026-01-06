const submitButton = document.querySelector("#submitButton");
console.log(submitButton);

submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Må være med pga. form-element i HTML.
    console.log("Button clicked?");

    // Metode 1:
    const userName = document.querySelector("#userName").value;
    console.log(userName);

    /*// Metode 2:
    const userName = document.querySelector("#userName");
    const userNameValue = userName.value;*/
});