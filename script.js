// Rola até a seção de produtos
function rolarParaProdutos() {
    document.querySelector("#produtos").scrollIntoView({ behavior: "smooth" });
}

// Formulário de contato
document.getElementById("form-contato").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("mensagem").innerText = "Mensagem enviada com sucesso!";
});
