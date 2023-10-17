import React, {useState} from 'react';
import {Button, Modal} from "antd";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {toast} from "react-toastify";

const ModalRoom = (props) => {
    const [sendData, setSendData] = useState({
        name: "",
        building_id: 1
    })

    const sendAll = () => {
        axios.post(API_PATH + "room/create",  sendData, CONFIG)
            .then(res => {
                toast.success("Добавлено успешно")
                props.getRooms(props.selectOffices)
                props.setIsModalRoom(false)
            })
            .catch(err =>{
                toast.error("Ошибка")
            })
    }

    return (
        <Modal title="Добавить комната"
               open={props.isModalRoom}
               onCancel={() => props.setIsModalRoom(false)}
               footer={[
                   <Button key="submit" type="primary" onClick={sendAll}>
                       Добавить
                   </Button>,
                   <Button key="submit" type="default" onClick={() => props.setIsModalRoom(false)}>
                       Отменить
                   </Button>
               ]}
        >
            <div className="cam-add-modal">
                <div className="inputs-box">
                    <label className="font-family-medium">Название комната </label>
                    <input type="text" onChange={(e) =>  setSendData({...sendData, name: e.target.value})}/>
                </div>
            </div>
        </Modal>
    );
};

export default ModalRoom;