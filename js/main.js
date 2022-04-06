import Disk from "./class/Disk.class.js";


document.addEventListener('DOMContentLoaded', () => {
    
    const newDisk = new Disk;

    masterpiece.addEventListener('click', () => {
        onClickCanvas();
    });

    function onClickCanvas() {
        newDisk.draw();
    };
    
});