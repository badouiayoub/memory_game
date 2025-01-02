function setDifficulty(value) {
  localStorage.setItem("difficulty", value);
}
function settype(value) {
  localStorage.setItem("type", value);
}

function getDifficulty() {
  let storedDifficulty = localStorage.getItem("difficulty");
  return storedDifficulty ? parseInt(storedDifficulty) : 4;
}
function gettype() {
  let storedtype = localStorage.getItem("type");
  return storedtype ? parseInt(storedtype) : 0;
}
let colorGrid = [
  ["red", "red", "green", "green", "blue", "blue", "yellow", "yellow"],
  ["orange", "orange", "purple", "purple", "pink", "pink", "brown", "brown"],
  ["cyan", "cyan", "magenta", "magenta", "lime", "lime", "teal", "teal"],
  ["navy", "navy", "maroon", "maroon", "olive", "olive", "gray", "gray"],
  ["black", "black", "white", "white", "gold", "gold", "silver", "silver"],
  ["beige", "beige", "ivory", "ivory", "coral", "coral", "aqua", "aqua"],
  [
    "salmon",
    "salmon",
    "chocolate",
    "chocolate",
    "khaki",
    "khaki",
    "orchid",
    "orchid",
  ],
  [
    "plum",
    "plum",
    "violet",
    "violet",
    "indigo",
    "indigo",
    "turquoise",
    "turquoise",
  ],
];
let numbergrid = [
  ["1", "1", "2", "2", "3", "3", "4", "4"],
  ["5", "5", "6", "6", "7", "7", "8", "8"],
  ["9", "9", "10", "10", "11", "11", "12", "12"],
  ["13", "13", "14", "14", "15", "15", "16", "16"],
  ["17", "17", "18", "18", "19", "19", "20", "20"],
  ["21", "21", "22", "22", "23", "23", "24", "24"],
  ["25", "25", "26", "26", "27", "27", "28", "28"],
  ["29", "29", "30", "30", "31", "31", "32", "32"],
];
let imagegrid = [
  [
    "url('pictures/1.png')",
    "url('pictures/1.png')",
    "url('pictures/2.png')",
    "url('pictures/2.png')",
    "url('pictures/3.png')",
    "url('pictures/3.png')",
    "url('pictures/4.png')",
    "url('pictures/4.png')",
  ],
  [
    "url('pictures/5.png')",
    "url('pictures/5.png')",
    "url('pictures/6.png')",
    "url('pictures/6.png')",
    "url('pictures/7.png')",
    "url('pictures/7.png')",
    "url('pictures/8.png')",
    "url('pictures/8.png')",
  ],
  [
    "url('pictures/9.png')",
    "url('pictures/9.png')",
    "url('pictures/10.png')",
    "url('pictures/10.png')",
    "url('pictures/11.png')",
    "url('pictures/11.png')",
    "url('pictures/12.png')",
    "url('pictures/12.png')",
  ],
  [
    "url('pictures/13.png')",
    "url('pictures/13.png')",
    "url('pictures/14.png')",
    "url('pictures/14.png')",
    "url('pictures/15.png')",
    "url('pictures/15.png')",
    "url('pictures/16.png')",
    "url('pictures/16.png')",
  ],
  [
    "url('pictures/17.png')",
    "url('pictures/17.png')",
    "url('pictures/18.png')",
    "url('pictures/18.png')",
    "url('pictures/19.png')",
    "url('pictures/19.png')",
    "url('pictures/20.png')",
    "url('pictures/20.png')",
  ],
  [
    "url('pictures/21.png')",
    "url('pictures/21.png')",
    "url('pictures/22.png')",
    "url('pictures/22.png')",
    "url('pictures/23.png')",
    "url('pictures/23.png')",
    "url('pictures/24.png')",
    "url('pictures/24.png')",
  ],
  [
    "url('pictures/25.png')",
    "url('pictures/25.png')",
    "url('pictures/26.png')",
    "url('pictures/26.png')",
    "url('pictures/27.png')",
    "url('pictures/27.png')",
    "url('pictures/28.png')",
    "url('pictures/28.png')",
  ],
  [
    "url('pictures/29.png')",
    "url('pictures/29.png')",
    "url('pictures/30.png')",
    "url('pictures/30.png')",
    "url('pictures/31.png')",
    "url('pictures/31.png')",
    "url('pictures/32.png')",
    "url('pictures/32.png')",
  ],
];
let image = [];
let number = [];
let color = [];
let btn = [];

