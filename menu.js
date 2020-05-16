// toggle responsive menu

function toggleNav() {
  var links = document.getElementById("links");

  if (links.className === "nav") {
    links.className = "nav" + " responsive";
  } else {
    links.className = "nav";
  }
}
