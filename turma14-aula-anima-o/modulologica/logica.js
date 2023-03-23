let dias = document.getElementById("dia");
let mes = document.getElementById("mes");
let ano = document.getElementById("ano");

for(let i = 1;i <= 31;i++){
    dias.innerHTML += "<option>"+i+"</option>";
}

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
for(let i = 0;i < meses.length;i++){
    mes.innerHTML += "<option>"+meses[i]+"</option>";
}

for(let i = 2023;i > 1950;i--){
    ano.innerHTML += "<option>"+i+"</option>";
}



