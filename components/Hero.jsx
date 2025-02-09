import { useEffect, useRef } from "react"
import Image from "next/image"

const Hero = (props) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "rgba(30, 30, 30, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(187, 134, 252, 0.5)"
        ctx.fill()

        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx = -particle.vx
        if (particle.y < 0 || particle.y > canvas.height) particle.vy = -particle.vy
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id={props.id} className="hero">
      <canvas ref={canvasRef} className="background-animation"></canvas>
      <div className="container">
        <div className="content">
          <div className="text-content">
            <h1 className="animate-text">Kiyoya Takahashi</h1>
            <p className="description animate-text">
              現在、B3の "髙橋 清彌" です。
              <br />
              深層学習、最適化、デジタルツインに興味があります。
              <br />
              大学卒業後は院に進学する予定です。
            </p>
            <p className="links animate-text">
              所属学部 :{" "}
              <a href="https://www.oit.ac.jp/rd/department/system/" target="_blank" rel="noopener noreferrer">
                システムデザイン工学科
              </a>
              <br />
              研究室 :{" "}
              <a href="https://www.oit.ac.jp/rd/labs/seo-lab/" target="_blank" rel="noopener noreferrer">
                知能情報処理研究室
              </a>
            </p>
          </div>
          <div className="image-container animate-image">
            <Image src="/icon.jpg" alt="icon" width={360} height={360} className="profile-image" style={{ borderRadius: "50%", objectFit: "cover" }} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          background-color: var(--background-color);
          color: var(--text-color);
          padding: 2rem 0 4rem; /* Updated padding */
          overflow: hidden;
          position: relative;
        }
        .background-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .container {
          position: relative;
          z-index: 2;
        }
        
        .content {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 2rem;
        }
        .text-content {
          flex: 1;
          max-width: 600px;
          padding-top: 1rem;
        }
        h1 {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: var(--primary-color);
        }
        .description {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          color: var(--text-light-color);
        }
        .links {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-light-color);
        }
        .links a {
          color: var(--secondary-color);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .links a:hover {
          color: var(--accent-color);
        }
        .image-container {
          flex: 0 0 auto;
          display: flex;
          justify-content: center;
          align-items: center; /* Added styles for image-container */
          align-self: center;
        }
        .profile-image {
          // border-radius: 50%;
          border: 5px solid var(--surface-color);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .animate-text {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease forwards;
        }
        .animate-image {
          opacity: 0;
          transform: scale(0.9);
          animation: fadeInScale 0.8s ease forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInScale {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        h1 { animation-delay: 0.2s; }
        .description { animation-delay: 0.4s; }
        .links { animation-delay: 0.6s; }
        .animate-image { animation-delay: 0.8s; }
        @media (max-width: 968px) {
          .content {
            flex-direction: column-reverse;
            text-align: center;
            gap: 2rem;
          }
          .text-content {
            max-width: 100%;
            padding-top: 0;
          }
          h1 {
            font-size: 3.5rem;
          }
        }
        @media (max-width: 640px) {
          .hero {
            padding: 1.5rem 0 3rem; /* Updated padding for smaller screens */
          }
          h1 {
            font-size: 3rem;
          }
          .description {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero

