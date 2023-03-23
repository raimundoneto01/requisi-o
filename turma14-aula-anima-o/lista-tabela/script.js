let produtos = ["Vodka", "gelo", "Limão"];
let lista = document.querySelector("#lista");


for(let i = 0;i < produtos.length;i++){
    lista.innerHTML += `<li class= "list-group-item mt-3">
                            ${produtos[i]}
                        </li>`;
}

function adicionarProduto(){
    produtos.push(produto.value);
    lista.innerHTML += `<li class= "list-group-item mt-3">
    ${produto.value}
</li>`;
produto.value = "";
}

