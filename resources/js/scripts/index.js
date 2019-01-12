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

var Index =
/*#__PURE__*/
function (_Config) {
  _inherits(Index, _Config);

  function Index() {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this));

    _this.service(['now_playing', 'upcoming', 'popular', 'top_rated']);

    return _this;
  }

  _createClass(Index, [{
    key: "service",
    value: function service(categories) {
      var _this2 = this;

      categories.forEach(function (category) {
        _this2.httpRequest(category);
      });
    }
  }, {
    key: "httpRequest",
    value: function httpRequest(category) {
      var _this3 = this;

      fetch(this.moviedb_base_url + category + '?api_key=' + this.moviedb_api_key, {
        method: "GET"
      }).then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      }).then(function (data) {
        _this3.fetchSuccess(data, category);
      }).catch(function (error) {
        console.log(error); //this.fetchFail(error)
      });
    }
  }, {
    key: "fetchSuccess",
    value: function fetchSuccess(data, category) {
      var movies = [];

      if (Object.keys(data).length !== 0) {
        for (var i = 0; i < 4; i++) {
          var movie = {};
          movie['title'] = data['results'][i]['title'];
          movie['rating'] = data['results'][i]['vote_average'];
          movie['release_date'] = data['results'][i]['release_date'];
          movie['poster'] = data['results'][i]['poster_path'];
          movie['id'] = data['results'][i]['id'];
          movie['category'] = category;
          movies.push(movie);
        }

        if (Object.keys(movies).length > 0) {
          this.createHtml(movies);
        }
      } else {
        console.log('nothing has been returned');
      }
    }
  }, {
    key: "createHtml",
    value: function createHtml(movies) {
      var _this4 = this;

      var movies_block = document.querySelector('.category__movies');
      var movies_container = document.createElement('div');
      movies_container.setAttribute('class', 'category__movies-container');
      movies.forEach(function (movie) {
        movies_container.setAttribute('data-id', movie['category']); //container

        var div_movie = document.createElement('div');
        div_movie.setAttribute('class', 'category__movie'); //image

        var img_movie = document.createElement('img');
        img_movie.setAttribute('class', 'category__movie-poster');
        img_movie.src = _this4.moviedb_image_path + movie['poster']; //title

        var title = document.createElement('h3');
        title.setAttribute('class', 'category__movie-title');
        title.textContent = movie['title']; //Rating

        var rating = document.createElement('p');
        rating.setAttribute('class', 'category__movie-rating');
        rating.textContent = 'rating : ' + movie['rating']; //Rating

        var release = document.createElement('p');
        release.setAttribute('class', 'category__movie-release');
        release.textContent = 'release date : ' + movie['release_date']; //button

        var button = document.createElement('button');
        button.setAttribute('class', 'category__button-ticket');
        button.textContent = 'Ticket';
        div_movie.appendChild(img_movie);
        div_movie.appendChild(title);
        div_movie.appendChild(rating);
        div_movie.appendChild(release);
        div_movie.appendChild(button);
        movies_container.appendChild(div_movie);
      });
      movies_block.appendChild(movies_container);
    }
  }, {
    key: "fetchFail",
    value: function fetchFail(data) {
      console.log('Error' + data);
    }
  }]);

  return Index;
}(Config);

new Index();