import { Container } from "@mui/material"
import './Footer.scss'
import { SiPuma } from "react-icons/si";
import footerData from '../../db/footer-data.json'
import { Link } from "react-router-dom"
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
              <h3 className="footer-title">EXPLORE</h3>
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
        </Container>
    </div>
  )
}

export default Footer