import { Container } from "@mui/material"
import './Footer.scss'
import { SiPuma } from "react-icons/si";
import footerData from '../../db/footer-data.json'
import { Link } from "react-router-dom"
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer : React.FC = () => {
  return (
    <div className="footer-wrapper">
        <Container>
            <div className="footer">
            {
              footerData.map((ul, index) => {
                return <div key={index}>
                    <h3 className="footer-title">{ul.title}</h3>
                    <ul>
                      {
                        ul.subLinks.map((link, index) => {
                          return <li key={index}><Link className="footer-item" to='/'>{link}</Link></li>
                        })
                      }
                    </ul>
                </div>
              })
            }
            <div>
              <h3 className="footer-title">STAY UP TO DATE</h3>
              <Link className="footer-item" to='/'>Sign Up for Email</Link>
              <h3 className="footer-title explore">EXPLORE</h3>
              <div className="footer-logo-wrapper">
                <div className="foot-logo">
                    <SiPuma className="footer-logo"/>
                    <p className="logoName">APP</p>
                </div>
                <div className="foot-logo">
                    <SiPuma className="footer-logo"/>
                    <p className="logoName">TRAC</p>
                </div>
              </div>
            </div>
            </div>
            <div className="second-footer">
              <div className="footer-icons">
                <FaYoutube className="foot-icon"/>
                <FaTwitter className="foot-icon"/>
                <FaPinterest className="foot-icon"/>
                <FaInstagram className="foot-icon"/>
                <FaFacebook className="foot-icon"/>
              </div>
              <button className="language-selector">
                  <img width={32} height={32} src={"https://vizahod.ru/admin/public/53/20210916083857flag_usa.jpg"} alt="" />
                  <h3>UNITED STATES</h3>
              </button>
              <div className="footer-notes">
                  <p className="footer-text">© PUMA North America, Inc.</p>
                  <p className="footer-text">Imprint and Legal Data</p>
                  <p className="footer-text">Web ID: 628 678 054</p>
              </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer