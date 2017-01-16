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

  /**
   * 是否显示关闭按钮
   */
  closeButton: _react2["default"].PropTypes.bool,

  /**
   * 关闭时的钩子函数
   */
  onHide: _react2["default"].PropTypes.func
};

var defaultProps = {
  'aria-label': 'Close',
  closeButton: false,
  clsPrefix: 'u-modal-header'
};

var contextTypes = {
  $u_modal: _react2["default"].PropTypes.shape({
    onHide: _react2["default"].PropTypes.func
  })
};

var ModalHeader = function (_React$Component) {
  (0, _inherits3["default"])(ModalHeader, _React$Component);

  function ModalHeader() {
    (0, _classCallCheck3["default"])(this, ModalHeader);
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
  }

  ModalHeader.prototype.render = function render() {
    var _props = this.props;
    var label = _props['aria-label'];
    var closeButton = _props.closeButton;
    var onHide = _props.onHide;
    var className = _props.className;
    var clsPrefix = _props.clsPrefix;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3["default"])(_props, ['aria-label', 'closeButton', 'onHide', 'className', 'clsPrefix', 'children']);


    var modal = this.context.$u_modal;

    var classes = {};
    classes['' + clsPrefix] = true;

    return _react2["default"].createElement(
      'div',
      (0, _extends3["default"])({}, props, {
        className: (0, _classnames2["default"])(className, classes)
      }),
      closeButton && _react2["default"].createElement(
        'button',
        {
          type: 'button',
          className: 'u-close',
          'aria-label': label,
          onClick: (0, _tinperBeeCore.createChainedFunction)(modal.onHide, onHide)
        },
        _react2["default"].createElement(
          'span',
          { 'aria-hidden': 'true' },
          '\xD7'
        )
      ),
      children
    );
  };

  return ModalHeader;
}(_react2["default"].Component);

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;
ModalHeader.contextTypes = contextTypes;

exports["default"] = ModalHeader;
module.exports = exports['default'];