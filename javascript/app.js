window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var navlink = document.querySelectorAll(".nav-link");
  var navbarNav=document.querySelector("#navbarNav");
  var activeEditorNavbar = document.querySelector(
    ".elementor-editor-active .navbar"
  );
  var navbar_toggler = document.querySelector(".nav-icon");
  if (document.documentElement.scrollTop > 85 || document.body.scrollTop > 85) {
    navbar.classList.add("navcolor");
    navbar_toggler.classList.add("nav-scroll");
    navbarNav.classList.add('navcolor');
    navlink.forEach(function (element) {
      element.classList.add("col");
    });

    if (activeEditorNavbar) {
      activeEditorNavbar.classList.remove("navcolor");
      activeEditorNavbar.classList.remove("fixed-top");
    }
  } else {
    navbar_toggler.classList.remove('nav-scroll');
   navbar.classList.remove("navcolor");
    navlink.forEach(function (element) {
      element.classList.remove("col");
    });
  }
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";
}

const serviceItems = document.querySelectorAll('.service');
    serviceItems.forEach((item) => {
      const viewLink = item.querySelector('#view-link');
      const expandedText = item.querySelector('.expanded-p');
  
      viewLink.addEventListener('click', () => {
        expandedText.classList.toggle('expanded-p');
        viewLink.querySelector('img').classList.toggle('rotate');
      });
    });