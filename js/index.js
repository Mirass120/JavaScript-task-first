let imgName = "Kliknij aby rozpocząć";
let iteracja = 0;
let score = 0;
let char = "";
let response = null;
let answerName = "";

async function validateForm() {
  const input = document.getElementById("myText").value;
  if (input === "" || input === "Nazwa gracza") {
    alert("Name must be filled out");
    return false; //zwraca false aby uniemozliwic wysłanie formularza
  } else {
    userName = input;
    location.href = "Loading.html";
    localStorage.setItem("Nazwa gracza", userName);
  }

  //randomowe 4 cyfry z puli postaci
  window.onload = async function () {
    let code = [];
    for (let i = 0; i < 4; i++) {
      let randomNumber = Math.floor(Math.random() * 826);
      code.push(randomNumber);
    }

    //strzał do API po 4 postaci
    let link = `https://rickandmortyapi.com/api/character/${code}`;
    try {
      let response = await fetch(link);
      let data = await response.json();

      //przypisanie kazdemu z przycisków imienia postaci i pobranie zdjęcia
      for (let z = 0; z < 4; z++) {
        const letter = ["A", "B", "C", "D"];
        char = {
          name: data[z].name,
          image: data[z].image,
        };
        console.log("gdzie to " + char);
        let imiePostaci = char.name;
        let numerPrzycisku = document.getElementById(`Postać_${letter[z]}`);
        numerPrzycisku.innerText = imiePostaci;
        // console.log(imiePostaci);
      }

      //randomowy numer losujący, które zdjęce zostanie wyświetlone
      let randomImgNum = Math.floor(Math.random() * 4);
      //console.log("randomowy numer " +randomImgNum);

      //Zmiana src zdjęcia i pobranie jego ID
      let imgSrc = document.getElementById("Placeholder");
      imgSrc.src = data[randomImgNum].image;
      let imgAnswer = data[randomImgNum];
      let imgId = imgAnswer.id;
      let imgName = imgAnswer.name;

      console.log("img answer ", imgAnswer);
      console.log("kropka" + imgId);

      console.log(text, imgName);
    } catch (error) {
      console.log(error);
    }
  };
}

var interval;

function countdown() {
  clearInterval(interval);
  interval = setInterval(function () {
    var timer = $(".zegar").html();
    timer = timer.split(":");
    var minutes = timer[0];
    var seconds = timer[1];
    seconds -= 1;
    if (minutes < 0) return;
    else if (seconds < 0 && minutes != 0) {
      minutes -= 0;
      seconds = 30;
    } else if (seconds < 10 && length.seconds != 2) seconds = "0" + seconds;

    $(".zegar").html(minutes + ":" + seconds);

    if (minutes == 0 && seconds == 0) clearInterval(interval);
  }, 1000);
}

/*
$('#js-startTimer').click(function () {
  $('.js-timeout').text("2:00");
  countdown();
});
 
$('#js-resetTimer').click(function () {
  $('.js-timeout').text("2:00");
  clearInterval(interval);
});
*/

async function Characters(text) {
  clearInterval(interval);
  interval;
  let str = text.replace(/\s/g, "");

  console.log("próba ", str, answerName);
  //randomowe 4 cyfry z puli postaci
  let code = [];
  for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * 826);
    code.push(randomNumber);
  }

  //strzał do API po 4 postaci
  let link = `https://rickandmortyapi.com/api/character/${code}`;
  try {
    let response = await fetch(link);
    let data = await response.json();

    //przypisanie kazdemu z przycisków imienia postaci i pobranie zdjęcia
    for (let z = 0; z < 4; z++) {
      let letter = ["A", "B", "C", "D"];
      char = {
        name: data[z].name,
        image: data[z].image,
      };
      console.log(char);
      let imiePostaci = char.name;
      let numerPrzycisku = document.getElementById(`Postać_${letter[z]}`);
      numerPrzycisku.innerText = imiePostaci;
    }

    //randomowy numer losujący, które zdjęce zostanie wyświetlone
    let randomImgNum = Math.floor(Math.random() * 4);
    console.log("randomowy numer " + randomImgNum);

    //Zmiana src zdjęcia i pobranie jego ID
    let imgSrc = document.getElementById(`Placeholder`);
    let imgName1 = imgSrc.name;

    imgSrc.src = data[randomImgNum].image;
    let imgAnswer = data[randomImgNum];
    let imgId = imgAnswer.id;
    let imgName = imgAnswer.name;
    answerName = imgName;

    console.log("kropka ", imgAnswer);
    console.log("img ID " + imgName);
    console.log(text, imgName);
  } catch (error) {
    console.log(error);
  }

  //Timer
  clearInterval(interval);
  interval = setInterval(function () {
    var timer = $(".zegar").html();
    timer = timer.split(":");
    var minutes = timer[0];
    var seconds = timer[1];
    seconds -= 1;
    if (minutes < 0) return;
    else if (seconds < 0 && minutes != 0) {
      minutes -= 0;
      seconds = 30;
    } else if (seconds < 10 && length.seconds != 2) seconds = "0" + seconds;

    $(".zegar").html(minutes + ":" + seconds);

    if (minutes == 0 && seconds == 0) clearInterval(interval);
  }, 1000);
}

/* Funkcja do randomowego generowania 3
for (let z=0; z<4; z++) {
  let letter = ["A","B","C","D"];
  const char = data[z];
  let im = char.name; 
  let zw = document.getElementById(`przycisk_${letter[z]}`);
  zw.innerText = im;
  console.log(character);
}


      console.log(char)
      let im = char.name; 
      let zw = document.getElementById(`przycisk_${letter[z]}`);
      zw.innerText = im;
      console.log(char);



const character = data[0]
    let imie = character.name;
    let zwrot = document.getElementById('przycisk_B');
    zwrot.innerText = imie;
    console.log(character)

/*{
      name: data.name,
      image: data.image
    };



async function Characters(data) {
  const character = data.results[0];
  const name = character.name;
  console.log(name);
}

*/
