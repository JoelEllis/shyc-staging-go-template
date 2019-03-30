(function () {
  let header = document.getElementsByTagName("header")[0];
  window.addEventListener("scroll", function () {
  let scr = this.scrollY
  if (scr > 1) {
    header.className = "shadow"
  } else {
    header.className = ""
  }
})
})();