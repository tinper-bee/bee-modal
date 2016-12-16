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
                打开模态框
            </Button>​
            <Modal
            show = { this.state.showModal }
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
