import { Mail, Phone, MapPin } from "lucide-react"

const ContactSection = () => {
  return (
    <section className="section contact">
      <div className="container">
        <h2>
          <Mail className="icon" /> Contact
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>
              <Phone className="icon" /> 080-7743-1857
            </p>
            <p>
              <Mail className="icon" /> e1922030@oit.ac.jp
            </p>
            {/* <p>
              <MapPin className="icon" /> 東京都渋谷区XX町X-X-X
            </p> */}
          </div>
          <form className="contact-form">
            <input type="text" placeholder="お名前" required />
            <input type="email" placeholder="メールアドレス" required />
            <textarea placeholder="メッセージ" required></textarea>
            <button type="submit" className="submit-btn">
              送信
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

