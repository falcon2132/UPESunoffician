function searchSubject() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const courseCards = document.querySelectorAll('.course-card');

    courseCards.forEach(card => {
        const courseTitle = card.querySelector('h3').textContent.toLowerCase();
        if (courseTitle.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
