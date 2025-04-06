import { useState, useEffect } from "react"
import { Menu, X, GitlabIcon as GitHub, Twitter } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const headerHeight = document.querySelector("header").offsetHeight
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="header-content">
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={isMenuOpen ? "open" : ""}>
          <ul>
            <li>
              <button onClick={() => scrollToSection("about")}>About Me</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("background")}>Background</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("internships")}>Internships</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")}>Projects</button>
            </li>
          </ul>
        </nav>
        <div className="right-section">
          <p className="subtitle">OIT B4</p>
          <div className="social-links">
            <a href="https://github.com/kiyoya-takahashi1106" target="_blank" rel="noopener noreferrer">
              <GitHub size={24} />
            </a>
            <a href="https://x.com/kiyoya_1106" target="_blank" rel="noopener noreferrer">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        header {
          background-color: var(--background-color);
          color: var(--text-color);
          padding: 1rem 2rem;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          height: 70px;
        }
        header.scrolled {
          background-color: rgba(18, 18, 18, 0.95);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          height: 100%;
        }
        nav ul {
          display: flex;
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        nav li {
          margin: 0 1.5rem;
        }
        nav a {
          color: var(--text-color);
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s ease;
          position: relative;
          font-size: 1rem;
        }
        nav a:hover {
          color: var(--primary-color);
        }
        nav a::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: var(--primary-color);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        nav a:hover::after {
          transform: scaleX(1);
        }
        .right-section {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .subtitle {
          font-size: 0.9rem;
          color: var(--text-light-color);
          margin: 0;
          font-weight: 700;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-links a {
          color: var(--text-color);
          transition: color 0.3s ease;
        }
        .social-links a:hover {
          color: var(--primary-color);
        }
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-color);
          cursor: pointer;
        }
        @media (max-width: 768px) {
          header {
            height: auto;
            padding: 0.75rem 1rem;
          }
          .header-content {
            flex-wrap: wrap;
          }
          .menu-toggle {
            display: block;
            order: 1;
          }
          .right-section {
            order: 2;
            margin-left: auto;
          }
          nav {
            display: none;
            width: 100%;
            order: 3;
            margin-top: 1rem;
          }
          nav.open {
            display: block;
          }
          nav ul {
            flex-direction: column;
            align-items: center;
          }
          nav li {
            margin: 1rem 0;
          }
          .subtitle {
            display: none;
          }
        }
        nav button {
          background: none;
          border: none;
          color: var(--text-color);
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        nav button:hover {
          color: var(--primary-color);
        }
      `}</style>
    </header>
  )
}

export default Header

