import "./Landing.css"
import image1 from "../assets/image-1.jpg"

const Landing = () => {

  window.onmousedown = e => {
    const track = document.getElementById("image-track");
    track.dataset.mouseDownAt = e.clientX;
  }

  window.onmousemove = e => {
    const track = document.getElementById("image-track");
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth;

    const percentage = (mouseDelta / maxDelta) * -100;
    let nextPercentage = (parseFloat(track.dataset.prevPercentage) || 0) + percentage;
    console.log(nextPercentage)
    nextPercentage = Math.min(45, nextPercentage);
    nextPercentage = Math.max(-45, nextPercentage);

    track.dataset.percentage = nextPercentage;
    track.style.transform = `translate(calc(-50% + ${nextPercentage}%), -50%)`
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
              <img src={image1} alt="Card 1" />
            </div>
            <div className="card card-2"></div>
          </div>
          <div className="left-down">
            <div className="card card-7"></div>
            <div className="card card-8"></div>
          </div>
        </div>
        <div className="middle-square">
          <div className="card card-5"></div>
        </div>
        <div className="track-column-right-1">
          <div className="card card-6"></div>
        </div>
        <div className="track-column-right-2">
          <div className="right-up">
            <div className="card card-3"></div>
            <div className="card card-4"></div>
          </div>
          <div className="right-down">
            <div className="card card-9"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Landing