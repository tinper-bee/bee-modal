import classNames from 'classnames';
import events from 'dom-helpers/events';
import ownerDocument from 'dom-helpers/ownerDocument';
import canUseDOM from 'dom-helpers/util/inDOM';
import getScrollbarSize from 'dom-helpers/util/scrollbarSize';
import React from 'react';
import ReactDOM from 'react-dom';
import { BaseModal } from 'bee-overlay';
import isOverflowing from 'bee-overlay/build/utils/isOverflowing';
import { elementType, splitComponent, createChainedFunction } from 'tinper-bee-core';

import { Fade } from 'bee-transition';
import Body from './ModalBody';
import ModalDialog from './ModalDialog';
import Footer from './ModalFooter';
import Header from './ModalHeader';
import Title from './ModalTitle';


const propTypes = {
  ...BaseModal.propTypes,
  ...ModalDialog.propTypes,

  /**
   * 是否弹出遮罩层/遮罩层点击是否触发关闭
   */
  backdrop: React.PropTypes.oneOf(['static', true, false]),

  /**
   * esc触发关闭
   */
  keyboard: React.PropTypes.bool,

  /**
   * 显隐时是否使用动画
   */
  animation: React.PropTypes.bool,

  /**
   * 传递给模态框的样式
   */
  dialogComponentClass: elementType,

  /**
   * 自动设置焦点
   */
  autoFocus: React.PropTypes.bool,

  /**
   * 防止打开时焦点离开模态框
   */
  enforceFocus: React.PropTypes.bool,

  /**
   * When `true` The modal will show itself.
   */
  show: React.PropTypes.bool,

  /**
   * A callback fired when the header closeButton or non-static backdrop is
   * clicked. Required if either are specified.
   */
  onHide: React.PropTypes.func,

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: React.PropTypes.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: React.PropTypes.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: React.PropTypes.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: React.PropTypes.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: React.PropTypes.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: React.PropTypes.func,

  /**
   * @private
   */
  container: BaseModal.propTypes.container,

  size: React.PropTypes.oneOf(["sm", "lg"])
};

const defaultProps = {
  ...BaseModal.defaultProps,
  animation: true,
  dialogComponentClass: ModalDialog,
  clsPrefix: 'u-modal'
};

const childContextTypes = {
  $u_modal: React.PropTypes.shape({
    onHide: React.PropTypes.func,
  }),
};

class Modal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleEntering = this.handleEntering.bind(this);
    this.handleExited = this.handleExited.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.handleDialogClick = this.handleDialogClick.bind(this);

    this.state = {
      style: {},
    };
  }

  getChildContext() {
    return {
      $u_modal: {
        onHide: this.props.onHide,
      },
    };
  }

  componentWillUnmount() {
    // Clean up the listener if we need to.
    this.handleExited();
  }

  handleEntering() {
    // FIXME: This should work even when animation is disabled.
    events.on(window, 'resize', this.handleWindowResize);
    this.updateStyle();
  }

  handleExited() {
    // FIXME: This should work even when animation is disabled.
    events.off(window, 'resize', this.handleWindowResize);
  }

  handleWindowResize() {
    this.updateStyle();
  }

  handleDialogClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onHide();
  }

  updateStyle() {
    if (!canUseDOM) {
      return;
    }

    const dialogNode = this._modal.getDialogElement();
    const dialogHeight = dialogNode.scrollHeight;

    const document = ownerDocument(dialogNode);
    const bodyIsOverflowing = isOverflowing(
      ReactDOM.findDOMNode(this.props.container || document.body)
    );
    const modalIsOverflowing =
      dialogHeight > document.documentElement.clientHeight;

    this.setState({
      style: {
        paddingRight: bodyIsOverflowing && !modalIsOverflowing ?
          getScrollbarSize() : undefined,
        paddingLeft: !bodyIsOverflowing && modalIsOverflowing ?
          getScrollbarSize() : undefined
      }
    });
  }

  render() {
    const {
      backdrop,
      animation,
      show,
      dialogComponentClass: Dialog,
      className,
      clsPrefix,
      style,
      size,
      children, // Just in case this get added to BaseModal propTypes.
      onEntering,
      onExited,
      ...props
    } = this.props;

    const [baseModalProps, dialogProps] =
      splitComponent(props, BaseModal);

    const inClassName = show && !animation && 'in';

    const backdropClasses = {
        [`${clsPrefix}-backdrop`]: true
    };
    const containerClasses = {
        [`${clsPrefix}-open`]: true
    };

    return (
      <BaseModal
        {...baseModalProps}
        ref={c => { this._modal = c; }}
        show={show}
        onEntering={createChainedFunction(onEntering, this.handleEntering)}
        onExited={createChainedFunction(onExited, this.handleExited)}
        backdrop={backdrop}
        backdropClassName={classNames(backdropClasses, inClassName)}
        containerClassName={classNames(containerClasses)}
        transition={animation ? Fade : undefined}
        dialogTransitionTimeout={Modal.TRANSITION_DURATION}
        backdropTransitionTimeout={Modal.BACKDROP_TRANSITION_DURATION}
      >
        <Dialog
          {...dialogProps}
          style={{ ...this.state.style, ...style }}
          className={classNames(className, inClassName)}
          onClick={backdrop === true ? this.handleDialogClick : null}
          size ={ size }
        >
          {children}
        </Dialog>
      </BaseModal>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
Modal.childContextTypes = childContextTypes;

Modal.Body = Body;
Modal.Header = Header;
Modal.Title = Title;
Modal.Footer = Footer;

Modal.Dialog = ModalDialog;

Modal.TRANSITION_DURATION = 200000;
Modal.BACKDROP_TRANSITION_DURATION = 10000;

export default Modal;
