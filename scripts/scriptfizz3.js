function fizzBuzz2(e) {
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const middleInitial = document.getElementById("middleinitial").value;

    document.getElementById("greeting").innerText = "Welcome to Cy\'s Computers, " + firstName + " " + middleInitial + " " + lastName + "!";
    e.preventDefault();

    const fizzBuzzList2 = document.getElementById("fizzbuzzlist2");
    document.getElementById("fizzbuzzlist2").innerText = "";

   for (let i = 0; i < 140; i++){
        let newFizzBuzzList2 = document.createElement("li");
        if ((i+1) % 5 === 0 && (i+1) % 3 === 0) { //checks to see if counter is divisible by 3 AND 5
            newFizzBuzzList2.textContent = (i+1) + ") Connection interupted... " + "Error, retrying...";
          fizzBuzzList2.appendChild(newFizzBuzzList2);
        } else if ((i+1) % 3 === 0) { //checks to see if counter is divisible by 3 
          newFizzBuzzList2.textContent = (i+1) + ") Error, retrying...";
          fizzBuzzList2.appendChild(newFizzBuzzList2);
        } else if ((i+1) % 5 === 0) { //checks to see if counter is divisible by 5
            newFizzBuzzList2.textContent = (i+1) + ") Connection interupted...";
          fizzBuzzList2.appendChild(newFizzBuzzList2);
        }     else  { //if none match, this will be the generic output
          newFizzBuzzList2.textContent = (i+1) + ") Computing...";
          fizzBuzzList2.appendChild(newFizzBuzzList2);
        }
   }
}

fizzbutton2.addEventListener("click", fizzBuzz2);