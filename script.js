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
