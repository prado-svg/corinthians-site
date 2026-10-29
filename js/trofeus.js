const botaoProximo = document.getElementById("proximo");
const botaoAnterior = document.getElementById("anterior");

const imagemTrofeu = document.getElementById("imagem-trofeu");
const nomeTrofeu = document.getElementById("trofeu-nome");
const quantidadeTrofeu = document.getElementById("trofeu-quantidade");
const anosTrofeu = document.getElementById("trofeu-anos");

// Nossa colecao de trofeus
const trofeus = [
  {
    nome: "Mundial de Clubes",
    quantidade: 2,
    anos: "2000 • 2012",
    imagem: "img/trofeus/mundial.png",
    classe: ""
  },
  {
    nome: "Copa Libertadores",
    quantidade: 1,
    anos: "2012",
    imagem: "img/trofeus/libertadores.png",
    classe: "libertadores"
  },
  {
    nome: "Campeonato Brasileiro",
    quantidade: 7,
    anos: "1990 • 1998 • 1999 • 2005 • 2011 • 2015 • 2017",
    imagem: "img/trofeus/brasileirao.png",
    classe: "brasileirao"
  },
  {
    nome: "Copa do Brasil",
    quantidade: 4,
    anos: "1994/95 • 2002 • 2009 • 2025",
    imagem: "img/trofeus/cdb.png",
    classe: "cdb"
  },
  {
    nome: "Campeonato Paulista",
    quantidade: 31,
    anos: "2025 • 2019 • 2018 • 2017 • 2013 • 2009 • 02/03 • 00/01 • 98/99 • 96/97 • 94/95 • 87/88 • 82/83 • 81/82 • 78/79 • 76/77 • 53/54 • 51/52 • 50/51 • 40/41 • 38/39 • 37/38 • 36/37 • 1929/30 • 1928/29 • 1927/28 • 1923/24 • 1922/23 • 1921/22 • 1915/16 • 1913/14",
    imagem: "img/trofeus/paulista.png",
    classe: "paulista"
  },
  {
    nome: "Supercopa do Brasil",
    quantidade: 2,
    anos: "1991 • 2026",
    imagem: "img/trofeus/supercopa.png",
    classe: "supercopa"
  },
  {
    nome: "Recopa Sudamericana",
    quantidade: 1,
    anos: "2013",
    imagem: "img/trofeus/recopa.png",
    classe: "recopa"
  },
  {
    nome: "Brasileiro Serie B",
    quantidade: 1,
    anos: "2008",
    imagem: "img/trofeus/serieb.png",
    classe: "serieb"
  },

];

// Qual trofeu esta sendo mostrado?
let indiceAtual = 0;

// Atualiza a sala
function mostrarTrofeu() {
  const trofeu = trofeus[indiceAtual];

  imagemTrofeu.src = trofeu.imagem;
  imagemTrofeu.alt = "Troféu: " + trofeu.nome;
  imagemTrofeu.className = "trofeu-imagem";

  if (trofeu.classe !== "") {
    imagemTrofeu.classList.add(trofeu.classe);
  }

  nomeTrofeu.textContent = trofeu.nome;
  document.querySelector(".sala-palco").classList.toggle(
    "palco-paulista",
    trofeu.classe === "paulista"
  );

  quantidadeTrofeu.textContent =
    trofeu.quantidade === 1
      ? "1 título"
      : trofeu.quantidade + " títulos";

  anosTrofeu.textContent = trofeu.anos;
}

// Seta direita
botaoProximo.addEventListener("click", function() {
  indiceAtual = (indiceAtual + 1) % trofeus.length;
  mostrarTrofeu();
});

// Seta esquerda
botaoAnterior.addEventListener("click", function() {
  indiceAtual = (indiceAtual - 1 + trofeus.length) % trofeus.length;
  mostrarTrofeu();
});

// Mostra o primeiro trofeu quando a pagina abre
mostrarTrofeu();
