/**
 *
 * @title 默认的模态框
 * @description
 *
 */

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

    render() {
        return (
        <div className="padding-15">
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
                <Form horizontal>
                				<Row>
                				    <FormGroup controlId="formInlineName">
                				    	<Col sm={2} smOffset={2} className="text-right">
                				    		<ControlLabel>昵称:</ControlLabel>
                				    	</Col>
                				      	<Col sm={5}>
                				      		<FormControl htmlType="text" placeholder="请输入昵称" />
                				      	</Col>
                				    </FormGroup>
                			    </Row>
                			    <Row>
                                    <FormGroup controlId="formInlineName">
                                        <Col sm={2} smOffset={2} className="text-right">
                                            <ControlLabel>密码:</ControlLabel>
                                        </Col>
                                        <Col sm={5}>
                                            <FormControl htmlType="text" placeholder="请输入密码" />
                                        </Col>
                                    </FormGroup>
                			    </Row>
                			</Form>

                </Modal.Body>

                <Modal.Footer>
                <Row>
                    <Col md={2} mdOffset={3}>
                        <Button onClick={ this.close } shape="border">关闭</Button>
                    </Col>
                    <Col md={2} mdOffset={1}>
                        <Button onClick={ this.close } colors="primary">确认</Button>
                    </Col>
                </Row>
                </Modal.Footer>
           </Modal>

        </div>
        )
    }
}
