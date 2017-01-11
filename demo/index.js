
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Modal from '../src';
import Form from 'bee-form';
import FormGroup from 'bee-form-group';
import ControlLabel from 'bee-control-label';
import FormControl from 'bee-form-control';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


/**
 *
 * @title 默认的模态框
 * @description
 *
 */

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
    render () {
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
/**
 *
 * @title 不同大小的模态框
 * @description 通过size属性控制模态框大小
 *
 */

class Demo3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            modalSize: ''
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.changeSize = this.changeSize.bind(this);

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
    changeSize(size) {
        this.setState({
            modalSize: size
        });
    }
    render () {
        return (
        <div className="padding-15">
            <Button
            colors = "primary"
            size = "lg"
            onClick = { ()=>{
                this.changeSize("sm");
                this.open();
            } }>
                打开小号模态框
            </Button>​
            <Button
            colors = "primary"
            size = "lg"
            onClick = { ()=>{
                this.changeSize("lg");
                this.open();
            } }>
                打开大号模态框
            </Button>​
            <Button
            colors = "primary"
            size = "lg"
            onClick = { ()=>{
                this.changeSize("xlg");
                this.open();
            } }>
                打开超大号模态框
            </Button>​
            <Modal
            show = { this.state.showModal }
            size = { this.state.modalSize }
            onHide = { this.close } >
               <Modal.Header closeButton>
                    <Modal.Title > 我来组成头部 < /Modal.Title>
                </Modal.Header >
                <Modal.Body >
                   <h4> 这是一个沉默的标题 </h4>
                   <p> 一些描述。。。 </p>
                   ​<hr/> ​
                   <h4> 来多添加一些内容， 显示滚动条吧 </h4>
                   <p> 用创想与技术推动商业和社会进步 </p>
                   <p> 我们基于创造性的思想与先进的技术（ 现阶段是信息技术）， 创新和运营高客户价值的产品与服务， 帮助客户实现发展目标， 进而推动商业和社会进步。 < /p>
                   <p> 全球领先的企业与公共组织软件、 云服务、 金融服务提供商。 </p>
                   <p> 员工快乐工作， 成就事业， 分享成功的平台。 </p>
                   <p> 企业和公共组织是我们持续服务的客户。 软件、 云服务、 金融服务是用友新发展阶段的核心业务。 全球领先是我们必须达成的目标。 </p>
                   <p> 在努力实现产业发展目标的同时， 员工在用友快乐工作、 成就事业、 分享成功也是公司的追求。 </p>
                   <p> 核心价值观 </p>
                   <p> 用户之友 专业奋斗 </p>
                   <p> 开放创新 诚信合作 </p>
                   <p> 核心价值观是所有用友人最重要的行为指引、 行动指南， 也是公司赖以可持续发展的信念基石。 </p>
                   <p> 我们坚守“ 用户之友” 的初心， 做“ 专业的奋斗者”， 始终坚持“ 开放创新” 和“ 诚信合作”。 </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = { this.close }> 关闭 </Button>
                </Modal.Footer>
           </Modal>
        </div>
        )
    }
}
/**
 *
 * @title 不同遮罩层状态的模态框
 * @description 遮罩层可以通过backdrop属性控制状态，可以为不响应事件，可以不显示。
 *
 */

