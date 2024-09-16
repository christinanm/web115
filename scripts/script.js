function fizzBuzz(e) {
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const middleInitial = document.getElementById("middleinitial").value;

    document.getElementById("greeting").innerText = "Welcome to Cy\'s Computers, " + firstName + " " + middleInitial + " " + lastName + "!";
    e.preventDefault();
    
    const fizzBuzzList = document.getElementById("fizzbuzzlist");

   for (let i = 1; i < 126; i++){
        let newFizzBuzzList = document.createElement("li");
        newFizzBuzzList.textContent = i + ") Cy\'s Computers";
        fizzBuzzList.appendChild(newFizzBuzzList);
   }
}

fizzbutton.addEventListener("click", fizzBuzz);
