const toggle = document.getElementById('toggle');
const cards = document.querySelector('.cards')

toggle.addEventListener('change', e => {
    cards.classList.toggle('show-monthly');
})