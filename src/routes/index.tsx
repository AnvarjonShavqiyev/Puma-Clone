import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Auth from '../pages/auth/Auth';
import React, { useState } from 'react';

const RouteController: React.FC = () => {
  const [isSearchActive, setSearchActive] = useState<boolean>(false);

  return (
    <Routes>
      <Route path='/' element={<Home setSearchActive={setSearchActive} isSearchActive={isSearchActive} />} />
      <Route path='/auth/:action' element={<Auth isSearchActive={isSearchActive} setSearchActive={setSearchActive} />} />
    </Routes>
  );
};

export default RouteController;
