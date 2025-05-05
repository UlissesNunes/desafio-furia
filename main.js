
// Menu Hamburguer
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("menu-mobile");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("active");
});

// chat FURIA 24H
const chat = document.getElementById("chat");
const input = document.getElementById("mensagem");
const botaoEnviar = document.getElementById("enviar");
const palavrasChaveDiv = document.getElementById("palavras-chave");

const palavrasChaveRespostas = {
    "Próximo Jogo": "O **próximo jogo** da FURIA é contra NAVI, então preparem seus corações para muita emoção e jogadas incríveis!",
    "Melhor Time": "**Sem dúvida alguma**, a FURIA é o melhor time do Brasil, representando com garra e paixão em todos os campeonatos!",
    "Vamos FURIA": "**Com toda a força e energia**, vamos gritar juntos: VAMOS FURIA! Que a vitória nos acompanhe!",
    "Resultado": "E o resultado que nos enche de orgulho: a FURIA venceu por 16x12, mostrando a superioridade do time!",
    "Torcida": "Aqui a torcida é pesada e apaixonada, porque aqui é FURIA, e o apoio nunca para!",
    // Adicione mais palavras-chave e suas respectivas respostas aqui
};
