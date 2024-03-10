import React from 'react';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.navItemsContainer}>
          <ul style={styles.navItems}>
            <li style={styles.navItem}>
              <a href="#" style={styles.navLink}>Home</a>
            </li>
            <li style={styles.navItem}>
              <a href="#" style={styles.navLink}>About</a>
            </li>
            <li style={styles.navItem}>
              <a href="#" style={styles.navLink}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#292b2c', /* Slightly darker color than sidebar */
    color: '#fff',
    padding: '10px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'flex-end', /* Align items to the right */
    alignItems: 'center',
    padding: '0 20px',
  },
  navItemsContainer: {
    display: 'flex',
    justifyContent: 'flex-end', // Align navigation items to the right
  },
  navItems: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  navItem: {
    marginLeft: '20px', // Margin between navigation items
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  },
};

export default Navbar;
