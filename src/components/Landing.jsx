import { useState, useEffect, useRef } from "react"
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
import phoneLogo from "../assets/phone-logo.png"
import emailLogo from "../assets/email-logo.webp"
import facebookLogo from "../assets/facebook-logo.png"
import instagramLogo from "../assets/instagram-logo.png"
import juraganTempeLogo from "../assets/juragan-tempe-logo.png"
import aboutUsImage from "../assets/about-us-image.webp"

const sections = ["home", "about", "contact"]

const stockists = [
  { name: "Lucky Import & Export Co Pty Ltd", address: "112-118 Brisbane St, Perth, WA 6000" },
  { name: "Med Halal & Honeywell Meats", address: "73 Honeywell Bvd, Mirrabooka, WA 6061" },
  { name: "San Fatt Trading", address: "200 Spencer Rd, Thornlie, WA 6108" },
  { name: "Market City Gourmet Food", address: "Shop 4, 280 Bannister, Canning Vale, WA 6155" },
  { name: "NP Carousel Supermarket", address: "45 Cecil Avenue, Cannington, WA 6170" },
  { name: "NP Oriental Supermarket", address: "161 Altone Rd, Beechboro, WA 6063" },
  { name: "NP Oriental Supermarket", address: "3 Wade Ct, Girrawheen, WA 6064" },
  { name: "Kai Supermarket", address: "15b/342 Albany Hwy, Victoria Park, WA 6100" },
  { name: "MCQ Beechboro", address: "Shop 17/412 Beechboro Rd, Morley, WA, 6062" },
  { name: "Yee Seng Oriental Supermarket", address: "36 Hulme Court, Myaree, WA 6154" },
  { name: "The Corner Store", address: "235 Bussell Hwy, West Busselton, WA 6280" },
  { name: "Golden Choice Fresh Market", address: "369 Roberts Rd, Subiaco, WA 6008" },
  { name: "OK Oriental Mini Mart", address: "47 Davidson Terrace, Joondalup, WA 6027" },
  { name: "MCQ Coventry Village", address: "243-253 Walter Rd, Morley, WA 6062" },
  { name: "Kongs", address: "784 Albany Hwy, East Victoria Park, WA 6101" },
  { name: "Chan Brothers Import & Export", address: "183 High Road, Willetton, WA 6155" },
  { name: "Fremantle Mini-Mart", address: "Shop 5, 29 Cantonment St, Fremantle, WA 6160" },
]

const getGoogleSearchUrl = (name, address) => {
  const query = encodeURIComponent(`${name} ${address}`)
  return `https://www.google.com/search?q=${query}`
}

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isScrolling = useRef(false)

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return

      if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        // Scroll down - go to next section
        isScrolling.current = true
        setCurrentIndex(prev => prev + 1)
        setTimeout(() => { isScrolling.current = false }, 800)
      } else if (e.deltaY < 0 && currentIndex > 0) {
        // Scroll up - go to previous section
        isScrolling.current = true
        setCurrentIndex(prev => prev - 1)
        setTimeout(() => { isScrolling.current = false }, 800)
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: true })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [currentIndex])

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
          <div className="about-cards-container">
            {/* About Us Card */}
            <div className="about-card">
              <div className="about-card-text">
                <h2 className="about-card-title">About Us</h2>
                <p className="about-card-description">
                  We are a Perth-based Australian company dedicated to providing premium, locally-made tempeh using exclusively Australian <span className="non-gmo">non-GMO</span> soybeans.
                </p>
              </div>
              <div className="about-card-image-container logo-container">
                <img src={juraganTempeLogo} alt="Juragan Tempe Logo" className="about-card-image logo-image" />
              </div>
            </div>

            {/* Our Mission Card */}
            <div className="about-card mission-card text-only">
              <div className="about-card-text centered">
                <h2 className="about-card-title">Our Mission</h2>
                <p className="about-card-description">
                  Our mission is to bring the exceptional nutritional benefits of <span className="tempeh">Tempeh</span> and share this superfood with the whole of Australia and the rest of the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="page-section" id="contact" style={getSectionStyle(2)}>
        <div className="section-content">
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Your email" />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" placeholder="Your message" rows="5"></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="stockists">
            <div className="stockist-about">Available at 17 Perth Locations:</div>
            <div className="stockist-columns">
              <div className="stockist-column">
                {stockists.slice(0, 9).map((stockist, index) => (
                  <a
                    key={index}
                    href={getGoogleSearchUrl(stockist.name, stockist.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stockist"
                  >
                    <div className="stockist-name">{stockist.name}</div>
                    <div className="stockist-address">{stockist.address}</div>
                  </a>
                ))}
              </div>
              <div className="stockist-column">
                {stockists.slice(9).map((stockist, index) => (
                  <a
                    key={index + 9}
                    href={getGoogleSearchUrl(stockist.name, stockist.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stockist"
                  >
                    <div className="stockist-name">{stockist.name}</div>
                    <div className="stockist-address">{stockist.address}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-left">
            <div className="footer-company">Tiara Khatulistiwa Pty Ltd</div>
            <div className="footer-location">Western Australia</div>
          </div>
          <div className="footer-right">
            <div className="social-item">
              <img src={phoneLogo} alt="Phone" className="social-logo" />
              <span>+61 415 101 151</span>
            </div>
            <div className="social-item">
              <img src={emailLogo} alt="Email" className="social-logo" />
              <span>info@tiarafood.com.au</span>
            </div>
            <a href="https://www.facebook.com/juragantempeaustralia/" target="_blank" rel="noopener noreferrer" className="social-item">
              <img src={facebookLogo} alt="Facebook" className="social-logo" />
              <span>@juragantempeaustralia</span>
            </a>
            <a href="https://www.instagram.com/juragantempeaustralia/" target="_blank" rel="noopener noreferrer" className="social-item">
              <img src={instagramLogo} alt="Instagram" className="social-logo" />
              <span>@juragantempeaustralia</span>
            </a>
          </div>
        </footer>
      </section>
    </div>
  )
}
export default Landing