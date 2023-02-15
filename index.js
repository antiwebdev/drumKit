let btns = document.querySelectorAll('.drum');

btns.forEach((i) => {
    i.addEventListener('click', function () {

        let buttonLetter = this.innerHTML;

        keyMakeSound(buttonLetter);
        buttonAnimation(buttonLetter);
    });
});



function playMusic(src) {
    var audio = new Audio(`sounds/${src}.mp3`);
    audio.play();
}

document.addEventListener('keydown', (event) => {
    keyMakeSound(event.key);
    buttonAnimation(event.key);
});

function keyMakeSound (key) {
    switch (key) {
        case "w":
                playMusic("tom-1");
                break;
            case "a":
                playMusic("tom-2");
                break;
            case "s":
                playMusic("tom-3");
                break;
            case "d":
                playMusic("tom-4");
                break;
            case "j":
                playMusic("snare");
                break;
            case "k":
                playMusic("crash");
                break;
            case "l":
                playMusic("kick-bass");
                break;
            default:
                break;
    }
}


function buttonAnimation(currentKey) {

    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}