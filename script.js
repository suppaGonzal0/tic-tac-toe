const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

let playerTurn = true;

let availableCells = [0,1,2,3,4,5,6,7,8];

const positions = new Array(9).fill(0);

const restartModal = document.getElementById("restartModal");
const openRestartModal = document.getElementById("openRestart");
const closeRestartModal = document.getElementById("cancelRestart");
const bg = document.getElementById("bg");
const cells = document.querySelectorAll("[cell]");

openRestartModal.addEventListener('click', () => {
    bg.style.visibility = "visible";
    restartModal.style.visibility = "visible"
})

closeRestartModal.addEventListener('click', () => {
    bg.style.visibility = "hidden";
    restartModal.style.visibility = "hidden"
    console.log(closeRestartModal.id);
})


// const startGame = () => {
//     while(availableCells.length > 0){
//         if(playerTurn){
//             playerMove()
//         } else{
//             cpuMove()
//         }        
//         turn()    
//     }
// }

const turn = () => {
    playerTurn = !playerTurn;
}

const playerMove = (id) => {
        positions[id] = 1
        availableCells = availableCells.filter(index => index != id)
        if(availableCells.length > 0){
            cpuMove()
        }
}

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}

const cpuMove = () => {
    const cpuMove = getRandomItem(availableCells);
    positions[cpuMove] = 9
    availableCells = availableCells.filter(index => index != cpuMove)
    document.getElementById(Number(cpuMove)+10).innerText = "circle"
    document.getElementById(cpuMove).checked = true;
    console.log("CPU Turn", cpuMove)
}

const isWin = () => {
    
}

const resetGrid = () => {

}

// startGame()