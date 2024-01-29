import { Link } from "react-router-dom"
import '../Auth.scss'
import { ChangeEvent, useEffect, useState } from "react"
const SignUp:React.FC = () => {
const [userName, setUserName] = useState<string>('');
const [secondName, setSecondName] = useState<string>('');
const [email, setEmail] = useState<string>('');
const [password, setPassword] = useState<string>('');
const [submitStatus, setSubmitStatus] = useState<boolean>(false);

useEffect(() => {
    if(userName.length > 0 && secondName.length > 0 && email.length > 0 && password.length > 0){
        setSubmitStatus(true);
    }else{
        setSubmitStatus(false);
    }
},[userName, secondName, email, password])
return (
    <form className="auth-form">
        <div className="auth-input-wrapper">
          <label htmlFor="name" className="auth-label">First Name <p className="red">*</p></label>
          <input onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} value={userName} placeholder="First Name" className="auth-input" id="name"  required />
        </div>
        <div className="auth-input-wrapper">
          <label htmlFor="surname" className="auth-label">Last Name <p className="red">*</p></label>
          <input onChange={(e: ChangeEvent<HTMLInputElement>) => setSecondName(e.target.value)} value={secondName} placeholder="Last Name" className="auth-input" id="surname"  required />
        </div>
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
          <p>Add me to PUMA mailing list</p>
        </div>
        <p className="auth-text">By continuing, I confirm that I have read and accept the <Link to='/'>Terms and Conditions</Link>.
        and the <Link to='/'>Privacy Policy</Link>.
        </p>
        <div className="reg-btn-wrapper">
          <button className={submitStatus ? "auth-submitBtn" : "non-active"}>REGISTER</button>
          <p className="auth-note">PLEASE FILL OUT ALL MANDATORY FIELDS</p>
        </div>
    </form>
    )  
}
export default SignUp