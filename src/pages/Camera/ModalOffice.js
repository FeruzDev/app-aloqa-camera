import React, {useState} from 'react';
import {Button, Modal, Select} from "antd";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {toast} from "react-toastify";

const ModalOffice = (props) => {
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
        axios.post(API_PATH + "building/create", sendData, CONFIG)
            .then(res => {
                toast.success("Добавлено успешно")
                props.getBuilding()
                props.setIsModalOffice(false)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    return (
        <Modal title="Добавить здания"
               open={props.isModalOffice}
               onCancel={() => props.setIsModalOffice(false)}
               footer={[
                   <Button key="submit" type="primary" onClick={sendAll}>
                       Добавить
                   </Button>,
                   <Button key="submit" type="default" onClick={() => props.setIsModalOffice(false)}>
                       Отменить
                   </Button>
               ]}
        >
            <div className="cam-add-modal">
                <div className="inputs-box">
                    <label className="font-family-medium">Название здания </label>
                    <input onChange={(e) => setSendData({...sendData, name: e.target.value})} type="text"/>
                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">Страна </label>
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
                    <label className="font-family-medium">Город </label>
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
                    <label className="font-family-medium">Район </label>
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
                <div className="inputs-box">
                    <label className="font-family-medium">Адрес </label>
                    <input onChange={(e) => setSendData({...sendData, address: e.target.value})} type="text"/>
                </div>
            </div>
        </Modal>
    );
};

export default ModalOffice;