class Demo4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            modalDropup: true
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.changeDropup = this.changeDropup.bind(this);

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
    changeDropup(state) {
        this.setState({
            modalDropup: state
        });
    }
    render () {
        return (
        <div className="padding-15">
            <Button
            colors = "primary"
            size = "lg"
            onClick = { ()=>{
                this.changeDropup(false);
                this.open();
            } }>
                无遮罩层模态框
            </Button>​
            <Button
            colors = "primary"
            size = "lg"
            onClick = { ()=>{
                this.changeDropup("static");
                this.open();
            } }>
                遮罩无事件模态框
            </Button>​
            <Modal
            show = { this.state.showModal }
            backdrop = { this.state.modalDropup }
            onHide = { this.close } >
               <Modal.Header closeButton>
                    <Modal.Title > 我来组成头部 < /Modal.Title>
                </Modal.Header >
                <Modal.Body >
                   <h4> 这是一个沉默的标题 </h4>
                   <p> 一些描述。。。 </p>
                   ​<hr/> ​
                   <h4> 来多添加一些内容， 显示滚动条吧 </h4>
                   <p> 用创想与技术推动商业和社会进步 </p>
                   <p> 我们基于创造性的思想与先进的技术（ 现阶段是信息技术）， 创新和运营高客户价值的产品与服务， 帮助客户实现发展目标， 进而推动商业和社会进步。 < /p>
                   <p> 全球领先的企业与公共组织软件、 云服务、 金融服务提供商。 </p>
                   <p> 员工快乐工作， 成就事业， 分享成功的平台。 </p>
                   <p> 企业和公共组织是我们持续服务的客户。 软件、 云服务、 金融服务是用友新发展阶段的核心业务。 全球领先是我们必须达成的目标。 </p>
                   <p> 在努力实现产业发展目标的同时， 员工在用友快乐工作、 成就事业、 分享成功也是公司的追求。 </p>
                   <p> 核心价值观 </p>
                   <p> 用户之友 专业奋斗 </p>
                   <p> 开放创新 诚信合作 </p>
                   <p> 核心价值观是所有用友人最重要的行为指引、 行动指南， 也是公司赖以可持续发展的信念基石。 </p>
                   <p> 我们坚守“ 用户之友” 的初心， 做“ 专业的奋斗者”， 始终坚持“ 开放创新” 和“ 诚信合作”。 </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = { this.close }> 关闭 </Button>
                </Modal.Footer>
           </Modal>
        </div>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 默认的模态框","code":"/**\r\n *\r\n * @title 默认的模态框\r\n * @description\r\n *\r\n */\r\n\r\nclass Demo1 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            showModal: false\r\n        };\r\n        this.close = this.close.bind(this);\r\n        this.open = this.open.bind(this);\r\n    }\r\n\r\n    close() {\r\n        this.setState({\r\n            showModal: false\r\n        });\r\n    }\r\n    open() {\r\n        this.setState({\r\n            showModal: true\r\n        });\r\n    }\r\n    render () {\r\n        return (\r\n        <div className=\"padding-15\">\r\n            <Button\r\n            colors = \"primary\"\r\n            size = \"lg\"\r\n            onClick = { this.open }>\r\n                打开模态框\r\n            </Button>​\r\n            <Modal\r\n            show = { this.state.showModal }\r\n            onHide = { this.close } >\r\n                <Modal.Header>\r\n                    <Modal.Title>这是题目</Modal.Title>\r\n                </Modal.Header>\r\n\r\n                <Modal.Body>\r\n                    这是一些描述。。。\r\n                </Modal.Body>\r\n\r\n                <Modal.Footer>\r\n                    <Button onClick={ this.close } shape=\"border\" style={{marginRight: 50}}>关闭</Button>\r\n                    <Button onClick={ this.close } colors=\"primary\">确认</Button>\r\n                </Modal.Footer>\r\n           </Modal>\r\n        </div>\r\n        )\r\n    }\r\n}\r\n","desc":""},{"example":<Demo2 />,"title":" 默认的模态框","code":"/**\r\n *\r\n * @title 默认的模态框\r\n * @description\r\n *\r\n */\r\n\r\nclass Demo2 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            showModal: false\r\n        };\r\n        this.close = this.close.bind(this);\r\n        this.open = this.open.bind(this);\r\n    }\r\n\r\n    close() {\r\n        this.setState({\r\n            showModal: false\r\n        });\r\n    }\r\n    open() {\r\n        this.setState({\r\n            showModal: true\r\n        });\r\n    }\r\n    render () {\r\n        return (\r\n        <div className=\"padding-15\">\r\n            <Button\r\n            colors = \"primary\"\r\n            size = \"lg\"\r\n            onClick = { this.open }>\r\n                注册模态框\r\n            </Button>​\r\n            <Modal\r\n            show = { this.state.showModal }\r\n            onHide = { this.close }\r\n            style={{ width: 450}}\r\n            >\r\n                <Modal.Header className=\"text-center\">\r\n                    <Modal.Title>注册</Modal.Title>\r\n                </Modal.Header>\r\n\r\n                <Modal.Body>\r\n                <Form horizontal>\r\n                \t\t\t\t<Row>\r\n                \t\t\t\t    <FormGroup controlId=\"formInlineName\">\r\n                \t\t\t\t    \t<Col sm={2} smOffset={2} className=\"text-right\">\r\n                \t\t\t\t    \t\t<ControlLabel>昵称:</ControlLabel>\r\n                \t\t\t\t    \t</Col>\r\n                \t\t\t\t      \t<Col sm={5}>\r\n                \t\t\t\t      \t\t<FormControl htmlType=\"text\" placeholder=\"请输入昵称\" />\r\n                \t\t\t\t      \t</Col>\r\n                \t\t\t\t    </FormGroup>\r\n                \t\t\t    </Row>\r\n                \t\t\t    <Row>\r\n                                    <FormGroup controlId=\"formInlineName\">\r\n                                        <Col sm={2} smOffset={2} className=\"text-right\">\r\n                                            <ControlLabel>密码:</ControlLabel>\r\n                                        </Col>\r\n                                        <Col sm={5}>\r\n                                            <FormControl htmlType=\"text\" placeholder=\"请输入密码\" />\r\n                                        </Col>\r\n                                    </FormGroup>\r\n                \t\t\t    </Row>\r\n                \t\t\t</Form>\r\n\r\n                </Modal.Body>\r\n\r\n                <Modal.Footer>\r\n                <Row>\r\n                    <Col md={2} mdOffset={3}>\r\n                        <Button onClick={ this.close } shape=\"border\">关闭</Button>\r\n                    </Col>\r\n                    <Col md={2} mdOffset={1}>\r\n                        <Button onClick={ this.close } colors=\"primary\">确认</Button>\r\n                    </Col>\r\n                </Row>\r\n                </Modal.Footer>\r\n           </Modal>\r\n\r\n        </div>\r\n        )\r\n    }\r\n}\r\n","desc":""},{"example":<Demo3 />,"title":" 不同大小的模态框","code":"/**\r\n *\r\n * @title 不同大小的模态框\r\n * @description 通过size属性控制模态框大小\r\n *\r\n */\r\n\r\nclass Demo3 extends Component {\r\n\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            showModal: false,\r\n            modalSize: ''\r\n        };\r\n        this.close = this.close.bind(this);\r\n        this.open = this.open.bind(this);\r\n        this.changeSize = this.changeSize.bind(this);\r\n\r\n    }\r\n\r\n    close() {\r\n        this.setState({\r\n            showModal: false\r\n        });\r\n    }\r\n    open() {\r\n        this.setState({\r\n            showModal: true\r\n        });\r\n    }\r\n    changeSize(size) {\r\n        this.setState({\r\n            modalSize: size\r\n        });\r\n    }\r\n    render () {\r\n        return (\r\n        <div className=\"padding-15\">\r\n            <Button\r\n            colors = \"primary\"\r\n            size = \"lg\"\r\n            onClick = { ()=>{\r\n                this.changeSize(\"sm\");\r\n                this.open();\r\n            } }>\r\n                打开小号模态框\r\n            </Button>​\r\n            <Button\r\n            colors = \"primary\"\r\n            size = \"lg\"\r\n            onClick = { ()=>{\r\n                this.changeSize(\"lg\");\r\n                this.open();\r\n            } }>\r\n                打开大号模态框\r\n            </Button>​\r\n            <Button\r\n            colors = \"primary\"\r\n            size = \"lg\"\r\n            onClick = { ()=>{\r\n                this.changeSize(\"xlg\");\r\n                this.open();\r\n            } }>\r\n                打开超大号模态框\r\n            </Button>​\r\n            <Modal\r\n            show = { this.state.showModal }\r\n            size = { this.state.modalSize }\r\n            onHide = { this.close } >\r\n               <Modal.Header closeButton>\r\n                    <Modal.Title > 我来组成头部 < /Modal.Title>\r\n                </Modal.Header >\r\n                <Modal.Body >\r\n                   <h4> 这是一个沉默的标题 </h4>\r\n                   <p> 一些描述。。。 </p>\r\n                   ​<hr/> ​\r\n                   <h4> 来多添加一些内容， 显示滚动条吧 </h4>\r\n                   <p> 用创想与技术推动商业和社会进步 </p>\r\n                   <p> 我们基于创造性的思想与先进的技术（ 现阶段是信息技术）， 创新和运营高客户价值的产品与服务， 帮助客户实现发展目标， 进而推动商业和社会进步。 < /p>\r\n                   <p> 全球领先的企业与公共组织软件、 云服务、 金融服务提供商。 </p>\r\n                   <p> 员工快乐工作， 成就事业， 分享成功的平台。 </p>\r\n                   <p> 企业和公共组织是我们持续服务的客户。 软件、 云服务、 金融服务是用友新发展阶段的核心业务。 全球领先是我们必须达成的目标。 </p>\r\n                   <p> 在努力实现产业发展目标的同时， 员工在用友快乐工作、 成就事业、 分享成功也是公司的追求。 </p>\r\n                   <p> 核心价值观 </p>\r\n                   <p> 用户之友 专业奋斗 </p>\r\n                   <p> 开放创新 诚信合作 </p>\r\n                   <p> 核心价值观是所有用友人最重要的行为指引、 行动指南， 也是公司赖以可持续发展的信念基石。 </p>\r\n                   <p> 我们坚守“ 用户之友” 的初心， 做“ 专业的奋斗者”， 始终坚持“ 开放创新” 和“ 诚信合作”。 </p>\r\n                </Modal.Body>\r\n                <Modal.Footer>\r\n                    <Button onClick = { this.close }> 关闭 </Button>\r\n                </Modal.Footer>\r\n           </Modal>\r\n        </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过size属性控制模态框大小"},{"example":<Demo4 />,"title":" 不同遮罩层状态的模态框","code":"/**\r\n *\r\n * @title 不同遮罩层状态的模态框\r\n * @description 遮罩层可以通过backdrop属性控制状态，可以为不响应事件，可以不显示。\r\n *\r\n */\r\n\r\nclass Demo4 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            showModal: false,\r\n            modalDropup: true\r\n        };\r\n        this.close = this.close.bind(this);\r\n        this.open = this.open.bind(this);\r\n        this.changeDropup = this.changeDropup.bind(this);\r\n\r\n    }\r\n\r\n    close() {\r\n        this.setState({\r\n            showModal: false\r\n        });\r\n    }\r\n    open() {\r\n        this.setState({\r\n            showModal: true\r\n        });\r\n    }\r\n    changeDropup(state) {\r\n        this.setState({\r\n            modalDropup: state\r\n        });\r\n    }\r\n    render () {\r\n        return (\r\n        <div className=\"padding-15\">\r\n            <Button\r\n            colors = \"primary\"\r\n            size = \"lg\"\r\n            onClick = { ()=>{\r\n                this.changeDropup(false);\r\n                this.open();\r\n            } }>\r\n                无遮罩层模态框\r\n            </Button>​\r\n            <Button\r\n            colors = \"primary\"\r\n            size = \"lg\"\r\n            onClick = { ()=>{\r\n                this.changeDropup(\"static\");\r\n                this.open();\r\n            } }>\r\n                遮罩无事件模态框\r\n            </Button>​\r\n            <Modal\r\n            show = { this.state.showModal }\r\n            backdrop = { this.state.modalDropup }\r\n            onHide = { this.close } >\r\n               <Modal.Header closeButton>\r\n                    <Modal.Title > 我来组成头部 < /Modal.Title>\r\n                </Modal.Header >\r\n                <Modal.Body >\r\n                   <h4> 这是一个沉默的标题 </h4>\r\n                   <p> 一些描述。。。 </p>\r\n                   ​<hr/> ​\r\n                   <h4> 来多添加一些内容， 显示滚动条吧 </h4>\r\n                   <p> 用创想与技术推动商业和社会进步 </p>\r\n                   <p> 我们基于创造性的思想与先进的技术（ 现阶段是信息技术）， 创新和运营高客户价值的产品与服务， 帮助客户实现发展目标， 进而推动商业和社会进步。 < /p>\r\n                   <p> 全球领先的企业与公共组织软件、 云服务、 金融服务提供商。 </p>\r\n                   <p> 员工快乐工作， 成就事业， 分享成功的平台。 </p>\r\n                   <p> 企业和公共组织是我们持续服务的客户。 软件、 云服务、 金融服务是用友新发展阶段的核心业务。 全球领先是我们必须达成的目标。 </p>\r\n                   <p> 在努力实现产业发展目标的同时， 员工在用友快乐工作、 成就事业、 分享成功也是公司的追求。 </p>\r\n                   <p> 核心价值观 </p>\r\n                   <p> 用户之友 专业奋斗 </p>\r\n                   <p> 开放创新 诚信合作 </p>\r\n                   <p> 核心价值观是所有用友人最重要的行为指引、 行动指南， 也是公司赖以可持续发展的信念基石。 </p>\r\n                   <p> 我们坚守“ 用户之友” 的初心， 做“ 专业的奋斗者”， 始终坚持“ 开放创新” 和“ 诚信合作”。 </p>\r\n                </Modal.Body>\r\n                <Modal.Footer>\r\n                    <Button onClick = { this.close }> 关闭 </Button>\r\n                </Modal.Footer>\r\n           </Modal>\r\n        </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 遮罩层可以通过backdrop属性控制状态，可以为不响应事件，可以不显示。"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );


        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0, borderColor: "transparent"}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