window.onload = function () {
  var difficulty = getDifficulty();
  var type = gettype();
  var gamepageaudio = new Audio(
    "podcast-smooth-jazz-instrumental-music-225674.mp3"
  );

  var audiobutton = $("#musicchange");

  audiobutton.on("change", function () {
    playstopmusic(this, gamepageaudio);
  });

  if (document.title == "Memory game") {
    var settingsbutton = document.getElementById("settingsbutton");
    settingsbutton.onclick = gotosettings;
    var startbutton = document.getElementById("startbutton");
    startbutton.onclick = gotogame;
  }
  if (document.title == "Settings") {
    var level = document.getElementById("difficultySelect");
    var mode = document.getElementById("themeselect");
    var hidesettingsbutton = document.getElementById("Hidesettings");
    var startgame = document.getElementById("startgame");
    startgame.onclick = gotogamefromsetting;
    hidesettingsbutton.onclick = gotomain;
    if (difficulty == 4) {
      level.selectedIndex = 0;
    } else if (difficulty == 6) {
      level.selectedIndex = 1;
    } else {
      level.selectedIndex = 2;
    }
    if (type == 0) {
      mode.selectedIndex = 0;
    } else if (type == 1) {
      mode.selectedIndex = 1;
    } else {
      mode.selectedIndex = 2;
    }
  }
  if (document.title == "Play Game") {
    if (gettype() == 0) {
      for (let i = 0; i < difficulty; i++) {
        color[i] = [];
        for (let j = 0; j < difficulty; j++) {
          color[i][j] = colorGrid[i][j];
        }
      }
      shiftcolor();
    } else if (gettype() == 1) {
      for (let i = 0; i < difficulty; i++) {
        number[i] = [];
        for (let j = 0; j < difficulty; j++) {
          number[i][j] = numbergrid[i][j];
        }
      }
      shiftnumber();
    } else {
      for (let i = 0; i < difficulty; i++) {
        image[i] = [];
        for (let j = 0; j < difficulty; j++) {
          image[i][j] = imagegrid[i][j];
        }
      }

      shiftimage();
    }
    displayColors();
    var i = -1;
    let t = setInterval(function () {
      if (i >= 0 && i < getDifficulty()) {
        for (let j = 0; j < getDifficulty(); j++) {
          document.getElementById(i + " " + j).classList.add("fadeout");
        }
      }
      i++;
      if (i == getDifficulty()) {
        clearInterval(t);
      }
    }, 500);

    setTimeout(function () {
      var k = 0;
      let t = setInterval(function () {
        if (k >= 0 && k < getDifficulty()) {
          for (let h = 0; h < getDifficulty(); h++) {
            document.getElementById(k + " " + h).classList.remove("fadeout");
          }
        }
        k++;
        if (k == getDifficulty()) {
          clearInterval(t);
        }
      }, 500);
    }, 2000);
    setTimeout(function () {
      addButton();
    }, 2001);
  }
};

function oninterval() {
  if (gettype() == 0) {
    if (btn[0] != null && btn[1] == null) {
      document.getElementById(btn[0]).style.backgroundColor = "";
      btn[0] = null;
    }
    if (btn[0] != null && btn[1] != null) {
      let firstButton = document.getElementById(btn[0]);
      let secondButton = document.getElementById(btn[1]);

      if (
        firstButton.style.backgroundColor !== secondButton.style.backgroundColor
      ) {
        firstButton.style.backgroundColor = "";
        secondButton.style.backgroundColor = "";
      }

      btn[0] = null;
      btn[1] = null;
    }
  } else if (gettype() == 1) {
    if (btn[0] != null && btn[1] == null) {
      document.getElementById(btn[0]).innerHTML = "";
      btn[0] = null;
    }
    if (btn[0] != null && btn[1] != null) {
      let firstButton = document.getElementById(btn[0]);
      let secondButton = document.getElementById(btn[1]);

      if (firstButton.innerHTML !== secondButton.innerHTML) {
        firstButton.innerHTML = "";
        secondButton.innerHTML = "";
      }

      btn[0] = null;
      btn[1] = null;
    }
  } else {
    if (btn[0] != null && btn[1] == null) {
      document.getElementById(btn[0]).style.backgroundImage = "";
      btn[0] = null;
    }
    if (btn[0] != null && btn[1] != null) {
      let firstButton = document.getElementById(btn[0]);
      let secondButton = document.getElementById(btn[1]);

      if (
        firstButton.style.backgroundImage !== secondButton.style.backgroundImage
      ) {
        firstButton.style.backgroundImage = "";
        secondButton.style.backgroundImage = "";
      }

      btn[0] = null;
      btn[1] = null;
    }
  }

  clearInterval(timer);
}

