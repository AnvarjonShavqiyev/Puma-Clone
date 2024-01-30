import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../pages/home/Home';
import Auth from '../pages/auth/Auth';
import React, { useState } from 'react';
import Wishlist from '../pages/wishlist/Wishlist';
import Cart from '../pages/cart/Cart';

const RouteController: React.FC = () => {
  const [isSearchActive, setSearchActive] = useState<boolean>(false);

  return (
    <Routes>
      <Route path='/' element={<Home setSearchActive={setSearchActive} isSearchActive={isSearchActive} />} />
      <Route path='/auth/:action' element={<Auth isSearchActive={isSearchActive} setSearchActive={setSearchActive} />} />
      <Route path='/wishlist' element={<Wishlist isSearchActive={isSearchActive} setSearchActive={setSearchActive}/>}/>
      <Route path='/cart' element={<Cart isSearchActive={isSearchActive} setSearchActive={setSearchActive}/>}/>
    </Routes>
  );
};

export default RouteController;
