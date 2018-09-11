/**
 *
 * @title 两个模态框
 * @description 当两个模态框同时出现的时候，后面出现的那个层级在上面
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Modal from '../../src';

import FormGroup from 'bee-form-group';
import Label from 'bee-label';
import FormControl from 'bee-form-control';
import Popconfirm from 'bee-popconfirm'
// import { Popconfirm } from 'tinper-bee';


class Demo9 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showModal2: false
        };
    }

    close = () => {
        this.setState({
            showModal: false
        });
    }

    open = () => {
        this.setState({
            showModal: true
        });
    }

    close2 = () => {
        this.setState({
            showModal2: false
        });
    }

    open2 = () => {
        this.setState({
            showModal2: true
        });
    }

    handleChange = (state) => (value) => {
      this.setState({
          [state]: value
      })
    }

    render() {
      let content = (
            <FormGroup>
                <Label>用户名</Label>
                <FormControl
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                />
            </FormGroup>
      );
        return (
            <div className="demo-margin">
                <Button
                    colors="primary"
                    size="lg"
                    onClick={this.open}
                >
                    打开模态框
                </Button>
                <Modal
                    show={this.state.showModal}
                    onHide={this.close}
                >
                    <Modal.Header className="text-center">
                        <Modal.Title>第一个模态框</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                       <span>
                          在模态框中打开气泡组件，如果气泡组件中有文本框，文本框光标不会聚焦。需在modal中设置enforceFocus为false。
                       </span>
                      <div className="demoPadding">
                        <Popconfirm trigger="click" placement="right" content={content}>
                            <Button colors="primary">打开气泡组件</Button>
                        </Popconfirm>
                      </div>
                    </Modal.Body>

                    <Modal.Footer className="text-center">
                        <Button bordered style={{ marginRight: 20 }} onClick={this.close}>
                            取消
                        </Button>
                        <Button colors="primary" onClick={this.close}>
                            确认
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}


export default Demo9;