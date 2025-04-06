"use client"

import { Briefcase, Calendar, Building2 } from "lucide-react"
import Link from "next/link"

const CareerSection = (props) => {
  return (
    <section id={props.id} className="section career">
      <div className="container">
        <h2>
          <Briefcase className="icon" /> Internships
        </h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <Calendar size={20} />
              <span>2024.4</span>
            </div>
            <div className="timeline-content">
              <h3>TA (Teacher Assistant)</h3>
              <p className="company">
                <Link
                  href="https://www.oit.ac.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="大阪工業大学のウェブサイトを開く"
                >
                  <Building2 size={16} className="company-icon" />
                </Link>
                大阪工業大学
              </p>
              <p className="period">
                <Calendar size={16} /> 2024年4月 - 2025年1月
              </p>
              <ul>
                <li>プログラミング演習１</li>
                <li>プログラミング演習４</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <Calendar size={20} />
              <span>2025.1</span>
            </div>
            <div className="timeline-content">
              <h3>画像AIエンジニア</h3>
              <p className="company">
                <Link
                  href="https://skill-systems.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="スキルシステムズのウェブサイトを開く"
                >
                  <Building2 size={16} className="company-icon" />
                </Link>
                Skill Systems
              </p>
              <p className="period">
                <Calendar size={16} /> 2025年1月 - 現在
              </p>
              <ul>
                <li>教師データ作成のためのアノテーション</li>
                <li>深層学習 モデル改善のための基礎実装</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <Calendar size={20} />
              <span>2025.3</span>
            </div>
            <div className="timeline-content">
              <h3>サーバーエンジニア</h3>
              <p className="company">
                <Link
                  href="https://brightech.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="brightechのウェブサイトを開く"
                >
                  <Building2 size={16} className="company-icon" />
                </Link>
                Brightech
              </p>
              <p className="period">
                <Calendar size={16} /> 2025年3月前半 - 後半 （2週間）
              </p>
              <ul>
                <li>Tabeta!!（ご飯投稿アプリ）の要件定義</li>
                <li>Tabeta!!（ご飯投稿アプリ）のApi開発</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
      .timeline {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px 0;
      }
      .timeline::after {
        content: '';
        position: absolute;
        width: 6px;
        background-color: var(--primary-color);
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -3px;
      }
      .timeline-item {
        padding: 10px 40px;
        position: relative;
        background-color: inherit;
        width: 50%;
      }
      .timeline-item:nth-child(odd) {
        left: 0;
      }
      .timeline-item:nth-child(even) {
        left: 50%;
      }
      .timeline-icon {
        position: absolute;
        width: 60px;
        height: 60px;
        right: -30px;
        background-color: var(--primary-color);
        border: 4px solid var(--surface-color);
        top: 15px;
        border-radius: 50%;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--background-color);
        font-size: 0.7rem;
        text-align: center;
        transition: transform 0.3s ease;
      }
      .timeline-icon:hover {
        transform: scale(1.1);
      }
      .timeline-icon svg {
        margin-bottom: 2px;
      }
      .timeline-item:nth-child(even) .timeline-icon {
        left: -30px;
        right: auto;
      }
      .timeline-content {
        padding: 20px 30px;
        background-color: var(--surface-color);
        position: relative;
        border-radius: 6px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .timeline-content h3 {
        margin: 0 0 10px 0;
        color: var(--primary-color);
        font-size: 1.2rem;
      }
      .company, .period {
        display: flex;
        align-items: center;
        gap: 5px;
        margin: 5px 0;
        color: var(--text-light-color);
        font-size: 0.9rem;
      }
      .company-icon {
        transition: transform 0.3s ease;
      }
      .company-icon:hover {
        transform: scale(1.2);
      }
      ul {
        margin-top: 10px;
        padding-left: 20px;
        color: var(--text-light-color);
      }
      li {
        margin-bottom: 5px;
      }
      @media screen and (max-width: 768px) {
        .timeline::after {
          left: 30px; /* Adjusted to ensure the line is centered with the icons */
        }
        .timeline-item {
          width: 100%;
          padding-left: 70px;
          padding-right: 25px;
          left: 0 !important; /* Override the left positioning for all items */
        }
        .timeline-icon {
          left: 0 !important; /* Override the left positioning for all icons */
          margin-left: 0; /* Reset margin */
          right: auto;
        }
      }
    `}</style>
    </section>
  )
}

export default CareerSection

