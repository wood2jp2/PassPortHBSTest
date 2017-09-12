// JavaScript function that wraps everything
$(document).ready(function() {

  // Gets Link for Theme Song
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "sound/theme.mp3");

  // Theme Button
  $(".theme-button").on("click", function() {
    console.log('clicked');
    audioElement.play();
  });

  $(".pause-button").on("click", function() {
    audioElement.pause();
  });
});
