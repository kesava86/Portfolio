function showMessage() {
  alert("Thanks for visiting my portfolio!");
}


const toggler = document.getElementById("menuToggleBtn");
  const icon = document.getElementById("menuIcon");

  toggler.addEventListener("click", () => {
    if (icon.classList.contains("bi-list")) {
      icon.classList.remove("bi-list");
      icon.classList.add("bi-x");
    } else {
      icon.classList.remove("bi-x");
      icon.classList.add("bi-list");
    }
  });