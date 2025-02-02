import { GitlabIcon as GitHub, Twitter, Linkedin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p className="name">&copy; {currentYear}  Kiyoya Takahashi</p>
        {/* <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <GitHub size={20} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Twitter size={20} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
        </div> */}
      </div>
      <style jsx>{`
        .footer {
          background-color: #004466;
          color: #ffffff;
          padding: 1rem 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .name {
          font-size: 0.9rem;
          margin: 0;
        }
        // .social-links {
        //   display: flex;
        //   gap: 1rem;
        // }
        // .social-links a {
        //   color: #ffffff;
        //   transition: color 0.3s ease;
        // }
        // .social-links a:hover {
        //   color: #92b4ad;
        // }
      `}</style>
    </footer>
  )
}

export default Footer
