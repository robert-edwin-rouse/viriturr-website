var b_about = document.getElementById("open-about");
var b_tech = document.getElementById("open-technology");
var b_team = document.getElementById("open-team");
var b_contact = document.getElementById("open-contact");

var m_about = document.getElementById("about-modal");
var m_tech = document.getElementById("technology-modal");
var m_team = document.getElementById("team-modal");
var m_contact = document.getElementById("contact-modal");

var c_about = document.getElementById("close-about");
var c_tech = document.getElementById("close-technology");
var c_team = document.getElementById("close-team");
var c_contact = document.getElementById("close-contact");

var backdrop = document.getElementById("modal-backdrop");

// When the user clicks the button, open the modal 
b_about.onclick = function() {
    m_about.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
c_about.onclick = function() {
    m_about.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == m_about) {
    m_about.style.display = "none";
  }
}