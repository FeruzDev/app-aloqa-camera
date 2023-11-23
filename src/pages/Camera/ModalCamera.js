import React, {useEffect, useState} from 'react';
import {Button, Modal} from "antd";
import axios from "axios";
import {API_PATH} from "../../components/const";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";

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
    const params = useParams()
    const sendAll = () => {
        console.log(props.selectRooms)
        axios.post(API_PATH + "company/" + localStorage.getItem('id') + "/camera/create",
            {
                name: sendData.name,
                ip_address: sendData.ip_address,
                username: sendData.username,
                password: sendData.password,
                real_time_stream: "",
                camera_number: 0,
                stream_quality: 0,
                room_id: params.camera_id
            } , {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                toast.success("Добавлено успешно")
                // props.getCameras(params.camera_id)
                props.getCamerasSelects()
                props.setIsModalCamera(false)
            })
            .catch(err =>{
                toast.error("Ошибка")
            })
    }
    useEffect(() => {
        setSendData({...sendData, room_id: props.selectRooms})
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