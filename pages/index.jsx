import Head from "next/head"
import Header from "../components/Header"
import Hero from "../components/Hero"
import BackgroundSection from "../components/BackgroundSection"
import CareerSection from "../components/CareerSection"
import ProductSection from "../components/ProductSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>髙橋 清彌 - ホーム</title>
        <meta name="description" content="山田 太郎のクリエイティブ・デベロッパーマイページ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
        <BackgroundSection />
        <CareerSection />
        <ProductSection />
        {/* <ContactSection /> */}
      </main>

      <Footer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
          background-color: #DDEAF6;
          color: #004466;
        }
        * {
          box-sizing: border-box;
        }
        main {
          margin-top: 50px;
        }
        .section {
          padding: 4rem 0;
        }
        .section:nth-child(even) {
          background-color: #f0f4f3;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          color: #004466;
        }
        .icon {
          margin-right: 0.5rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .card {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        .card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #004466;
        }
        .link {
          display: inline-block;
          margin-top: 1rem;
          color: #004466;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s ease;
        }
        .link:hover {
          color: #92b4ad;
        }
        .career-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .career-item {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .career-item h3 {
          margin-bottom: 0.5rem;
        }
        .career-item .company {
          font-weight: bold;
          color: #004466;
        }
        .career-item .period {
          font-style: italic;
          margin-bottom: 1rem;
        }
        .product-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin-bottom: 1rem;
        }
        .contact-content {
          display: flex;
          gap: 2rem;
        }
        .contact-info {
          flex: 1;
        }
        .contact-form {
          flex: 2;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #92b4ad;
          border-radius: 4px;
        }
        .contact-form textarea {
          height: 150px;
        }
        .submit-btn {
          background-color: #004466;
          color: #ffffff;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          font-weight: bold;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .submit-btn:hover {
          background-color: #003355;
        }
        .footer {
          background-color: #004466;
          color: #ffffff;
          padding: 2rem 0;
        }
        .footer .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-links {
          display: flex;
          gap: 1rem;
        }
        .footer-links a {
          color: #ffffff;
          text-decoration: none;
        }
        @media screen and (max-width: 768px) {
          .contact-content {
            flex-direction: column;
          }
          .footer .container {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

