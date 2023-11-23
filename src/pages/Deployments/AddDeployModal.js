import React, {useEffect, useState} from 'react';
import {Button, Modal, Select} from "antd";
import axios from "axios";
import {API_PATH} from "../../components/const";
import {toast} from "react-toastify";

const AddDeployModal = (props) => {
    const [time, setTime] = useState(new Date());
    const [serviceData, setServiceData] = useState([]);
    const [moduleData, setModuleData] = useState([]);

    const [sendData, setSendData] = useState({
        name: "",
        status: "pending",
        has_update: true,
        scheduled_time: "2023-10-19T14:54:36.417Z",
        service_id: null,
        module_id: null
    })
    const getService = () => {
        axios.get(API_PATH + "service/all", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res =>
                setServiceData(res.data)
            )
    }
    const getModule= () => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/module/all", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res =>
                setModuleData(res.data)
            )

    }
    const sendAll = () => {
        axios.post(API_PATH + "company/" + localStorage.getItem('id') + "/deployment/create", sendData, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                toast.success("Добавлено успешно")
                props.setIsDeployModal(false)
                setSendData({
                    name: "",
                    status: "pending",
                    has_update: true,
                    scheduled_time: "2023-10-19T14:54:36.417Z",
                    service_id: 0,
                    module_id: 0
                })
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    useEffect(() => {
        getService()
        getModule()
    }, []);
    return (
        <Modal title="Добавить деплоймент"
               open={props.isDeployModal}
               onCancel={() => props.setIsDeployModal(false)}
               footer={[
                   <Button key="submit" type="default" onClick={() => props.setIsDeployModal(false)}>
                       Отменить
                   </Button>,
                   <Button key="submit" type="primary" onClick={sendAll}>
                       Добавить
                   </Button>
               ]}
        >
            <div className="cam-add-modal">
                <div className="inputs-box">
                    <label className="font-family-medium">Deployment name </label>
                    <input type="text" value={sendData.name} onChange={(e) => setSendData({...sendData, name: e.target.value})}/>
                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">Выбрать сервер </label>
                    <Select
                        className="w-100"
                        value={sendData.module_id}
                        onChange={(e) =>setSendData({...sendData, module_id: e})}
                    >
                        {
                            moduleData?.map((item, index) =>(
                                <option value={item?.id} key={index}>{item?.name}</option>
                            ))
                        }

                    </Select>

                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">Выбрать сервис </label>
                    <Select
                        className="w-100"
                        value={sendData.service_id}
                        onChange={(e) =>setSendData({...sendData, service_id: e})}
                    >
                        {
                            serviceData?.map((item, index) =>(
                                <option value={item?.id} key={index}>{item?.name}</option>
                            ))
                        }

                    </Select>
                </div>
            </div>
        </Modal>
    );
};

export default AddDeployModal;