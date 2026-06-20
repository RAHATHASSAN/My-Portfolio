// ================= SMOOTH SCROLL =================
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ================= TYPING EFFECT =================
const texts = [
  "UI/UX Designer",
  "Frontend Developer",
  "AI Researcher",
  "Digital Marketer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function typeEffect() {
  current = texts[i];

  if (isDeleting) {
    document.getElementById("typing").innerHTML = current.substring(0, j--);
  } else {
    document.getElementById("typing").innerHTML = current.substring(0, j++);
  }

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// ================= SAFE IMAGE PREVIEW (OPTIONAL) =================
const uploadInput = document.getElementById("upload");

if (uploadInput) {
  uploadInput.addEventListener("change", function(event){
    const file = event.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = function(e){
        const img = document.getElementById("aboutImage");
        if(img){
          img.src = e.target.result;
        }
      }
      reader.readAsDataURL(file);
    }
  });
}
// IMAGE MODAL
function openModal(src){
  document.getElementById("imgModal").style.display = "block";
  document.getElementById("modalImg").src = src;
}

function closeModal(){
  document.getElementById("imgModal").style.display = "none";
}
window.onclick = function(e){
  const modal = document.getElementById("imgModal");
  if(e.target === modal){
    modal.style.display = "none";
  }
}
const faders = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add('show');
    }
  });
});
function openHire(){
    document.getElementById("hireModal").style.display = "flex";
}

function closeHire(){
    document.getElementById("hireModal").style.display = "none";
}

// click outside to close
window.onclick = function(event){
    let modal = document.getElementById("hireModal");
    if(event.target == modal){
        modal.style.display = "none";
    }
}
