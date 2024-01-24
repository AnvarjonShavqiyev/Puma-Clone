import { Link } from 'react-router-dom'
import { Container } from '../../utils/Utils'
import './Hero.scss'
const Hero: React.FC = () => {
  return (
    <div className='hero-wrapper'>
        <Container>
            <div className='hero-shop-now'>
                <div className='hero-info'>
                    <h3 className='hero-title'>ENTER PHENOMENAL</h3>
                    <p className='hero-sub-title'>FT.FUTURE</p>
                    <Link className='hero-shop-btn' to='/'>SHOP NOW</Link>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Hero