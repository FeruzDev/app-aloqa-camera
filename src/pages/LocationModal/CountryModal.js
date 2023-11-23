import React, {useState} from 'react';
import {Button, Modal, Select} from "antd";
import axios from "axios";
import {API_PATH} from "../../components/const";

const CountryModal = (props) => {
    const [sendData, setSendData] = useState("")

    const sendAll = () => {
        axios.post(API_PATH  + "company/"+localStorage.getItem('id') + "/location/country/create", {name: sendData},  {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res =>{
                props.setIsLocModal(false)
                props.getCountry()
            })
    }


    return (
        <Modal title="Добавить здания"
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
                <div className="inputs-box">
                    <label className="font-family-medium">Название здания </label>
                    <input onChange={(e) => setSendData(  e.target.value)} type="text"/>
                </div>
            </div>
        </Modal>
    );
};

export default CountryModal;