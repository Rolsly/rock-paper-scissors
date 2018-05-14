let playscore = 0;
let compscore = 0;
let RPS = ["Rock", "Paper", "Scissors"];
document.getElementById("playerscore").innerHTML = playscore;
document.getElementById("compscore").innerHTML = compscore;

function R() {
    let rand = RPS[Math.floor(Math.random() * RPS.length)];
    let rock = true;
    if (rand == "Rock"){
      document.getElementById("demo").innerHTML = "Rock vs. Rock";
    } else if (rand == "Paper"){
      document.getElementById("demo").innerHTML = "Rock vs. Paper";
      compscore += 1;
      document.getElementById("compscore").innerHTML = compscore;
    } else {
      document.getElementById("demo").innerHTML = "Rock vs. Scissors";
      playscore += 1;
      document.getElementById("playerscore").innerHTML = playscore;
    }
  }

function P() {
  let rand = RPS[Math.floor(Math.random() * RPS.length)];
  let paper = true;
  if (rand == "Rock"){
    document.getElementById("demo").innerHTML = "Paper vs. Rock";
    playscore += 1;
    document.getElementById("playerscore").innerHTML = playscore;
  } else if (rand == "Paper"){
    document.getElementById("demo").innerHTML = "Paper vs. Paper";
  } else {
    document.getElementById("demo").innerHTML = "Paper vs. Scissors";
    compscore += 1;
    document.getElementById("compscore").innerHTML = compscore;
}
}

function S() {
    let rand = RPS[Math.floor(Math.random() * RPS.length)];
    let scissors = true;
    if (rand == "Rock"){
      document.getElementById("demo").innerHTML = "Scissors vs. Rock";
      compscore += 1;
      document.getElementById("compscore").innerHTML = compscore;
    } else if (rand == "Paper"){
      document.getElementById("demo").innerHTML = "Scissors vs. Paper";
      playscore += 1;
      document.getElementById("playerscore").innerHTML = playscore;
    } else {
      document.getElementById("demo").innerHTML = "Scissors vs. Scissors";
  }
}

if (playscore == 5){
  document.getElementById("message").innerHTML = "You win!!";
  
}
