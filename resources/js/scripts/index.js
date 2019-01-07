'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Index =
/*#__PURE__*/
function () {
  function Index() {
    _classCallCheck(this, Index);

    this.api = "https://api.themoviedb.org/3/movie/404368/images";
    this.api_key = "220db9d772820f55fd7e39476eef1d78";
    this.url = this.api + "?api_key=" + this.api_key;
    this.image_api = "https://image.tmdb.org/t/p/w500/";
    this.service();
  }

  _createClass(Index, [{
    key: "service",
    value: function service() {
      var _this = this;

      fetch(this.url, {
        method: "GET"
      }).then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      }).then(function (data) {
        _this.fetchSuccess(data);
      }).catch(function (data) {
        console.log("some error occoured: " + data);
      });
    }
  }, {
    key: "fetchSuccess",
    value: function fetchSuccess(data) {
      if (Object.keys(data).length !== 0) {
        console.log(data);
      } else {
        console.log('nothing has been returned');
      }
    }
  }]);

  return Index;
}();

new Index();