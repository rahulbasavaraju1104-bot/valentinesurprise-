const bgm = document.getElementById("bgm");
const title = document.getElementById("title");
const text = document.getElementById("text");
const photo = document.getElementById("photo");
const startBtn = document.getElementById("startBtn");

photo.style.display = "none";

const screens = [
  { t:"For Yuktha ❤️", c:"This is a very small surprise.\nPlease don’t feel bad…\nBecause we are in long distance." },
  { t:"From Rahul", c:"I want to tell you something…" },
  { t:"Rose Day 🌹", c:"Feb 7 — Happy Rose Day Kandaa. \nI am giving you a rose.\nPlease take it with my heart." },
  { t:"Propose Day 💍", c:"Feb 8 — My Hearts Wants You and I need you Because you are my happiness and you make me more happy and i am very lucky to have you in my life.\n I Love You.\nI choose you." },
  { t:"Chocolate Day 🍫", c:"Feb 9 — Take Chocolate your cute smile makes my day very happy and chocolate s Sweet like your smile." },
  { t:"Promise Day 🤞", c:"Feb 11 — I promise that to i don't want anything except you. i need you that's it. your are only mine and i am your and evry time ill stand with you." },
  { t:"Hug Day 🤍", c:"Feb 12 — A warm hug from far away." },
  { t:"Kiss Day 💋", c:"Feb 13 — Missing you deeply." },
  { t:"Valentine’s Day ❤️", c:"Feb 14 — My heart always belongs to you." },
  { t:"My Truth", c:"Sometimes I may hurt you,\nbut I can’t live without you.\n\nJagavaa marethe\nNinnaa berethe...\nHosadondhu looo..ka nodidhe" },
  { t:"My Question", c:"How did I change your life?\nHow do you feel about me?" },
  { t:"My Wish", c:"Will you be my Valentine?\nWill you marry me? ❤️" }
];

let index = 0;
let started = false;

function showNextScreen(){
  if(index < screens.length){
    title.innerText = screens[index].t;
    text.innerText = screens[index].c;
    index++;
    setTimeout(showNextScreen, 6000);
  } else {
    startSlideshow();
  }
}

function startSlideshow(){
  title.innerText = "Our Memories ❤️";
  text.innerText = "Every picture holds my heartbeat.";
  photo.style.display = "block";

  const images = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg"
  ];

  let i = 0;
  photo.src = images[i];

  setInterval(() => {
    i = (i + 1) % images.length;
    photo.src = images[i];
  }, 5000);
}

/* 🔒 NOTHING starts automatically */
startBtn.onclick = () => {
  if(started) return;
  started = true;

  startBtn.style.display = "none";
  bgm.volume = 0.5;
  bgm.play().catch(()=>{});

  showNextScreen();
};
