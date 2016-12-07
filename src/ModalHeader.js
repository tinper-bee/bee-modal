import classNames from 'classnames';
import React from 'react';

import { createChainedFunction } from 'tinper-bee-core';



const propTypes = {

  /**
   * 是否显示关闭按钮
   */
  closeButton: React.PropTypes.bool,

  /**
   * 关闭时的钩子函数
   */
  onHide: React.PropTypes.func,
};

const defaultProps = {
  'aria-label': 'Close',
  closeButton: false,
  clsPrefix: 'u-modal-header'
};

const contextTypes = {
  $u_modal: React.PropTypes.shape({
    onHide: React.PropTypes.func,
  }),
};

class ModalHeader extends React.Component {
  render() {
    const {
      'aria-label': label,
      closeButton,
      onHide,
      className,
      clsPrefix,
      children,
      ...props
    } = this.props;

    const modal = this.context.$u_modal;


    const classes = {};
    classes[`${clsPrefix}`] = true;

    return (
      <div
        {...props}
        className={classNames(className, classes)}
      >
        {closeButton &&
          <button
            type="button"
            className="u-close"
            aria-label={label}
            onClick={createChainedFunction(modal.onHide, onHide)}
          >
            <span aria-hidden="true">
              &times;
            </span>
          </button>
        }

        {children}
      </div>
    );
  }
}

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;
ModalHeader.contextTypes = contextTypes;

export default ModalHeader;
