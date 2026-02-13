const slides=[
{t:"Hey Yuktha 💖",c:"This is a very small gift maa...\nPlease don’t feel bad.\nBecause we are long distance."},
{t:"From Rahul",c:"I want to tell you something...\nClick continue to know."},

{t:"Rose Day 🌹",c:"Feb 7\nMy love blooms for you every day."},
{t:"Propose Day 💍",c:"Feb 8\nEvery love story is special but ours is my favorite."},
{t:"Chocolate Day 🍫",c:"Feb 9\nLife with you is sweeter than chocolate."},
{t:"Promise Day 🤞",c:"Feb 11\nI promise I will always stand with you."},
{t:"Hug Day 🤍",c:"Feb 12\nIf hugs could speak they’d say stay forever."},
{t:"Kiss Day 💋",c:"Feb 13\nOne kiss from you heals my world."},

{t:"Valentine’s Day ❤️",c:"Feb 14\nMy heart belongs to you forever.\nI love you endlessly."},

{t:"My Truth",c:"Sometimes I hurt you\nBut I can't live without you.\nYou are my world."},

{t:"My Dear Yuktha",c:"Thank you for coming into my life.\nYou made it beautiful.\nI am lucky to have you."},

{t:"Our Memories ❤️",c:""},

{t:"Forever Us 💖",c:"Happy Valentine’s Day ❤️\nI love you forever.\n— Rahul ❤️"}
];

let index=0;
let typingInterval;
let slideInterval;
let heartInterval;
let imgIndex=1;

function typeText(text){
const el=document.getElementById("text");
let i=0;
el.innerHTML="";
clearInterval(typingInterval);

typingInterval=setInterval(()=>{
el.innerHTML+=text[i]==="\n"?"<br>":text[i];
i++;
if(i>=text.length) clearInterval(typingInterval);
},40);
}

function showSlide(){
if(index>=slides.length)return;
const s=slides[index];

if(s.t==="Our Memories ❤️"){
document.getElementById("screen").innerHTML=`
<div class="card">
<h1>Our Memories ❤️</h1>
<div class="slideshow">
<img id="slideImg" src="images/pic1.jpg">
</div>
<button onclick="next()">Continue ❤️</button>
</div>`;
startSlideshow();
return;
}

if(s.t==="Forever Us 💖"){
document.getElementById("screen").innerHTML=`
<div class="card">
<div class="photo-row">
<img src="images/her.jpg" class="final-pic">
<img src="images/me.jpg" class="final-pic">
</div>
<h1>Happy Valentine’s Day ❤️</h1>
<p id="text"></p>
</div>`;
typeText(s.c);
clearInterval(heartInterval);
heartInterval=setInterval(createHeart,350);
return;
}

document.getElementById("screen").innerHTML=`
<div class="card">
<h1>${s.t}</h1>
<p id="text"></p>
<button onclick="next()">Continue ❤️</button>
</div>`;
typeText(s.c);
}

function startSlideshow(){
clearInterval(slideInterval);
const img=document.getElementById("slideImg");
slideInterval=setInterval(()=>{
imgIndex++;
if(imgIndex>4) imgIndex=1;
img.src=`images/pic${imgIndex}.jpg`;
},3000);
}

function createHeart(){
const h=document.createElement("div");
h.className="heart";
h.innerHTML="❤️";
h.style.left=Math.random()*100+"vw";
h.style.fontSize=(15+Math.random()*25)+"px";
document.body.appendChild(h);
setTimeout(()=>h.remove(),7000);
}

function next(){
clearInterval(typingInterval);
const music=document.getElementById("bgm");
if(music.paused) music.play().catch(()=>{});
index++;
showSlide();
}

showSlide();
