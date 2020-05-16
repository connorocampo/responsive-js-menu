// toggle responsive menu

function toggleNav() {
  var links = document.getElementById("links");

  if (links.className === "nav") {
    links.className = "nav" + " responsive";
  } else {
    links.className = "nav";
  }
}

// close dropdownMenu when clicking anywhere on the screen
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("nav");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("responsive")) {
        openDropdown.classList.remove("responsive");
      }
    }
  }
};
