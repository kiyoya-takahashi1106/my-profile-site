"use client"

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
            <Image
              src="/icon.jpg"
              alt="icon"
              width={400}
              height={400}
              className="profile-image"
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          background-color: var(--background-color);
          color: var(--text-color);
          padding: 0;
          overflow: hidden;
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
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
          width: 100%;
          max-width: 1200px; /* Adjusted to match header width */
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .content {
          display: grid;
          grid-template-columns: 1fr 1fr; /* Two equal columns */
          align-items: center;
          gap: 2rem;
          transform: translateX(20px); /* Move entire content slightly right */
        }
        .text-content {
          padding-top: 1rem;
          padding-right: 2rem; /* Add space to the right */
        }
        h1 {
          font-size: 4.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: var(--primary-color);
          white-space: nowrap;
        }
        .description {
          font-size: 1.3rem;
          line-height: 1.8;
          margin-bottom: 2.5rem;
          color: var(--text-light-color);
        }
        .links {
          font-size: 1.1rem;
          line-height: 1.8;
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
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .profile-image {
          border: 6px solid var(--surface-color);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.3);
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
        
        /* Media queries for responsive design */
        @media (max-width: 968px) {
          .hero {
            min-height: auto;
            padding: 2rem 0 4rem;
            display: block;
          }
          .container {
            padding: 0 1rem; /* Reduced padding on mobile */
          }
          .content {
            grid-template-columns: 1fr; /* Single column on mobile */
            text-align: center;
            gap: 2rem;
            transform: translateX(0); /* Reset the transform on mobile */
            margin: 0 auto; /* Center the content */
            max-width: 100%; /* Ensure content doesn't overflow */
          }
          .text-content {
            padding-right: 0;
            order: 2; /* Move text below image on mobile */
            margin: 0 auto; /* Center text content */
            width: 100%; /* Full width */
          }
          .image-container {
            order: 1; /* Move image above text on mobile */
            margin: 0 auto; /* Center image container */
            width: 100%; /* Full width */
            display: flex;
            justify-content: center; /* Center horizontally */
          }
          h1 {
            font-size: 3.5rem;
            white-space: normal;
          }
          .description {
            font-size: 1.2rem;
            margin-bottom: 2rem;
          }
          .links {
            font-size: 1rem;
            line-height: 1.6;
          }
          .profile-image {
            width: 300px;
            height: 300px;
            border-width: 5px;
            margin: 0 auto; /* Center the image itself */
          }
        }
        
        @media (max-width: 640px) {
          .hero {
            padding: 1.5rem 0 3rem;
          }
          .container {
            padding: 0 1rem; /* Consistent padding */
          }
          h1 {
            font-size: 3rem;
          }
          .description {
            font-size: 1.1rem;
          }
          .profile-image {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero

