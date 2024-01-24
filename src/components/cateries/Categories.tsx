import { Link } from 'react-router-dom'
import { Container } from '../../utils/Utils'
import Hero from '../hero/Hero'
import './Categories.scss'
const Categories : React.FC = () => {
  return (
    <div>
        <div className="cat-wrapper">
            <Container>
                <h3 className="cat-title">SHOP SOCCER MUST-HAVES</h3>
                <div className='soccer-twin'>
                    <div className='soccer-single'>
                        <img src="https://cdn.sanity.io/images/qa41whrn/staging/e79ee7d0c4b5a868ef51dca5662268e6d817b6aa-2000x2000.jpg" alt="" />
                        <div className="cat-info">
                            <h3 className='cat-name'>CLEATS</h3>
                            <p className='cat-discreption'>FT.KINGS</p>
                        </div>
                    </div>
                    <div className='soccer-single'>
                        <img src="https://cdn.sanity.io/images/qa41whrn/staging/d75dafcd491d9840685d8aa97d0f4671c81805e9-1536x1536.jpg" alt="" />
                        <div className="cat-info">
                            <h3 className='cat-name'>JERSEYS</h3>
                            <p className='cat-discreption'>FT.MANCHESTER CITY YEAR OF THE DRAGON</p>
                        </div>
                    </div>
                </div>
            </Container>
            <Hero/>
            <Container>
                <h3 className="cat-title">SHOP BASKETBALL STYLES</h3>
                <div className='soccer-twin'>
                    <div className='soccer-single'>
                        <img src="https://cdn.sanity.io/images/qa41whrn/staging/d519083c84aa9859ee496d70f3da678760ed735d-2000x2000.jpg" alt="" />
                        <div className="cat-info">
                            <h3 className='cat-name-bas'>ALL PRO NITRO</h3>
                        </div>
                    </div>
                    <div className='soccer-single'>
                        <img src="https://cdn.sanity.io/images/qa41whrn/staging/2ec75159d3c7e284b9ccd742817d8483901e25f2-2000x2000.jpg" alt="" />
                        <div className="cat-info">
                            <h3 className='cat-name-bas'>STEWIE COLLECTION</h3>
                        </div>
                    </div>
                </div>
                <h3 className="cat-title">TRANDING IN SPORT</h3>
                <div className='soccer-twin'>
                    <div className='soccer-single'>
                        <img className="tranding" src="https://cdn.sanity.io/images/qa41whrn/staging/8afeb1c939a1e656a50f988aa935982a31ea59d5-2000x2000.jpg" alt="" />
                        <div className="cat-info">
                            <h3 className='cat-name-trand'>TRAINING</h3>
                        </div>
                    </div>
                    <div className='soccer-single'>
                        <img className="tranding" src="https://cdn.sanity.io/images/qa41whrn/staging/d43a25f6d18ad90ba584ef2d7cb493ccbc5d63e8-2000x2000.jpg" alt="" />
                        <div className="cat-info">
                            <h3 className='cat-name-trand'>RUNNING</h3>
                        </div>
                    </div>
                    <div className='soccer-single'>
                        <img className="tranding" src="https://cdn.sanity.io/images/qa41whrn/staging/d5e5ac9425e0ea35492b6ffadd160655cd5e5d27-2000x2000.jpg" alt="" />
                        <div className="cat-info">
                            <h3 className='cat-name-trand'>RECQUET SPORTS</h3>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='arrivals-wrapper'>
                <Container>
                    <div className='arrivals'>
                        <h3 className='arrivals-title'>NEW ARRIVALS</h3>
                        <p className='arrivals-text'>DISCOVER YOUR NEXT FAVE</p>
                        <div className='arrivals-options'>
                            <Link to='/'>SHOP MEN</Link>
                            <Link to='/'>SHOP WOMEN</Link>
                            <Link to='/'>SHOP KIDS</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    </div>
  )
}

export default Categories