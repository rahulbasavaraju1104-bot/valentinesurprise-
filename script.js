let index = 0;

const slides = [
  {
    t: "Yuktha ❤️",
    c: "This is a very small surprise.\nPlease don’t feel bad…\nBecause we are in long distance."
  },
  {
    t: "From Rahul",
    c: "I want to tell you something…"
  },
  {
    t: "Rose Day 🌹",
    c: "Feb 7\nI am giving you a rose.\nPlease take it with my heart."
  },
  {
    t: "Propose Day 💍",
    c: "Feb 8\nI choose you.\nYou are my happiness.\nI am lucky to have you in my life."
  },
  {
    t: "Chocolate Day 🍫",
    c: "Feb 9\nTake this chocolate.\nYour smile is sweeter than this."
  },
  {
    t: "Promise Day 🤞",
    c: "Feb 11\nI promise you one thing.\nI don’t need anything except you."
  },
  {
    t: "Hug Day 🤍",
    c: "Feb 12\nA warm hug from far away."
  },
  {
    t: "Kiss Day 💋",
    c: "Feb 13\nMissing you deeply."
  },
  {
    t: "Valentine’s Day ❤️",
    c: "Feb 14\nMy heart always belongs to you."
  },
  {
    t: "My Truth",
    c: "Sometimes I may hurt you,\nbut I can’t live without you.\n\nJagavaa marethe\nNinnaa berethe...\nHosadondhu looo..ka nodidhe"
  },
  {
    t: "One Last Thing ❤️",
    c: "I made something special for you.\nPlease click continue 💖",
    action: "final"
  }
];

function showSlide() {
  const slide = slides[index];
  const container = document.getElementById("screen");

  container.innerHTML = `
    <h1>${slide.t}</h1>
    <p id="text"></p>
    <button onclick="nextSlide()">Continue</button>
  `;

  typeText(slide.c);
}

function typeText(text) {
  const el = document.getElementById("text");
  el.innerHTML = "";
  let i = 0;

  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 45);
}

function nextSlide() {
  if (slides[index].action === "final") {
    showGrandFinal();
    return;
  }
  index++;
  showSlide();
}

/* ===== GRAND FINAL SCREEN ===== */

function showGrandFinal() {
  const container = document.getElementById("screen");

  container.innerHTML = `
    <div class="final-grand">
      <div id="hearts"></div>

      <div class="names" id="names"></div>

      <div class="photo-heart">
        <img src="images/her.jpg">
        <img src="images/me.jpg">
      </div>

      <div class="final-text" id="finalText"></div>
    </div>
  `;

  startHeartRain();
  animateNames("RAHUL ❤️ YUKTHA");
  typeFinalText();
}

function startHeartRain() {
  const hearts = document.getElementById("hearts");
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = 3 + Math.random() * 3 + "s";
    hearts.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }, 300);
}

function animateNames(text) {
  const el = document.getElementById("names");
  [...text].forEach((ch, i) => {
    const span = document.createElement("span");
    span.textContent = ch;
    span.style.animationDelay = i * 0.15 + "s";
    el.appendChild(span);
  });
}

function typeFinalText() {
  const text =
`Happy Valentine’s Day baby ❤️

This is my first Valentine’s Day
after a long gap…
and it feels special because of YOU.

Don’t feel bad that we can’t meet.
So I made this small world for us.

I am lucky every single day
because you came into my life.

Will you be my Valentine?
Will you marry me? ❤️`;

  let i = 0;
  const el = document.getElementById("finalText");

  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 45);
}

/* START */
showSlide();function typeFinalText() {
  const text = 
`Happy Valentine’s Day baby ❤️

This is my first Valentine’s Day
after a long gap…
and it feels special because of YOU.

Don’t feel bad that we can’t meet.
So I made this small world for us.

Sometimes I may hurt you,
but I can’t live without you.

Jagavaa marethe
Ninnaa berethe…
Hosadondhu looo..ka nodidhe

I am lucky every single day
because you came into my life.

Thank you for reading,
thank you for feeling,
thank you for being mine 💖`;

  let i = 0;
  const el = document.getElementById("finalText");
  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 45);
}
