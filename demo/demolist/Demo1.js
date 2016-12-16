/**
 *
 * @title 基础模态框样式
 * @description
 *
 */

class Demo1 extends Component {
    render () {
        return (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>这是题目</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        这是一些描述。。。
                    </Modal.Body>

                    <Modal.Footer>
                        <Button>关闭</Button>
                        <Button colors="primary">确认</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}
