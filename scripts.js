// Add any interactivity you need, for example smooth scrolling

/*document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
*/

/* document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('#services .service h3');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const parent = this.parentElement;

            // Toggle 'open' class on the parent .service div
            parent.classList.toggle('open');
        });
    });
}); */

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('myModal');
    const modalBody = document.getElementById('modal-body');
    const span = document.getElementsByClassName('close')[0];

    document.querySelectorAll('#services .service h3').forEach(header => {
        header.addEventListener('click', function () {
            const serviceId = this.getAttribute('data-service');
            const paragraph = document.getElementById(serviceId);
            modalBody.innerHTML = paragraph.innerHTML;
            modal.style.display = 'block';
        });
    });

    span.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});