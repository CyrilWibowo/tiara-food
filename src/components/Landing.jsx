import { useState } from "react"
import "./Landing.css"
import NavOverlay from "./NavOverlay"
import image1 from "../assets/image-1.jpg"
import image2 from "../assets/image-2.png"
import image3 from "../assets/image-3.jpg"
import image4 from "../assets/image-4.jpg"
import image5 from "../assets/image-5.jpg"
import image6 from "../assets/image-6.jpg"
import image7 from "../assets/image-7.jpg"
import image8 from "../assets/image-8.jpg"
import image9 from "../assets/image-9.jpg"

const sections = ["home", "about", "contact"]

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const navigateTo = (sectionId) => {
    const newIndex = sections.indexOf(sectionId)
    if (newIndex !== -1) {
      setCurrentIndex(newIndex)
    }
  }

  const getSectionStyle = (index) => {
    const diff = index - currentIndex
    // Each section moves up or down based on its position relative to current
    return {
      transform: `translateY(${diff * 100}vh)`,
      transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
    }
  }

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
    nextPercentage = Math.min(45, nextPercentage);
    nextPercentage = Math.max(-45, nextPercentage);

    track.dataset.percentage = nextPercentage;
    track.animate({
      transform: `translate(calc(-50% + ${nextPercentage}%), -50%)`
    }, { duration: 2400, fill: "forwards" });

    const dots = document.querySelectorAll(".scroll-indicator .dot");
    const activeIndex = 4 - Math.round(((nextPercentage + 45) / 90) * 4);
    dots.forEach((dot, i) => {
      if (i === activeIndex) {
        dot.textContent = "✦";
        dot.classList.add("active");
      } else {
        dot.textContent = "•";
        dot.classList.remove("active");
      }
    });
  }

  window.onmouseup = () => {
    const track = document.getElementById("image-track");
    track.dataset.prevPercentage = track.dataset.percentage;
    track.dataset.mouseDownAt = "0";
  }

  return (
    <div className="page-container">
      <NavOverlay onNavigate={navigateTo} currentIndex={currentIndex} />

      {/* Home Section */}
      <section className="page-section" id="home" style={getSectionStyle(0)}>
        <div className="section-content">
          <div className={`crosshair ${currentIndex === 0 ? "visible" : ""}`}></div>
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
          <div className={`scroll-indicator ${currentIndex === 0 ? "visible" : ""}`} id="scroll-indicator">
            <span className="dot">•</span>
            <span className="dot">•</span>
            <span className="dot active">✦</span>
            <span className="dot">•</span>
            <span className="dot">•</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="page-section" id="about" style={getSectionStyle(1)}>
        <div className="section-content">
          <div className="stockists">
            <div className="stockist-about">Available at 17 Perth Locations:</div>
            <div className="stockist-columns">
              <div className="stockist-column">
                <div className="stockist">
                  <div className="stockist-name">Lucky Import & Export Co Pty Ltd</div>
                  <div className="stockist-address">112-118 Brisbane St, Perth, WA 6000</div>
                </div>
                <div className="stockist">
                  <div className="stockist-name">Med Halal & Honeywell Meats</div>
                  <div className="stockist-address">73 Honeywell Blvd, Mirrabooka, WA 6061</div>
                </div>
                <div className="stockist">
                  <div className="stockist-name">San Fatt Trading</div>
                  <div className="stockist-address">200 Spencer Rd, Thronlie, WA 6108</div>
                </div>
                <div className="stockist">
                  <div className="stockist-name">Market City Gourmet Food</div>
                  <div className="stockist-address">Shop 4, 280 Bannister, Canning Vale, WA 6155</div>
                </div>
                <div className="stockist">
                  <div className="stockist-name">NP Carousel Supermarket</div>
                  <div className="stockist-address">45 Cecil Avenue, Cannington, WA 6170</div>
                </div>
                <div className="stockist">
                  <div className="stockist-name">NP Oriental Supermarket</div>
                  <div className="stockist-address">161 Altone Rd, Beechboro, WA 6063</div>
                </div>
                <div className="stockist">
                  <div className="stockist-name">NP Oriental Supermarket</div>
                  <div className="stockist-address">3 Wade Ct, Girrawheen, WA 6064</div>
                </div>
                <div className="stockist">
                  <div className="stockist-name">Kai Supermarket</div>
                  <div className="stockist-address">15b/342 Albany Hyw, Victoria Park, WA 6100</div>
                </div>
                <div className="stockist">
                  <div className="stockist-name">MCQ Beechboro</div>
                  <div className="stockist-address">Shop 17/412 Beechboro Rd, Morely, WA, 6062</div>
                </div>
              </div>
              <div className="stockist-column">
                <div className="stockist">
                  <div className="stockist-name">Yee Sheng Oriental Supermarket</div>
                  <div className="stockist-address">36 Hulme Court, Myaree, WA 6154</div>
                </div>
                <div className="stockist">
                  <div className="stockist-name">The Corner Store</div>
                  <div className="stockist-address">235 Bussel Hyw, West Busselton, WA 6280</div>
                </div>
                <div className="stockist">
                  <div className="stockist-name">Golden Choice Frest Market</div>
                  <div className="stockist-address">369 Roberts Rd, Subiaco, WA 6008</div>
                </div>
                <div className="stockist">
                  <div className="stockist-name">OK Oriental Mini Mart</div>
                  <div className="stockist-address">47 Davidson Terrace, Joondalup, WA 6027</div>
                </div>
                <div className="stockist">
                  <div className="stockist-name">MCQ Conventry Village</div>
                  <div className="stockist-address">243-253 Walter Rd, Morely, WA 6062</div>
                </div>
                <div className="stockist">
                  <div className="stockist-name">Kongs</div>
                  <div className="stockist-address">784 Albany Hyw, East Victoria Park, WA 6101</div>
                </div>
                <div className="stockist">
                  <div className="stockist-name">Chan Bros Import & Export</div>
                  <div className="stockist-address">183 High Road, Willetton, WA 6155</div>
                </div>
                <div className="stockist">
                  <div className="stockist-name">Fremantle Mini-Mart</div>
                  <div className="stockist-address">Shop 5, 29 Cantonment St, Fremantle, WA 6160</div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-us">
            We are a Perth-based Australian company dedicated to crafting premium, locally-made
            tempeh using exclusively Australian non-GMO soybeans. Our mission is to bring the
            exceptional nutritional benefits of <span className="tempeh">Tempeh</span> to
            Australian tables and share this superfood with the world.
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="page-section" id="contact" style={getSectionStyle(2)}>
        <div className="section-content">
          <h1>Contact</h1>
        </div>
      </section>
    </div>
  )
}
export default Landing