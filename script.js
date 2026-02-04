const slides = [
  { t:"Yuktha ❤️", c:"This is a very small surprise for you.\nPlease don’t feel bad…\nBecause we are in a long-distance relationship." },
  { t:"From Rahul", c:"I want to tell you something…\nSomething that comes from my heart." },
  { t:"Rose Day 🌹", c:"Feb 7\nI am giving you a rose.\nPlease take it with my heart." },
  { t:"Propose Day 💍", c:"Feb 8\nI choose you.\nYou are my happiness.\nI am lucky to have you in my life." },
  { t:"Chocolate Day 🍫", c:"Feb 9\nYour smile is sweeter than chocolate." },
  { t:"Promise Day 🤞", c:"Feb 11\nI promise you one thing.\nI don’t need anything except you." },
  { t:"Hug Day 🤍", c:"Feb 12\nA warm hug from far away." },
  { t:"Kiss Day 💋", c:"Feb 13\nMissing you deeply." },
  { t:"Valentine’s Day ❤️", c:"Feb 14\nMy heart always belongs to you." },
  { t:"One Last Thing ❤️", c:"I made something special for you.\nPlease tap the heart 💖" }
];

let index = 0;
let musicStarted = false;

function showSlide() {
  const s = slides[index];
  document.getElementById("screen").innerHTML = `
    <h1>${s.t}</h1>
    <p id="text"></p>
    <button class="heart-btn" onclick="next()">❤️ Continue</button>
  `;
  typeText(s.c);
}

function typeText(text) {
  const el = document.getElementById("text");
  el.innerHTML = "";
  let i = 0;
  const t = setInterval(() => {
    el.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    if (i >= text.length) clearInterval(t);
  }, 45);
}

function next() {
  if (!musicStarted) {
    document.getElementById("bgm").play();
    musicStarted = true;
  }

  index++;
  if (index >= slides.length) {
    showFinal();
  } else {
    showSlide();
  }
}

function showFinal() {
  document.body.innerHTML = `
    <div class="final">
      <button class="heart-btn" onclick="startFinal()">❤️ Tap My Heart</button>
      <div id="names"></div>
      <div class="photos">
        <img src="images/her.jpg">
        <img src="images/me.jpg">
      </div>
      <p id="finalText"></p>
    </div>
  `;
}

function startFinal() {
  document.querySelector(".heart-btn").remove();
  heartRain();
  glowNames("RAHUL ❤️ YUKTHA");
  finalTyping();
}

function heartRain() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = 3 + Math.random() * 3 + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }, 300);
}

function glowNames(text) {
  const el = document.getElementById("names");
  [...text].forEach((c, i) => {
    const span = document.createElement("span");
    span.textContent = c;
    span.style.animationDelay = i * 0.15 + "s";
    el.appendChild(span);
  });
}

function finalTyping() {
  const text =
`Happy Valentine’s Day baby ❤️

This is my first Valentine’s Day
after a long gap,
and it feels special because of YOU.

Don’t feel bad that we can’t meet.
So I made this small surprise for us.

Will you be my Valentine?
Will you marry me? ❤️

Thank you for being in my life.`;

  const el = document.getElementById("finalText");
  let i = 0;
  const t = setInterval(() => {
    el.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    if (i >= text.length) clearInterval(t);
  }, 45);
}

showSlide();
