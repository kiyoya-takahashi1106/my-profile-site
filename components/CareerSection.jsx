// import { Briefcase, Calendar, Building2 } from 'lucide-react'
// import Link from 'next/link'

// const CareerSection = () => {
//   return (
//     <section className="section career">
//       <div className="container">
//         <h2>
//           <Briefcase className="icon" /> Internships
//         </h2>
//         <div className="timeline">
//           <div className="timeline-item">
//             <div className="timeline-icon">
//               <Building2 />
//             </div>
//             <div className="timeline-content">
//               <h3>画像AIエンジニア</h3>
//               <p className="company">
//                 <Link href="https://skill-systems.co.jp/" target="_blank" rel="noopener noreferrer" aria-label="スキルシステムズのウェブサイトを開く">
//                   <Building2 size={16} className="company-icon" />
//                 </Link>
//                 スキルシステムズ
//               </p>
//               <p className="period"><Calendar size={16} /> 2025年1月 - 現在</p>
//               <ul>
//                 <li>教師データ作成のためのアノテーション</li>
//                 <li>ニューラルネットワーク モデル改善のための基礎実装</li>
//               </ul>
//             </div>
//           </div>
//           <div className="timeline-item">
//             <div className="timeline-icon">
//               <Building2 />
//             </div>
//             <div className="timeline-content">
//               <h3>TA (Teacher Assistant)</h3>
//               <p className="company">
//                 <Link href="https://www.oit.ac.jp/" target="_blank" rel="noopener noreferrer" aria-label="大阪工業大学のウェブサイトを開く">
//                   <Building2 size={16} className="company-icon" />
//                 </Link>
//                 大阪工業大学
//               </p>
//               <p className="period"><Calendar size={16} /> 2024年4月 - 2025年1月</p>
//               <ul>
//                 <li>プログラミング演習１、プログラミング演習４</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <style jsx>{`
//         .timeline {
//           position: relative;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 20px 0;
//         }
//         .timeline::after {
//           content: '';
//           position: absolute;
//           width: 6px;
//           background-color: #004466;
//           top: 0;
//           bottom: 0;
//           left: 50%;
//           margin-left: -3px;
//         }
//         .timeline-item {
//           padding: 10px 40px;
//           position: relative;
//           background-color: inherit;
//           width: 50%;
//         }
//         .timeline-item:nth-child(odd) {
//           left: 0;
//         }
//         .timeline-item:nth-child(even) {
//           left: 50%;
//         }
//         .timeline-icon {
//           position: absolute;
//           width: 40px;
//           height: 40px;
//           right: -20px;
//           background-color: #004466;
//           border: 4px solid #92b4ad;
//           top: 15px;
//           border-radius: 50%;
//           z-index: 1;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #ffffff;
//         }
//         .timeline-item:nth-child(even) .timeline-icon {
//           left: -20px;
//         }
//         .timeline-content {
//           padding: 20px 30px;
//           background-color: #F0F4F5;
//           position: relative;
//           border-radius: 6px;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//         }
//         .timeline-content h3 {
//           margin: 0 0 10px 0;
//           color: #004466;
//           font-size: 1.2rem;
//         }
//         .company, .period {
//           display: flex;
//           align-items: center;
//           gap: 5px;
//           margin: 5px 0;
//           color: #004466;
//           font-size: 0.9rem;
//         }
//         .company-icon {
//           transition: transform 0.3s ease;
//         }
//         .company-icon:hover {
//           transform: scale(1.2);
//         }
//         ul {
//           margin-top: 10px;
//           padding-left: 20px;
//         }
//         li {
//           margin-bottom: 5px;
//         }
//         @media screen and (max-width: 768px) {
//           .timeline::after {
//             left: 31px;
//           }
//           .timeline-item {
//             width: 100%;
//             padding-left: 70px;
//             padding-right: 25px;
//           }
//           .timeline-item:nth-child(even) {
//             left: 0;
//           }
//           .timeline-icon {
//             left: 10px;
//             right: auto;
//           }
//           .timeline-item:nth-child(even) .timeline-icon {
//             left: 10px;
//           }
//         }
//       `}</style>
//     </section>
//   )
// }

// export default CareerSection




import { Briefcase, Calendar, Building2 } from "lucide-react"
import Link from 'next/link'

const CareerSection = () => {
  return (
    <section className="section career">
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
                <Link href="https://www.oit.ac.jp/" target="_blank" rel="noopener noreferrer" aria-label="大阪工業大学のウェブサイトを開く">
                  <Building2 size={16} className="company-icon" />
                </Link>
                大阪工業大学
              </p>
              <p className="period">
                <Calendar size={16} /> 2024年4月 - 2025年1月
              </p>
              <ul>
                <li>プログラミング演習１、プログラミング演習４</li>
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
                <Link href="https://skill-systems.co.jp/" target="_blank" rel="noopener noreferrer" aria-label="スキルシステムズのウェブサイトを開く">
                  <Building2 size={16} className="company-icon" />
                </Link>
                Skill Systems
              </p>
              <p className="period">
                <Calendar size={16} /> 2025年1月 - 現在
              </p>
              <ul>
                <li>教師データ作成のためのアノテーション</li>
                <li>ニューラルネットワーク モデル改善のための基礎実装</li>
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
          background-color: #004466;
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
          background-color: #004466;
          border: 4px solid #92b4ad;
          top: 15px;
          border-radius: 50%;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 0.7rem;
          text-align: center;
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
          background-color: #F0F4F5;
          position: relative;
          border-radius: 6px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .timeline-content h3 {
          margin: 0 0 10px 0;
          color: #004466;
          font-size: 1.2rem;
        }
        .company, .period {
          display: flex;
          align-items: center;
          gap: 5px;
          margin: 5px 0;
          color: #004466;
          font-size: 0.9rem;
        }
        ul {
          margin-top: 10px;
          padding-left: 20px;
        }
        li {
          margin-bottom: 5px;
        }
        @media screen and (max-width: 768px) {
          .timeline::after {
            left: 31px;
          }
          .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
          }
          .timeline-item:nth-child(even) {
            left: 0;
          }
          .timeline-icon {
            left: 10px;
            right: auto;
          }
          .timeline-item:nth-child(even) .timeline-icon {
            left: 10px;
          }
        }
      `}</style>
    </section>
  )
}

export default CareerSection

