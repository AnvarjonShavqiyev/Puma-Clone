import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav'
import SearchPanel from '../../components/search-panel/SearchPanel';
import SecondNav from '../../components/second-nav/SecondNav'
import { LuShoppingCart } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { BsChatSquareText } from "react-icons/bs";
import master from '../../assets/images/mastercard.png'
import express from '../../assets/images/americanexpress.png'
import discover from '../../assets/images/disvcover.png'
import paypal from '../../assets/images/paypal.png'
import afterpay from '../../assets/images/afterpay.png'
import applepay from '../../assets/images/applepay.png'
import googlepay from '../../assets/images/googlepay.png'
import { RiVisaLine } from "react-icons/ri";
import './Cart.scss'
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
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
            <Container>
                <div className="cart">
                    <div className="cart-none">
                        <LuShoppingCart className='cart-icon'/>
                        <p className='cart-none-text'>Your Shopping Cart is Empty</p>
                        <p className='cart-none-note'>Please <Link className='cart-link' to='/auth/login'>SIGN IN</Link> to view your saved Cart</p>
                    </div>
                </div>
                <div className="cart-cards">
                    <div className="cart-card">
                        <CiLock className='cart-card-icon'/>
                        <p className='cart-card-title'>SECURE PAYMENTS</p>
                        <p className='cart-card-info'>SSL ENCRYPTION ON ALL TRANSACTIONS</p>
                    </div>
                    <div className="cart-card">
                        <TbTruckDelivery className='cart-card-icon'/>
                        <p className='cart-card-title'>FREE & FAST RETURNS</p>
                        <p className='cart-card-info'>FREE RETURN ON ALL QUALIFYING ORDERS</p>
                    </div>
                    <div className="cart-card">
                        <BsChatSquareText className='cart-card-icon'/>
                        <p className='cart-card-title'>ACTIVE SUPPORT</p>
                        <p className='cart-card-info'>GIT IN TOUCH IF YOU HAVE A PROBLEM</p>
                    </div>
                </div>
                <div className="payment-types-wrapper">
                    <h3 className='payment-types-title'>OUR TRUSTED PAYMENT PARTNERS</h3>
                    <div className='payment-types'>
                        <RiVisaLine className='visa-icon'/>
                        <img width={50.77} height={35.2} src={master} alt="" />
                        <img width={67.6} height={38.84} src={express} alt="" />
                        <img width={66.6} height={25} src={discover} alt="" />
                        <img width={67.6} height={40} src={paypal} alt="" />
                        <img width={87.77} height={28} src={afterpay} alt="" />
                        <img width={87.4} height={80} src={applepay} alt="" />
                        <img className='google-icon' width={180.77} height={80} src={googlepay} alt="" />
                    </div>
                </div>
            </Container>
        </div>
        <Footer/>
    </>
  )
}

export default Cart