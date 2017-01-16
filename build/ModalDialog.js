'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  /**
   * 传给dialog的classname
   */
  dialogClassName: _react2["default"].PropTypes.string,
  contentStyle: _react2["default"].PropTypes.object

};

var defaultProps = {
  clsPrefix: 'u-modal'
};

var ModalDialog = function (_React$Component) {
  (0, _inherits3["default"])(ModalDialog, _React$Component);

  function ModalDialog() {
    (0, _classCallCheck3["default"])(this, ModalDialog);
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
  }

  ModalDialog.prototype.render = function render() {
    var _dialogClasses;

    var _props = this.props;
    var dialogClassName = _props.dialogClassName;
    var className = _props.className;
    var clsPrefix = _props.clsPrefix;
    var size = _props.size;
    var style = _props.style;
    var contentStyle = _props.contentStyle;
    var children = _props.children;
    var props = (0, _objectWithoutProperties3["default"])(_props, ['dialogClassName', 'className', 'clsPrefix', 'size', 'style', 'contentStyle', 'children']);
    // const [bsProps, elementProps] = splitBsProps(props);
    //

    var uClassName = (0, _defineProperty3["default"])({}, '' + clsPrefix, true);

    var modalStyle = { display: 'block' };

    var dialogClasses = (_dialogClasses = {}, (0, _defineProperty3["default"])(_dialogClasses, uClassName, false), (0, _defineProperty3["default"])(_dialogClasses, clsPrefix + '-dialog', true), _dialogClasses);
    if (size) {
      dialogClasses[clsPrefix + '-' + size] = true;
    }

    return _react2["default"].createElement(
      'div',
      (0, _extends3["default"])({}, props, {
        tabIndex: '-1',
        role: 'dialog',
        style: modalStyle,
        className: (0, _classnames2["default"])(className, uClassName)
      }),
      _react2["default"].createElement(
        'div',
        { className: (0, _classnames2["default"])(dialogClassName, dialogClasses), style: style },
        _react2["default"].createElement(
          'div',
          { style: contentStyle, className: (0, _classnames2["default"])([clsPrefix + '-content']), role: 'document' },
          children
        )
      )
    );
  };

  return ModalDialog;
}(_react2["default"].Component);

ModalDialog.propTypes = propTypes;
ModalDialog.defaultProps = defaultProps;

exports["default"] = ModalDialog;
module.exports = exports['default'];