import { getRandomColor } from "../utilities.js";
import { getRandomInteger } from "../utilities.js";


class Disk {
    constructor() {
        
        masterpiece.addEventListener('click', (e) => {

            this.positionX = e.offsetX;
            this.positionY = e.offsetY;
            this.colorDisk = getRandomColor();
            this.lengthDisk = getRandomInteger(20, 100);

        });
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