function toggleNavbar() {
    document.getElementById('navbar-responsive').classList.toggle('open');
  }
  
  document.getElementById('menu-btn').addEventListener('click', toggleNavbar);




  let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});