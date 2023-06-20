// Animate Text =============================

import { gsap, ScrollTrigger, TimelineLite } from "./gsap/all.js";
import { SplitText } from "./gsap/splitText.js";

var animateText = document.querySelectorAll('.animateText');

const timeline = new TimelineLite();

for (var i = 0; i<animateText.length; i++){
    const text = new SplitText(animateText[i], { type: "chars" });
    
    timeline.from(text.chars, {
        duration: 2,
        opacity: 0,
        scale: 0,
        y: 100,
        transformOrigin: "50% 50%",
        ease: 'back',
        stagger: 0.01
      });
}