function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


function getRandomColor() {
    const r = getRandomInteger(0, 255)
    const g = getRandomInteger(0, 255)
    const b = getRandomInteger(0, 255)
    const a = Math.random();
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export { getRandomColor };
export { getRandomInteger };