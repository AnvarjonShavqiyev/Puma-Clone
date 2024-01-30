import { useLayoutEffect } from 'react'
import './Wishlist.scss'
import { useNavigate } from 'react-router-dom';
const Wishlist = () => {
  const token = 0;
  const navigate = useNavigate();
  useLayoutEffect(() => {
    !token && navigate('/auth/signup');
  },[])
  return (
    <div>Wishlist</div>
  )
}

export default Wishlist