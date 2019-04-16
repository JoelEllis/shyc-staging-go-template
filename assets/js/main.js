(function () {
  window.addEventListener("scroll", function () { document.getElementsByTagName("header")[0].className = 1 < this.scrollY ? "shadow" : "" });
}).call(this);
