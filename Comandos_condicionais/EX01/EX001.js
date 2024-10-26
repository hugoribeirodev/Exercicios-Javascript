function calcularCalorias() {
    const calorias = {
        prato: [180, 200, 250, 300],
        sobremesa: [75, 90, 110, 150], 
        bebida: [30, 120, 100, 0]
    };

    let prato = parseInt(prompt("Escolha o prato:\n1 - Vegetariano\n2 - Peixe\n3 - Frango\n4 - Carne")) - 1;
    let sobremesa = parseInt(prompt("Escolha a sobremesa:\n1 - Abacaxi\n2 - Sorvete diet\n3 - Mousse diet\n4 - Mousse chocolate")) - 1;
    let bebida = parseInt(prompt("Escolha a bebida:\n1 - Chá\n2 - Suco de laranja\n3 - Suco de melão\n4 - Refrigerante diet")) - 1;

    if (prato < 0 || prato > 3 || sobremesa < 0 || sobremesa > 3 || bebida < 0 || bebida > 3) {
        alert("Escolha inválida. Tente novamente.");
        return;
    }

    const totalCalorias = calorias.prato[prato] + calorias.sobremesa[sobremesa] + calorias.bebida[bebida];
    alert("Total de calorias da refeição: " + totalCalorias + " calorias.");
}

verificarDivisibilidade();