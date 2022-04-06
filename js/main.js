import Disk from "./class/Disk.class.js";


document.addEventListener('DOMContentLoaded', () => {

    masterpiece.addEventListener('click', (e) => {
        const newDisk = new Disk(e.offsetX, e.offsetY);
        newDisk.draw()  
    });

});