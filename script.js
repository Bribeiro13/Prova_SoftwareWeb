function cadastrarEstudante(event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value;
    var matricula = document.getElementById('matricula').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var media = calcularMedia(nota1, nota2);
    var statusFinal = obterStatusFinal(media);
    var linha = criarLinha(nome, matricula, nota1, nota2, media, statusFinal);
    
    enviarInfo(linha);
}

function calcularMedia(nota1, nota2) 
{
    return (nota1 + nota2) / 2;
}

function obterStatusFinal(media) 
{
    return media >= 5 ? "Aprovado" : "Reprovado";
}

function criarLinha(nome, matricula, nota1, nota2, media, statusFinal) 
{
    var linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${matricula}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${media.toFixed(2)}</td>
        <td>${statusFinal}</td>
    `;
    return linha;
}

function enviarInfo(linha) 
{
    let corpoTabela = document.querySelector('#info tbody');
    corpoTabela.appendChild(linha);
}
document.getElementById('form').addEventListener('submit', cadastrarEstudante);