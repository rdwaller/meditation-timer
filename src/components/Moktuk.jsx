import { useEffect } from 'react';

import Audio from './Audio';

const Moktuk = () => {
  const moktukAudioClassName = "moktuk-audio";
  let moktukAudio;
  useEffect(() => {
    moktukAudio = document.getElementsByClassName(moktukAudioClassName)[0];
  }, []);

  return (
    <div style={styles.container} onClick={() => moktukAudio.play()}>
      <Audio
        src={"http://instrumentsoftheworld.com/instrument/sons/Woodblock.mp3"}
        className={moktukAudioClassName}
      />
      Moktuk here
    </div>
  );
};

const styles = {
  container: {
    cursor: 'pointer',
  },
};

export default Moktuk;