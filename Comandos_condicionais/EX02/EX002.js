function verificarDivisibilidade() {
    let numero = parseInt(prompt("Digite um número:"));

    if (numero % 10 === 0) {
        alert(numero + " é divisível por 10.");
    } else if (numero % 5 === 0) {
        alert(numero + " é divisível por 5.");
    } else if (numero % 2 === 0) {
        alert(numero + " é divisível por 2.");
    } else {
        alert(numero + " não é divisível por 10, 5 ou 2.");
    }
}