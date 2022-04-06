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




// déclarer les variables qui vont recevoir le canvas et le context

// fonction getMouseLocation(e) qui va retourner la position de la souris

// fonction onClickCanvas(e) qui va récupérer la position du clic et appeler différenter méthodes pour générer les cercles

// au chargement de la page on va recuperer le CanvasCaptureMediaStreamTrack, le context et installer un écouter
