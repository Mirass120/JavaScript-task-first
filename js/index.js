let imgName = "Kliknij aby rozpocząć";
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
}

let interval;

async function Characters(text) {
  if (text.trim() == answerName.trim()) {
    score += 1;
  }

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
  } catch (error) {
    console.log(error);
  }

  //Timer
  clearInterval(interval);
  interval = setInterval(function () {
    let timer = document.querySelector(".zegar").innerHTML;
    timer = timer.split(":");
    let minutes = timer[0];
    let seconds = timer[1];
    seconds -= 1;
    if (minutes < 0) return;
    else if (seconds < 0 && minutes != 0) {
      minutes -= 1;
      seconds = 30;
    } else if (seconds < 10 && length.seconds != 2) seconds = "0" + seconds;
    document.querySelector(".zegar").innerHTML = `${minutes}:${seconds}`;

    if (minutes == 0 && seconds == 0) {
      const existingRanking = localStorage.getItem("Ranking"); // Pobranie rankingu
      const RankingScore = existingRanking ? JSON.parse(existingRanking) : []; // Jeśli nie istnieje, utwórz nową pustą tablicę
      // Dodanie nowego wyniku gracza do tablicy
      const playerResult = {
        name: localStorage.getItem("Nazwa gracza"),
        score: score,
      };
      RankingScore.push(playerResult);

      // Zapisanie zaktualizowanej tablicy wyników w localStorage
      localStorage.setItem("Ranking", JSON.stringify(RankingScore));
      localStorage.setItem("Wynik", score);

      window.location.href = "Result.html";
    }
  }, 1000);
}

function Exit() {
  location.href = "Index.html";
}
