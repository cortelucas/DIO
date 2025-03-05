document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.getElementsByTagName('button');

  Array.from(buttons).forEach(button => {
    button.addEventListener('click', function(e) {
      const row = e.target.closest('tr');
      if (!row) return;

      const cells = row.cells;
      if (cells.length < 2) return;

      const carName = cells[0].textContent;
      const carBrand = cells[1].textContent;

      const confirmed = confirm(`Confirmar venda do ${carName} da marca ${carBrand}?`);
      
      if (confirmed) {
        row.remove();
      }
    });
  });
});

// Fazer o botão trocar tema funcionar
document.getElementById('theme').addEventListener('click', function() {
  document.body.classList.toggle('white');
});