'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Filter =
/*#__PURE__*/
function () {
  function Filter() {
    _classCallCheck(this, Filter);

    this.buttons = document.querySelectorAll('.category__button');
    this.movies = document.querySelectorAll('.category__movies-container');
    this.images = document.querySelectorAll('.category__movie-poster'); //show now playing movies by default 

    this.hideMovies(); //Filter the movies on click

    this.filterMovies(); //redirect the page on click

    this.redirect();
  }

  _createClass(Filter, [{
    key: "filterMovies",
    value: function filterMovies() {
      var _this = this;

      this.buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
          _this.toggleActive(button);

          var category = button.getAttribute('data-id');

          _this.movies.forEach(function (movie) {
            if (movie.getAttribute('data-id') === category) {
              if (movie.classList.contains('category__movies-container--hide')) {
                movie.classList.remove('category__movies-container--hide');
              }
            } else {
              if (!movie.classList.contains('category__movies-container--hide')) {
                movie.classList.add('category__movies-container--hide');
              }
            }
          });
        });
      });
    }
  }, {
    key: "toggleActive",
    value: function toggleActive(button) {
      this.buttons.forEach(function (btn) {
        if (btn === button) {
          btn.classList.add('category__button--active');
        } else {
          btn.classList.remove('category__button--active');
        }
      });
    }
  }, {
    key: "hideMovies",
    value: function hideMovies() {
      this.movies.forEach(function (movie) {
        var category = movie.getAttribute('data-id');

        if (category !== 'now_playing') {
          movie.classList.add('category__movies-container--hide');
        }
      });
    }
  }, {
    key: "redirect",
    value: function redirect() {
      this.images.forEach(function (img) {
        img.addEventListener('click', function () {
          var id = img.getAttribute('data-movie-id');
          window.location.href = "/movie.html?id=" + id;
        });
      });
    }
  }]);

  return Filter;
}();

window.onload = function () {
  new Filter();
};