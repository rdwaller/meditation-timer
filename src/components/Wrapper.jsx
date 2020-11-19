const Wrapper = ({ children }) => (
  <div style={styles.wrapper} className={'wrapper'}>
    {children}
  </div>
);

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    backgroundColor: '#282c34',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default Wrapper;
