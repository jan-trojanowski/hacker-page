(function () {
  'use strict';

  var body = document.body;
  var startButton = document.querySelector('.startButton');

  var enableFullscreen = function (element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  var enterHackerMode = function () {
    var text = document.querySelector('.hackered');

    enableFullscreen(document.documentElement);
    startButton.classList.add('hidden');
    body.classList.add('hacker-mode');

    setTimeout(function () {
      text.classList.remove('hidden');
    }, 3000);

  };

  startButton.addEventListener('click', enterHackerMode);

})();