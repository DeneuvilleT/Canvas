import { getRandomColor } from "../utilities.js";
import { getRandomInteger } from "../utilities.js";


class Disk {
    constructor() {
        
        masterpiece.addEventListener('click', (e) => {

            this.positionX = e.clientX - 340;
            this.positionY = e.clientY - 340;
            this.colorDisk = getRandomColor(0, 255);
            this.lengthDisk = getRandomInteger(50, 200);
            console.log(this.positionX, this.positionY)

        });
    };
    
    draw() {
        let context = masterpiece.getContext("2d");
        context.beginPath();
        context.fillStyle = this.colorDisk;
        context.arc(this.positionX, this.positionY, this.lengthDisk, 0, 2 * Math.PI);
        context.fill();
        console.log(context);
    };

};

export default Disk;







// set yop() {
    
    // }
// setter, getter en rapport avec des propriétés du constructor
// une méthode draw(argument à trouver)

// crétaion du constructor, définitiopn des propriété avec valeur par défaut
// color
// taille(radius)
// position de base x et y