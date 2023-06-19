const jobTitle = document.getElementById("jobTitle");
const jobTitleArray = ["Designer", "Developer", "Freelancer"];
const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".sec");
const container = document.getElementById("container");
const home = document.getElementById("home");
const hamburger = document.querySelector(".hamb");
const navlist = document.querySelector(".tabs");
const arrowDown = document.querySelector("#downArrow");
const homeBtn = document.querySelector(".button");
const contactSec = document.querySelector("#contact");
const homeSec = document.querySelector("#home");
let num = 0;
let arrowNum = 0;

function setJobTitle() {
  for (var i = 0; i < jobTitleArray.length; i++) {
    jobTitle.innerHTML = jobTitleArray[i];
  }
}

function hamb() {
  hamburger.addEventListener("click", function () {
    this.classList.toggle("click");
    navlist.classList.toggle("open");
  });
}
window.addEventListener("load", () => {
  // setInterval(function () {
  //   jobTitle.innerHTML = jobTitleArray[num];
  //   num++;
  //   if (num >= jobTitleArray.length) {
  //     num = 0;
  //   }
  // }, 1000);

  homeBtn.onclick = (e) => {
    console.log("hello");
    console.log(contactSec);
    contactSec.style.marginLeft = "-45%";
    contactSec.style.opacity = 1;
    homeSec.style.opacity = 0;
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      if (tab.innerHTML == "Contact") {
        tab.classList.add("active");
      }
    });
  };

  let typed = new Typed(".job", {
    strings: ["Designer", "Developer", "Freelancer", "Consultant"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true,
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      sections.forEach((sec) => {
        let id = sec.getAttribute("id");
        if (id == "home" && tab.innerHTML.toLowerCase() == "home") {
          sections.forEach((sec) => {
            sec.style.marginLeft = "0%";
            sec.style.opacity = 0;
          });
          sec.style.opacity = 1;
        }
        if (id == "services" && tab.innerHTML.toLowerCase() == "services") {
          sections.forEach((sec) => {
            sec.style.marginLeft = "-10%";
            sec.style.opacity = 0;
          });
          sec.style.opacity = 1;
        }
        if (id == "contact" && tab.innerHTML.toLowerCase() == "contact") {
          sections.forEach((sec) => {
            sec.style.marginLeft = "-15%";
            sec.style.opacity = 0;
          });
          sec.style.opacity = 1;
        }
      });

      tab.classList.add("active");
    });
  });

  hamb();
});
