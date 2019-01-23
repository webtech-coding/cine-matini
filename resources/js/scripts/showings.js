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

var Showing =
/*#__PURE__*/
function (_Config) {
  _inherits(Showing, _Config);

  function Showing(category) {
    var _this;

    _classCallCheck(this, Showing);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Showing).call(this));
    _this.category = category;
    _this.showing_container = document.querySelector('.showing__container');

    _this.getMovies();

    return _this;
  }

  _createClass(Showing, [{
    key: "getMovies",
    value: function getMovies() {
      var _this2 = this;

      fetch(this.moviedb_base_url + this.category + '?api_key=' + this.moviedb_api_key, {
        method: 'GET'
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.displayMovies(data['results']);
      });
    }
  }, {
    key: "displayMovies",
    value: function displayMovies(movies) {
      var _this3 = this;

      movies.forEach(function (movie) {
        console.log(movie);
        var poster = document.createElement('img');
        poster.setAttribute('class', 'showing__poster');
        poster.setAttribute('src', _this3.moviedb_image_path + movie['backdrop_path']);
        var showing_movie = document.createElement('div');
        showing_movie.setAttribute('class', 'showing__movie');
        var description = document.createElement('div');
        description.setAttribute('class', 'showing__description');
        var title = document.createElement('h1');
        title.setAttribute('class', 'showing__title');
        title.textContent = movie['title'];
        var date = document.createElement('p');
        date.setAttribute('class', 'showing__release-date');
        date.textContent = 'Release date : ' + movie['release_date'];
        var language = document.createElement('div');
        language.setAttribute('class', 'showing__language');
        language.textContent = 'Langauga : ' + movie['original_language'];
        var rating = document.createElement('div');
        rating.setAttribute('class', 'showing__language');
        rating.textContent = 'IMDB rating : ' + movie['vote_average']; //button

        var more = document.createElement('button');
        more.setAttribute('class', 'showing__ticket showing__view-more');
        more.setAttribute('data-id', movie['id']);
        more.textContent = 'View more'; //button

        var ticket = document.createElement('button');
        ticket.setAttribute('class', 'showing__ticket showing__buy-ticket');
        ticket.setAttribute('data-id', movie['id']);
        ticket.textContent = 'Ticket';
        description.appendChild(title);
        description.appendChild(date);
        description.appendChild(language);
        description.appendChild(rating);
        description.appendChild(more);
        description.appendChild(ticket);
        showing_movie.appendChild(description);
        showing_movie.appendChild(poster);

        _this3.showing_container.appendChild(showing_movie);

        _this3.getButtons();
      });
    }
  }, {
    key: "getButtons",
    value: function getButtons() {
      this.showMore = document.querySelectorAll('.showing__view-more');
      this.showMore.forEach(function (movie) {
        movie.addEventListener('click', function () {
          var id = movie.getAttribute('data-id');
          window.location.href = "/movie.html?id=" + id;
        });
      });
    }
  }]);

  return Showing;
}(Config);