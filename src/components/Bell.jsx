import { useEffect } from 'react';

import Audio from './Audio';

const Bell = () => {
  const bellAudioClassName = "bell-audio";
  let bellAudio;
  useEffect(() => {
    bellAudio = document.getElementsByClassName(bellAudioClassName)[0];
  }, []);

  return (
    <div style={styles.container} onClick={() => bellAudio.play()}>
      <Audio
        src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
        className={bellAudioClassName}
      />
      Bell here
    </div>
  );
};

const styles = {
  container: {
    cursor: 'pointer',
  },
};

export default Bell;
