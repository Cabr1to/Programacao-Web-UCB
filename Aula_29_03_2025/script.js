document.getElementById("add_button").addEventListener("click", addItem, false)

let array_itens = [];

function addItem(){
    const input = document.getElementById("nome_item")
    const item = input.value.trim()

    if (item == ""){
        alert("Insira um item!")
        return
    }

    array_itens.push(item)
    input.value = ""
}

let tabela = document.createElement(tabela)