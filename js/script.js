// ===============================
// Smooth Scroll für Links
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  });
});


// ===============================
// Fade-In Animation beim Scrollen
// ===============================

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }

  });
});

document.querySelectorAll(".card, .faq-card, .step-card").forEach(el => {
  observer.observe(el);
});


// ===============================
// Einfacher QR-Code Generator
// ===============================

function generateQRCode(elementId, url) {

  const qr = document.getElementById(elementId);

  if (!qr) return;

  const img = document.createElement("img");

  img.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" +
    encodeURIComponent(url);

  qr.innerHTML = "";
  qr.appendChild(img);

}


// ===============================
// Beispiel QR Codes
// ===============================

generateQRCode("ticketQR", "https://support.gbssg.ch/ticket");

generateQRCode("faqQR", "https://support.gbssg.ch/faq");


// ===============================
// Kleine Console Message
// ===============================

console.log("IT Support Woche Website geladen.");