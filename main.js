// bu satırı silmeyin
import { siteContent } from "./content.js";
console.log("Site içeriği", siteContent);

/* Kodlar buradan aşağıya */

const logoImg = document.getElementById("logo-img");
logoImg.src = "./images/logo.webp";

const navLinks = document.querySelectorAll("nav a");
const navItems = Object.values(siteContent.nav);
navItems.forEach((item, index) => {
  navLinks[index].textContent = item;
});

const ctaImg = document.getElementById("cta-img");
ctaImg.src = "./images/cta-img.webp";

const ctaDiv = document.querySelector(".cta-text");
const ctaH1 = ctaDiv.querySelector("h1");
const ctaButton = ctaDiv.querySelector("button");

ctaH1.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
