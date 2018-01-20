import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 默认的模态框","code":"/**\n *\n * @title 默认的模态框\n * @description\n *\n */\n\nimport React, { Component } from 'react';\nimport { Modal, Button } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            showModal: false\n        };\n        this.close = this.close.bind(this);\n        this.open = this.open.bind(this);\n    }\n\n    close() {\n        this.setState({\n            showModal: false\n        });\n    }\n    open() {\n        this.setState({\n            showModal: true\n        });\n    }\n    render () {\n        return (\n        <div>\n            <Button\n            colors = \"primary\"\n            size = \"lg\"\n            className=\"demo-margin\"\n            onClick = { this.open }>\n                打开模态框\n            </Button>​\n            <Modal\n            show = { this.state.showModal }\n            onHide = { this.close } >\n                <Modal.Header>\n                    <Modal.Title>这是题目</Modal.Title>\n                </Modal.Header>\n\n                <Modal.Body>\n                    这是一些描述。。。\n                </Modal.Body>\n\n                <Modal.Footer>\n                    <Button onClick={ this.close } shape=\"border\" style={{marginRight: 50}}>关闭</Button>\n                    <Button onClick={ this.close } colors=\"primary\">确认</Button>\n                </Modal.Footer>\n           </Modal>\n        </div>\n        )\n    }\n}\n\n\n","desc":"","scss_code":".demo-margin{\n  margin: 5px 15px;\n}"},{"example":<Demo2 />,"title":" 默认的模态框","code":"/**\n *\n * @title 默认的模态框\n * @description\n *\n */\n\nimport React, { Component } from 'react';\nimport { Modal, FormControl, ControlLabel, FormGroup, Form, Button,  Panel ,  Con, Row, Col  } from 'tinper-bee';\nconst FormItem = Form.FormItem;\n\nclass Demo2 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            showModal: false\n        };\n        this.close = this.close.bind(this);\n        this.open = this.open.bind(this);\n    }\n\n    close() {\n        this.setState({\n            showModal: false\n        });\n    }\n\n    open() {\n        this.setState({\n            showModal: true\n        });\n    }\n\n    checkForm = (flag,obj) => {\n        if(flag){\n            this.close();\n        }\n    }\n\n    render() {\n\n        const CancelBtn = (\n            <Button style={{ marginRight: 20 }} onClick={ this.close }>取消</Button>\n        )\n\n        return (\n        <div className=\"demo-margin\">\n            <Button\n            colors = \"primary\"\n            size = \"lg\"\n            onClick = { this.open }>\n                注册模态框\n            </Button>​\n            <Modal\n            show = { this.state.showModal }\n            onHide = { this.close }\n            style={{ width: 450}}\n            >\n                <Modal.Header className=\"text-center\">\n                    <Modal.Title>注册</Modal.Title>\n                </Modal.Header>\n\n                <Modal.Body>\n\n                    <Form\n                        submitCallBack={this.checkForm}\n                        submitAreaClassName=\"text-center\"\n                        beforeSubmitBtn={CancelBtn}>\n                        <FormItem\n                            labelName=\"姓名\"\n                            isRequire={true}\n                            htmlType=\"chinese\"\n                            errorMessage=\"姓名格式错误\"\n                            method=\"blur\"\n                            inline={true}>\n                            <FormControl name=\"name\" placeholder=\"只能输入中文\"/>\n                        </FormItem>\n                        <FormItem\n                            labelName=\"年龄\"\n                            isRequire={true}\n                            method=\"blur\"\n                            errorMessage=\"年龄格式错误\"\n                            reg={/^[0-9]+$/}\n                            inline={true}>\n                            <FormControl name=\"age\" ref=\"input\" />\n                        </FormItem>\n                    </Form>\n\n                </Modal.Body>\n\n                <Modal.Footer>\n                </Modal.Footer>\n           </Modal>\n\n        </div>\n        )\n    }\n}\n\n\n","desc":"","scss_code":".demo-margin{\n  margin: 5px 15px;\n}\n.text-center{\n  text-align: center;\n}"},{"example":<Demo3 />,"title":" 不同大小的模态框","code":"/**\n *\n * @title 不同大小的模态框\n * @description 通过size属性控制模态框大小\n *\n */\n\nimport React, { Component } from 'react';\nimport { Modal, Button } from 'tinper-bee';\n\nclass Demo3 extends Component {\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            showModal: false,\n            modalSize: ''\n        };\n        this.close = this.close.bind(this);\n        this.open = this.open.bind(this);\n        this.changeSize = this.changeSize.bind(this);\n\n    }\n\n    close() {\n        this.setState({\n            showModal: false\n        });\n    }\n\n    open() {\n        this.setState({\n            showModal: true\n        });\n    }\n\n    changeSize(size) {\n        this.setState({\n            modalSize: size\n        });\n    }\n\n    render() {\n        return (\n            <div>\n                <Button\n                    colors=\"primary\"\n                    size=\"lg\"\n                    className=\"demo-margin\"\n                    onClick={ ()=>{this.changeSize(\"sm\");this.open();} }>\n                    打开小号模态框\n                </Button>\n                <Button\n                    colors=\"primary\"\n                    size=\"lg\"\n                    className=\"demo-margin\"\n                    onClick={ ()=>{this.changeSize(\"lg\");this.open();} }>\n                    打开大号模态框\n                </Button>\n                <Button\n                    colors=\"primary\"\n                    size=\"lg\"\n                    className=\"demo-margin\"\n                    onClick={ ()=>{this.changeSize(\"xlg\");this.open();} }>\n                    打开超大号模态框\n                </Button>\n                <Modal show={ this.state.showModal } size={ this.state.modalSize } onHide={ this.close }>\n                    <Modal.Header closeButton>\n                        <Modal.Title > 我来组成头部 </Modal.Title>\n                    </Modal.Header >\n                    <Modal.Body >\n                        <h4> 这是一个沉默的标题 </h4>\n\n                        <p> 一些描述。。。 </p>\n                        <hr/>\n                        <h4> 来多添加一些内容， 显示滚动条吧 </h4>\n\n                        <p> 用创想与技术推动商业和社会进步 </p>\n\n                        <p> 我们基于创造性的思想与先进的技术（ 现阶段是信息技术）， 创新和运营高客户价值的产品与服务， 帮助客户实现发展目标， 进而推动商业和社会进步。\n                        </p>\n\n                        <p> 全球领先的企业与公共组织软件、 云服务、 金融服务提供商。 </p>\n\n                        <p> 员工快乐工作， 成就事业， 分享成功的平台。 </p>\n\n                        <p> 企业和公共组织是我们持续服务的客户。 软件、 云服务、 金融服务是用友新发展阶段的核心业务。 全球领先是我们必须达成的目标。 </p>\n\n                        <p> 在努力实现产业发展目标的同时， 员工在用友快乐工作、 成就事业、 分享成功也是公司的追求。 </p>\n\n                        <p> 核心价值观 </p>\n\n                        <p> 用户之友 专业奋斗 </p>\n\n                        <p> 开放创新 诚信合作 </p>\n\n                        <p> 核心价值观是所有用友人最重要的行为指引、 行动指南， 也是公司赖以可持续发展的信念基石。 </p>\n\n                        <p> 我们坚守“ 用户之友” 的初心， 做“ 专业的奋斗者”， 始终坚持“ 开放创新” 和“ 诚信合作”。 </p>\n                    </Modal.Body>\n                    <Modal.Footer>\n                        <Button onClick={ this.close }> 关闭 </Button>\n                    </Modal.Footer>\n                </Modal>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 通过size属性控制模态框大小","scss_code":".demo-margin{\n  margin: 5px 15px;\n}"},{"example":<Demo4 />,"title":" 不同遮罩层状态的模态框","code":"/**\n *\n * @title 不同遮罩层状态的模态框\n * @description 遮罩层可以通过backdrop属性控制状态，可以为不响应事件，可以不显示。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Modal, Button } from 'tinper-bee';\n\n\nclass Demo4 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            showModal: false,\n            modalDropup: true\n        };\n        this.close = this.close.bind(this);\n        this.open = this.open.bind(this);\n        this.changeDropup = this.changeDropup.bind(this);\n\n    }\n\n    close() {\n        this.setState({\n            showModal: false\n        });\n    }\n\n    open() {\n        this.setState({\n            showModal: true\n        });\n    }\n\n    changeDropup(state) {\n        this.setState({\n            modalDropup: state\n        });\n    }\n\n    render() {\n        return (\n            <div>\n                <Button\n                    colors=\"primary\"\n                    size=\"lg\"\n                    className=\"demo-margin\"\n                    onClick={ ()=>{this.changeDropup(false);this.open();} }>\n                    无遮罩层模态框\n                </Button>\n                <Button\n                    colors=\"primary\"\n                    size=\"lg\"\n                    className=\"demo-margin\"\n                    onClick={ ()=>{this.changeDropup(\"static\");this.open();} }>\n                    遮罩无事件模态框\n                </Button>\n                <Modal\n                    show={ this.state.showModal }\n                    backdrop={ this.state.modalDropup }\n                    onHide={ this.close }>\n                    <Modal.Header closeButton>\n                        <Modal.Title > 我来组成头部 </Modal.Title>\n                    </Modal.Header >\n                    <Modal.Body >\n                        <h4> 这是一个沉默的标题 </h4>\n\n                        <p> 一些描述。。。 </p>\n                        <hr/>\n                        <h4> 来多添加一些内容， 显示滚动条吧 </h4>\n\n                        <p> 用创想与技术推动商业和社会进步 </p>\n\n                        <p> 我们基于创造性的思想与先进的技术（ 现阶段是信息技术）， 创新和运营高客户价值的产品与服务， 帮助客户实现发展目标， 进而推动商业和社会进步。 </p>\n\n                        <p> 全球领先的企业与公共组织软件、 云服务、 金融服务提供商。 </p>\n\n                        <p> 员工快乐工作， 成就事业， 分享成功的平台。 </p>\n\n                        <p> 企业和公共组织是我们持续服务的客户。 软件、 云服务、 金融服务是用友新发展阶段的核心业务。 全球领先是我们必须达成的目标。 </p>\n\n                        <p> 在努力实现产业发展目标的同时， 员工在用友快乐工作、 成就事业、 分享成功也是公司的追求。 </p>\n\n                        <p> 核心价值观 </p>\n\n                        <p> 用户之友 专业奋斗 </p>\n\n                        <p> 开放创新 诚信合作 </p>\n\n                        <p> 核心价值观是所有用友人最重要的行为指引、 行动指南， 也是公司赖以可持续发展的信念基石。 </p>\n\n                        <p> 我们坚守“ 用户之友” 的初心， 做“ 专业的奋斗者”， 始终坚持“ 开放创新” 和“ 诚信合作”。 </p>\n                    </Modal.Body>\n                    <Modal.Footer>\n                        <Button onClick={ this.close }> 关闭 </Button>\n                    </Modal.Footer>\n                </Modal>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 遮罩层可以通过backdrop属性控制状态，可以为不响应事件，可以不显示。","scss_code":".demo-margin{\n  margin: 5px 15px;\n}"}]


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
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
                    { caret }
                    { text }
                </Button>
            </div>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                    { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
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
                        <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
                    )

                })}
            </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));