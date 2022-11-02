const cardContainer = document.querySelector(".card-container");
const messageContainer = document.querySelector(".message-container");
const btnSubmit = document.querySelector(".btn-submit");

const ratingNumber = document.querySelector(".rating-number");
const ratingButtons = document.querySelectorAll(".rating-btn");

btnSubmit.addEventListener("click", function(e) {
  cardContainer.style.display = "none";
  messageContainer.style.display= "block";
})


ratingButtons.forEach((e)=>{
  e.addEventListener("click",()=>{
    ratingNumber.innerText = e.innerText;
  })
})