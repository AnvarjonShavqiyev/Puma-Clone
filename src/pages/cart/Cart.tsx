import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav'
import SearchPanel from '../../components/search-panel/SearchPanel';
import SecondNav from '../../components/second-nav/SecondNav'
import './Cart.scss'
interface CartProps {
    isSearchActive: boolean;
    setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const Cart: React.FC<CartProps> = ({isSearchActive,setSearchActive}) => {
  return (
    <>
        <SearchPanel setSearchActive={setSearchActive} isSearchActive = {isSearchActive}/>
        <Nav/>
        <SecondNav setSearchActive={setSearchActive}/>
        <div className='cart-wrapper'>
            <div className="cart">
                <div className="cart-none">
                    
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Cart