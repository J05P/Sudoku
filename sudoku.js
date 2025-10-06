var guardar="";
//Tablero principal
var tableroPrincipal=document.getElementById("tablero")
var tabla=document.createElement("table")
for (let i = 0; i < 9; i++) {
    var fila = tabla.insertRow()
    for (let j = 0; j <9; j++) {
        var celda = fila.insertCell() 
        celda.onclick=function(){
            fila.innerText=guardar;
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
    var celda = filaNumeros.insertCell();
    celda.id=numero;
    celda.addEventListener("click",function(){
        if(numero ==10){numero="X"}
        guardar=numero;
    })
    if(numero ==10){
        celda.textContent="X";
    }else{
        celda.textContent = numero;
    }
}
Numeros.appendChild(TNumeros);
//
//
//
//Poner numeros en la tabla
