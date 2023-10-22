import React, {useState} from 'react';
import {Button,  Modal,  } from "antd";
import {  Radio, Space } from 'antd';
const DeploymentsDetailModal = (props) => {
    const [sendData, setSendData] = useState({
        name: "",
        country: "",
        city: "",
        state: "",
        zip_code: "",
        address: "",
        latitude: 0,
        longitude: 0
    })
    const sendAll = () => {
        // axios.post(API_PATH + "building/create", sendData, CONFIG)
        //     .then(res => {
        //         toast.success("Добавлено успешно")
        //         props.getBuilding()
        //         props.setIsAddCameraModal(false)
        //     })
        //     .catch(err => {
        //         toast.error("Ошибка")
        //     })
    }
    const onChange = () => {

    }
    return (
        <Modal title="Добавить конфиг"
               open={props.isDeployDetailModal}
               onCancel={() => props.setIsDeployDetailModal(false)}
               width={991}
               footer={[
                   <Button key="submit" type="default" onClick={() => props.setIsDeployDetailModal(false)}>
                       Отменить
                   </Button>,
                   <Button key="submit" type="primary" onClick={sendAll}>
                       Добавить
                   </Button>
               ]}
        >
            <div className="cam-add-modal-deploy">
                <div className="row">
                    <div className="col-md-3">
                        <p className="cam-add-modal-deploy-title">
                            Building A
                        </p>
                        <p className="cam-add-modal-deploy-title">
                            Room 001
                        </p>
                        <p className="cam-add-modal-deploy-title">
                            Камера над дверю
                        </p>
                        <div className="check-list-main mt-4">
                            <Radio.Group onChange={onChange}>
                                <Space direction="vertical">
                                    <p className="cam-add-modal-deploy-title">
                                        <Radio value={1}>Option A</Radio>
                                    </p>

                                    <p className="cam-add-modal-deploy-title">
                                        <Radio value={2}>Option A</Radio>
                                    </p>

                                    <p className="cam-add-modal-deploy-title">
                                        <Radio value={3}>Option A</Radio>
                                    </p>
                                </Space>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="img-box-deploy">
                            <img src="/img/rec3.png" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default DeploymentsDetailModal;