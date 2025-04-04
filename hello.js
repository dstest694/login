document.addEventListener("DOMContentLoaded", function () {
  // Clear the body
  document.body.innerHTML = "";
  document.body.style.backgroundColor = "white";

  // Add <h1>
  const h1 = document.createElement("h1");
  h1.textContent = "Hello, world!";
  h1.style.fontFamily = "sans-serif";
  h1.style.textAlign = "center";
  h1.style.marginTop = "20%";
  document.body.appendChild(h1);

  // Show alert
  alert("Hello, world!");
});
