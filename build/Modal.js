'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _events = require('dom-helpers/events');

var _events2 = _interopRequireDefault(_events);

var _ownerDocument = require('dom-helpers/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _inDOM = require('dom-helpers/util/inDOM');

var _inDOM2 = _interopRequireDefault(_inDOM);

var _scrollbarSize = require('dom-helpers/util/scrollbarSize');

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Modal = require('bee-overlay/build/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _isOverflowing = require('bee-overlay/build/utils/isOverflowing');

var _isOverflowing2 = _interopRequireDefault(_isOverflowing);

var _tinperBeeCore = require('tinper-bee-core');

var _beeTransition = require('bee-transition');

var _ModalBody = require('./ModalBody');

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalDialog = require('./ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _ModalFooter = require('./ModalFooter');

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalTitle = require('./ModalTitle');

var _ModalTitle2 = _interopRequireDefault(_ModalTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = (0, _extends3["default"])({}, _Modal2["default"].propTypes, _ModalDialog2["default"].propTypes, {

  /**
   * 是否弹出遮罩层/遮罩层点击是否触发关闭
   */
  backdrop: _react2["default"].PropTypes.oneOf(['static', true, false]),

  /**
   * esc触发关闭
   */
  keyboard: _react2["default"].PropTypes.bool,

  /**
   * 显隐时是否使用动画
   */
  animation: _react2["default"].PropTypes.bool,

  /**
   * 传递给模态框的样式
   */
  dialogComponentClass: _tinperBeeCore.elementType,

  /**
   * 自动设置焦点
   */
  autoFocus: _react2["default"].PropTypes.bool,

  /**
   * 防止打开时焦点离开模态框
   */
  enforceFocus: _react2["default"].PropTypes.bool,

  /**
   * 是否打开模态框
   */
  show: _react2["default"].PropTypes.bool,

  /**
   * 关闭时的钩子函数
   */
  onHide: _react2["default"].PropTypes.func,

  onEnter: _react2["default"].PropTypes.func,

  onEntering: _react2["default"].PropTypes.func,

  onEntered: _react2["default"].PropTypes.func,

  onExit: _react2["default"].PropTypes.func,

  onExiting: _react2["default"].PropTypes.func,

  onExited: _react2["default"].PropTypes.func,

  /**
   * 要添加到的元素
   */
  container: _Modal2["default"].propTypes.container,

  /**
   * 尺寸
   */
  size: _react2["default"].PropTypes.oneOf(["sm", "lg", "xlg", ""])
});

var defaultProps = (0, _extends3["default"])({}, _Modal2["default"].defaultProps, {
  animation: true,
  dialogComponentClass: _ModalDialog2["default"],
  clsPrefix: 'u-modal'
});

var childContextTypes = {
  $u_modal: _react2["default"].PropTypes.shape({
    onHide: _react2["default"].PropTypes.func
  })
};

var Modal = function (_React$Component) {
  (0, _inherits3["default"])(Modal, _React$Component);

  function Modal(props, context) {
    (0, _classCallCheck3["default"])(this, Modal);

    var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props, context));

    _this.handleEntering = _this.handleEntering.bind(_this);
    _this.handleExited = _this.handleExited.bind(_this);
    _this.handleWindowResize = _this.handleWindowResize.bind(_this);
    _this.handleDialogClick = _this.handleDialogClick.bind(_this);

    _this.state = {
      style: {}
    };
    return _this;
  }

  Modal.prototype.getChildContext = function getChildContext() {
    return {
      $u_modal: {
        onHide: this.props.onHide
      }
    };
  };

  Modal.prototype.componentWillUnmount = function componentWillUnmount() {
    // Clean up the listener if we need to.
    this.handleExited();
  };

  Modal.prototype.handleEntering = function handleEntering() {
    // FIXME: This should work even when animation is disabled.
    _events2["default"].on(window, 'resize', this.handleWindowResize);
    this.updateStyle();
  };

  Modal.prototype.handleExited = function handleExited() {
    // FIXME: This should work even when animation is disabled.
    _events2["default"].off(window, 'resize', this.handleWindowResize);
  };

  Modal.prototype.handleWindowResize = function handleWindowResize() {
    this.updateStyle();
  };

  Modal.prototype.handleDialogClick = function handleDialogClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onHide();
  };

  Modal.prototype.updateStyle = function updateStyle() {
    if (!_inDOM2["default"]) {
      return;
    }

    var dialogNode = this._modal.getDialogElement();
    var dialogHeight = dialogNode.scrollHeight;

    var document = (0, _ownerDocument2["default"])(dialogNode);
    var bodyIsOverflowing = (0, _isOverflowing2["default"])(_reactDom2["default"].findDOMNode(this.props.container || document.body));
    var modalIsOverflowing = dialogHeight > document.documentElement.clientHeight;

    this.setState({
      style: {
        paddingRight: bodyIsOverflowing && !modalIsOverflowing ? (0, _scrollbarSize2["default"])() : undefined,
        paddingLeft: !bodyIsOverflowing && modalIsOverflowing ? (0, _scrollbarSize2["default"])() : undefined
      }
    });
  };

  Modal.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props;
    var backdrop = _props.backdrop;
    var animation = _props.animation;
    var show = _props.show;
    var Dialog = _props.dialogComponentClass;
    var className = _props.className;
    var clsPrefix = _props.clsPrefix;
    var style = _props.style;
    var size = _props.size;
    var children = _props.children;
    var onEntering = _props.onEntering;
    var onExited = _props.onExited;
    var props = (0, _objectWithoutProperties3["default"])(_props, ['backdrop', 'animation', 'show', 'dialogComponentClass', 'className', 'clsPrefix', 'style', 'size', 'children', 'onEntering', 'onExited']);

    var _splitComponent = (0, _tinperBeeCore.splitComponent)(props, _Modal2["default"]);

    var _splitComponent2 = (0, _slicedToArray3["default"])(_splitComponent, 2);

    var baseModalProps = _splitComponent2[0];
    var dialogProps = _splitComponent2[1];


    var inClassName = show && !animation && 'in';

    var backdropClasses = (0, _defineProperty3["default"])({}, clsPrefix + '-backdrop', true);
    var containerClasses = (0, _defineProperty3["default"])({}, clsPrefix + '-open', true);

    return _react2["default"].createElement(
      _Modal2["default"],
      (0, _extends3["default"])({}, baseModalProps, {
        ref: function ref(c) {
          _this2._modal = c;
        },
        show: show,
        onEntering: (0, _tinperBeeCore.createChainedFunction)(onEntering, this.handleEntering),
        onExited: (0, _tinperBeeCore.createChainedFunction)(onExited, this.handleExited),
        backdrop: backdrop,
        backdropClassName: (0, _classnames2["default"])(backdropClasses, inClassName),
        containerClassName: (0, _classnames2["default"])(containerClasses),
        transition: animation ? _beeTransition.Fade : undefined,
        dialogTransitionTimeout: Modal.TRANSITION_DURATION,
        backdropTransitionTimeout: Modal.BACKDROP_TRANSITION_DURATION
      }),
      _react2["default"].createElement(
        Dialog,
        (0, _extends3["default"])({}, dialogProps, {
          style: (0, _extends3["default"])({}, this.state.style, style),
          className: (0, _classnames2["default"])(className, inClassName),
          onClick: backdrop === true ? this.handleDialogClick : null,
          size: size
        }),
        children
      )
    );
  };

  return Modal;
}(_react2["default"].Component);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
Modal.childContextTypes = childContextTypes;

Modal.Body = _ModalBody2["default"];
Modal.Header = _ModalHeader2["default"];
Modal.Title = _ModalTitle2["default"];
Modal.Footer = _ModalFooter2["default"];

Modal.Dialog = _ModalDialog2["default"];

Modal.TRANSITION_DURATION = 200000;
Modal.BACKDROP_TRANSITION_DURATION = 10000;

exports["default"] = Modal;
module.exports = exports['default'];