const botao = document.getElementById('mensagemBotao');
const mensagem = document.getElementById('mensagemTexto');

botao.addEventListener('click', function() {
    mensagem.textContent = 'Bem-vindo à minha página!';
    mensagem.style.color = '#2a7ae4'; 
});
