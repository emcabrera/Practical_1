const name = document.getElementById("name");
const age = document.getElementById("age");
const ticket = document.getElementById("ticket");

document.getElementById("ticket").addEventListener("click", ()=> {
        if(age >= 3) {
            result.innerHTML = "Your ticket is free!";

        } else if (age >= 12) {
            result.innerHTML = "Your ticket costs $10";
        } else {
            if (age >= 64) {
                result.innerHTML = "Your ticket costs $20";
            }else if (age < 65) {
                result.innerHTML = "Your ticket costs $12";
            }
        }
})

