import { Link, useParams } from "react-router-dom";
import Nav from "../../components/nav/Nav"
import SearchPanel from "../../components/search-panel/SearchPanel";
import SecondNav from "../../components/second-nav/SecondNav"
import './Auth.scss'
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Footer from "../../components/footer/Footer";
import Discount from "../../components/discount/Discount";
import Feedback from "../../components/feedback/Feedback";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";
interface AuthProps {
  isSearchActive: boolean;
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const Auth : React.FC<AuthProps> = ({isSearchActive,setSearchActive}) => {
  const {action} = useParams();
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
        <Feedback/>
          <div className="auth-wrapper">
            <h3 className="auth-title">My account</h3>
            <div className="auth-form-wrapper">
            <div className="auth__header">
              <Link to='/auth/login' className={action === 'login' ? 'auth-action-title active' : 'auth-action-title'}>Login</Link>
              <Link to='/auth/signup' className={action === 'signup' ? 'auth-action-title active' : 'auth-action-title'}>Create account</Link>
            </div>
            {
              action === 'login' ? <Login/> : <SignUp/>
            }
            </div>
          </div>
        </div>
        <Discount/>
        <Footer/>
        </div>
  )
}

export default Auth