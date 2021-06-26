const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const $start = document.querySelector('.button[data-action="start"]'),
    $stop = document.querySelector('.button[data-action="stop"]');

let changeColor = null;

const randomIntegerFromInterval = (num) => {
    return Math.ceil(Math.random() * num);
};

$start.addEventListener("click", () => {
    changeColor = setInterval(() => {
        document.querySelector('body').style.
            backgroundColor = colors[randomIntegerFromInterval(colors.length - 1)];
    }, 1500);
    $start.setAttribute('disabled', true);
    $stop.removeAttribute('disabled');
});

$stop.addEventListener("click", () => {
    clearInterval(changeColor);
    $stop.setAttribute('disabled', true);
    $start.removeAttribute('disabled');
});