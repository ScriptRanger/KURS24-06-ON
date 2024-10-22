import React from 'react';
import styles from "./Navbar.module.css";

function Navbar() {
  // Funktion für den Klick-Event
  const handleHomeClick = () => {
    alert('Hallo von Home');
  };

  return (
    <div className={styles.navbar}>
      <button className={styles.homebtn} onClick={handleHomeClick}>Home</button>
    </div>
  );
}

export default Navbar;
