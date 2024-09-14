function fizzBuzz(e) {
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const middleInitial = document.getElementById("middleinitial").value;

    document.getElementById("greeting").innerText = "Welcome to Cy\'s Computers, " + firstName + " " + middleInitial + " " + lastName + "!";
    e.preventDefault();
}

fizzbutton.addEventListener("click", fizzBuzz);