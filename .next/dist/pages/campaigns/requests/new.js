"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _routes = require("../../../routes");

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require("semantic-ui-react");

var _campaign = require("../../../Ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../../../Ethereum/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Fundraising\\pages\\campaigns\\requests\\new.js?entry";


var NewRequest = function (_Component) {
  (0, _inherits3.default)(NewRequest, _Component);

  function NewRequest() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, NewRequest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NewRequest.__proto__ || (0, _getPrototypeOf2.default)(NewRequest)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      description: "",
      value: "",
      recepient: "",
      error: "",
      loading: false
    }, _this.onChange = function (e) {
      var _e$target = e.target,
          value = _e$target.value,
          name = _e$target.name;

      _this.setState(function () {
        return (0, _defineProperty3.default)({}, name, value);
      });
    }, _this.onSubmit = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var address, _this$state, description, value, recepient, campaign, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                address = _this.props.address;
                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recepient = _this$state.recepient;
                campaign = (0, _campaign2.default)(address);

                _this.setState(function (previousState) {
                  return {
                    loading: true,
                    error: ""
                  };
                });
                _context.prev = 5;
                _context.next = 8;
                return _web2.default.eth.getAccounts();

              case 8:
                accounts = _context.sent;
                _context.next = 11;
                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, "ether"), recepient).send({ from: accounts[0] });

              case 11:
                _routes.Router.pushRoute("/campaigns/" + address + "/requests");
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](5);

                _this.setState(function () {
                  return { error: _context.t0.message };
                });

              case 17:

                _this.setState(function (previousState) {
                  return {
                    loading: false
                  };
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[5, 14]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(NewRequest, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests", __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "Go Back")), _react2.default.createElement(_semanticUiReact.Form, {
        style: { marginTop: "20px" },
        onSubmit: this.onSubmit,
        error: !!this.state.error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Description"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.description,
        name: "description",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Value"), _react2.default.createElement(_semanticUiReact.Input, {
        label: "ether",
        labelPosition: "right",
        value: this.state.value,
        onChange: this.onChange,
        name: "value",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "recepient"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.recepient,
        onChange: this.onChange,
        name: "recepient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Crap!!!!", content: this.state.error, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        style: { marginTop: "20px" },
        primary: true,
        content: "Create",
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      return {
        address: props.query.address
      };
    }

    // HANDLER FUNCTION FOR SUBMITTING THE CREATE REQUEST FORM

  }]);

  return NewRequest;
}(_react.Component);

