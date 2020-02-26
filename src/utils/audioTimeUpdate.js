export function getDuration(audio) {
  return Math.floor(audio.duration - audio.currentTime) || 0;
}

export function durationInSeconds(audio) {
  return Math.floor(getDuration(audio) % 60) || 0;;
}

export function durationInMinutes(audio) {
  return (Math.floor(getDuration(audio) / 60) % 60) || 0;;
}

export function seekTime(audio, seekTo) {
  audio.currentTime = seekTo;
}

export function currentInSeconds(audio) {
  return Math.floor(audio.currentTime % 60) || 0;;
}

export function currentInMinutes(audio) {
  return Math.floor((audio.currentTime / 60) % 60) || 0;;
}