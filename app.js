const sections = document.querySelectorAll(".section");
const sectionButtons = document.querySelectorAll(".controls");
const sectionButton = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions() {
    // Buttton click active class
    for (let i = 0; i < sectionButton.length; i++) {
        sectionButton[i].addEventListener("click", function () {
            let currentButton = document.querySelectorAll(".active-btn");
            currentButton[0].className = currentButton[0].className.replace(
                " active-btn",
                ""
            );
            this.className += " active-btn";
        });
    }

    // Sections active class
    allSections.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // Remove selected from all buttons
            sectionButtons.forEach((button) => {
                button.classList.remove("active");
            });

            // Add active to the clicked button
            e.target.classList.add("active");

            // Hide all sections
            sections.forEach((section) => section.classList.remove("active"));

            // Show selected section
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    });
}

pageTransitions();
