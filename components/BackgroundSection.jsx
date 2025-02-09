import { Book } from "lucide-react"

const BackgroundSection = (props) => {
  return (
    <section id={props.id} className="section background">
      <div className="container">
        <h2>
          <Book className="icon" /> Background
        </h2>
        <div className="grid">
          <div className="card">
            <h3>学歴</h3>
            <ul>
              <li>2022年 清風高等学校 卒業</li>
              <li>2022年 大阪工業大学 入学</li>
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
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        ul {
          list-style-type: none;
          padding-left: 0;
          flex-grow: 1;
        }
        li {
          margin-bottom: 0.5rem;
          color: var(--text-light-color);
        }
        p {
          color: var(--text-light-color);
          flex-grow: 1;
        }
        @media (max-width: 768px) {
          .grid {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}

export default BackgroundSection

