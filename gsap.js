gsap.from(".item1 ul",{
    duration:2.5,
    ease: "power3.out",
    y: -100

});

gsap.from(".blue_background",{
    x:300,
    ease:"powser2.out",
    duration:1.4

})
gsap.from(".blue_background1",{
    x:-300,
    ease:"powser2.out",
    duration:1.4

})
gsap.from(".image_hero img",{
    ease:"powser2.out",
    duration:1.4,
    opacity:0

})
document.addEventListener("DOMContentLoaded", () => {
    // GSAP Smooth Transition for h1 and p elements
    gsap.from("h1, p", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "h1, p",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.utils.toArray(".item4").forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
    });
  });
  
  gsap.utils.toArray(".item3").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });

  gsap.utils.toArray(".card_flex").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 10%",
        toggleActions: "play none none reverse"
      }
    });
  });