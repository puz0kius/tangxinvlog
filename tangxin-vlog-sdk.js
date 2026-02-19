class TangxinVlogSDK {
  constructor(videoElement) {
    this.video = videoElement;
  }

  load(url) {
    this.video.src = url;
    this.video.load();
  }

  play() {
    this.video.play();
  }

  pause() {
    this.video.pause();
  }

  switchQuality(url) {
    const currentTime = this.video.currentTime;
    this.video.src = url;
    this.video.currentTime = currentTime;
    this.video.play();
  }
}

if (typeof module !== "undefined") {
  module.exports = TangxinVlogSDK;
}
