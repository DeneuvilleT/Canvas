import { getRandomColor } from "../utilities.js";
import { getRandomInteger } from "../utilities.js";


class Disk {
    constructor(positionX, positionY) {
        
        this.positionX = positionX
        this.positionY = positionY
        this.colorDisk = getRandomColor();
        this.lengthDisk = getRandomInteger(20, 100);
        
    };

    draw() {
        let context = masterpiece.getContext("2d");
        context.beginPath();
        context.fillStyle = this.colorDisk;
        context.arc(this.positionX, this.positionY, this.lengthDisk, 0, 2 * Math.PI);
        context.fill();
    };
};

export default Disk;