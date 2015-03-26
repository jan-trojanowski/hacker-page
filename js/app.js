(function () {
  'use strict';

  var SPACE_PRESSED;
  var body = document.body;
  var startButton = document.querySelector('.startButton');
  var placeholder = document.querySelectorAll('.hackered');

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

    Array.prototype.forEach.call(placeholder, function (element) {
      var text = element.dataset.text.split('');

      setTimeout(function () {
        element.classList.remove('hidden');
        startTyping(0, element, text);
      }, 3000);
    });
  };

  var startTyping = function (index, placeholder, text) {
    if (index < text.length) {

      var writeLetter = function () {
        if (text[index] === '\n') {
          placeholder.innerHTML += '<br /><br />';
          index++;
        } else {
          placeholder.innerHTML += text[index++];
        }

        startTyping(index, placeholder, text);
      };

      if (SPACE_PRESSED === true) {
        window.clearTimeout(addLetter);
        window.addLetter = setTimeout(writeLetter, randomizeTimeout(50, 100));
      } else if (SPACE_PRESSED === false) {
        window.clearTimeout(addLetter);
        window.addLetter = setTimeout(writeLetter, randomizeTimeout(10, 20));
      } else {
        window.addLetter = setTimeout(writeLetter, randomizeTimeout(50, 100));
      }
    } else {
      body.classList.add('typing-ended');
    }
  };

  var randomizeTimeout = function (minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  };

  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) {
      SPACE_PRESSED = false;
    }
  });

  document.addEventListener('keyup', function(event) {
    if (event.keyCode === 32) {
      SPACE_PRESSED = true;
    }
  });

  startButton.addEventListener('click', enterHackerMode);

})();