function checkwin() {
  if (document.getElementById("timer").innerHTML == "00:00") {
    return false;
  }
  if (gettype() == 0) {
    for (let i = 0; i < getDifficulty(); i++) {
      for (let j = 0; j < getDifficulty(); j++) {
        let bt = document.getElementById(i + " " + j);
        if (bt.style.backgroundColor == "") {
          return false;
        }
      }
    }
  } else if (gettype() == 1) {
    for (let i = 0; i < getDifficulty(); i++) {
      for (let j = 0; j < getDifficulty(); j++) {
        let bt = document.getElementById(i + " " + j);
        if (bt.innerHTML == "") {
          return false;
        }
      }
    }
  } else {
    for (let i = 0; i < getDifficulty(); i++) {
      for (let j = 0; j < getDifficulty(); j++) {
        let bt = document.getElementById(i + " " + j);
        if (bt.style.backgroundImage == "") {
          return false;
        }
      }
    }
  }
  return true;
}
function shiftimage() {
  for (let i = 0; i < 100; i++) {
    let n1 = Math.floor(Math.random() * getDifficulty());
    let n2 = Math.floor(Math.random() * getDifficulty());
    let n3 = Math.floor(Math.random() * getDifficulty());
    let n4 = Math.floor(Math.random() * getDifficulty());
    let temp = image[n1][n2];
    image[n1][n2] = image[n3][n4];
    image[n3][n4] = temp;
  }
}
function shiftcolor() {
  for (let i = 0; i < 100; i++) {
    let n1 = Math.floor(Math.random() * getDifficulty());
    let n2 = Math.floor(Math.random() * getDifficulty());
    let n3 = Math.floor(Math.random() * getDifficulty());
    let n4 = Math.floor(Math.random() * getDifficulty());
    let temp = color[n1][n2];
    color[n1][n2] = color[n3][n4];
    color[n3][n4] = temp;
  }
}
function shiftnumber() {
  for (let i = 0; i < 100; i++) {
    let n1 = Math.floor(Math.random() * getDifficulty());
    let n2 = Math.floor(Math.random() * getDifficulty());
    let n3 = Math.floor(Math.random() * getDifficulty());
    let n4 = Math.floor(Math.random() * getDifficulty());
    let temp = number[n1][n2];
    number[n1][n2] = number[n3][n4];
    number[n3][n4] = temp;
  }
}
function gotogamefromsetting() {
  var gamelevel = document.getElementById("difficultySelect");
  var gamemode = document.getElementById("themeselect");
  if (gamelevel.value == "Easy") {
    setDifficulty(4);
  } else if (gamelevel.value == "Medium") {
    setDifficulty(6);
  } else {
    setDifficulty(8);
  }
  if (gamemode.value == "Colors") {
    settype(0);
  } else if (gamemode.value == "Icons") {
    settype(1);
  } else {
    settype(2);
  }
  window.location.href = "playgame.html";
}
function gotogame() {
  window.location.href = "playgame.html";
}
function addButton() {
  var difficulty = getDifficulty();

  var i = 0;
  let t = setInterval(function () {
    for (let j = 0; j < difficulty; j++) {
      if (i == difficulty - 1) {
        setTimer();
      }
      var bttn = document.getElementById(i + " " + j);
      if (gettype() == 0) {
        bttn.style.backgroundColor = "";
      } else if (gettype() == 1) {
        bttn.innerHTML = "";
      } else {
        bttn.style.backgroundImage = "";
      }
    }
    i++;
    if (i == difficulty) {
      clearInterval(t);
      for (let k = 0; k < difficulty; k++) {
        for (let h = 0; h < difficulty; h++) {
          var but = document.getElementById(k + " " + h);
          but.onclick = function () {
            if (btn[1] == null) {
              let index = this.id.split(" ").map(Number);
              if (gettype() == 0) {
                this.style.backgroundColor = color[index[0]][index[1]];
              } else if (gettype() == 1) {
                this.innerHTML = number[index[0]][index[1]];
              } else {
                this.style.backgroundImage = image[index[0]][index[1]];
              }
              if (btn[0] == null) {
                btn[0] = this.id;
                timer = setInterval(oninterval, 2000);
              } else {
                if (this.id != btn[0]) {
                  btn[1] = this.id;
                  var first = document.getElementById(btn[0]);
                  var second = document.getElementById(btn[1]);
                  if (gettype() == 0) {
                    if (
                      first.style.backgroundColor ==
                      second.style.backgroundColor
                    ) {
                      first.onclick = null;
                      second.onclick = null;
                      clearInterval(timer);
                      btn[0] = null;
                      btn[1] = null;
                      if (checkwin() == true) {
                        showMessage("You win!");
                        setTimeout(function () {
                          window.location.href = "index.html";
                        }, 3000);
                      }
                    }
                  } else if (gettype() == 1) {
                    if (first.innerHTML == second.innerHTML) {
                      first.onclick = null;
                      second.onclick = null;
                      clearInterval(timer);
                      btn[0] = null;
                      btn[1] = null;
                      if (checkwin() == true) {
                        showMessage("You win!");
                        setTimeout(function () {
                          window.location.href = "index.html";
                        }, 3000);
                      }
                    }
                  } else {
                    if (
                      first.style.backgroundImage ==
                      second.style.backgroundImage
                    ) {
                      first.onclick = null;
                      second.onclick = null;
                      clearInterval(timer);
                      btn[0] = null;
                      btn[1] = null;
                      if (checkwin() == true) {
                        showMessage("You win!");
                        setTimeout(function () {
                          window.location.href = "index.html";
                        }, 3000);
                      }
                    }
                  }
                }
              }
            }
          };
        }
      }
    }
  }, 500);
}

