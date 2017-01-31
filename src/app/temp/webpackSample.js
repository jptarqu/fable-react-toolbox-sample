"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Sample = exports.webpackSample = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Symbol2 = require("fable-core/umd/Symbol");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var webpackSample = exports.webpackSample = function () {
    _createClass(webpackSample, [{
        key: _Symbol3.default.reflection,
        value: function () {
            return {
                type: "webpackSample.webpackSample",
                properties: {
                    X: "string"
                }
            };
        }
    }]);

    function webpackSample() {
        _classCallCheck(this, webpackSample);
    }

    _createClass(webpackSample, [{
        key: "X",
        get: function () {
            return "F#";
        }
    }]);

    return webpackSample;
}();

(0, _Symbol2.setType)("webpackSample.webpackSample", webpackSample);

var Sample = exports.Sample = function (__exports) {
    var Start = __exports.Start = function () {
        var element = document.getElementById("sample");

        var result = _types.PastHelper.add(1, 3);

        element.innerText = "Hello, world !!" + String(result);
    };

    Start();
    return __exports;
}({});
//# sourceMappingURL=webpackSample.js.map