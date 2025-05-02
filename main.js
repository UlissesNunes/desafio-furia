
// chat FURIA 24H
const chat = document.getElementById("chat");
const input = document.getElementById("mensagem");
const botao = document.getElementById("enviar");

botao.addEventListener("click", () => {
  const texto = input.value.trim();
  if (texto === "") return;

  adicionarMensagem("Você", texto);
  responderBot(texto);
  input.value = "";
});

function adicionarMensagem(usuario, mensagem) {
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${usuario}:</strong> ${mensagem}`;
  msg.classList.add("mb-2");
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function responderBot(mensagem) {
  const respostas = [
    "Vamos FURIA! 🔥",
    "FURIA é o melhor time do Brasil! ",
    "A FURIA é a melhor!",
    "FURIA é o time do coração!",
    "FURIA é o melhor time do mundo!",

    "O próximo jogo é contra NAVI!",

    "FURIA venceu por 16x12!",

    "Torcida pesada, aqui é FURIA!"

  ];

  const resposta = respostas[Math.floor(Math.random() * respostas.length)];
  setTimeout(() => {
    adicionarMensagem("FURIA 24H", resposta);
  }, 1000);
}
// Menu Hamburguer
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("menu-mobile");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("hidden");
});


//carrosel

const carousel = document.querySelector("#carousel > div");
const totalItems = carousel.children.length;
let index = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  index = (index + 1) % totalItems;
  carousel.style.transform = `translateX(-${index * 100}%)`;
});
document.getElementById("prevBtn").addEventListener("click", () => {
  index = (index - 1 + totalItems) % totalItems;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}); 