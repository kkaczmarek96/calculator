const displayNumber = document.getElementById("display");
const buttons = document.querySelectorAll('.numbers');
const resetDisplay = document.querySelector('.reset');
const calculateNum = document.querySelector('.calculate');

let display = '';  

function appendToDisplay() {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            display += button.textContent;  
            displayNumber.value = display;  
        });
    });
}
appendToDisplay();


resetDisplay.addEventListener('click', () => {
        display = '';
        displayNumber.value = display;  
})


calculateNum.addEventListener('click', () => {
    displayNumber.value = eval(display);
})

