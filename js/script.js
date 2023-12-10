let inp1 = document.getElementById('num1');
let inp2 = document.getElementById('num2');
let btnDel = document.getElementById('del');
let btnYmn = document.getElementById('ymn');
let btnVch = document.getElementById('vch');
let btnSlh = document.getElementById('slh');;
let rusult = document.getElementById('result');

btnDel.addEventListener('click', function() {
    result.value = (Number(inp1.value)) / (Number(inp2.value))
})  
btnYmn.addEventListener('click', function() {
    result.value = (Number(inp1.value)) * (Number(inp2.value))
})
btnVch.addEventListener('click', function() {
    result.value = (Number(inp1.value)) - (Number(inp2.value))
})
btnSlh.addEventListener('click', function() {
    result.value = (Number(inp1.value)) + (Number(inp2.value))
})

