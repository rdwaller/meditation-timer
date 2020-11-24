import Bell from './Bell';
import Moktuk from './Moktuk';
import Timer from './Timer';

const Content = ({ navItem }) => {
    const getContentDisplay = (navItem) => {
      switch (navItem) {
        case 'bell':
          return <Bell />
        case 'moktuk':
          return <Moktuk />
        case 'timer':
          return <Timer />
        default:
          return <Timer />;
      }
    };

  return (
    <div className="content" style={styles.container}>
      {getContentDisplay(navItem)}
    </div>
  )
};

const styles = {
  // make sure that this is the best way to organize the sections and their size
  container: {
    // backgroundColor: 'green',
    display: 'flex',
    //rw what is this all about?
    flex: '1 1 auto',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    marginBottom: 100,
    width: '100%',
  },
};

export default Content;