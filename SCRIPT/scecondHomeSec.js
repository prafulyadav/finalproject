const corousalItems = document.querySelectorAll(".corousalItem");
const corosalContainer = document.querySelector(".corosalContainer");
const corousalHoverStyleElement = document.createElement("style");
const cssForCorousalHover = `.toBeVanished {
    visibility: hidden;
}`;

corousalHoverStyleElement.textContent = cssForCorousalHover;

const handleResize = () => {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  console.log(screenWidth);
  corousalItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      if (screenWidth >= 780)
        corosalContainer.style.gridTemplateColumns =
          index === 0
            ? `1.8fr 1fr 1fr`
            : index === 1
            ? `1fr 1.8fr 1fr `
            : `1fr 1fr 1.8fr`;
      else if (screenWidth < 780)
        corosalContainer.style.gridTemplateRows =
          index === 0
            ? `1.8fr 1fr 1fr`
            : index === 1
            ? `1fr 1.8fr 1fr `
            : `1fr 1fr 1.8fr`;
    });

    item.addEventListener("mouseleave", () => {
      if (screenWidth >= 780)
        corosalContainer.style.gridTemplateColumns = `1fr 1fr 1fr`;
      else if (screenWidth < 780)
        corosalContainer.style.gridTemplateRows = `1fr 1fr 1fr`;
    });
  });
};
handleResize();

Object.values(document.getElementsByClassName("corousalItem")).forEach(
  (item, index) => {
    item.addEventListener("mouseenter", () => {
      Object.values(
        document.getElementsByClassName(`toBeVanished${index + 1}`)
      ).forEach((elem) => {
        elem.classList.add("hidden");
      });
      Object.values(
        document.getElementsByClassName(`toBeVanished2${index + 1}`)
      ).forEach((elem) => {
        elem.classList.add("hidden");
      });
    });
    item.addEventListener("mouseleave", () => {
      Object.values(
        document.getElementsByClassName(`toBeVanished${index + 1}`)
      ).forEach((elem) => {
        elem.classList.remove("hidden");
      });
      Object.values(
        document.getElementsByClassName(`toBeVanished2${index + 1}`)
      ).forEach((elem) => {
        elem.classList.remove("hidden");
      });
    });
  }
);

const showCircleDiv = (id, index) => {
  document.querySelectorAll(".secondCircleDesc").forEach((e) => {
    e.classList.remove("activeCircle");
  });
  document.querySelectorAll(".arrowIcon").forEach((e, ind) => {});
  const circleImg = document.getElementById("circleImg");
  let currentRotation = circleImg.style.transform
    ? parseInt(circleImg.style.transform.match(/\d+/)[0])
    : 0;
  currentRotation += 360;
  circleImg.style.transform = `rotate(${currentRotation}deg)`;

  setTimeout(() => {
    if (id === "secDesc1") {
      circleImg.src = "./images/circle.png";
    } else if (id === "secDesc2") {
      circleImg.src = "./images/Accomplishment.jpg";
    } else if (id === "secDesc3") {
      circleImg.src = "./images/Integration.jpg";
    }

    setTimeout(() => {
      circleImg.style.transform = `rotate(${currentRotation}deg)`;
    }, 250);
  }, 250);

  var div = document.getElementById(id);
  console.log(div);
  if (div) div.classList.add("activeCircle");
};

const showCircleDivision = (id) => {
  document.querySelectorAll(".secondCircleDesc2nd").forEach((e) => {
    e.classList.remove("activeCircle2nd");
  });

  var div = document.getElementById(id);
  if (div) div.classList.add("activeCircle2nd");
};

// COROUSAL JS
// JavaScript to clone carousel items
const carouselContainer = document.querySelector(".carousel-container");
const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const itemWidth = carouselItems[0].getBoundingClientRect().width;
const numItems = carouselItems.length;
const carouselInner = document.querySelector(".carousel-inner");
const carousalImage = document.querySelectorAll(".carousel-image");

let scrollPosition = 0;

function scrollCarousel() {
  scrollPosition += itemWidth;
  if (scrollPosition >= numItems * itemWidth) {
    scrollPosition = 0;
  }
  carousel.style.transform = `translateX(-${scrollPosition}px)`;
}

const scrollInterval = setInterval(scrollCarousel, 2000);

//------------------------------------------

let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navmenu.classList.toggle("open");
};

const hideDropdown = () => {
  document.getElementById("dropdown1").style.display = "none";
};
const hideDropdown3 = () => {
  document.getElementById("dropdown3").style.display = "none";
};
const hideDropdown2 = () => {
  document.getElementById("dropdown2").style.display = "none";
};

const showDropdown = () => {
  hideDropdown2();
  hideDropdown3();
  document.getElementById("dropdown1").style.display = "block";
};

const showDropdown2 = () => {
  hideDropdown();
  hideDropdown3();
  document.getElementById("dropdown2").style.display = "block";
};

const showDropdown3 = () => {
  hideDropdown2();
  hideDropdown();
  document.getElementById("dropdown3").style.display = "block";
};

const handleScroll = () => {
  const styleElementWhite = document.createElement("style");
  const styleElementBlack = document.createElement("style");
  const whiteBorderBottom =
    ".navButton {color: white;background-color:#ffffff56;}.factLinkContainer:hover {background-color: inherit;}.addOption {color: white;} .addOption:hover {border-bottom: 3px solid white;} .logoImage {filter: invert(0%);}#menu-icon{color:white} .fropt select{color:white}  .fropt{border:3px solid white}";
  const blackBorderBottom =
    ".navButton {color:  #eb9018;background-color:#f1f5f9;}.factLinkContainer:hover {background-color: white;}.addOption {color:  #eb9018;}.addOption:hover {border-bottom: 3px solid #eb9018;}.logoImage {filter: invert(0%);} #menu-icon{color:#eb9018}.fropt select{color:#eb9018} .fropt{border: 3px solid #eb9018 } ";
  styleElementWhite.textContent = whiteBorderBottom;
  styleElementBlack.textContent = blackBorderBottom;

  document.getElementById("firstSectionContainer").style.cssText = `${
    window.scrollY <= 90
      ? `position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    
    
  
    background:transparent`
      : `top: 0;
    right: 0;
    
    display: flex;
    align-items: center;
    
    
  
    
    z-index: 1000;
    color: black;
    background-color: #fff;
     `
  }`;
  document.getElementsByClassName("factLinkContainer")[0].style.cssText = `${
    window.scrollY <= 90
      ? "border-color: white; color: white;"
      : "border-color:#eb9018;color:#eb9018;"
  }`;
  document
    .getElementById("body")
    .appendChild(window.scrollY <= 90 ? styleElementWhite : styleElementBlack);
};

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  AOS.refresh();
});
