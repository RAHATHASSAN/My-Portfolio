// ================= SMOOTH SCROLL =================
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
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
let isDeleting = false;

function typeEffect() {
  const current = texts[i];

  if (document.getElementById("typing")) {
    document.getElementById("typing").innerHTML = current.substring(0, j);
  }

  if (!isDeleting) {
    j++;
    if (j === current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// ================= IMAGE MODAL =================
function openModal(src) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");

  if (modal && modalImg) {
    modal.style.display = "block";
    modalImg.src = src;
  }
}

function closeModal() {
  const modal = document.getElementById("imgModal");
  if (modal) modal.style.display = "none";
}


// ================= FADE ANIMATION =================
const faders = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});


// ================= HIRE MODAL =================
function openHire() {
  const modal = document.getElementById("hireModal");
  if (modal) modal.style.display = "flex";
}

function closeHire() {
  const modal = document.getElementById("hireModal");
  if (modal) modal.style.display = "none";
}


// ================= CLIENT FORM MODAL =================
function openClientForm(packageName) {
  const modal = document.getElementById("clientFormModal");
  const select = document.querySelector("#hireForm select");

  if (modal) modal.style.display = "flex";

  if (select) {
    select.value = "";
  }
}

function closeClientForm() {
  const modal = document.getElementById("clientFormModal");
  if (modal) modal.style.display = "none";
}


// ================= CLICK OUTSIDE CLOSE =================
window.addEventListener("click", function (event) {
  const imgModal = document.getElementById("imgModal");
  const hireModal = document.getElementById("hireModal");
  const clientModal = document.getElementById("clientFormModal");

  if (event.target === imgModal) {
    imgModal.style.display = "none";
  }

  if (event.target === hireModal) {
    hireModal.style.display = "none";
  }

  if (event.target === clientModal) {
    clientModal.style.display = "none";
  }
});
function openDetails(type){
  const modal = document.getElementById("detailModal");
  const body = document.getElementById("detailBody");

  if(type === "projects"){
    body.innerHTML = `
      <h2>My Projects</h2>
      <p>আমি মোট 6+ প্রজেক্ট করেছি:</p>
      <ul>
        <li>Fitness App (Figma)</li>
        <li>E-Voting System</li>
        <li>Travel Website</li>
        <li>Doctor Landing Page</li>
        <li>Inventory Management System</li>
        <li>E-Learning Platform</li>
      </ul>
    `;
  }

  else if(type === "internship"){
    body.innerHTML = `
      <h2>Internship Experience</h2>
      <p><b>Shahjalal Islami Bank PLC</b></p>
      <p>IT Security Department</p>

      <h3>Tools & Technologies:</h3>
      <ul>
        <li>OpenVAS</li>
        <li>OWASP ZAP</li>
        <li>Nmap</li>
        <li>Nessus</li>
        <li>Nikto</li>
        <li>Burp Suite</li>
        <li>Metasploit Framework</li>
      </ul>

      <p>আমি vulnerability assessment, penetration testing এবং security monitoring নিয়ে কাজ করেছি।</p>
    `;
  }

  else if(type === "research"){
    body.innerHTML = `
      <h2>Research Work</h2>
      <p><b>Paper Title:</b> DAPT-XLMR Framework for Depression Detection</p>
      <p>Published in IEEE Conference (QPAIN 2026)</p>

      <p>এই research এ transformer-based NLP model ব্যবহার করে depression detection করা হয়েছে text data থেকে।</p>

      <a href="your-research.pdf" target="_blank" style="color:#00ffcc;">
        📄 View Research PDF
      </a>
    `;
  }

  else if(type === "certificates"){
    body.innerHTML = `
      <h2>Certificates</h2>
      <ul>
        <li>UI/UX Design Certificate</li>
        <li>Web Development Certificate</li>
        <li>Digital Marketing Certificate</li>
      </ul>
    `;
  }

  modal.style.display = "flex";
}

function closeDetails(){
  document.getElementById("detailModal").style.display = "none";
}