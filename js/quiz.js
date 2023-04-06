const btn = document.querySelector("#counter");

let counter = 0;

btn.addEventListener("click", () => {
  counter += 1;
  btn.textContent = counter;
});
