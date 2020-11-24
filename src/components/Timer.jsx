import { useEffect, useState } from 'react';

import Audio from './Audio';

const Timer = () => {
  const [timerDuration1, setTimerDuration1] = useState(0);
  const [timerDuration2, setTimerDuration2] = useState(0);

  const bellAudioClassName = "bell-audio";
  let bellAudio;
  useEffect(() => {
    bellAudio = document.getElementsByClassName(bellAudioClassName)[0];
  });

  const startTimer = () => {
    const duration = (document.getElementById('timer-count-1').value || 0) * 1000;
    setTimeout(() => {
      bellAudio.play();
    }, duration);
  };

  const handleChange1 = (e) => {
    setTimerDuration1(e.target.value);
    console.log('1: ', timerDuration1);
  };

  const handleChange2 = (e) => {
    setTimerDuration2(e.target.value);
    console.log('2: ', timerDuration2);
  };

  return (
    // <div style={styles.timerStart} onClick={() => startTimer()}>
    //   {timerDuration}
    // </div>
    <div>
      <Audio
        src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
        className={bellAudioClassName}
      />

      <div style={styles.rangeSliderSection}>
        <label htmlFor="timer-count-1">Total minutes 1:</label>
          <div>
            <input
              style={styles.rangeSlider}
              type="range"
              id="timer-count-1"
              name="timer-count-1"
              min="0"
              max="60"
              step="5"
              value={timerDuration1}
              onChange={handleChange1}
            />
          </div>
      </div>
      <div style={styles.rangeSliderSection}>
        <label htmlFor="timer-count-2">Total minutes 2:</label>
        <div>
          <input
            style={styles.rangeSlider}
            type="range"
            id="timer-count-2"
            name="timer-count-2"
            min="0"
            max="60"
            step="5"
            value={timerDuration2}
            onChange={handleChange2}
          />
        </div>
      </div>

    </div>
  );
};

const styles = {
  rangeSlider: {
    width: 500,
  },
  rangeSliderSection: {
    position: 'absolute',
  },
  timerStart: {
    cursor: 'pointer',
  },
};

export default Timer;
