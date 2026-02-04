const slides=[
'images/pic1.jpg',
'images/pic2.jpg',
'images/pic3.jpg',
'images/pic4.jpg',
'images/pic5.jpg'
];

let i=0;
const img=document.getElementById('slide');

function slideshow(){
  img.src=slides[0];
  img.classList.add('show');

  setInterval(()=>{
    img.classList.remove('show');
    setTimeout(()=>{
      i=(i+1)%slides.length;
      img.src=slides[i];
      img.classList.add('show');
    },2500);
  },6500);
}

function floatingHearts(){
  const container=document.querySelector('.hearts');
  setInterval(()=>{
    const heart=document.createElement('span');
    heart.innerHTML='❤️';
    heart.style.left=Math.random()*100+'vw';
    heart.style.fontSize=(15+Math.random()*20)+'px';
    container.appendChild(heart);
    setTimeout(()=>heart.remove(),10000);
  },600);
}

window.onload=()=>{
  document.getElementById('music').volume=0.4;
  slideshow();
  floatingHearts();
};
