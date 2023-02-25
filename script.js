const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]]

let playerTurn = true;
let result = [];
let availableCells = [0,1,2,3,4,5,6,7,8];
let playerPositions = [];
let cpuPositions = [];

const openRestartModal = document.getElementById("openRestart");
const closeRestartModal = document.getElementById("cancelRestart");
const proceedRestart = document.getElementById("proceedRestart");
const resultModal = document.getElementById("resultModalBg");
const restartModal = document.getElementById("restartModalBg");

openRestartModal.addEventListener('click', () => {
    restartModal.style.visibility = "visible"
})

closeRestartModal.addEventListener('click', () => {
    restartModal.style.visibility = "hidden"
})

proceedRestart.addEventListener('click', () => location.reload())

const turn = () => {
    playerTurn = !playerTurn;
}

const playerMove = (id) => {
        playerPositions.push(id)
        availableCells = availableCells.filter(index => index != id)
        result = isWin()
        if(availableCells.length > 0 && result[0] === "DRAW"){
            cpuMove()
        } else{
            showResultModal()
        }
        document.getElementById(id).style.pointerEvents = "none"
}

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}

const cpuMove = () => {
    const cpuMove = getRandomItem(availableCells);
    cpuPositions.push(cpuMove)
    availableCells = availableCells.filter(index => index != cpuMove)
    const selectedCell = document.getElementById(cpuMove)
    selectedCell.children[1].innerText = "circle"
    selectedCell.children[1].style.color = "#F0B237"
    selectedCell.children[0].checked = true;
    selectedCell.style.pointerEvents = "none"
    result = isWin()
    if(result[0] !== "DRAW"){
        showResultModal()
    }
}

const isWin = () => {
    for(combination of winCombinations){
        if(combination.every(value => {
            return playerPositions.includes(value)
        })){
            return ["YOU WON!","X  TAKES THE ROUND"]
        } else if(combination.every(value => {
            return cpuPositions.includes(value)
        })){
            console.log("cpu")
            return ["YOU LOST","O  TAKES THE ROUND"]
        }
    }
    return ["DRAW", "NO ONE TAKES THE ROUND"]
}

// const resetGrid = () => {
//     document.querySelectorAll('input[type=radio]').forEach((input) => {
//         input.checked = false;
//       });
//     bg.style.visibility = "hidden";
//     restartModal.style.visibility = "hidden"
//     availableCells = [0,1,2,3,4,5,6,7,8];
//     playerPositions = [];
//     cpuPositions = [];
// }

const showResultModal = () => {
    resultModal.style.visibility = "visible"
    resultModal.children[0].children[0].innerText = result[0]
    resultModal.children[0].children[1].innerText = result[1]
}