import React, {useState} from 'react';
import {Button, Modal, Select} from "antd";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {toast} from "react-toastify";

const AddServiceModal = (props) => {
    const [sendData, setSendData] = useState({
        name: "",
        github_repo: "",
        github_branch: "",
        github_auth_token: "",
        github_username: "",
    })

    const sendAll = () => {
        axios.post(API_PATH + "service/create", sendData, CONFIG)
            .then(res => {
                toast.success("Добавлено успешно")
                props.getData()
                setSendData({
                    name: "",
                    github_repo: "",
                    github_branch: "",
                    github_auth_token: "",
                    github_username: "",})
                props.setIsServiceModal(false)

            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    return (
        <Modal title="Добавить сервис"
               open={props.isServiceModal}
               onCancel={() => props.setIsServiceModal(false)}
               footer={[
                   <Button key="submit" type="default" onClick={() => props.setIsServiceModal(false)}>
                       Отменить
                   </Button>,
                   <Button key="submit" type="primary" onClick={sendAll}>
                       Добавить
                   </Button>
               ]}
        >
            <div className="cam-add-modal">
                <div className="inputs-box">
                    <label className="font-family-medium">Service name </label>
                    <input type="text" value={sendData.name} onChange={(e) => setSendData({...sendData, name: e.target.value})}/>
                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">Github_repo </label>
                    <input type="text" value={sendData.github_repo} onChange={(e) => setSendData({...sendData, github_repo: e.target.value})}/>
                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">Github_branch</label>
                    <input type="text" value={sendData.github_branch} onChange={(e) => setSendData({...sendData, github_branch: e.target.value})}/>
                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">Github_username</label>
                    <input type="text" value={sendData.github_username} onChange={(e) => setSendData({...sendData, github_username: e.target.value})}/>
                </div>
            </div>
        </Modal>
    );
};

export default AddServiceModal;