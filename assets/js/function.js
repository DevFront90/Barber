 document.getElementById("modalAgendamento").addEventListener("submit", function (e) {
  e.preventDefault();

  // Aqui você pode fazer a validação ou envio do formulário (por fetch, por exemplo)

  // Alert de sucesso personalizado
  Swal.fire({
    title: 'Agendamento realizado!',
    text: 'Seu horário foi reservado com sucesso.',
    icon: 'success',
    confirmButtonColor: '#f4a942',
    confirmButtonText: 'Voltar'
  });

  // Aqui você pode limpar o formulário se quiser
  this.reset();

  // E também remover marcações de horários
  const botoes = document.querySelectorAll(".btn-horario");
  botoes.forEach(btn => btn.classList.remove("ativo"));
});
