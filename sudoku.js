var guardar="";
//Tablero principal
var tableroPrincipal=document.getElementById("tablero")
var tabla=document.createElement("table")
for (let i = 0; i < 9; i++) {
    let fila = tabla.insertRow()
    for (let j = 0; j <9; j++) {
        let celda = fila.insertCell() 
        celda.id=(i+"-"+j);
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
//El juego de por si

let board = [7,4,9,1,6,5,
    2,6,3,9,
    7,1,
    5,8,6,4,
    3,9,
    6,2,1,8,7,
    9,4,7,2,
    6,7,8,3,
    8,1,4,5
];

let x=[];
let matriz=[];
x.push(matriz([0][2]),matriz([0][3]),matriz([0][4]),matriz([0][5]),matriz([0][6]),matriz([0][8]),
matriz([1][0]),matriz([1][4]),matriz([1][6]),matriz([1][8]),
matriz([2][5]),matriz([2][7]),
matriz([3][1]),matriz([3][2]),matriz([3][3]),matriz([3][8]),
matriz([4][2]),matriz([4][7]),
matriz([5][2]),matriz([5][3]),matriz([5][6]),matriz([5][7]),matriz([5][8]),
matriz([6][0]),matriz([6][2]),matriz([6][4]),matriz([6][8]),
matriz([7][0]),matriz([7][1]),matriz([7][3]),matriz([7][4]),
matriz([8][0]),matriz([8][1]),matriz([8][4]),matriz([8][5]),
)

for (let index = 0; index < board.length; index++) {
    matriz[i]=x[i]
    
}

let solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
];
