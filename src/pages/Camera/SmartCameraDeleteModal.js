import React, {useState} from 'react';
import {Button, Modal} from "antd";
import axios from "axios";
import {API_PATH} from "../../components/const";
import {toast} from "react-toastify";

const SmartCameraDeleteModal = (props) => {
    const sendAll = (id) => {
        axios.delete(API_PATH + "company/" + localStorage.getItem('id') + "/camera/smartcamera/delete/" + props.selectCam, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                toast.success("Удален успешно")
                props.getData()
                props.setIsSmartCameraDelete(false)
            })
            .catch(err =>{
                toast.error("Ошибка")
            })
    }

    return (
        <Modal
               open={props.isSmartCameraDelete}
               onCancel={() => props.setIsSmartCameraDelete(false)}
               footer={[
                   <Button key="submit" type="primary" danger onClick={sendAll}>
                       Удалить
                   </Button>,
                   <Button key="submit" type="default" onClick={() => props.setIsSmartCameraDelete(false)}>
                       Отменить
                   </Button>
               ]}
        >
            <div className="cam-add-modal pt-0">
                    <h5 className="font-family-medium">Вы уверены, что хотите удалить? </h5>
            </div>
        </Modal>
    );
};

export default SmartCameraDeleteModal;