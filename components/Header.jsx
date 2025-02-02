import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, GitlabIcon as GitHub, Twitter, Linkedin } from "lucide-react"

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

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="header-content">
        <nav className={isMenuOpen ? "open" : ""}>
          <ul>
            <li>
              <Link href="#about">About Me</Link>
            </li>
            <li>
              <Link href="#skills">Background</Link>
            </li>
            <li>
              <Link href="#projects">Internships</Link>
            </li>
            <li>
              <Link href="#blog">Projects</Link>
            </li>
            {/* <li>
              <Link href="#contact">Contact</Link>
            </li> */}
          </ul>
        </nav>
        <div className="right-section">
          <p className="subtitle">OIT B3</p>
          <div className="social-links">
            {/* <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a> */}
            <a href="https://github.com/kiyoya-takahashi1106" target="_blank" rel="noopener noreferrer">
              <GitHub size={20} />
            </a>
            <a href="https://x.com/kiyoya_1106" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <style jsx>{`
        header {
          background-color: #004466;
          color: #ffffff;
          padding: 0.5rem 2rem;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          height: 50px;
        }
        header.scrolled {
          background-color: rgba(0, 68, 102, 0.95);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          height: 100%;
        }
        nav {
          flex-grow: 1;
        }
        nav ul {
          display: flex;
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        nav li {
          margin: 0 1rem;
        }
        nav a {
          color: #ffffff;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
          position: relative;
          font-size: 0.9rem;
        }
        nav a:hover {
          color: #92b4ad;
        }
        nav a::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -3px;
          left: 0;
          background-color: #92b4ad;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        nav a:hover::after {
          transform: scaleX(1);
        }
        .right-section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .subtitle {
          font-size: 0.8rem;
          color: #F0F4F5;
          margin: 0;
        }
        .social-links {
          display: flex;
          gap: 0.5rem;
        }
        .social-links a {
          color: #ffffff;
          transition: color 0.3s ease;
        }
        .social-links a:hover {
          color: #92b4ad;
        }
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: #ffffff;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          header {
            height: auto;
          }
          .header-content {
            flex-wrap: wrap;
          }
          nav {
            display: none;
            width: 100%;
            margin-top: 0.5rem;
          }
          nav.open {
            display: block;
          }
          nav ul {
            flex-direction: column;
            align-items: center;
          }
          nav li {
            margin: 0.5rem 0;
          }
          .menu-toggle {
            display: block;
          }
          .right-section {
            margin-left: auto;
          }
          .subtitle {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

export default Header

