

// Close the popup with the Escape key
document.addEventListener("keydown", (e) => {
    const p = document.getElementById("popup");
    if (e.key === "Escape" && p) {
        p.classList.remove("show");
    }
});

// Simple sign up form validation
const signupForm = document.querySelector("#popup form");

if (signupForm) {
    const formMessage = document.createElement("p");
    formMessage.className = "form-message";
    signupForm.appendChild(formMessage);

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = signupForm.querySelector('input[type="email"]');
        const password = signupForm.querySelector('input[type="password"]');

        if (email && !email.value.includes("@")) {
            formMessage.textContent = "Please enter a valid email address.";
            return;
        }

        if (password && password.value.length < 8) {
            formMessage.textContent = "Password must be at least 8 characters.";
            return;
        }

        formMessage.textContent = "Thank you! Your account has been created.";
        signupForm.reset();
    });
}

// Back to top button
const topBtn = document.createElement("button");
topBtn.textContent = "↑";
topBtn.className = "back-to-top";
topBtn.setAttribute("aria-label", "Back to top");
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    topBtn.classList.toggle("visible", window.scrollY > 400);
});

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// ---------- Original code (team page) ----------
//Get popup
const popup = document.getElementById("popup");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

    // Open popup
    openBtn.onclick = () => {
        popup.classList.add("show");
    };
    // Close popup
    closeBtn.onclick = () => {
        popup.classList.remove("show");
    };

    // Close when mouse is clicking outside the popup
    popup.onclick = (e) => {
        if (e.target === popup) {
            popup.classList.remove("show");
        }
    };

// ---------- Carousel (home page) ----------
const slides = document.querySelectorAll(".slide");
const dotsBox = document.getElementById("dots");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

//Only run this on pages that have carousel
if (slides.length > 0 && dotsBox && prevBtn && nextBtn) {
    // The slide we are showing right now (0)
    let currentSlide = 0;

    //Make 1 dot for each slide ·
    slides.forEach((slide, i)) => {
        const dot = document.createElement("button");
        dot.className = "dot";
        dot.type = "button";
        det.setAttribute("aria-label", `Go to slide ${i + 1}`);
        dot.onclick = () => showSlide();
        dotsBox.appendChild(dot);
        });

        const dots = dotsBox.querySelectorAll(".dot");

        //Show slide number n and hide the others
        function showSlide(n){

            //Go back to the start after last slide
            //And to the end with going from first
            current = (n+ slides.length) % slides.length;

            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === current);
            });


            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === current);
            });
       }

       //prev and next buttons
       prevBtn.onclick = () => showSlide(current - 1);
       nextBtn.onclick = () => showSlide(current + 1);

       //Start on the first slide (0)
       showSlide(0);

       //Auto slide every 6 seconds
       setInterval(() => showSlide(current + 1), 6000);
}


