function calcularRanque(vitorias, derrotas) {

    let saldoVitorias = vitorias - derrotas;

    let nivel;
    
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
  
    return { saldoVitorias, nivel };
}

while (true) {

    let vitorias = parseInt(prompt("Digite o número de vitórias:"));
    let derrotas = parseInt(prompt("Digite o número de derrotas:"));

    if (isNaN(vitorias) || isNaN(derrotas)) {
        alert("Por favor, insira números válidos.");
        continue; 
    }

   
    let resultado = calcularRanque(vitorias, derrotas);

    alert(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
    
    
    let continuar = prompt("Deseja calcular novamente? (s/n)").toLowerCase();
    if (continuar !== 's') {
        break; 
    }
}