function gotosettings() {
  window.location.href = "settings.html";
}
function gotomain() {
  var gamelevel = document.getElementById("difficultySelect");
  var gamemode = document.getElementById("themeselect");
  if (gamelevel.value == "Easy") {
    setDifficulty(4);
  } else if (gamelevel.value == "Medium") {
    setDifficulty(6);
  } else {
    setDifficulty(8);
  }
  if (gamemode.value == "Colors") {
    settype(0);
  } else if (gamemode.value == "Icons") {
    settype(1);
  } else {
    settype(2);
  }

  window.location.href = "index.html";
}

function playstopmusic(checkbox, audio) {
  if (checkbox.checked) {
    audio.pause();
  } else {
    audio.play();
    audio.loop = true;
  }
}

$(document).ready(function () {
  var buttonpressaudio = new Audio("card-sounds-35956.mp3");
  $(".button4, .button6, .button8").on("click", function () {
    $(this).toggleClass("flipped");
    buttonpressaudio.play();
  });
});
function showMessage(message) {
  var messageContainer = document.getElementById("customMessage");
  messageContainer.innerHTML = message;
  messageContainer.style.display = "flex";
}

let timerElement = document.getElementById("timer");

function setTimer() {
  let totalSeconds = 240;

  let intervalId = setInterval(() => {
    totalSeconds--;

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerElement.textContent = `${minutes}:${seconds}`;

    if (totalSeconds === 0) {
      var looseaudio = new Audio("negative_beeps-6008.mp3");
      looseaudio.play();
      clearInterval(intervalId);
      showMessage("Your Time is Up!");
      setTimeout(function () {
        window.location.href = "index.html";
      }, 3000);
    }

    if (checkwin() == true) {
      var winaudio = new Audio("mixkit-video-game-win-2016.wav");
      winaudio.play();
      showMessage("You win!");
      clearInterval(intervalId);
      setTimeout(function () {
        window.location.href = "index.html";
      }, 3000);
    }
  }, 1000);
}

function displayColors() {
  var difficulty = getDifficulty();
  var container = document.getElementById("buttoncontainer");

  if (!container) {
    console.warn("Button container not found!");
    return;
  }

  container.className = "buttoncontainer" + difficulty;

  for (let i = 0; i < difficulty; i++) {
    for (let j = 0; j < difficulty; j++) {
      var button = document.createElement("button");
      button.id = +i + " " + j;
      button.className = "button" + difficulty;
      button.innerHTML = "";
      if (gettype() == 0) {
        button.style.backgroundColor = color[i][j];
      } else if (gettype() == 1) {
        button.innerHTML = number[i][j];
      } else {
        button.style.backgroundImage = image[i][j];
      }

      button.className = `button${difficulty}`;
      container.appendChild(button);
    }
  }
}
