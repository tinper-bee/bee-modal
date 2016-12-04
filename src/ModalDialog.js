import classNames from 'classnames';
import React from 'react';


const propTypes = {
  /**
   * 传给dialog的classname
   */
  dialogClassName: React.PropTypes.string,

};

const defaultProps = {
    clsPrefix: 'u-modal'
};

class ModalDialog extends React.Component {
  render() {
    const { dialogClassName, className, clsPrefix, style, children, ...props } =
      this.props;
    // const [bsProps, elementProps] = splitBsProps(props);
    //
     const bsClassName = {
         [`${clsPrefix}`]: true,
     };

    const modalStyle = { display: 'block', ...style };

    const dialogClasses = {
      [bsClassName]: false,
      [`${clsPrefix}-dialog`]: true,
    };

    return (
      <div
        {...props}
        tabIndex="-1"
        role="dialog"
        style={modalStyle}
        className={classNames(className, bsClassName)}
      >
        <div className={classNames(dialogClassName, dialogClasses)}>
          <div className={classNames([`${clsPrefix}-content`])} role="document">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

ModalDialog.propTypes = propTypes;
ModalDialog.defaultProps = defaultProps;

export default ModalDialog;
