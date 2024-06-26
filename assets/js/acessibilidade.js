// Adicione um evento para mudar entre os modos claro e escuro
const checkbox = document.getElementById('sw-checkbox');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
