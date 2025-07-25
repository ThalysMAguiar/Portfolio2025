function abrirWhatsapp() {
  const numero = "5521989043776"; 
  const mensagem = encodeURIComponent("Olá, vi seu currículo online e gostaria de conversar!");
  const link = `https://wa.me/${numero}?text=${mensagem}`;
  window.open(link, "_blank");
}

const themeBtn = document.getElementById("toggle-theme");
const body = document.body;

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

function abrirCard(id) {
  const card = document.getElementById(id);
  if (card) card.style.display = "flex";
}

function fecharCard(id) {
  const card = document.getElementById(id);
  if (card) card.style.display = "none";
}

document.querySelectorAll(".vejamais").forEach((btn) => {
  btn.addEventListener("click", () => {
    const cardId = btn.getAttribute("data-card");
    abrirCard(cardId);
  });
});

document.querySelectorAll(".fechar-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const cardId = btn.getAttribute("data-close");
    fecharCard(cardId);
  });
});

const btnVejaMais = document.querySelector('.vejamais');
const cardExpandido = document.getElementById('cardExpandido');
const btnFechar = document.querySelector('.fechar-btn');

btnVejaMais.addEventListener('click', () => {
  cardExpandido.style.display = 'flex';
});

btnFechar.addEventListener('click', () => {
  cardExpandido.style.display = 'none';
});

 const imagens = document.querySelectorAll('.imagens-galeria img');
  const modal = document.getElementById('imagem-modal');
  const imagemModal = document.querySelector('.imagem-ampliada');
  const fecharBtn = document.querySelector('.fechar-imagem');
  const setaEsquerda = document.querySelector('.seta.esquerda');
  const setaDireita = document.querySelector('.seta.direita');

  let indiceAtual = 0;

  imagens.forEach((img, index) => {
    img.addEventListener('click', () => {
      imagemModal.src = img.src;
      modal.classList.add('active');
      indiceAtual = index;
    });
  });

  fecharBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  setaEsquerda.addEventListener('click', () => {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    imagemModal.src = imagens[indiceAtual].src;
  });

  setaDireita.addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    imagemModal.src = imagens[indiceAtual].src;
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") modal.classList.remove('active');
  });

  const imagensUni = document.querySelectorAll('.imagem-expandidaUni');
  const lightboxUni = document.getElementById('lightboxUni');
  const imagemLightboxUni = document.querySelector('.imagem-lightboxUni');
  const fecharBtnUni = document.querySelector('.fechar-lightboxUni');
  const setaEsquerdaUni = document.querySelector('.setaUni.esquerdaUni');
  const setaDireitaUni = document.querySelector('.setaUni.direitaUni');

  let imagemAtualUni = 0;
  let listaImagensUni = [];

  imagensUni.forEach((img, index) => {
    listaImagensUni.push(img.src);
    img.addEventListener('click', () => {
      imagemAtualUni = index;
      imagemLightboxUni.src = listaImagensUni[imagemAtualUni];
      lightboxUni.style.display = 'flex';
    });
  });

  fecharBtnUni.addEventListener('click', () => {
    lightboxUni.style.display = 'none';
  });

  setaEsquerdaUni.addEventListener('click', () => {
    imagemAtualUni = (imagemAtualUni - 1 + listaImagensUni.length) % listaImagensUni.length;
    imagemLightboxUni.src = listaImagensUni[imagemAtualUni];
  });

  setaDireitaUni.addEventListener('click', () => {
    imagemAtualUni = (imagemAtualUni + 1) % listaImagensUni.length;
    imagemLightboxUni.src = listaImagensUni[imagemAtualUni];
  });

  lightboxUni.addEventListener('click', (e) => {
    if (e.target === lightboxUni) {
      lightboxUni.style.display = 'none';
    }
  });



const imagensRea = document.querySelectorAll('.imagem-expandidaRea');
const lightboxRea = document.getElementById('lightboxRea');
const imagemLightboxRea = document.querySelector('.imagem-lightboxRea');
const fecharBtnRea = document.querySelector('.fechar-lightboxRea');
const setaEsquerdaRea = document.querySelector('.setaRea.esquerdaRea');
const setaDireitaRea = document.querySelector('.setaRea.direitaRea');

let imagemAtualRea = 0;
let listaImagensRea = [];

imagensRea.forEach((img, index) => {
  listaImagensRea.push(img.src);
  img.addEventListener('click', () => {
    imagemAtualRea = index;
    imagemLightboxRea.src = listaImagensRea[imagemAtualRea];
    lightboxRea.style.display = 'flex';
  });
});

fecharBtnRea.addEventListener('click', () => {
  lightboxRea.style.display = 'none';
});

setaEsquerdaRea.addEventListener('click', () => {
  imagemAtualRea = (imagemAtualRea - 1 + listaImagensRea.length) % listaImagensRea.length;
  imagemLightboxRea.src = listaImagensRea[imagemAtualRea];
});

setaDireitaRea.addEventListener('click', () => {
  imagemAtualRea = (imagemAtualRea + 1) % listaImagensRea.length;
  imagemLightboxRea.src = listaImagensRea[imagemAtualRea];
});

lightboxRea.addEventListener('click', (e) => {
  if (e.target === lightboxRea) {
    lightboxRea.style.display = 'none';
  }
});




const imagensPort = document.querySelectorAll('.imagem-expandidaPort');
const lightboxPort = document.getElementById('lightboxPort');
const imagemLightboxPort = document.querySelector('.imagem-lightboxPort');
const fecharBtnPort = document.querySelector('.fechar-lightboxPort');
const setaEsquerdaPort = document.querySelector('.setaPort.esquerdaPort');
const setaDireitaPort = document.querySelector('.setaPort.direitaPort');

let imagemAtualPort = 0;
let listaImagensPort = [];

imagensPort.forEach((img, index) => {
  listaImagensPort.push(img.src);
  img.addEventListener('click', () => {
    imagemAtualPort = index;
    imagemLightboxPort.src = listaImagensPort[imagemAtualPort];
    lightboxPort.style.display = 'flex';
  });
});

fecharBtnPort.addEventListener('click', () => {
  lightboxPort.style.display = 'none';
});

setaEsquerdaPort.addEventListener('click', () => {
  imagemAtualPort = (imagemAtualPort - 1 + listaImagensPort.length) % listaImagensPort.length;
  imagemLightboxPort.src = listaImagensPort[imagemAtualPort];
});

setaDireitaPort.addEventListener('click', () => {
  imagemAtualPort = (imagemAtualPort + 1) % listaImagensPort.length;
  imagemLightboxPort.src = listaImagensPort[imagemAtualPort];
});

lightboxPort.addEventListener('click', (e) => {
  if (e.target === lightboxPort) {
    lightboxPort.style.display = 'none';
  }
});