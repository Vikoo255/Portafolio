$(function () {
  $('#cvDetails').hide();
  $('#toggleCV').on('click', function () {
    $('#cvDetails').fadeToggle();
  });

  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    if (this.checkValidity()) {
      alert('Mensaje enviado!');
      this.reset();
    } else {
      alert('Por favor completa el formulario.');
    }
  });

  const budgetData = {
    labels: ['Ingresos', 'Egresos'],
    datasets: [{
      data: [100000000, 75000000],
      backgroundColor: ['#0d6efd', '#dc3545']
    }]
  };
  new Chart($('#budgetChart'), {
    type: 'doughnut',
    data: budgetData
  });

  $('#ticketForm').submit(function (e) {
    e.preventDefault();
    const desc = $('#ticketDesc').val().trim();
    if (!desc) return;
    const item = $('<li>').addClass('list-group-item d-flex justify-content-between align-items-center').text(desc);
    const btn = $('<button>').addClass('btn btn-sm btn-secondary').text('Resuelto');
    btn.on('click', function () {
      item.toggleClass('text-decoration-line-through');
    });
    item.append(btn);
    $('#ticketList').append(item);
    $('#ticketDesc').val('').focus();
  });
});
