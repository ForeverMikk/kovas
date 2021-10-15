const buttonPrev = document.getElementById('button-prev')
const buttonNext = document.getElementById('button-next')
const track = document.getElementById('track')
const slickList = document.getElementById('slick-list')

const slick = document.querySelectorAll('.slick')

const slickWidth = slick[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);

function Move(value) {
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth - listWidth) && value == 2) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
        console.log("Uno",track.style.left)
    } else if (leftPosition > 0 && value == 1){
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
        console.log("Dos",track.style.left)
    } else {
        track.style.left = '0px';
        console.log("Tres",track.style.left)
    }

}