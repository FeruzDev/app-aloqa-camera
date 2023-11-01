import React, {useEffect, useState} from 'react';
import {Button, Modal, Select} from "antd";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {toast} from "react-toastify";

const RegionModal = (props) => {
    const [sendData, setSendData] = useState("")
    const sendAll = () => {
        axios.post(API_PATH  + "company/"+localStorage.getItem('id') + "/location/region/create", {name: sendData, country_id: props.countryId},  CONFIG)
            .then(res =>{
                props.setIsLocModal(false)
                props.getRegion(props.countryId)
            })
    }
    return (
        <Modal title="Добавить город"
               open={props.isLocModal}
               onCancel={() => props.setIsLocModal(false)}
               footer={[
                   <Button key="submit" type="primary" onClick={sendAll}>
                       Добавить
                   </Button>,
                   <Button key="submit" type="default" onClick={() => props.setIsLocModal(false)}>
                       Отменить
                   </Button>
               ]}
        >
            <div className="cam-add-modal">
                <p className="font-family-bold">Страна: {props?.countryItem}</p>
                <div className="inputs-box">
                    <label className="font-family-medium">Название город </label>
                    <input onChange={(e) => setSendData(  e.target.value)} type="text"/>
                </div>
            </div>
        </Modal>
    );
};

export default RegionModal;