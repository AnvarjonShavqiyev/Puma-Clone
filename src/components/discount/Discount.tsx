import { IoMdClose } from 'react-icons/io'
import './Discount.scss'
import { useState } from 'react';
import './Discount.scss'
const Discount:React.FC = () => {
  const [discountState, setDiscountState] = useState<boolean>(true);
  function closeDiscount(){
    setDiscountState(!discountState);
  }
  return (
    <div className={discountState ? 'discount' : 'none'}>
      <button>GET 20% OFF <IoMdClose onClick={() => closeDiscount()} className='close-icon'/></button>
    </div>
  )
}

export default Discount