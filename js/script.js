// DINAMIC NAVBAR

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main-menu").style.top = "0";
  } else {
    document.getElementById("main-menu").style.top = "-5rem";
  }
  prevScrollpos = currentScrollPos;
};
