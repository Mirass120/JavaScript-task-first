const btn = document.getElementById("opcja_1");

let counter = 0;
let i = 0;

btn.addEventListener("click", () => {
  if (i < 10) {
    if (btn.textContent === "Nick") {
      //console.log(btn.textContent)
      i += 1;
      counter += 1;
      console.log("próba nr ", i, counter);
      return i, counter;
    } else {
      i += 1;
      counter += 0;
      //console.log(i, counter)
    }
  } else {
    let Result = [localStorage.getItem("Nazwa gracza"), counter];
    console.log(Result);
    return Result;
  }
});

function hejka() {
  return console.log("siema eniu");
}

let score = 0;
function nowa(text) {
  console.log(text);
  if (text === "Jack") {
    score += 1;
    console.log("score" + score);
    hejka();
  }
}

let btn1 = document.getElementById("opcja_1");
btn1.addEventListener("click", function getButtonId(text, id) {
  console.log(id);
  if (text === "Nick") {
    console.log("btn1 działa");
  } else {
    console.log("something is no yes");
  }
});

/*
 function getButtonId(text, id) {
  console.log(id)
  if(text === "Nick"){
    console.log("great")
  };
  
};
*/
//Timer
var interval;

function countdown() {
  clearInterval(interval);
  var timer = document.querySelector(".zegar");
  var time = timer.innerHTML.split(":");
  var minutes = parseInt(time[0], 10);
  var seconds = parseInt(time[1], 10);
  interval = setInterval(function () {
    if (seconds > 0) {
      seconds--;
    } else {
      if (minutes == 0) {
        clearInterval(interval);
        score += 0;
        timer.innerHTML = "0:00";
        return;
      } else {
        minutes--;
        seconds = 59;
      }
    }
    timer.innerHTML = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
  }, 1000);
}
