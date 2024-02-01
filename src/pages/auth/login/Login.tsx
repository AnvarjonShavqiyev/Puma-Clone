import { Link } from 'react-router-dom'
import '../Auth.scss'
import { ChangeEvent, useEffect, useState } from 'react';
const Login = () => {
const [submitStatus, setSubmitStatus] = useState<boolean>(false);
const [email, setEmail] = useState<string>('');
const [password, setPassword] = useState<string>('');
useEffect(() => {
    if(email.length > 0 && password.length > 0){
        setSubmitStatus(true);
    }else{
        setSubmitStatus(false);
    }
},[email, password])
return (
    <form className="auth-form">
        <div className="auth-input-wrapper">
          <label htmlFor="email" className="auth-label">Email <p className="red">*</p></label>
          <input onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} value={email} placeholder="Email" className="auth-input" id="email" required />
        </div>
        <div className="auth-input-wrapper">
          <label htmlFor="password" className="auth-label">Password <p className="red">*</p></label>
          <input onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} value={password} placeholder="Password" className="auth-input" id="password" required />
        </div>
        <div className="auth-checkbox">
          <input className="checkbox-input" type="checkbox" />
          <p>Remember me on this computer</p>
        </div>
        <div className="reg-btn-wrapper">
          <button className={submitStatus ? "auth-submitBtn" : "non-active"}>LOGIN</button>
          <p className="auth-note">PLEASE FILL OUT ALL MANDATORY FIELDS</p>
        </div>
        <p className="auth-text">By continuing, I confirm that I have read and accept the <Link to='/'>Terms and Conditions</Link>.
        and the <Link to='/'>Privacy Policy</Link>.
        </p>
        <p className="f-password">FORGOTTEN YOUR PASSWORD?</p>
    </form>
  )
}

export default Login