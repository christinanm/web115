function fizzBuzz2(e) {
    const firstName = document.getElementById("firstname").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    let middleInitial = document.getElementById("middleinitial").value.trim();

    if (middleInitial && !middleInitial.endsWith(".")) {
        middleInitial += ".";
    }

    if (!firstName || !lastName ){
      alert("Please enter your first and last name.");
      return;
    }
      

    document.getElementById("greeting").innerText = "Welcome to Cy\'s Computers, " + firstName + " " + middleInitial + " " + lastName + "!";
    e.preventDefault();


    const fizzBuzzList2 = document.getElementById("fizzbuzzlist2");
    document.getElementById("fizzbuzzlist2").innerText = "";

  function checkDivision (numberA, numberB) { //this function checks if the number can be divisible by certain numbers
    if (numberA % numberB === 0) {
    return true;
  }
}

  for (let i = 0; i < 140; i++) {
    let newFizzBuzzList2 = document.createElement("li");
    let textContent = ""; //initializes textContent to add results of each check

    if (checkDivision((i+1), firstDivisor)) { //checks to see if counter is divisible by firstDivisor (3)
        textContent += "Error, retrying... "; 
    }
    if (checkDivision((i+1), secondDivisor)) { //checks to see if counter is divisible by secondDivisor (5)
        textContent += "Connection interrupted... ";
    }
    if (!checkDivision((i + 1), firstDivisor) && !checkDivision((i + 1), secondDivisor)) {
        textContent += "Computing..."; //if none match, this will be the generic output
    }

    newFizzBuzzList2.textContent = textContent;
    fizzBuzzList2.appendChild(newFizzBuzzList2);
}

}

fizzbutton2.addEventListener("click", fizzBuzz2);


