"use client"

import { Book } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const BackgroundSection = (props) => {
  const [cardHeight, setCardHeight] = useState(0)
  const cardRefs = useRef([])

  // カードの高さを揃える関数
  useEffect(() => {
    const updateCardHeight = () => {
      // リサイズ時に高さをリセット
      cardRefs.current.forEach((card) => {
        if (card) card.style.height = "auto"
      })

      // 少し遅延させて最大の高さを計算
      setTimeout(() => {
        let maxHeight = 0

        // 最大の高さを見つける
        cardRefs.current.forEach((card) => {
          if (card && card.offsetHeight > maxHeight) {
            maxHeight = card.offsetHeight
          }
        })

        // すべてのカードに最大の高さを設定
        if (maxHeight > 0) {
          setCardHeight(maxHeight)
          cardRefs.current.forEach((card) => {
            if (card) card.style.height = `${maxHeight}px`
          })
        }
      }, 100)
    }

    // 初期化時とウィンドウリサイズ時に高さを更新
    updateCardHeight()
    window.addEventListener("resize", updateCardHeight)

    return () => {
      window.removeEventListener("resize", updateCardHeight)
    }
  }, [])

  return (
    <section id={props.id} className="section background">
      <div className="container">
        <h2>
          <Book className="icon" /> Background
        </h2>
        <div className="grid">
          <div
            className="card"
            ref={(el) => (cardRefs.current[0] = el)}
            style={cardHeight ? { height: `${cardHeight}px` } : {}}
          >
            <h3>学歴</h3>
            <ul>
              <li>2022年 清風高等学校 卒業</li>
              <li>2022年 大阪工業大学 入学</li>
            </ul>
          </div>
          <div
            className="card"
            ref={(el) => (cardRefs.current[1] = el)}
            style={cardHeight ? { height: `${cardHeight}px` } : {}}
          >
            <h3>資格</h3>
            <ul>
              <li>基本情報技術者</li>
              <li>TOEIC 775</li>
              <li>学長表彰×1</li>
            </ul>
          </div>
          <div
            className="card"
            ref={(el) => (cardRefs.current[2] = el)}
            style={cardHeight ? { height: `${cardHeight}px` } : {}}
          >
            <h3>研究内容</h3>
            <ul>
              <li>現在テーマ決め中です。</li>
              <li>テーマが決まり次第追記します。</li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .background {
          background-color: var(--surface-color);
        }
        .grid {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
          align-items: stretch;
        }
        .card {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
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
          margin-top: 0;
          margin-bottom: 1.25rem;
        }
        ul {
          list-style-type: none;
          padding-left: 0;
          flex-grow: 1;
          margin-bottom: 0;
        }
        li {
          margin-bottom: 0.5rem;
          color: var(--text-light-color);
        }
        li:last-child {
          margin-bottom: 0;
        }
        p {
          color: var(--text-light-color);
          flex-grow: 1;
        }
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem; /* コンテナのパディングを調整 */
          }
          .grid {
            flex-direction: column;
            align-items: center; /* グリッドの中身を中央揃え */
            width: 100%; /* 幅を100%に */
          }
          .card {
            width: 100%; /* カードの幅を100%に */
            max-width: 500px; /* 最大幅を設定 */
            margin: 0 auto 2rem auto; /* 左右のマージンを自動で中央揃え */
            height: auto !important; /* モバイルでは自然な高さに */
          }
          .card:last-child {
            margin-bottom: 0;
          }
        }
      `}</style>
    </section>
  )
}

export default BackgroundSection

