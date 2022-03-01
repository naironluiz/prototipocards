const darkmode = document.querySelector("{style.darkmode}");
const media = window.matchMedia("darkmode: dark");

darkmode.addEventListener("click", function () {
  if (media.matches) {
    document.body.classList.toggle("dark");
  }
});
