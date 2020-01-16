/*************
 * HOLIDAY Ex 2
 */

var oracles = [
  "C'est possible, mais n'espérez pas trop. Prenez un Orval pour oublier !",
  "Pour sûr ! Fêtons ça autour d'un Orval.",
  "Buvez un Orval, la réponse est dans la mousse.",
  "Pas pour l'instant, allez vous balader en Gaume pour passer le temps !",
  "Impossible, buvez un Orval pour vous consoler.",
  "La réponse se trouve dans le gratiné de l'Orvaliflette.",
  "Affirmatif, file un Orval à ton voisin pour fêter ça !",
  "Sorry pas de réponse disponible, trop d'Orval tue l'OrVal, réessayez demain."
];

var button = document.getElementById("btn");
var main = document.getElementById("main");
var div = document.createElement("div");
var bowl = document.getElementById("bowl");
var number = document.getElementById("big-number");
var form = document.getElementById("form");
var answer = "";

function randomNum(max) {
  var randValue = Math.floor(Math.random() * Math.floor(max));
  return randValue;
}

var question = document.getElementById("question");
question.focus();

button.addEventListener("click", function() {
  if(question.value === ""){
    if(form.contains(document.getElementById('error-msg'))) {
      form.removeChild(p1);
    } else {

    }
    var p1 = document.createElement("p");
    form.appendChild(p1);
    p1.id = "error-msg";
    p1.innerText = "Entrez une question, svp!";
  } else if(bowl.contains(document.getElementById('answer'))) {
      if(form.contains(document.getElementById('error-msg'))) {
        form.removeChild(p1);
      }
      question.value = "";
      div.removeChild(answer);
      bowl.removeChild(div);
      bowl.appendChild(number);    
  } else {
    if(form.contains(document.getElementById('error-msg'))) {
      form.removeChild(p1);
    }
    answer.value = "";
    var divination = document.createTextNode("divination en cours...");
    var random = randomNum(oracles.length);
    var p2 = document.createElement("p");
    answer = document.createTextNode(oracles[random]);
    question.blur();
    main.appendChild(p2);
    p2.appendChild(divination);
    setTimeout(function() {
      p2.removeChild(divination);
      main.removeChild(p2);
      bowl.removeChild(number);
      bowl.appendChild(div);
      div.appendChild(answer);
      div.id = "answer";
    }, 3000);
  }
});

question.addEventListener("click", function(){
  if(bowl.contains(document.getElementById('answer'))) {
      if(form.contains(document.getElementById('error-msg'))) {
        form.removeChild(p1);
      }
      question.value = "";
      div.removeChild(answer); 
      bowl.removeChild(div);
      bowl.appendChild(number); 
  }
});



