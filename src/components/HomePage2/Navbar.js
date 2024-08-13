import React from 'react';
import { useTabContext } from './HomePageContext/HomePageContext';
const Navbar = () => {
  const{fine}=useTabContext()
  return (
    <div className="bg-white-800 text-white p-4">
      
      Navbar
    </div>
  );
}

export default Navbar;
