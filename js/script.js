const items = [
  {
    id: 0,
    nome: "Camiseta",
    img: "assets/img/photo.jpg",
    quantidade: 0,
  },
  {
    id: 1,
    nome: "Short",
    img: "assets/img/photo.jpg",
    quantidade: 0,
  },
  {
    id: 2,
    nome: "Sapato",
    img: "assets/img/photo.jpg",
    quantidade: 0,
  },
];

inicializarLoja = () => {
  let containerProdutos = document.getElementById("produtos");
  items.map((val) => {
    containerProdutos.innerHTML +=
      `
            <div class="produto-single">
              <img src="` +
      val.img +
      `" />
              <p>` +
      val.nome +
      `</p>
              <a key="` +
      val.id +
      `" href="#">Adicionar ao carrinho</a>
            </div>
          `;
  });
};

inicializarLoja();

atualizarCarrinho = () => {
  let containerCarrinho = document.getElementById("carrinho");
  containerCarrinho.innerHTML = ""; // Inicia vazio.
  items.map((val) => {
    if (val.quantidade > 0) {
      containerCarrinho.innerHTML +=
        `
          <p><strong>Produto: </strong>` +
        val.nome +
        ` | <strong>Quantidade: </strong>` +
        val.quantidade +
        `</p>
            <hr>
            `;
    }
  });
};

let links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let key = this.getAttribute("key");
    items[key].quantidade++;
    atualizarCarrinho();
    return false;
  });
}
