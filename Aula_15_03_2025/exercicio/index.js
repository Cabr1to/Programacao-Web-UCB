var incrementar = document.getElementById("incrementar")
var decrementar = document.getElementById("decrementar")
var num = document.getElementById("numero")
let count = 0


incrementar.onclick = function(){
    count++
    num.textContent = count
}

decrementar.onclick = function(){
    if (count == 0) {
        alert("O contador já está em 0")
    }else{
        count--
        num.textContent = count
    }
}