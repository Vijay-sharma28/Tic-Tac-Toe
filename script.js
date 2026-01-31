let btns = document.querySelectorAll('.box');
let resetGameBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let result = document.querySelector('#result');

let turnO = true;
newGameBtn.disabled = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

btns.forEach((click) => {
    click.addEventListener('click', () => {
        if (turnO) {
            click.innerText = "O";
            turnO = false;
        }
        else {
            click.innerText = "X";
            turnO = true;
        }
        click.disabled = true;

        checkWinner();
    });
});

const disableBtns = () => {
    for (let btn of btns) {
        btn.disabled = true; 
    }
}

const enableBtns = () => {
    for (let btn of btns) {
        btn.disabled = false;
        btn.innerHTML = "";
    }
}

const results = (winner) => {
    alert(`Congratulation, Winner is ${winner}`);
    result.innerHTML = `Congratulation, Winner is ${winner}`;
    result.classList.remove("hide");
    disableBtns();
}

const checkWinner = () => {
    for (let winner of winPatterns) {
        let firstVal = btns[winner[0]].innerText;
        let secondVal = btns[winner[1]].innerText;
        let thirdVal = btns[winner[2]].innerText;

        if (firstVal != "" && secondVal != "" && thirdVal != "") {
            if (firstVal === secondVal && secondVal === thirdVal) {
                results(firstVal);
                newGameBtn.disabled = false;
                resetGameBtn.disabled = true;
            }
        }
    }
}

const resetBtn = () => {
    turnO = true;
    enableBtns();
    result.classList.add("hide");
    newGameBtn.disabled = true;
    resetGameBtn.disabled = false;
}

newGameBtn.addEventListener("click", resetBtn);
resetGameBtn.addEventListener("click", resetBtn);