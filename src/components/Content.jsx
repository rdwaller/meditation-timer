const Content = () => {
  return (
    <div className="content" style={styles.container}>
      <div>
        Content here
      </div>
    </div>
  )
};

const styles = {
  // make sure that this is the best way to organize the sections and their size
  container: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'green',
    display: 'flex',
    //rw what is this all about?
    flex: '1 1 auto',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 100,
  },
};

export default Content;