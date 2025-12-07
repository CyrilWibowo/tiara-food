import "./NavOverlay.css"

const sections = ["home", "about", "contact"]

const NavOverlay = ({ onNavigate, currentIndex }) => {
  const canGoUp = currentIndex > 0
  const canGoDown = currentIndex < sections.length - 1

  const goUp = () => {
    if (canGoUp) {
      onNavigate(sections[currentIndex - 1])
    }
  }

  const goDown = () => {
    if (canGoDown) {
      onNavigate(sections[currentIndex + 1])
    }
  }

  return (
    <>
      <nav className="nav">
        <span
          className={`nav-link ${currentIndex === 0 ? "active" : ""}`}
          onClick={() => onNavigate("home")}
        >
          Home
        </span>
        <span
          className={`nav-link ${currentIndex === 1 ? "active" : ""}`}
          onClick={() => onNavigate("about")}
        >
          About Us
        </span>
        <span
          className={`nav-link ${currentIndex === 2 ? "active" : ""}`}
          onClick={() => onNavigate("contact")}
        >
          Contact
        </span>
      </nav>
      <div
        className={`scroll-up-arrow ${canGoUp ? "visible" : ""}`}
        onClick={goUp}
      >
        <span>▲</span>
      </div>
      <div
        className={`scroll-down-arrow ${canGoDown ? "visible" : ""}`}
        onClick={goDown}
      >
        <span>▼</span>
      </div>
    </>
  )
}

export default NavOverlay
