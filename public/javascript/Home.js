const headline = "Connecting Farmers and Buyers";
let index = 0;
const headlineElement = document.querySelector(".hero-text h1");

function typeWriter() {
  if (index < headline.length) {
    headlineElement.textContent += headline.charAt(index);
    index++;
    setTimeout(typeWriter, 75);
  }
}

window.addEventListener("load", () => {
  headlineElement.textContent = "";
  typeWriter();
});

document.querySelector("#login").onclick = () => {
  window.location.href = "Login.html";
};

document.querySelector("#signup").onclick = () => {
  window.location.href = "Register.html";
};

