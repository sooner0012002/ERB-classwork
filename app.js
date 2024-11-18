const navBtn = document.getElementById("nav-mobile-toggle");
const navLinks = document.getElementById("mobile-nav-list");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const dateElements = document.getElementsByClassName("date");
const today = new Date();
const options = { month: "short", day: "2-digit", year: "numeric" };
const formattedDate = today
  .toLocaleDateString("en-US", options)
  .replace(",", ".");

for (let i = 0; i < dateElements.length; i++) {
  dateElements[i].innerHTML = formattedDate;
}
