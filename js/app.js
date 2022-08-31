// Save rating:
let ratingBtn = document.querySelectorAll(".btn--rating");

ratingBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let rating = btn.textContent;
        let saveRating = localStorage.setItem("rating", rating);
    })
});

// Print message:
const printMessage = () => {
    const divContainer = document.getElementById("main--container");
    let retrieveRating = JSON.parse(localStorage.getItem("rating"));

    const div = document.createElement("div");
    div.classList.add("div--container__thanks");
    div.innerHTML = `
                    <div class="div--img__thanks">
                        <img src="./images/illustration-thank-you.svg" alt="Thank you">
                    </div>
                    <div class="div--rating__thanks">
                        <p>You selected ${retrieveRating} out of 5</p>
                    </div>
                    <div class="div--title__thanks">
                        <h2>Thank you!</h2>
                    </div>
                    <div class="div--paragraph__thanks">
                        <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                    </div>
                    `

    divContainer.innerHTML = "";
    divContainer.appendChild(div);
}
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
    printMessage();
});
