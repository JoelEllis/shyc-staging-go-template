(function () {
  var a = document.getElementsByTagName("header")[0];
  window.addEventListener("scroll", function () { a.className = 1 < this.scrollY ? "shadow" : "" });
}).call(this);
