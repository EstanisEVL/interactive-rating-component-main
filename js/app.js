// Save rating:
let ratingBtn = document.querySelectorAll(".btn--rating");
ratingBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let rating = btn.textContent;
        let saveRating = localStorage.setItem("rating", rating);
    })
});

// Show thank you message and rating selected:
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
    ratingContainer.classList.add("hide");
    thanksContainer.classList.remove("hide");

    rate.textContent = localStorage.getItem("rating");
})

const ratingContainer = document.querySelector(".div--container");
const thanksContainer = document.querySelector(".div--container__thanks");
const rate = document.getElementById("rating");