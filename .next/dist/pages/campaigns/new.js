"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require("semantic-ui-react");

var _factory = require("../../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\Documents Ivan\\Courses\\Ethereum and solidity course Stephen\\decentralized-kickstart\\pages\\campaigns\\new.js?entry";


var CampaignNew = function (_Component) {
  (0, _inherits3.default)(CampaignNew, _Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minimumContribution: "",
      errorMessage: "",
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // To prevet default action, send it to the backend.
                event.preventDefault();
                _this.setState({ loading: true, errorMessage: "" });
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({ from: accounts[0] });

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 13:
                _this.setState({ loading: false });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 10]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignNew, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "Create a Campaign"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Minimun Contribution"), _react2.default.createElement(_semanticUiReact.Input, {
        label: "wei",
        labelPosition: "right",
        value: this.state.minimumContribution,
        onChange: function onChange(event) {
          return _this3.setState({ minimumContribution: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Create!")));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJmYWN0b3J5Iiwid2ViMyIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVEsQUFBTSxBQUFPOztBQUM5QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7Ozs7Ozs7c05BQ0osQTsyQkFBUSxBQUNlLEFBQ3JCO29CQUZNLEFBRVEsQUFDZDtlQUhNLEEsQUFHRztBQUhILEFBQ04sYUFLRixBOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDtZQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO0FBQ0E7c0JBQUEsQUFBTSxBQUNOO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBSHRCLEFBR1QsQUFBYyxBQUErQjtnQ0FIcEM7Z0NBQUE7dUJBS2dCLGNBQUEsQUFBSyxJQUxyQixBQUtnQixBQUFTOzttQkFBMUI7QUFMQyxvQ0FBQTtnQ0FBQTt1QkFNRCxrQkFBQSxBQUFRLFFBQVIsQUFDSCxlQUFlLE1BQUEsQUFBSyxNQURqQixBQUN1QixxQkFEdkIsQUFFSCxLQUFLLEVBQUUsTUFBTSxTQVJULEFBTUQsQUFFRSxBQUFRLEFBQVM7O21CQVJsQjtnQ0FBQTtBQUFBOzttQkFBQTtnQ0FBQTtnREFVUDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQVZ2QixBQVVQLEFBQWMsQUFBc0I7O21CQUV0QztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQVpQLEFBWVQsQUFBYyxBQUFXOzttQkFaaEI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkFjRjttQkFDUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esc0NBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EseUNBQUEsQUFBQztlQUFELEFBQ1EsQUFDTjt1QkFGRixBQUVnQixBQUNkO2VBQU8sS0FBQSxBQUFLLE1BSGQsQUFHb0IsQUFDbEI7a0JBQVUsa0JBQUEsQUFBQyxPQUFEO2lCQUNSLE9BQUEsQUFBSyxTQUFTLEVBQUUscUJBQXFCLE1BQUEsQUFBTSxPQURuQyxBQUNSLEFBQWMsQUFBb0M7QUFMdEQ7O29CQUFBO3NCQUhKLEFBQ0UsQUFFRSxBQVNGO0FBVEU7QUFDRSwyQkFRSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7b0JBQWxEO3NCQVpGLEFBWUUsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBQUE7QUFBQTtTQWhCTixBQUNFLEFBRUUsQUFhRSxBQU1QOzs7OztBQTVDdUIsQSxBQStDMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L0RvY3VtZW50cyBJdmFuL0NvdXJzZXMvRXRoZXJldW0gYW5kIHNvbGlkaXR5IGNvdXJzZSBTdGVwaGVuL2RlY2VudHJhbGl6ZWQta2lja3N0YXJ0In0=