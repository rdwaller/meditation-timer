const NavBar = () => {
  return (
    <div style ={styles.container} className="NavBar">
      Navbar here
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'red',
    width: '100vw',
  },
};

export default NavBar;