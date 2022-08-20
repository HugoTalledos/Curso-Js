import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector('video');
const playButton: HTMLElement = document.querySelector('#playButton');
const unmutedButton: HTMLElement = document.querySelector('#unmutedButton');

const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay(),
    new AutoPause(),
    new Ads()
  ],
});
playButton.onclick = () => player.togglePlay();
unmutedButton.onclick = () => {
  if (player.media.muted) player.unmute();
  else player.mute();
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .catch((error) => console.log(error.message))
}