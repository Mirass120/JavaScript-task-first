

function hejka() {
  return cosnole.log("siema eniu");
};

let score = 0;
function nowa(text) {
  console.log(text)
  if (text === "Jack"){
  score += 1;
  console.log("score" + score);
  hejka();
  };
};

let btn1 = document.getElementById("opcja_1")
btn1.addEventListener('click', function getButtonId(text, id) {
  console.log(id)
  if(text === "Nick") {
    console.log("btn1 działa")
  } else{
    console.log("something is no yes");
  };
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
    interval = setInterval( function() {
        var timer = $('.zegar').html();
        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 0;
            seconds = 30;
        }
        else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
  
        $('.zegar').html(minutes + ':' + seconds);
  
        if (minutes == 0 && seconds == 0) {
          score += 0;

        };
    }, 1000);
  }



