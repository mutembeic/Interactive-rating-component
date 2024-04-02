const submitButton = document.getElementById('submit');
const rateButtons = document.querySelectorAll('.button button');
const container = document.getElementById('container');
const thanksSection = document.querySelector('.thanks');
const ratingSpan = document.getElementById('rating');

// Add click event listeners to rate buttons
rateButtons.forEach(button => {
    button.addEventListener('click', function() {
        rateButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

submitButton.addEventListener('click', function() {
    // Find the selected rating
    let selectedRating = 0;
    rateButtons.forEach((button, index) => {
        if (button.classList.contains('active')) {
            selectedRating = index + 1;
        }
    });
    ratingSpan.textContent = selectedRating;
    // Hide container and display thanks section
    container.classList.add('hidden');
    thanksSection.classList.remove('hidden');
});

 