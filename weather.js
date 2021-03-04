const COORDS = 'coords';

function askForCoords() {
    navigator
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if(loadCoords === null) {
        askForCoords();
    } else {

    }
}

function init() {

}

init();