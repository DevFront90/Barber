  const horaButtons = document.querySelectorAll('.hora-btn');
  const inputHora = document.getElementById('horaSelecionada');

  horaButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove a classe "selected" de todos os botões
      horaButtons.forEach(btn => btn.classList.remove('selected'));

      // Adiciona a classe "selected" ao botão clicado
      button.classList.add('selected');

      // Atualiza o input hidden com o valor selecionado
      inputHora.value = button.textContent;
    });
  });