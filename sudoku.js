var guardar="";
//Tablero principal
var tableroPrincipal=document.getElementById("tablero")
var tabla=document.createElement("table")
for (let i = 0; i < 9; i++) {
    let fila = tabla.insertRow()
    for (let j = 0; j <9; j++) {
        let celda = fila.insertCell() 
        celda.onclick=function(){
            celda.innerText=guardar;
        } 
    }
}
tableroPrincipal.appendChild(tabla)
//
//
//
//Tablero de los numeros.
var Numeros = document.getElementById("numeros");
var TNumeros = document.createElement("table");
var filaNumeros = TNumeros.insertRow();
for (let numero = 1; numero <= 10; numero++) {
    let valor = numero === 10 ? "X" : numero;
    let celda2 = filaNumeros.insertCell();
    celda2.id = valor;
    celda2.textContent = valor;
    celda2.addEventListener("click", function () {
        guardar = valor;
    });
}
Numeros.appendChild(TNumeros);
//
//
//
//Poner numeros en la tabla
