// SCROLL MAGIC STUFF
// let controller;
// let slideScene;
// let pageScene;

// function animateSlides() {
//   //init controller
//   controller = new ScrollMagic.Controller();
//   // Select things
//   const sliders = document.querySelectorAll(".slide");
//   const nav = document.querySelector(".nav-header");
//   //loop over slides
//   sliders.forEach((slide, index, slides) => {
//     // div on top of the img that is gonna slide off
//     const revealImg = slide.querySelector(".reveal-img");
//     const img = slide.querySelector("img");
//     const revealText = slide.querySelector(".reveal-text");
//     // GSAP
//     const slideTimeline = gsap.timeline({
//       defaults: { duration: 1, ease: "power2.inOut" },
//     });
//     slideTimeline.fromTo(revealImg, { x: "0%" }, { x: "100%" });
//     slideTimeline.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
//     slideTimeline.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.75");
//     slideTimeline.fromTo(nav, { y: "-100%" }, { y: "0%" }, "-=0.5");
//     // create a scene
//     slideScene = new ScrollMagic.Scene({
//       triggerElement: slide,
//       triggerHook: 0.25,
//       reverse: false,
//     })
//       .setTween(slideTimeline)
//       .addIndicators({
//         colorStart: "white",
//         colorTrigger: "white",
//         name: "slide",
//       })
//       .addTo(controller);
//     // new animation
//     const pageTimeline = new gsap.timeline();
//     let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
//     // give time to read the section moving it down
//     pageTimeline.fromTo(nextSlide, { y: "0%" }, { y: "50%" });
//     pageTimeline.fromTo(
//       slide,
//       { opacity: 1, scale: 1 },
//       { opacity: 0, scale: 0.5 }
//     );
//     // reset the section to it's position
//     pageTimeline.fromTo(nextSlide, { y: "50%" }, { y: "0%" });
//     //create a new scene
//     pageScene = new ScrollMagic.Scene({
//       triggerElement: slide,
//       duration: "100%",
//       triggerHook: 0,
//     })
//       .addIndicators({
//         colorStart: "white",
//         colorTrigger: "white",
//         name: "page",
//         indent: 200,
//       })
//       .setPin(slide, { pushFollowers: false })
//       .setTween(pageTimeline)
//       .addTo(controller);
//   });
// }

// animateSlides();

// GSAP SCROLL TRIGGER

