(function () {
  'use strict';

  var body = document.body;
  var startButton = document.querySelector('.startButton');
  var placeholder = document.querySelector('.hackered');
  var stringsArray = [];

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
    enableFullscreen(document.documentElement);
    startButton.classList.add('hidden');
    body.classList.add('hacker-mode');

    stringsArray = placeholder.dataset.text.split('');

    setTimeout(function () {
      placeholder.classList.remove('hidden');
      startTyping(0);
    }, 3000);
  };

  var startTyping = function (index) {
    if (index < stringsArray.length) {
      setTimeout(function () {
        placeholder.innerHTML += stringsArray[index++];

        startTyping(index);
      }, randomizeTimeout(50, 100));
    }
  };

  var randomizeTimeout = function (minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  };

  startButton.addEventListener('click', enterHackerMode);

})();