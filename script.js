let number = document.getElementById("number");
let a = 0;
setInterval(() => {
          if (a == 85) {
                    clearInterval()
          }
          else{a += 1;
                    number.innerHTML = a + "%";}

},23);