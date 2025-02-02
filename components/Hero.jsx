import Image from "next/image"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          <div className="text-content">
            <h1>Kiyoya Takahashi</h1>
            {/* <p className="subtitle">学部生</p> */}
            <p className="description">
              知能情報処理研究室で深層学習を学んでいるB3の "髙橋 清彌" です。<br/>
              様々な分野に興味あり、顔を突っ込みがちですが、<br/>
              深層学習、最適化、デジタルツイン、ロボティクス×AIに興味があります。<br/>
              大学卒業後は院に進学する予定です。
            </p>
            {/* <p>
            知能情報処理研究室：
            </p> */}
            {/* <button className="cta-button">
              ブログを見る
              <ArrowRight size={20} />
            </button> */}
          </div>
          <div className="image-container">
            <Image src="/icon.jpg" alt="icon" width={300} height={300} className="profile-image" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          background-color: #DDEAF6;
          color: #004466;
          padding: 5rem 0;
          overflow: hidden;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
        }
        .text-content {
          flex: 1;
          max-width: 600px;
        }
        h1 {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #004466;
        }
        .subtitle {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #004466;
        }
        .description {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          color: #004466;
        }
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #004466;
          color: #ffffff;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .cta-button:hover {
          background-color: #003355;
        }
        .image-container {
          flex: 0 0 auto;
        }
        .profile-image {
          border-radius: 50%;
          border: 5px solid #ffffff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        @media (max-width: 968px) {
          .content {
            flex-direction: column-reverse;
            text-align: center;
            gap: 2rem;
          }
          .text-content {
            max-width: 100%;
          }
          h1 {
            font-size: 3rem;
          }
          .image-container {
            margin-bottom: 1rem;
          }
        }
        @media (max-width: 640px) {
          .hero {
            padding: 4rem 0;
          }
          h1 {
            font-size: 2.5rem;
          }
          .subtitle {
            font-size: 1.25rem;
          }
          .description {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero

