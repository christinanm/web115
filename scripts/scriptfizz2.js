function fizzBuzz2(e) {
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const middleInitial = document.getElementById("middleinitial").value;

    document.getElementById("greeting").innerText = "Welcome to Cy\'s Computers, " + firstName + " " + middleInitial + " " + lastName + "!";
    e.preventDefault();

    const fizzBuzzList2 = document.getElementById("fizzbuzzlist2");
    let fizzInput = prompt("How high do you want to count, " + firstName + "?");

    document.getElementById("fizzbuzzlist2").innerText = "";

   for (let i = 0; i < fizzInput; i++){
        let newFizzBuzzList2 = document.createElement("li");

        if ((i+1) % 2 === 0) {
          newFizzBuzzList2.textContent = (i+1) + ") Cy\'s Computers - " + "The number is even.";
          fizzBuzzList2.appendChild(newFizzBuzzList2);
        } else {
          newFizzBuzzList2.textContent = (i+1) + ") Cy\'s Computers - " + "The number is odd.";
          fizzBuzzList2.appendChild(newFizzBuzzList2);
        }
   }
}

fizzbutton2.addEventListener("click", fizzBuzz2);