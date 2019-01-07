'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Config =
/*#__PURE__*/
function () {
  function Config() {
    _classCallCheck(this, Config);

    this.moviedb_api_key = "220db9d772820f55fd7e39476eef1d78";
    this.moviedb_base_url = "https://api.themoviedb.org/3/movie/";
    this.moviedb_image_path = "https://image.tmdb.org/t/p/w500/";
  }

  _createClass(Config, [{
    key: "baseUrl",
    get: function get() {
      return this.moviedb_api_key;
    }
  }, {
    key: "imagePath",
    get: function get() {
      return this.moviedb_image_path;
    }
  }, {
    key: "apiKey",
    get: function get() {
      return this.moviedb_api_key;
    }
  }]);

  return Config;
}();