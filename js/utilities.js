function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


function getRandomColor() {
    let r = getRandomInteger(0, 255)
    let g = getRandomInteger(0, 255)
    let b = getRandomInteger(0, 255)
    let a = Math.random();
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export { getRandomColor };
export { getRandomInteger };