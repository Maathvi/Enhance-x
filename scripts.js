// Example event listener for opening the modal on image click:
document.querySelectorAll('.project-card img').forEach(img => {
    img.addEventListener('click', function () {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        modalImg.src = this.src;
        modal.style.display = 'block';
    });
});

// Example event listener for closing the modal:
document.querySelector('.close-modal').addEventListener('click', function () {
    document.getElementById('imageModal').style.display = 'none';
});

// Example event listener for liking a project on the home screen:
document.querySelectorAll('.like-button').forEach(likeButton => {
    likeButton.addEventListener('click', function () {
        this.classList.toggle('liked'); // Toggle the liked state
    });
});

// Example event listener for sorting by category:
document.getElementById('category').addEventListener('change', function () {
    const selectedCategory = this.value;
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (selectedCategory === 'all' || selectedCategory === cardCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
