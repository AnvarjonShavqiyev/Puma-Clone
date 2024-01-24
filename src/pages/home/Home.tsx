import { useState } from 'react'
import Nav from '../../components/nav/Nav'
import SearchPanel from '../../components/search-panel/SearchPanel'
import SecondNav from '../../components/second-nav/SecondNav'
import './Home.scss'
import Hero from '../../components/hero/Hero'
import { IoMdClose } from "react-icons/io";
import Categories from '../../components/cateries/Categories'
import { BiMessageSquareDetail } from "react-icons/bi";
import Footer from '../../components/footer/Footer'

const Home:React.FC = () => {
  const [isSearchActive, setSearchActive] = useState<boolean>(false);
  const [discountState, setDiscountState] = useState<boolean>(true);
  function closeDiscount(){
    setDiscountState(!discountState);
  }
  return (
    <div className='home'>
      <SearchPanel isSearchActive={isSearchActive} setSearchActive={setSearchActive}/>
      <Nav/>
      <SecondNav setSearchActive={setSearchActive}/>
      <Hero/>
      <Categories/>
      <div className='feedback'>
        <BiMessageSquareDetail/>
        <button className='feedback-btn'>FEEDBACK</button>
      </div>
      <div className={discountState ? 'discount' : 'none'}>
        <button>GET 20% OFF <IoMdClose onClick={() => closeDiscount()} className='close-icon'/></button>
      </div>
      <Footer/>
    </div>
  )
}

export default Home