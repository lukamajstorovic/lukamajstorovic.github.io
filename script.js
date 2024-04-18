document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger");
  const navBar = document.querySelector(".navigation-bar");

  hamburgerBtn.addEventListener("click", function () {
    navBar.classList.toggle("active"); // Toggle the 'active' class on the navigation bar
  });
});

function scrollToContact() {
  const contactSection = document.getElementById("contact-me");

  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: "smooth",
    });
  }
}
