'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Movie =
/*#__PURE__*/
function (_Config) {
  _inherits(Movie, _Config);

  function Movie() {
    var _this;

    _classCallCheck(this, Movie);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Movie).call(this));
    _this.poster_el = document.querySelector('.movie__poster');
    _this.description_el = document.querySelector('.movie__description');
    _this.title_el = document.querySelector('.movie__title');
    _this.genre = document.querySelector('.movie__genre');
    _this.release = document.querySelector('.movie__release-date');
    _this.language = document.querySelector('.movie__language');
    _this.rating = document.querySelector('.movie__rating');
    _this.video = document.querySelector('.movie__video');
    _this.carousel = document.querySelector('.movie__carousel');
    _this.movie_text = document.querySelector('.movie__text-description');
    _this.movie_video = document.querySelector('.movie__poster-icon');
    _this.video_id = null;
    _this.movie_id = _this.getUrlVars();

    _this.getMovie();

    _this.getImages();

    _this.getVideo();

    return _this;
  }

  _createClass(Movie, [{
    key: "getUrlVars",
    value: function getUrlVars() {
      var id = null;
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        id = value;
      });
      return id;
    }
  }, {
    key: "getMovie",
    value: function getMovie() {
      var _this2 = this;

      fetch(this.moviedb_base_url + this.movie_id + '?api_key=' + this.moviedb_api_key, {
        method: "GET"
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.fetchSuccess(data);
      }).catch(function (error) {
        console.log();
      });
    }
  }, {
    key: "fetchSuccess",
    value: function fetchSuccess(data) {
      var _this3 = this;

      console.log(data); //poster image

      var img = document.createElement('img');
      img.setAttribute('src', this.moviedb_image_path + data['backdrop_path']);
      img.setAttribute('class', 'movie__poster-img');
      this.poster_el.appendChild(img); //title

      this.title_el.textContent = data['title']; //releasedate

      this.release.textContent = 'release date : ' + data['release_date']; //languages

      data['spoken_languages'].forEach(function (lan) {
        var span = document.createElement('span');
        span.setAttribute('class', 'movie__language-lang');
        span.textContent = lan['name'] + " . ";

        _this3.language.appendChild(span);
      }); //genre

      data['genres'].forEach(function (genre) {
        var span = document.createElement('span');
        span.setAttribute('class', 'movie__genre-type');
        span.textContent = genre['name'];

        _this3.genre.appendChild(span);
      }); //rating

      this.rating.textContent = "IMDB rating : " + data['vote_average'] + ' / 10';
      var button = document.createElement('button');
      button.setAttribute('class', 'movie__button-ticket');
      button.textContent = 'Ticket';
      this.description_el.appendChild(button); //description

      this.movie_video.setAttribute('data-id', data['id']);
      this.movie_text.textContent = data['overview'];
    }
  }, {
    key: "getImages",
    value: function getImages() {
      var _this4 = this;

      fetch(this.moviedb_base_url + this.movie_id + '/images?api_key=' + this.moviedb_api_key, {
        method: "GET"
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this4.fetchImages(data);
      }).catch(function (error) {
        console.log();
      });
    }
  }, {
    key: "fetchImages",
    value: function fetchImages(data) {
      var _this5 = this;

      $('.movie__carousel').slick('unslick');
      console.log(data);
      data['backdrops'].forEach(function (image) {
        var div = document.createElement('div');
        var img = document.createElement('img');
        img.setAttribute('src', _this5.moviedb_image_path + image['file_path']);
        img.setAttribute('class', 'movie__carousel-img');
        div.appendChild(img);

        _this5.carousel.appendChild(div);
      });
      $('.movie__carousel').slick({
        autoplay: true,
        infinite: true,
        fade: false,
        autoplaySpeed: 2000,
        useTransform: false,
        prevArrow: $('.banner__prev'),
        nextArrow: $('.banner__next'),
        pauseOnFocus: false
      });
    }
  }, {
    key: "getVideo",
    value: function getVideo() {
      var _this6 = this;

      fetch(this.moviedb_base_url + this.movie_id + '/videos?api_key=' + this.moviedb_api_key, {
        method: "GET"
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this6.fetchVideos(data);
      }).catch(function (error) {
        console.log();
      });
    }
  }, {
    key: "fetchVideos",
    value: function fetchVideos(data) {
      this.video_id = data['results'][0]['key'];
    }
  }]);

  return Movie;
}(Config);

new Movie();