import { Rocket } from "lucide-react"
import Image from "next/image"

const ProductSection = () => {
  return (
    <section className="section product">
      <div className="container">
        <h2>
          <Rocket className="icon" /> Projects
        </h2>
        <div className="grid">
          <div className="card">
            <Image
              src="/drone.jpg"
              alt="drone"
              width={300}
              height={200}
              className="product-image"
            />
            <h3>顔認識を用いた出席確認Drone</h3>
            <p>
              顔認識や画像処理を活用し、制御を実現しました。
              また、Drone操作のUIとしてWebアプリを作成しました。
              教室の複雑な状況への対応など、まだ多くの課題が残るが、
              開発を通じて、よい経験を得ることができました。
            </p>
            <a href="#" className="link">
              詳細を見る
            </a>
          </div>
          <div className="card">
            <Image
              src="/resucure_robot.jpg"
              alt="resucure_robot"
              width={300}
              height={200}
              className="product-image"
            />
            <h3>Resucure Robot</h3>
            <p>
              大学主催のPBLプロジェクトにて、タイのタマサート大学と
              協力してレスキューロボットを開発しました。
              限られた時間の中で、ロボット本体の構造にはあまり手を
              加えられませんでしたが、ロボットアームの設計・開発を
              担当し、自由に制御できる機能を実現しました。ハードウェア開発に初めて
              本格的に取り組み、貴重な経験を得ることができました。
            </p>
            <a href="#" className="link">
              詳細を見る
            </a>
          </div>
          <div className="card">
            <Image
              src="/product3.jpg"
              alt="エコフレンドリーなIoTデバイス"
              width={300}
              height={200}
              className="product-image"
            />
            <h3>運動促進システム(プロトタイプ)</h3>
            <p>Unityを用いて、長時間のデスクワークによる健康リスクを軽減するためのシステムです。
              リアルタイムの姿勢解析機能を備え、長時間座りすぎた場合に通知を送り、
              ミニゲームを通じて楽しく運動を促します。報酬システムやコミュニティ機能を取り入れ、
              継続的な利用を支援します。
            </p>
            <a href="#" className="link">
              詳細を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSection

