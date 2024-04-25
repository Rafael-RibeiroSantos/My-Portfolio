const btns = document.querySelectorAll(".btn")

btns.forEach(btn => btn.addEventListener("click", () => btnClicked(btn)));

function btnClicked(btn) {
    btns.forEach(btn => btn.classList.remove("pressionado"));
    btn.classList.add("pressionado")

    const secoes = document.querySelectorAll(".secao");
    secoes.forEach(secao => secao.classList.remove("mostrar"));

    const secaoId = btn.getAttribute("content-id");
    const secao = document.getElementById(secaoId);
    
    secao.classList.add("mostrar")
}