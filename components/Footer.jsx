const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Kiyoya Takahashi All rights reserved.</p>
      </div>
      <style jsx>{`
        .footer {
          background-color: var(--surface-color);
          color: var(--text-light-color);
          padding: 1rem 0;
          text-align: center;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        p {
          font-size: 0.9rem;
          margin: 0;
        }
      `}</style>
    </footer>
  )
}

export default Footer

