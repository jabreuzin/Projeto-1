function calcular() {
    var valor = parseInt(document.getElementById("valor").value);
    var taxa = parseInt(document.getElementById('taxa').value);
    // console.log(valor);
    // console.log(taxa);

    var total = (valor*taxa)/100
    // console.log("Total com taxa de Serviço: R$", valor+total);
    var result = valor+total

    var resultado = document.getElementById('resultado')
    resultado.innerHTML += `<div class='col p-2 container1 rounded'>
                                <h6 class='text-start'>Valor total com a taxa de serviço:</h6>
                                <p class='text-start'>R$ ${result}</p>
                                <p class='text-start'>Valor da gorjeta: R$${total}</p>
                            </div>`
}

function limpar() {
    document.getElementById('valor').value = ""
    document.getElementById('taxa').value = ""
    window.location.reload()
}

