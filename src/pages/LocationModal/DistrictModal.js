import React, {useState} from 'react';
import {Button, Modal, Select} from "antd";
import axios from "axios";
import {API_PATH} from "../../components/const";

const DistrictModal = (props) => {
    const [sendData, setSendData] = useState("")
    const sendAll = () => {
        axios.post(API_PATH  + "company/"+localStorage.getItem('id') + "/location/district/create", {name: sendData, region_id: props.regionId},  {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res =>{
                props.setIsLocModal(false)
                props.getDistrict(props.regionId)
            })
    }
    return (
        <Modal title="Добавить район"
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
                <p className="font-family-bold">Район: {props?.regionItem}</p>

                <div className="inputs-box">
                    <label className="font-family-medium">Название район </label>
                    <input onChange={(e) => setSendData(  e.target.value)} type="text"/>
                </div>
            </div>
        </Modal>
    );
};

export default DistrictModal;