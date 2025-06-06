// Dark mode toggle with persistent setting
const toggle = document.getElementById("darkToggle");

// Check saved mode on load
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggle.checked = true;
}

// Listen to toggle switch
toggle.addEventListener("change", function () {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
});
