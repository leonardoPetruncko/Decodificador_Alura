const textArea = document.querySelector(".texto-entrada");
const textoSaida = document.querySelector(".texto-saida");
const campoMensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    if (textoEncriptado.length < 1) {
        alert("Digite o texto a ser criptografado");
    } else {
        textoSaida.value = textoEncriptado;
        mostraMensagem();
        textArea.value = "";
    }
}