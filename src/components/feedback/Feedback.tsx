import { BiMessageSquareDetail } from "react-icons/bi"
import './Feedback.scss'
const Feedback:React.FC = () => {
  return (
    <div className='feedback'>
        <BiMessageSquareDetail/>
        <button className='feedback-btn'>FEEDBACK</button>
    </div>
  )
}

export default Feedback