const Wrapper = ({ children }) => (
  <div style={styles.wrapper} className={'wrapper'}>
    {children}
  </div>
);

const styles = {
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#BDC3C7',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 50,
    minHeight: '100vh',
    // justifyContent: 'center',
  },
};

export default Wrapper;
