'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tinperBeeCore = require('tinper-bee-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  componentClass: _tinperBeeCore.elementType
};

var defaultProps = {
  componentClass: 'div',
  clsPrefix: 'u-modal-body'
};

var ModalBody = function (_React$Component) {
  (0, _inherits3["default"])(ModalBody, _React$Component);

  function ModalBody() {
    (0, _classCallCheck3["default"])(this, ModalBody);
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
  }

  ModalBody.prototype.render = function render() {
    var _props = this.props;
    var Component = _props.componentClass;
    var clsPrefix = _props.clsPrefix;
    var className = _props.className;
    var props = (0, _objectWithoutProperties3["default"])(_props, ['componentClass', 'clsPrefix', 'className']);


    var classes = {};
    classes['' + clsPrefix] = true;

    return _react2["default"].createElement(Component, (0, _extends3["default"])({}, props, {
      className: (0, _classnames2["default"])(className, classes)
    }));
  };

  return ModalBody;
}(_react2["default"].Component);

ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;

exports["default"] = ModalBody;
module.exports = exports['default'];