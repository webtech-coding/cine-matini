'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Navigation =
/*#__PURE__*/
function () {
  function Navigation() {
    _classCallCheck(this, Navigation);

    this.burger = document.querySelector('.header__mobile-hesburger');
    this.mobileNav = document.querySelector('.header__mobile-items');
    this.event();
  }

  _createClass(Navigation, [{
    key: "event",
    value: function event() {
      var _this = this;

      this.burger.addEventListener('click', function () {
        _this.mobileNav.classList.toggle('header__mobile-items--open');

        _this.burger.classList.toggle("header__mobile-hesburger--open");
      });
    }
  }]);

  return Navigation;
}();

new Navigation();