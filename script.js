const bgm = document.getElementById("bgm");
bgm.volume = 0.5;
bgm.play().catch(()=>{});

const title = document.getElementById("title");
const text = document.getElementById("text");
const photo = document.getElementById("photo");

const screens = [
  {t:"For Yuktha ❤️", c:"This is a very small surprise.\nPlease adjust… because we are in long distance."},
  {t:"From Rahul", c:"I just wanted to say something…"},
  {t:"Rose Day 🌹", c:"Feb 7 — I am giving you a rose.\nPlease take it with my heart."},
  {t:"Propose Day 💍", c:"Feb 8 — I choose you."},
  {t:"Chocolate Day 🍫", c:"Feb 9 — Sweet like your smile."},
  {t:"Promise Day 🤞", c:"Feb 11 — I promise to stand with you."},
  {t:"Hug Day 🤍", c:"Feb 12 — A warm hug from far away."},
  {t:"Kiss Day 💋", c:"Feb 13 — Missing you deeply."},
  {t:"Valentine’s Day ❤️", c:"Feb 14 — My heart belongs to you."},
  {t:"My Truth", c:"Sometimes I may hurt you,\nbut I can’t live without you.\n\nJagavaa marethe\nNinnaa berethe...\nHosadondhu looo..ka nodidhe"},
  {t:"My Question", c:"How did I change your life?\nHow do you feel about me?"},
  {t:"My Wish", c:"This is my first Valentine’s Day after a long gap.\nWill you be my Valentine?\nWill you marry me? ❤️"}
];

let i = 0;

function nextScreen(){
  if(i < screens.length){
    title.innerText = screens[i].t;
    text.innerText = screens[i].c;
    i++;
    setTimeout(nextScreen, 6000);
  } else {
    startSlideshow();
  }
}

function startSlideshow(){
  title.innerText = "Our Memories ❤️";
  text.innerText = "Every picture holds a heartbeat.";
  photo.style.display = "block";

  const images = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg"
  ];

  let p = 0;
  photo.src = images[p];

  setInterval(()=>{
    p = (p+1)%images.length;
    photo.src = images[p];
  }, 5000);
}

// floating hearts
setInterval(()=>{
  const h = document.createElement("span");
  h.innerHTML = "❤️";
  h.style.left = Math.random()*100+"vw";
  h.style.animationDuration = (6+Math.random()*4)+"s";
  document.querySelector(".hearts").appendChild(h);
  setTimeout(()=>h.remove(),10000);
},500);

document.getElementById("startBtn").onclick = () => {
  document.getElementById("startBtn").style.display = "none";
  bgm.play().catch(()=>{});
  nextScreen();
};
