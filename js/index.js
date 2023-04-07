console.log("home page");

let x = '';

function validateForm() {
    let input = document.getElementById("myText").value;
    if (input === "" || input === "Nazwa gracza") {
      alert("Name must be filled out");
      return false; //zwraca false aby uniemozliwic wysłanie formularza
    } else {
        x = input;
        location.href ="Loading.html";
        localStorage.setItem("Nazwa gracza",x);
        return x;
    };    
  };


  

