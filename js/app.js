(function () {
  'use strict';

  var body = document.body;
  var startButton = document.querySelector('.startButton');
  var placeholder = document.querySelectorAll('.hackered');
  var skills = document.querySelector('.skills');

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

    [].forEach.call(placeholder, function (element) {
      var text = element.dataset.text.split('');

      setTimeout(function () {
        element.classList.remove('hidden');
        startTyping(0, element, text);
      }, 3000);
    });
  };

  var startTyping = function (index, placeholder, text) {
    if (index < text.length) {
      setTimeout(function () {
        if (text[index] === '\n') {
          placeholder.innerHTML += '<br /><br />';
          index++;
        } else {
          placeholder.innerHTML += text[index++];
        }

        startTyping(index, placeholder, text);
      }, randomizeTimeout(50, 100));
    } else {
      body.classList.add('typing-ended');
      skills.classList.remove('hidden');
    }
  };

  var randomizeTimeout = function (minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  };

  startButton.addEventListener('click', enterHackerMode);

})();