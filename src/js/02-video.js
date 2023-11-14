// Library import

import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

// Store and update current video time

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(getCurrentTime, 1000));

function getCurrentTime(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

// Play video from the stored timepoint

document.addEventListener('DOMContentLoaded', () => {
  let setTime = localStorage.getItem('videoplayer-current-time');
  console.log('Timpul de la care se reia videoul este ' + setTime);

  player.setCurrentTime(setTime).catch(error => {
    console.error('Error encountered when playing the video', error);
  });
});
