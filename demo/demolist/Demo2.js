/**
 *
 * @title 默认的模态框
 * @description
 *
 */

import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import Button from 'bee-button';
import Modal from '../../src';
import Form from 'bee-form';
import FormGroup from 'bee-form-group';
import ControlLabel from 'bee-control-label';
import FormControl from 'bee-form-control';
const FormItem = Form.FormItem;

class Demo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({
            showModal: false
        });
    }

    open() {
        this.setState({
            showModal: true
        });
    }

    checkForm = (flag,obj) => {
        if(flag){
            this.close();
        }
    }

    render() {

        const CancelBtn = (
            <Button style={{ marginRight: 20 }} onClick={ this.close }>取消</Button>
        )

        return (
        <div className="demo-margin">
            <Button
            colors = "primary"
            size = "lg"
            onClick = { this.open }>
                注册模态框
            </Button>​
            <Modal
            show = { this.state.showModal }
            onHide = { this.close }
            style={{ width: 450}}
            >
                <Modal.Header className="text-center">
                    <Modal.Title>注册</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form
                        submitCallBack={this.checkForm}
                        submitAreaClassName="text-center"
                        className="text-center"
                        beforeSubmitBtn={CancelBtn}>
                        <FormItem
                            labelName="姓名: "
                            isRequire={true}
                            htmlType="chinese"
                            errorMessage="姓名格式错误"
                            method="blur"
                            inline={true}>
                            <FormControl name="name" placeholder="只能输入中文"/>
                        </FormItem>
                        <FormItem
                            labelName="年龄: "
                            isRequire={true}
                            method="blur"
                            errorMessage="年龄格式错误"
                            reg={/^[0-9]+$/}
                            inline={true}>
                            <FormControl name="age" ref="input" />
                        </FormItem>
                    </Form>

                </Modal.Body>

                <Modal.Footer>
                </Modal.Footer>
           </Modal>

        </div>
        )
    }
}


export default Demo2;