/**
 *
 * @title 可以拖拽可resize的模态框
 * @description
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Modal from '../../src';


class Demo13 extends Component {
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
    onResizeStart = (e, dir, elementRef) => {
        console.log("onResizeStart", e, dir, elementRef)
    }
    onResize = (e, dir, elementRef, delta) => {
        console.log("onResize", e, dir, elementRef, delta)
    }
    onResizeStop = (e, dir, elementRef, delta) => {
        console.log("onResizeStop", e, dir, elementRef, delta)
    }

    render () {
        return (
        <div>
            <Button
            colors = "primary"
            className="demo-margin"
            onClick = { this.open }>
                打开模态框
            </Button>​
            <Modal
            show = { this.state.showModal }
            draggable={true}
            backdropClosable={false}
            resizable={true}
            maxWidth={"1000"}
            maxHeight={"500px"}
            minWidth={300}
            minHeight={150}
            onResizeStart={this.onResizeStart}
            onResize={this.onResize}
            onResizeStop={this.onResizeStop}
            onHide = { this.close } >
                <Modal.Header closeButton>
                    <Modal.Title>标题</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={ this.close } colors="secondary" style={{marginRight: 8}}>取消</Button>
                    <Button onClick={ this.close } colors="primary">确认</Button>
                </Modal.Footer>
           </Modal>
        </div>
        )
    }
}

export default Demo13;
