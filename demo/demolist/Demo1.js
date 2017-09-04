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


class Demo1 extends Component {
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
    render () {
        return (
        <div className="padding-15">
            <Button
            colors = "primary"
            size = "lg"
            onClick = { this.open }>
                打开模态框
            </Button>​
            <Modal
            show = { this.state.showModal }
            onHide = { this.close } >
                <Modal.Header>
                    <Modal.Title>这是题目</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    这是一些描述。。。
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={ this.close } shape="border" style={{marginRight: 50}}>关闭</Button>
                    <Button onClick={ this.close } colors="primary">确认</Button>
                </Modal.Footer>
           </Modal>
        </div>
        )
    }
}

export default Demo1;
