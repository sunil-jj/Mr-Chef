import React from 'react';
import { useState, useEffect } from 'react';
import MobNavbar from './MobNavbar';
import Navbar from './Navbar';

function CombinedNavbar() {
    const [showHamBurger, setShowHamBurger] = useState(window.innerWidth < 1280);

  useEffect(() => {
    function handleResize() {
      setShowHamBurger(window.innerWidth < 760);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    return (
        <div>
            {showHamBurger ? <MobNavbar /> : <Navbar />}
        </div>
    );
}

export default CombinedNavbar;