// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {

  // Seleciona o formulário
  const form = document.querySelector("form");

  // Ao enviar, mostra alerta e limpa os campos
  form.addEventListener("submit", e => {
    e.preventDefault(); // Impede envio real
    alert("Mensagem enviada! Obrigado 😊");
    form.reset(); // Limpa os campos do formulário
  });

});
