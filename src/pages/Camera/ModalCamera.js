import React, {useEffect, useState} from 'react';
import {Button, Modal} from "antd";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {toast} from "react-toastify";

const ModalCamera = (props) => {
    const [sendData, setSendData] = useState({
        name: "",
        ip_address: "",
        username: "",
        password: "",
        real_time_stream: "",
        camera_number: 0,
        stream_quality: 0,
        room_id: null,
    })
    const sendAll = () => {
        console.log(props.selectRooms)
        axios.post(API_PATH + "camera/create",
            {
                name: sendData.name,
                ip_address: sendData.ip_address,
                username: sendData.username,
                password: sendData.password,
                real_time_stream: "",
                camera_number: 0,
                stream_quality: 0,
                room_id: props.selectRooms
            } , CONFIG)
            .then(res => {
                toast.success("Добавлено успешно")
                props.getCameras(props.selectRooms)
                props.setIsModalCamera(false)
            })
            .catch(err =>{
                toast.error("Ошибка")
            })
    }
    useEffect(() => {
        setSendData({...sendData, room_id: props.selectRooms})
        console.log(props.selectRooms)
        console.log(sendData)
    }, []);
    return (
        <Modal title="Добавить камера"
               open={props.isModalCamera}
               onCancel={() => props.setIsModalCamera(false)}
               footer={[
                   <Button key="submit" type="primary" onClick={sendAll}>
                       Добавить
                   </Button>,
                   <Button key="submit" type="default" onClick={() => props.setIsModalCamera(false)}>
                       Отменить
                   </Button>
               ]}
        >
            <div className="cam-add-modal">
                <div className="inputs-box">
                    <label className="font-family-medium">Название камера </label>
                    <input type="text" onChange={(e) => setSendData({...sendData, name: e.target.value})}/>
                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">IP - камера </label>
                    <input type="text" onChange={(e) => setSendData({...sendData, ip_address: e.target.value})}/>
                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">User name </label>
                    <input type="text" onChange={(e) => setSendData({...sendData, username: e.target.value})}/>
                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">Пароль камеры </label>
                    <input type="text" onChange={(e) => setSendData({...sendData, password: e.target.value})}/>
                </div>
            </div>
        </Modal>
    );
};

export default ModalCamera;