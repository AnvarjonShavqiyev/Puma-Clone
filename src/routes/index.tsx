import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../pages/home/Home';
import Auth from '../pages/auth/Auth';
import React, { useState } from 'react';
import Wishlist from '../pages/wishlist/Wishlist';

const RouteController: React.FC = () => {
  const [isSearchActive, setSearchActive] = useState<boolean>(false);
  const token = 0;
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path='/' element={<Home setSearchActive={setSearchActive} isSearchActive={isSearchActive} />} />
      <Route path='/auth/:action' element={<Auth isSearchActive={isSearchActive} setSearchActive={setSearchActive} />} />
      {/* {
        token ? (
          <Route path='/wishlist' element={<Wishlist />} />
        ) : (
          navigate('/auth/signup')
        )
      } */}
      
    </Routes>
  );
};

export default RouteController;
