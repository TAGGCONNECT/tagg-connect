/* ==========================================================
   TAGG CONNECT
   Script Principal
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    carregarEmpresa();

    criarBotoes();

    aplicarTema();

    iniciarAnimacoes();

});



/* ==========================================================
   CARREGA DADOS DA EMPRESA
========================================================== */

function carregarEmpresa() {

    document.getElementById("nomeEmpresa").innerHTML =
        `${empresa.nome} <span>${empresa.complemento}</span>`;

    document.getElementById("descricaoEmpresa").innerText =
        empresa.slogan;

    document.getElementById("logoEmpresa").src =
        empresa.logo;

}



/* ==========================================================
   CRIA TODOS OS BOTÕES
========================================================== */

function criarBotoes() {

    const lista = document.getElementById("listaBotoes");

    lista.innerHTML = "";

    empresa.botoes.forEach(botao => {

        if (!botao.ativo) return;

        const card = document.createElement("a");

        card.href = botao.link;

        card.target = "_blank";

        card.className = "card-link";

        card.innerHTML = `

            <div class="card-esquerda">

                <div class="icone">

                    <i class="${botao.icone}"></i>

                </div>

                <div class="texto">

                    <h3>${botao.titulo}</h3>

                    <p>${botao.descricao}</p>

                </div>

            </div>

            <div class="seta">

                <i class="fa-solid fa-chevron-right"></i>

            </div>

        `;

        lista.appendChild(card);

    });

}



/* ==========================================================
   APLICA TEMA
========================================================== */

function aplicarTema() {

    document.documentElement.style.setProperty(

        "--cor-principal",

        empresa.corPrincipal

    );

    document.documentElement.style.setProperty(

        "--background",

        empresa.corFundo

    );

    document.documentElement.style.setProperty(

        "--card",

        empresa.corCard

    );

}



/* ==========================================================
   ANIMAÇÕES
========================================================== */

function iniciarAnimacoes() {

    const hero = document.querySelector(".hero");

    hero.classList.add("mostrar");

    const cards = document.querySelectorAll(".card-link");

    cards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add("mostrar");

        }, 150 * index);

    });

}
