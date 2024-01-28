import { Link } from 'react-router-dom'
import '../Auth.scss'
const Login = () => {
  return (
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
  )
}

export default Login