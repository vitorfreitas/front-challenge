const multimediaOptions = {
  selector: '#dashboard_video',
  playOnCoords: { x: 0, y: 1208 }
};

window.onload = function() {
  const video = new DynamicPlayer(multimediaOptions);
  video.init();
};
