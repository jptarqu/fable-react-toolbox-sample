"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PastHelper = exports.Past = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Symbol2 = require("fable-core/umd/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _Util = require("fable-core/umd/Util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Past = exports.Past = function () {
  function Past(va) {
    _classCallCheck(this, Past);

    this.Va = va;
  }

  _createClass(Past, [{
    key: _Symbol3.default.reflection,
    value: function () {
      return {
        type: "webpackSample.Past",
        interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
        properties: {
          Va: "string"
        }
      };
    }
  }, {
    key: "Equals",
    value: function (other) {
      return (0, _Util.equalsRecords)(this, other);
    }
  }, {
    key: "CompareTo",
    value: function (other) {
      return (0, _Util.compareRecords)(this, other);
    }
  }]);

  return Past;
}();

(0, _Symbol2.setType)("webpackSample.Past", Past);

var PastHelper = exports.PastHelper = function (__exports) {
  var add = __exports.add = function (a1, a2) {
    return a1 + a2;
  };

  return __exports;
}({});
//# sourceMappingURL=types.js.map