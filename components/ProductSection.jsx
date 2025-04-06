"use client"

import { Rocket } from "lucide-react"
import Image from "next/image"

const ProductSection = (props) => {
  return (
    <section id={props.id} className="section product">
      <div className="container">
        <h2>
          <Rocket className="icon" /> Projects
        </h2>
        <div className="grid">
          <div className="card">
            <div className="image-wrapper">
              <Image src="/drone.jpg" alt="drone" width={300} height={200} className="product-image" />
            </div>
            <h3>出席確認Drone</h3>
            <p>
              顔認識や画像処理を活用し、制御を実現しました。 また、Drone操作のUIとしてWebAppを作成しました。
              教室の複雑な状況への対応など、まだ多くの課題が残るが、 開発を通じて、よい経験を得ることができました。
            </p>
            {/* <a href="#" className="link">
              詳細を見る
            </a> */}
          </div>
          <div className="card">
            <div className="image-wrapper">
              <Image
                src="/resucure_robot.jpg"
                alt="resucure_robot"
                width={300}
                height={200}
                className="product-image"
              />
            </div>
            <h3>Resucure Robot</h3>
            <p>
              大学主催のPBLプロジェクトにて、タイのタマサート大学と 協力してレスキューロボットを開発しました。
              限られた時間の中で、ロボット本体の構造にはあまり手を 加えられませんでしたが、ロボットアームの設計・開発を
              担当し、自由に制御できる機能を実現しました。
            </p>
            {/* <a href="#" className="link">
              詳細を見る
            </a> */}
          </div>
          <div className="card">
            <div className="image-wrapper">
              <Image
                src="/AI-XR.jpg"
                alt="エコフレンドリーなIoTデバイス"
                width={300}
                height={200}
                className="product-image"
              />
            </div>
            <h3>運動促進システム</h3>
            <p>
              Unityを用いて、長時間のデスクワークによる健康リスクを軽減するためのシステムです。
              リアルタイムの姿勢解析機能を備え、長時間座りすぎた場合に通知を送り、
              ミニゲームを通じて楽しく運動を促します。
              {/* ミニゲームを通じて楽しく運動を促します。報酬システムやコミュニティ機能を取り入れ、
              継続的な利用を支援します。 */}
            </p>
            {/* <a href="#" className="link">
              詳細を見る
            </a> */}
          </div>
        </div>
      </div>
      <style jsx>{`
        .product {
          background-color: var(--background-color);
        }
        .image-wrapper {
          width: 100%;
          height: 200px;
          border-radius: 8px;
          overflow: hidden; /* Ensure image doesn't overflow */
          margin-bottom: 1rem;
        }
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block; /* Remove any extra space */
        }
        .card {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 1.5rem; /* Added padding to card */
        }
        p {
          color: var(--text-light-color);
          flex-grow: 1;
        }
        .link {
          margin-top: auto;
          align-self: flex-start;
        }
        
        /* Ensure consistent spacing on all screen sizes */
        @media (max-width: 768px) {
          .card {
            padding: 1.25rem; /* Slightly reduced padding on smaller screens */
          }
          .image-wrapper {
            height: 180px; /* Slightly smaller height on medium screens */
          }
        }
        
        @media (max-width: 480px) {
          .image-wrapper {
            height: 160px; /* Even smaller height on very small screens */
          }
        }
      `}</style>
    </section>
  )
}

export default ProductSection

