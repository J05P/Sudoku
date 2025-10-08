
let guardar = "";
function crearTablero() {
    const tableroPrincipal = document.getElementById("tablero");
    const tabla = document.createElement("table");
    for (let i = 0; i < 9; i++) {
        const fila = tabla.insertRow();
        for (let j = 0; j < 9; j++) {
            const celda = fila.insertCell();
            celda.id = `${i}-${j}`;
            celda.onclick = () => {
                if (!celda.classList.contains("fija")) {
                    celda.innerText = guardar;
                }
            };
        }
    }
    tableroPrincipal.appendChild(tabla);
}

function crearPanelNumeros() {
    const numerosDiv = document.getElementById("numeros");
    const tNums = document.createElement("table");
    const filaNums = tNums.insertRow();
    for (let num = 1; num <= 10; num++) {
        const valor = (num === 10 ? "X" : num.toString());
        const celda = filaNums.insertCell();
        celda.id = `num-${valor}`;
        celda.innerText = valor;
        celda.onclick = () => {
            guardar = valor;
        };
    }
    numerosDiv.appendChild(tNums);
}


const board = [
    7,4,9,1,6,5,
    2,6,3,9,
    7,1,
    5,8,6,4,
    3,9,
    6,2,1,8,7,
    9,4,7,2,
    6,7,8,3,
    8,1,4,5
];

const posiciones = [
    [0,2],[0,3],[0,4],[0,5],[0,6],[0,8],
    [1,0],[1,4],[1,6],[1,8],
    [2,5],[2,7],
    [3,1],[3,2],[3,3],[3,8],
    [4,2],[4,7],
    [5,2],[5,3],[5,6],[5,7],[5,8],
    [6,0],[6,2],[6,4],[6,8],
    [7,0],[7,1],[7,3],[7,4],
    [8,0],[8,1],[8,4],[8,5]
];


function colocarFijos() {
    for (let i = 0; i < board.length && i < posiciones.length; i++) {
        const [r, c] = posiciones[i];
        const celda = document.getElementById(`${r}-${c}`);
        if (celda) {
            celda.innerText = board[i];
            celda.classList.add("fija"); 
            celda.style.color = "blue";  
            celda.style.backgroundColor="#8888"; 
        }
    }
}

window.onload = function() {
    crearTablero();
    crearPanelNumeros();
    colocarFijos();
};