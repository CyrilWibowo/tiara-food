import "./Landing.css"
import image1 from "../assets/image-1.jpg"
import image2 from "../assets/image-2.png"
import image3 from "../assets/image-3.jpg"
import image4 from "../assets/image-4.jpg"
import image5 from "../assets/image-5.jpg"
import image6 from "../assets/image-6.jpg"
import image7 from "../assets/image-7.jpg"
import image8 from "../assets/image-8.jpg"
import image9 from "../assets/image-9.jpg"

const Landing = () => {

  window.onmousedown = e => {
    const track = document.getElementById("image-track");
    track.dataset.mouseDownAt = e.clientX;
  }

  window.onmousemove = e => {
    const track = document.getElementById("image-track");
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    let nextPercentage = (parseFloat(track.dataset.prevPercentage) || 0) + percentage;
    console.log(nextPercentage)
    nextPercentage = Math.min(45, nextPercentage);
    nextPercentage = Math.max(-45, nextPercentage);

    track.dataset.percentage = nextPercentage;
    track.animate({
      transform: `translate(calc(-50% + ${nextPercentage}%), -50%)`
    }, { duration: 2400, fill: "forwards" });
  }

  window.onmouseup = () => {
    const track = document.getElementById("image-track");
    track.dataset.prevPercentage = track.dataset.percentage;
    track.dataset.mouseDownAt = "0";
  }

  return (
    <div className="Landing">
      <div className="crosshair"></div>
      <div className="image-track" id="image-track" data-mouse-down-at="0" data-prev-percentage="4" data-percentage="4">
        <div className="track-column-left">
          <div className="left-up">
            <div className="card card-1">
              <img src={image1} alt="Card 1" draggable="false" />
            </div>
            <div className="card card-2">
              <img src={image2} alt="Card 2" draggable="false" />
            </div>
          </div>
          <div className="left-down">
            <div className="card card-7">
              <img src={image7} alt="Card 7" draggable="false" />
            </div>
            <div className="card card-8">
              <img src={image8} alt="Card 8" draggable="false" />
            </div>
          </div>
        </div>
        <div className="middle-square">
          <div className="card card-5">
            <img src={image5} alt="Card 5" draggable="false" />
          </div>
        </div>
        <div className="track-column-right-1">
          <div className="card card-6">
            <img src={image6} alt="Card 6" draggable="false" />
          </div>
        </div>
        <div className="track-column-right-2">
          <div className="right-up">
            <div className="card card-3">
              <img src={image3} alt="Card 3" draggable="false" />
            </div>
            <div className="card card-4">
              <img src={image4} alt="Card 4" draggable="false" />
            </div>
          </div>
          <div className="right-down">
            <div className="card card-9">
              <img src={image9} alt="Card 9" draggable="false" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Landing