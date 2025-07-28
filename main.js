// bu satırı silmeyin
import { siteContent } from "./content.js";
console.log("Site içeriği", siteContent);

/* Kodlar buradan aşağıya */

const logoImg = document.getElementById("logo-img");
logoImg.src = "./images/logo.webp";

const ctaImg = document.getElementById("cta-img");
ctaImg.src = "./images/cta-img.webp";
