import { Link } from "react-router-dom"
import '../Auth.scss'
const SignUp = () => {
  return (
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

export default SignUp