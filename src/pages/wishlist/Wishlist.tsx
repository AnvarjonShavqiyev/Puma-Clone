import { useLayoutEffect } from 'react'
import './Wishlist.scss'
import { useNavigate } from 'react-router-dom';
import SearchPanel from '../../components/search-panel/SearchPanel';
import Nav from '../../components/nav/Nav';
import SecondNav from '../../components/second-nav/SecondNav';
import Footer from '../../components/footer/Footer';
import { CiHeart } from "react-icons/ci";

interface WishlistProps {
  isSearchActive: boolean;
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Wishlist:React.FC<WishlistProps> = ({isSearchActive,setSearchActive})=> {
  const token = 0;
  const navigate = useNavigate();
  useLayoutEffect(() => {
    !token && navigate('/auth/signup');
  },[])
  return (
   <>
      <SearchPanel setSearchActive={setSearchActive} isSearchActive = {isSearchActive}/>
        <Nav/>
        <SecondNav setSearchActive={setSearchActive}/>
        <div className='wishlist-wrapper'>
            <div className='wishlist'>
                <div className='wishlist-header'>
                  <p className='wish-title'>MY WISHLIST</p>
                  <p className='wish-count'>0 items</p>
                </div>
                <div className='wishlist-items'>
                    <div className='wishlist-none'>
                        <CiHeart className='wish-icon'/>
                        <p>Your Wishlist is Empty</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
   </>
  )
}

export default Wishlist