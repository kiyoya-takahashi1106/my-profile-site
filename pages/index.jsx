import Head from "next/head"
import Header from "../components/Header"
import Hero from "../components/Hero"
import BackgroundSection from "../components/BackgroundSection"
import CareerSection from "../components/CareerSection"
import ProductSection from "../components/ProductSection"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>髙橋 清彌</title>
        <meta name="description" content="髙橋 清彌のポートフォリオサイト" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main>
        <Hero id="about" />
        <BackgroundSection id="background" />
        <CareerSection id="internships" />
        <ProductSection id="projects" />
      </main>

      <Footer />

      <style jsx global>{`
        :root {
          --primary-color: #bb86fc;
          --secondary-color: #03dac6;
          --accent-color: #cf6679;
          --background-color: #121212;
          --surface-color: #1e1e1e;
          --text-color: #ffffff;
          --text-light-color: #b0b0b0;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Roboto', 'Noto Sans JP', sans-serif;
          background-color: var(--background-color);
          color: var(--text-color);
          font-size: 16px;
          line-height: 1.6;
        }

        * {
          box-sizing: border-box;
        }

        main {
          margin-top: 80px;
        }

        .section {
          padding: 6rem 0;
          position: relative;
        }

        .section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--primary-color), transparent);
        }

        .section:nth-child(odd) {
          background: linear-gradient(to bottom, var(--background-color), var(--surface-color));
        }

        .section:nth-child(even) {
          background: linear-gradient(to bottom, var(--surface-color), var(--background-color));
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Noto Sans JP', sans-serif;
          font-weight: 700;
          line-height: 1.2;
          color: var(--primary-color);
        }

        h2 {
          font-size: 2.5rem;
          margin-bottom: 2.5rem;
          display: flex;
          align-items: center;
        }

        .icon {
          margin-right: 0.75rem;
          color: var(--accent-color);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .card {
          background-color: var(--surface-color);
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .card h3 {
          font-size: 1.5rem;
          margin-bottom: 1.25rem;
          color: var(--primary-color);
        }

        .link {
          display: inline-block;
          margin-top: 1.25rem;
          color: var(--secondary-color);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .link:hover {
          color: var(--accent-color);
        }

        @media screen and (max-width: 768px) {
          html, body {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}

