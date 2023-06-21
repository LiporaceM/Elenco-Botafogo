window.onload = () => {
    lerInfos()
}

let divDetalhes = document.getElementById('detalhes')
let btvoltar = document.getElementById('voltar')

btvoltar.addEventListener('click', ()=>{
    window.location.href = './index.html'
})


function lerInfos(){
    divDetalhes.innerHTML = `
    <img src="${localStorage.getItem('@Imagem')}">



    <p>${localStorage.getItem('@Nome')}</p>
    <p>${localStorage.getItem('@Posicao')}</p>
    <p>${localStorage.getItem('@Descricao')}</p>
    <strong>Nome completo: </strong> <span> ${localStorage.getItem('@Nome')} </span>
    <strong>Nascimento: </strong> <span> ${localStorage.getItem('@Nascimento')} </span>
    <strong>Altura: </strong> <span> ${localStorage.getItem('@Altura')} </span>
    
    `;
}