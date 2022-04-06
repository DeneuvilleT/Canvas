
// fonction getRandomColor va retourner une string avec des valeurs rgba
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// fonction getRandomInteger
function getRandomColor(max, min) {
    let r = Math.floor(Math.random() * (max - min + 1)) + min;
    let g = Math.floor(Math.random() * (max - min + 1)) + min;
    let b = Math.floor(Math.random() * (max - min + 1)) + min;
    let a = Math.random();
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export { getRandomColor };
export { getRandomInteger };