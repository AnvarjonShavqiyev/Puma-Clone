import { Link, useParams } from "react-router-dom";
import Nav from "../../components/nav/Nav"
import SearchPanel from "../../components/search-panel/SearchPanel";
import SecondNav from "../../components/second-nav/SecondNav"
import './Auth.scss'
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Footer from "../../components/footer/Footer";
interface AuthProps {
  isSearchActive: boolean;
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const Auth : React.FC<AuthProps> = ({isSearchActive,setSearchActive}) => {
  const {action} = useParams();
  const [discountState, setDiscountState] = useState<boolean>(true);
  console.log(action)
  return (
    <div>
        <SearchPanel setSearchActive={setSearchActive} isSearchActive = {isSearchActive}/>
        <Nav/>
        <SecondNav setSearchActive={setSearchActive}/>
        <div className="discount-announce">
            <p className="discount-text">SAVE BIG WHILE YOU CAN - UP TO 50% OFF</p>
            <p className="discount-text">EXTRA 20% OFF WITH CODE: COOL20</p>
            <div className="discount-link-wrapper">
              <Link className="discount-link" to='/'>SHOP NOW</Link>
              <Link className="discount-link" to='/'>EXCLUSIONS APPLY</Link>
            </div>
        </div>
        <div className="auth__wrapper">
        <div className='feedback'>
        <BiMessageSquareDetail/>
        <button className='feedback-btn'>FEEDBACK</button>
      </div>
          <div className="auth-wrapper">
            <h3 className="auth-title">My account</h3>
            <div className="auth-form-wrapper">
            <div className="auth__header">
              <Link to='/auth/login' className={action === 'login' ? 'auth-action-title active' : 'auth-action-title'}>Login</Link>
              <Link to='/auth/signup' className={action === 'signup' ? 'auth-action-title active' : 'auth-action-title'}>Create account</Link>
            </div>
            {
              action === 'login' ? (
              <form className="auth-form">
                <div className="auth-input-wrapper">
                  <label htmlFor="email" className="auth-label">Email <p className="red">*</p></label>
                  <input placeholder="Email" className="auth-input" type="text" id="email" name="email" required />
                </div>
                <div className="auth-input-wrapper">
                  <label htmlFor="password" className="auth-label">Password <p className="red">*</p></label>
                  <input placeholder="Password" className="auth-input" type="text" id="password" name="password" required />
                </div>
                <div className="auth-checkbox">
                  <input className="checkbox-input" type="checkbox" />
                  <p>Remember me on this computer</p>
                </div>
                <button className="auth-submitBtn">LOGIN</button>
                <p className="auth-text">By continuing, I confirm that I have read and accept the <Link to='/'>Terms and Conditions</Link>.
                and the <Link to='/'>Privacy Policy</Link>.
                </p>
                <p className="f-password">FORGOTTEN YOUR PASSWORD?</p>
              </form>    
              ) : (
                <form className="auth-form">
                <div className="auth-input-wrapper">
                  <label htmlFor="name" className="auth-label">First Name <p className="red">*</p></label>
                  <input placeholder="First Name" className="auth-input" type="text" id="name" name="name" required />
                </div>
                <div className="auth-input-wrapper">
                  <label htmlFor="surname" className="auth-label">Last Name <p className="red">*</p></label>
                  <input placeholder="Last Name" className="auth-input" type="text" id="surname" name="surname" required />
                </div>
                <div className="auth-input-wrapper">
                  <label htmlFor="email" className="auth-label">Email <p className="red">*</p></label>
                  <input placeholder="Email" className="auth-input" type="text" id="email" name="email" required />
                </div>
                <div className="auth-input-wrapper">
                  <label htmlFor="password" className="auth-label">Password <p className="red">*</p></label>
                  <input placeholder="Password" className="auth-input" type="text" id="password" name="password" required />
                </div>
                <div className="auth-checkbox">
                  <input className="checkbox-input" type="checkbox" />
                  <p>Add me to PUMA mailing list</p>
                </div>
                <p className="auth-text">By continuing, I confirm that I have read and accept the <Link to='/'>Terms and Conditions</Link>.
                and the <Link to='/'>Privacy Policy</Link>.
                </p>
                <button className="auth-submitBtn">Register</button>
              </form>  
              )
            }
            </div>
          </div>
        </div>
        <div className={discountState ? 'discount' : 'none'}>
          <button>GET 20% OFF <IoMdClose onClick={() => setDiscountState(false)} className='close-icon'/></button>
        </div>
        <Footer/>
        </div>
  )
}

export default Auth