import Track1 from '../../assets/pic1.jpg';
import Track2 from '../../assets/pic2.jpg';
import Track3 from '../../assets/pic3.jpg';
import Track4 from '../../assets/pic4.jpg';
import Track5 from '../../assets/pic5.jpg';
import Track6 from '../../assets/pic6.jpg';
import Track7 from '../../assets/pic7.jpg';
import Track8 from '../../assets/pic8.jpg';
import './Tiles.css';

const track = document.getElementById("image-track");
    
window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentage = Math.min(Math.max((parseFloat(track.dataset.prevPercentage) + percentage), -100), 0);

    track.dataset.percentage = nextPercentage;

    track.animate({
      transform: `translate(${nextPercentage}%, -50%)`,
      }, {duration: 1200, fill: "forwards"
    });

    

    for(const image of track.getElementsByClassName("image")) {
      image.animate({
        objectPosition: `${nextPercentage + 100}% 50%`,
        }, {duration: 1200, fill: "forwards"
      });
    }
}

export default function ImageTrack() {
    return (
        <>
        <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
            <img className="image" src={Track1} draggable="false" />
            <img className="image" src={Track2} draggable="false" />
            <img className="image" src={Track3} draggable="false" />
            <img className="image" src={Track4} draggable="false" />
            <img className="image" src={Track5} draggable="false" />
            <img className="image" src={Track6} draggable="false" />
            <img className="image" src={Track7} draggable="false" />
            <img className="image" src={Track8} draggable="false" />
        </div>
        </>
    );
}