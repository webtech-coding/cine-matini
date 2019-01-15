'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scroll =
/*#__PURE__*/
function () {
  function Scroll() {
    var _this = this;

    _classCallCheck(this, Scroll);

    this.el = document.querySelector('.scroll');
    this.event();
    window.addEventListener('scroll', function (e) {
      _this.scroll();
    });
  }

  _createClass(Scroll, [{
    key: "event",
    value: function event() {
      this.el.addEventListener('click', function () {
        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }, {
    key: "scroll",
    value: function scroll() {
      if (document.documentElement.scrollTop > 250) {
        this.el.classList.add('scroll--open');
      } else {
        this.el.classList.remove('scroll--open');
      }
    }
  }]);

  return Scroll;
}();

new Scroll();