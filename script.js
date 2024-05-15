document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip,ScrollTrigger,Observer)
    
    gsap.set("#mathilde, #and, #ludovic", {opacity: 0})
    gsap.set("#to-celebrate", {y: -50, opacity: 0})
    gsap.set("#home-img", {scale: 1.1})

    gsap.set("#join-img", {opacity: 0, y: 50})
    gsap.set("#join-us", {opacity: 0})
    gsap.set("#day", {x: -250})
    gsap.set("#month", {x: 250})
    gsap.set("#year", {y: 250})
    gsap.set("#location", {rotation: 0, opacity: 0})

    gsap.set(".confirm-presence", {x: -100, opacity: 0})
    gsap.set("#before", {y: 100, opacity: 0})
    gsap.set("#last_date", {y: 100, opacity: 0})

    function render_intro_timeline(){
        const timeline_intro = gsap.timeline({onComplete: render_home_timeline})

    
        timeline_intro
            .from("#you-are", {x: 25, opacity: 0, duration: 1})
            .from("#cordially", {x: -25, opacity: 0, duration: 1})
            .from("#invited", {x: 25, opacity: 0, duration: 1})
            .to("#you-are", {x: 25, opacity: 0, duration: .2})
            .to("#cordially", {x: -25, opacity: 0, duration: .2})
            .to("#invited", {x:25, opacity: 0, duration: .2})
            .to(".invitation-intro", {opacity: 0, duration: 2})
    }

    function render_home_timeline(){
        const timeline_home = gsap.timeline({onComplete: render_join_timeline})
    
        timeline_home
            .to("#to-celebrate", {y: 0, opacity: 1, duration: .5})
            .to("#home-img", {scale: 1, duration: 1})
            .fromTo("#mathilde", {x: 50, opacity: 0, duration: 1}, {x: 0, opacity: 1})
            .fromTo("#and", {y: 50, opacity: 0, duration: 1}, {y: 0, opacity: 1})
            .fromTo("#ludovic", {x: -50, opacity: 0, duration: 1}, {x: 0, opacity: 1})
            .to("#to-celebrate, #home-img", {opacity: 0, duration: .5, delay: 3})
            .to("#mathilde", {x: 50, opacity: 0, duration: .25})
            .to("#and", {y: -50, opacity: 0, duration: .25})
            .to("#ludovic", {x: -50, opacity: 0, duration: .25})
            .to(".invitation-home", {opacity: 0, duration: 1, delay: 1})
    }

    function render_join_timeline(){
        const timeline_join = gsap.timeline({onComplete: render_contact_timeline})
    
        timeline_join
            .to("#join-img", {opacity: 1, y: 0, duration: .25})
            .to("#join-us", {opacity: 1, duration: .5})
            .to("#day", {x: 0, duration: .5, delay: .5})
            .to("#month", {x: 0, duration: .5})
            .to("#year", {y: 0, duration: .5})
            .to("#location", {rotation: 360, opacity: 1, duration: 1})
            .to("#join-us, #day, #month, #year, #location", {opacity: 0, duration: .5, delay: 3})
            .to("#join-img", {opacity: 0, y: -50, duration: .5})
            .to(".invitation-join", {opacity: 0, duration: 1})

    }

    function render_contact_timeline(){
        const timeline_contact = gsap.timeline()

        timeline_contact
            .to(".confirm-presence", {x: 0, opacity: 1, stagger: 0.1, duration: 1})
            .to("#before", {y: 0, opacity: 1, duration: 0.5})
            .to("#last_date", {y: 0, opacity: 1, duration: 0.5})

    }
    
    render_intro_timeline()



})