import classNames from 'classnames';
import React from 'react';


const propTypes = {
  /**
   * 传给dialog的classname
   */
  dialogClassName: React.PropTypes.string

};

const defaultProps = {
    clsPrefix: 'u-modal'
};

class ModalDialog extends React.Component {
  render() {
    const { dialogClassName, className, clsPrefix, size, style , children, ...props } =
      this.props;
    // const [bsProps, elementProps] = splitBsProps(props);
    //
     const uClassName = {
         [`${clsPrefix}`]: true
     };


    const modalStyle = { display: 'block', ...style };

    const dialogClasses = {
      [uClassName]: false,
      [`${clsPrefix}-dialog`]: true
    };
    if(size){
        dialogClasses[`${clsPrefix}-${size}`] = true;
    }

    return (
      <div
        {...props}
        tabIndex="-1"
        role="dialog"
        style={modalStyle}
        className={classNames(className, uClassName)}
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
