    AOS.init({
    duration: 800, 
    once: true     
});
    const counters = document.querySelectorAll('.counter');
    const speed = 400; // The lower the slower
    const countUp = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed; 
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(() => countUp(counter), 1);
        } else {
            counter.innerText = target;
        }
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                countUp(counter);
                observer.unobserve(counter); 
            }
        });
    }, { threshold: 1.0 });
    counters.forEach(counter => {
        observer.observe(counter);
    });
