function Calcular() {
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var resultado = document.getElementById("resultado")


if (inicio.value.length == 0 || fim.value.length == 0|| passo.value.length == 0)
    window.alert("Erro! Falta inserir os dados")

else {
    resultado.innerHTML = 'Contando...'
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    while (i <= f) {
        i += p
        resultado.innerHTML += `${i} `
    }
}


}