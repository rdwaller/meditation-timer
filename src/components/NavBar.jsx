const NavBar = ({ setNavItem }) => {
  return (
    <div className="navBar" style ={styles.container}>
      <div className="navSegment" style={styles.navSegment} onClick={() => setNavItem('timer')}>
        Timer
      </div>
      <div className="navSegment" style={styles.navSegment} onClick={() => setNavItem('bell')}>
        Bell
      </div>
      <div className="navSegment" style={styles.navSegment} onClick={() => setNavItem('moktuk')}>
        Moktuk
      </div>
    </div>
  );
};

const styles = {
  container: {
    alignItems: 'center',
    backgroundColor: 'red',
    bottom: 0,
    display: 'flex',
    height: 100,
    justifyContent: 'space-around',
    position: 'fixed',
    width: '100vw',
  },
  navSegment: {
    cursor: 'pointer',
  },
};

export default NavBar;