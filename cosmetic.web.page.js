//review

const stars = document.querySelectorAll('.review-star .fa-star')
let selectedRating = 0
stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add('highlighted')
            } else {
                s.classList.remove('highlighted')
            }
        })
    })
    star.addEventListener('mouseout', () => {
        stars.forEach((s, i) => {
            if (i <= selectedRating) {
                s.classList.add('highlighted')
            } else {
                s.classList.remove('highlighted')
            }
        })
    })
    star.addEventListener('click', () => {
        selectedRating = index 
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add('highlighted')
            } else {
                s.classList.remove('highlighted')
            }
        })
    })
})
const addWriteReviewBtn = document.getElementById('writeReviewBtn')
const theReviewSection = document.getElementById('reviewSection')
function showReviewSection() {
    theReviewSection.style.display = 'block'
}
stars.forEach(star => {
    star.addEventListener('click', showReviewSection)
})
addWriteReviewBtn.addEventListener('click', showReviewSection)

const takeQuizBtn = document.getElementById('take-quiz-now')
takeQuizBtn.addEventListener('click', () => {
    window.open('file:///C:/Users/diana/Desktop/H2O%20-%20Project/Project/cosmetics.web.page.quiz.html', '_blank')
})

const subscribeForm = document.getElementById('subscribe-form')
const subscribeBtn = document.getElementById('subscribe-btn')
subscribeBtn.addEventListener('click', () => {
    subscribeForm.style.display = 'block'
})
// Fetch and display reviews
async function fetchReviews() {
    const response = await fetch("http://localhost:3000/reviews");
    const reviews = await response.json();
  
    const reviewContainer = document.getElementById("review-container");
    reviewContainer.innerHTML = reviews
      .map(
        (r) => `<div><strong>${r.name}</strong><p>${r.review}</p></div>`
      )
      .join("");
  }
  
  // Submit a review
  async function submitReview(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const review = document.getElementById("review").value;
  
    await fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, review }),
    });
  
    fetchReviews();
  }
  
  // Add event listener to the form
  document.getElementById("review-form").addEventListener("submit", submitReview);
  
  // Load reviews on page load
  fetchReviews();
  