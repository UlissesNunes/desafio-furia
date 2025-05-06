// MENU MOBILE
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("menu-mobile");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("active");
});

// CHAT FURIA 24H
const chat = document.getElementById("chat");
const input = document.getElementById("mensagem");
const botaoEnviar = document.getElementById("enviar");

// Palavras-chave e respostas ricas em HTML
const palavrasChaveRespostas = {
  palavras: [
    {"FURIA Esports": `<div class='text-center p-5 bg-gray-900 rounded-lg'>
        <p class="text-lg font-semibold mb-4">Olá, FURIOSO! Sou o atendente virtual da <span class='underline-animation text-red-700'>FURIA</span> e estou aqui para te mostrar nossa paixão pelos esports! 🏆</p>
        <p class="mb-2">A FURIA é uma organização brasileira com equipes em diversos jogos, sempre buscando o topo.</p>
        <p class="mb-2">Para conhecer mais sobre nossa história e equipes, visite o <a class='underline-animation text-red-800' href='https://furia.gg/' target='_blank'>Site Oficial da FURIA</a>.</p>
        <img src="https://cdn.furia.gg/media/furia-logo-2023-branco.png" alt="Logo FURIA" class="mx-auto mt-4 w-48 rounded shadow-lg" />
      </div>`},
    {"FURIA": `<div class='text-center p-5 bg-gray-900 rounded-lg'>
        <p class="text-lg font-semibold mb-4">Saudações, FURIOSO! Sou o atendente virtual da <span class='underline-animation text-red-700'>FURIA</span> e te apresento nosso universo de competição! 🏆</p>
        <p class="mb-2">A FURIA representa o Brasil em grandes campeonatos de jogos online, levando nossa garra para o mundo.</p>
        <p class="mb-2">Acompanhe nossas novidades e bastidores no <a class='underline-animation text-red-800' href='https://twitter.com/furiagg' target='_blank'>Twitter da FURIA</a>.</p>
        <img src="https://cdn.furia.gg/media/furia-banner-twitter.jpg" alt="Banner FURIA Twitter" class="mx-auto mt-4 w-48 rounded shadow-lg" />
      </div>`},
    {"Pantera": `<div class='text-center p-5 bg-gray-900 rounded-lg'>
        <p class="text-lg font-semibold mb-4">Olá, FURIOSO! Sou o atendente virtual da <span class='underline-animation text-red-700'>FURIA</span> e te mostro nosso símbolo de força! 🏆</p>
        <p class="mb-2">A Pantera é a nossa mascote, representando a agilidade e a estratégia que usamos nos jogos.</p>
        <p class="mb-2">Veja mais sobre a identidade da FURIA em nossa página oficial: <a class='underline-animation text-red-800' href='https://furia.gg/sobre/' target='_blank'>Sobre a FURIA</a>.</p>
        <img src="https://cdn.furia.gg/media/furia-mascote.png" alt="Mascote Pantera FURIA" class="mx-auto mt-4 w-48 rounded shadow-lg" />
      </div>`},
  ]
};

// Adiciona mensagem ao chat
function adicionarMensagem(html, tipo = "usuario") {
  const novaMensagem = document.createElement("div");
  novaMensagem.className = "mb-4 flex justify-center";
  novaMensagem.innerHTML = html;
  chat.appendChild(novaMensagem);
  chat.scrollTop = chat.scrollHeight;
}

// Processa entrada do usuário
function processarMensagem() {
  const texto = input.value.trim();
  if (!texto) return;

  adicionarMensagem(`<div class='text-white text-center'>Você: ${texto}</div>`);

  let encontrou = false;
  for (let i = 0; i < palavrasChaveRespostas.palavras.length; i++) {
    const obj = palavrasChaveRespostas.palavras[i];
    const chave = Object.keys(obj)[0].toLowerCase();
    if (texto.toLowerCase() === chave || texto.toLowerCase().includes(chave)) {
      adicionarMensagem(Object.values(obj)[0], "bot");
      encontrou = true;
      break;
    }
  }

  if (!encontrou) {
    adicionarMensagem(`
      <div class='text-center p-5 bg-gray-900 rounded-lg'>
        <p class="text-lg font-semibold mb-4 text-red-700">🎉 Olá, FURIOSO! Sou o atendente virtual da <span class='underline-animation'>FURIA</span> e quero te contar algo incrível! 🏆</p>
        <p class="mb-2 text-white">Além de CS:GO, a FURIA conquista títulos no VALORANT, Rainbow Six e muito mais.</p>
        <p class="mb-2 text-white">Descubra todos nossos triunfos no <a class='underline-animation text-red-800' href='https://furia.gg/noticias/' target='_blank'>Blog de Notícias</a> ou siga-nos no <a class='underline-animation text-red-800' href='https://twitter.com/furiagg' target='_blank'>Twitter</a>.</p>
        <img src="https://cdn.furia.gg/media/furia-campea.jpg" alt="FURIA celebrando título" class="mx-auto mt-4 w-48 rounded shadow-lg" />
      </div>
    `, "bot");
  }

  input.value = "";
}

// Eventos do chat
botaoEnviar.addEventListener("click", processarMensagem);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") processarMensagem();
});

// Botões de atalho (data-palavra-chave)
document.querySelectorAll('[data-palavra-chave]').forEach(btn => {
  btn.addEventListener('click', () => {
    input.value = btn.getAttribute('data-palavra-chave');
    processarMensagem();
  });
});
