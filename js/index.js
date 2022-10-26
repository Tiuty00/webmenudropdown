// Arrow IMG of navbar
var dropFeatures = document.querySelector(".dropdown-features");
var arrowFeatures = document.querySelector(".arrow-features");

// Section menu navbar
var dropCompany = document.querySelector(".dropdown-company");
var arrowCompany = document.querySelector(".arrow-company");

// Button for menu in mobile
var menuMobile = document.querySelector(".btn-menu");
var imgMenu = document.querySelector(".img-button");

// Mobile section
var mobile = document.querySelector(".box-mobile");

// Transparent Background 
var backgroundDark = document.querySelector(".darkness");

// Changing arrow img (down to up)
dropFeatures.addEventListener ("click", () => {

      if (arrowFeatures.src.match("images/icon-arrow-down.svg")) {
            arrowFeatures.src = "images/icon-arrow-up.svg";
            
            //    If the other menu is open, when i click on this the other one closing.
            document.querySelector(".company-box").classList.add("hidden");
            document.querySelector(".company-box").classList.remove("visible");
            arrowCompany.src = "images/icon-arrow-down.svg";
            
      } else {
            arrowFeatures.src = "images/icon-arrow-down.svg";
      }

      document.querySelector(".features-box").classList.toggle("hidden");
      document.querySelector(".features-box").classList.toggle("visible");
      
})

// Changing arrow img (down to up)
dropCompany.addEventListener ("click", () => {

      if (arrowCompany.src.match("images/icon-arrow-down.svg")) {
            arrowCompany.src = "images/icon-arrow-up.svg";
            
             //    If the other menu is open, when i click on this the other one closing.
            document.querySelector(".features-box").classList.add("hidden");
            document.querySelector(".features-box").classList.remove("visible");
            arrowFeatures.src = "images/icon-arrow-down.svg";
      } else {
            arrowCompany.src = "images/icon-arrow-down.svg";
      }

      document.querySelector(".company-box").classList.toggle("hidden");
      document.querySelector(".company-box").classList.toggle("visible");

})

// Open and close Menu in mobile Mode
menuMobile.addEventListener ("click", () => {

      if (imgMenu.src.match("images/icon-menu.svg")) {
            imgMenu.src = "images/icon-close-menu.svg";
      } else  {
            imgMenu.src = "images/icon-menu.svg";
      }

      mobile.classList.toggle("hidden-mobile");
      mobile.classList.toggle("visible-mobile");

      menuMobile.classList.toggle("close");

      backgroundDark.classList.toggle("hidden-mobile");
      backgroundDark.classList.toggle("visible-mobile");
      
})
