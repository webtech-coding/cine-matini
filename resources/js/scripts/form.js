'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Form =
/*#__PURE__*/
function () {
  function Form(el) {
    _classCallCheck(this, Form);

    this.form = document.querySelector(el);
    this.required = this.form.querySelectorAll('[required]');
    this.emails = this.form.querySelectorAll('[email]');
    this.action = this.form.getAttribute('action'); //this.Event()

    this.errors = [];
  }

  _createClass(Form, [{
    key: "Event",
    value: function Event() {
      //     //remove any error indication
      //     this.required.forEach(required => {
      //        required.addEventListener('change', ()=>{
      //         console.log(required)
      //         let cssClass=required.classList[0]+'--error'
      //         if(required.classList.contains(cssClass)){
      //             required.classList.remove(cssClass)
      //         }
      //        })
      //    });
      this.form.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('shovit'); // if(this.errors.length>0){
        //     this.removeErrors();
        // }
        // this.validationCheck()
        // if(this.errors.length>0){
        //     this.displayErrors()
        // }else{
        //     this.form.submit();
        // }
      });
    }
  }, {
    key: "removeErrors",
    value: function removeErrors() {
      var _this = this;

      this.errors.forEach(function (error) {
        var spans = error.element.parentNode.querySelectorAll('span');
        spans.forEach(function (span) {
          error.element.parentNode.removeChild(span);
        });
        _this.errors = [];
      });
    }
  }, {
    key: "validationCheck",
    value: function validationCheck() {
      var _this2 = this;

      var errorData = {};
      var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.required.forEach(function (required) {
        switch (required.nodeName) {
          case 'INPUT':
          case 'TEXTAREA':
            if (required.value.length == 0) {
              errorData['element'] = required;
              errorData['message'] = 'This field is mandatory.';
            }

            break;

          case 'SELECT':
            if (required.value == 0) {
              errorData['element'] = required;
              errorData['message'] = 'Please select one';
            }

            break;
        }

        if (Object.keys(errorData).length > 0) {
          _this2.errors.push(errorData);

          errorData = {};
        }
      });
      this.emails.forEach(function (email) {
        if (!reg.test(email.value)) {
          errorData = {};
          errorData['element'] = email;
          errorData['message'] = 'Please provide valid email';

          _this2.errors.push(errorData);
        }
      });
    }
  }, {
    key: "displayErrors",
    value: function displayErrors() {
      this.errors.forEach(function (error) {
        var cssClass = $(error.element).classList[0] + '--error';
        $(error.element).classList.add(cssClass);
        var span = document.createElement('span');
        span.textContent = error.message;
        $(error.element).parentNode.appendChild(span);
      });
    }
  }]);

  return Form;
}();