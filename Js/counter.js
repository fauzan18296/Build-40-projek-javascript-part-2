let value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
let count = 0;
console.log(btns);
btns.forEach((btn) => {
  btn.addEventListener("click", (result) => {
    if(result.target.classList.contains("decrease")) {
     count--;
     value.textContent = count;
    } else if(result.target.classList.contains("reset")) {
      count = 0;
      value.textContent = count;
    } else {
      count++;
      value.textContent = count;
    }
    
    count > 0?value.style.color = "lightgreen":count < 0 ? value.style.color = "crimson":value.style.color = "lightgreen";
  })
})