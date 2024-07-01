//Hamburger
function toggleMenu(element) {
  var navMenu = document.getElementById("MainMenu");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
  element.classList.toggle("open");
}

//Accordion submenu
var SubMenus = document.querySelectorAll(".dropbtn");
SubMenus.forEach(function(SubMenu) {
  SubMenu.addEventListener("click", function() {
    var menuItem = this.parentNode;
    menuItem.classList.toggle("active");
  });
});
