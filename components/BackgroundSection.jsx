import { Book } from "lucide-react"

const BackgroundSection = () => {
  return (
    <section className="section background">
      <div className="container">
        <h2>
          <Book className="icon" /> Background, Qualifications and Research
        </h2>
        <div className="grid">
          <div className="card">
            <h3>学歴</h3>
            <ul>
              <li>2022年 清風高等学校 卒業</li>
              <li>
                2022年 大阪工業大学 <br/> 
                システムデザイン工学科 入学
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>資格</h3>
            <ul>
              <li>基本情報技術者</li>
              <li>TOEIC 775</li>
            </ul>
          </div>
          <div className="card">
            <h3>研究内容</h3>
            <p>
              現在テーマ決め中です。<br/>
              テーマが決まり次第追記します。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BackgroundSection