exports.default = NewRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJSb3V0ZXIiLCJMaW5rIiwiTGF5b3V0IiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkNhbXBhaWduIiwid2ViMyIsIk5ld1JlcXVlc3QiLCJzdGF0ZSIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNlcGllbnQiLCJlcnJvciIsImxvYWRpbmciLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwic2V0U3RhdGUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYWRkcmVzcyIsInByb3BzIiwiY2FtcGFpZ24iLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwibWFyZ2luVG9wIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUSxBQUFZOztBQUM3QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFRLEFBQU0sQUFBTzs7QUFDOUIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFSTs7Ozs7Ozs7Ozs7Ozs7O29OQUNuQixBO21CQUFRLEFBQ08sQUFDYjthQUZNLEFBRUMsQUFDUDtpQkFITSxBQUdLLEFBQ1g7YUFKTSxBQUlDLEFBQ1A7ZSxBQUxNLEFBS0c7QUFMSCxBQUNOLGEsQUFhRixXQUFXLGFBQUs7c0JBQ1EsRUFEUixBQUNVO1VBRFYsQUFDUixrQkFEUSxBQUNSO1VBRFEsQUFDRCxpQkFEQyxBQUNELEFBRWI7O1lBQUEsQUFBSyxTQUFTLFlBQUE7aURBQUEsQUFBVSxNQUFWLEFBQWlCO0FBQS9CLEFBQ0Q7QSxhLEFBR0Q7MkZBQVcsaUJBQUEsQUFBTSxHQUFOOzJFQUFBOztzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtrQkFBQSxBQUFFLEFBQ0k7QUFGRywwQkFFUyxNQUZULEFBRWMsTUFGZCxBQUVIOzhCQUNrQyxNQUgvQixBQUdvQyxPQUhwQyxBQUdILDBCQUhHLEFBR0gsYUFIRyxBQUdVLG9CQUhWLEFBR1UsT0FIVixBQUdpQix3QkFIakIsQUFHaUIsQUFDcEI7QUFKRywyQkFJUSx3QkFKUixBQUlRLEFBQVMsQUFDMUI7O3NCQUFBLEFBQUssU0FBUyx5QkFBaUIsQUFDN0I7OzZCQUFPLEFBQ0ksQUFDVDsyQkFGRixBQUFPLEFBRUUsQUFFVjtBQUpRLEFBQ0w7QUFQSyxBQUtUO2dDQUxTO2dDQUFBO3VCQVlnQixjQUFBLEFBQUssSUFackIsQUFZZ0IsQUFBUzs7bUJBQTFCO0FBWkMsb0NBQUE7Z0NBQUE7dUJBYUQsU0FBQSxBQUFTLFFBQVQsQUFDSCxjQURHLEFBQ1csYUFBYSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsT0FEekMsQUFDd0IsQUFBd0IsVUFEaEQsQUFDMEQsV0FEMUQsQUFFSCxLQUFLLEVBQUUsTUFBTSxTQWZULEFBYUQsQUFFRSxBQUFRLEFBQVM7O21CQUN6QjsrQkFBQSxBQUFPLDBCQUFQLEFBQStCLFVBaEJ4QjtnQ0FBQTtBQUFBOzttQkFBQTtnQ0FBQTtnREFrQlA7O3NCQUFBLEFBQUssU0FBUyxZQUFBO3lCQUFPLEVBQUUsT0FBTyxZQUFoQixBQUFPLEFBQWE7QUFsQjNCLEFBa0JQOzttQkFHRjs7c0JBQUEsQUFBSyxTQUFTLHlCQUFpQixBQUM3Qjs7NkJBQUEsQUFBTyxBQUNJLEFBRVo7QUFIUSxBQUNMO0FBdkJLLEFBcUJUOzttQkFyQlM7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkE0QkYsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkosQUFDRSxBQUNFLEFBRUYsNkJBQUEsQUFBQztlQUNRLEVBQUUsV0FEWCxBQUNTLEFBQWEsQUFDcEI7a0JBQVUsS0FGWixBQUVpQixBQUNmO2VBQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUhoQixBQUdzQjs7b0JBSHRCO3NCQUFBLEFBS0U7QUFMRjtBQUNFLHlCQUlDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGdDQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtjQUZGLEFBRU8sQUFDTDtrQkFBVSxLQUhaLEFBR2lCOztvQkFIakI7c0JBUEosQUFLRSxBQUVFLEFBTUY7QUFORTtBQUNFLDJCQUtILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDBCQUFBLEFBQUM7ZUFBRCxBQUNRLEFBQ047dUJBRkYsQUFFZ0IsQUFDZDtlQUFPLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ2xCO2tCQUFVLEtBSlosQUFJaUIsQUFDZjtjQUxGLEFBS087O29CQUxQO3NCQWZKLEFBYUUsQUFFRSxBQVFGO0FBUkU7QUFDRSwyQkFPSCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw4QkFBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUsS0FGWixBQUVpQixBQUNmO2NBSEYsQUFHTzs7b0JBSFA7c0JBekJKLEFBdUJFLEFBRUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixZQUFXLFNBQVMsS0FBQSxBQUFLLE1BQS9DLEFBQXFEO29CQUFyRDtzQkFoQ0YsQUFnQ0UsQUFDQTtBQURBOzBCQUNBLEFBQUM7ZUFDUSxFQUFFLFdBRFgsQUFDUyxBQUFhLEFBQ3BCO2lCQUZGLEFBR0U7aUJBSEYsQUFHVSxBQUNSO2lCQUFTLEtBQUEsQUFBSyxNQUpoQixBQUlzQjs7b0JBSnRCO3NCQXRDTixBQUNFLEFBSUUsQUFpQ0UsQUFTUDtBQVRPO0FBQ0U7Ozs7b0NBakZhLEEsT0FBTyxBQUM1Qjs7aUJBQ1csTUFBQSxBQUFNLE1BRGpCLEFBQU8sQUFDZ0IsQUFFeEI7QUFIUSxBQUNMO0FBVUo7Ozs7Ozs7QUFyQnNDLEE7O2tCQUFuQixBIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9GdW5kcmFpc2luZyJ9