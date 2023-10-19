import React, {useState} from 'react';
import {Button, Modal, Select} from "antd";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {toast} from "react-toastify";

const AddCameraModal = (props) => {
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
    return (
        <Modal title="Добавить камеру"
               open={props.isAddCameraModal}
               onCancel={() => props.setIsAddCameraModal(false)}
               footer={[
                   <Button key="submit" type="default" onClick={() => props.setIsAddCameraModal(false)}>
                       Отменить
                   </Button>,
                   <Button key="submit" type="primary" onClick={sendAll}>
                       Добавить
                   </Button>
               ]}
        >
            <div className="cam-add-modal">
                <div className="inputs-box">
                    <label className="font-family-medium">Выбрать здания </label>
                    <Select
                        className="w-100"
                        onChange={(e) => setSendData({...sendData, country: e})}
                        options={[
                            {value: 'Tashkent', label: 'Tashkent'},
                            {value: '1', label: '1'},
                            {value: '2', label: '2'},
                        ]}
                    />
                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">Выбрать комнату </label>
                    <Select
                        className="w-100"
                        onChange={(e) => setSendData({...sendData, city: e})}
                        options={[
                            {value: 'Tashkent', label: 'Tasheknt'},
                            {value: '1', label: '1'},
                            {value: '2', label: '2'},
                        ]}
                    />
                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">Выбрать камеру </label>
                    <Select
                        className="w-100"
                        onChange={(e) => setSendData({...sendData, state: e})}
                        options={[
                            {value: 'Yunusobod', label: 'Yunusobod'},
                            {value: '1', label: '1'},
                            {value: '2', label: '2'}
                        ]}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default AddCameraModal;