import React, {useState} from 'react';
import {Button, Modal, Select} from "antd";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {toast} from "react-toastify";
import {InputMask, useMask} from "@react-input/mask";

const AddModuleModal = (props) => {
    const [show, setShow] = useState([])

    const [sendData, setSendData] = useState({
        serial_number: "",
        host_name: "",
        ip_address: "",
        port: "",
        username: "",
        password: "",
        type: "",
        name: "",
        fleet_id: 1
    })
    const sendAll = () => {
        axios.post(API_PATH + "module/create", sendData, CONFIG)
            .then(res => {
                toast.success("Добавлено успешно")
                props.getData()
                props.setIsModuleModal(false)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const inputRef = useMask({mask: '+0 (___) ___-__-__', replacement: {_: /\d/}})
    return (
        <Modal title="Добавить мод  уль"
               open={props.isModuleModal}
               onCancel={() => props.setIsModuleModal(false)}
               footer={[
                   <Button key="submit" type="default" onClick={() => props.setIsModuleModal(false)}>
                       Отменить
                   </Button>,
                   <Button key="submit" type="primary" onClick={sendAll}>
                       Добавить
                   </Button>
               ]}
        >
            <div className="cam-add-modal">
                <div className="inputs-box">
                    <label className="font-family-medium">Название <img src="/icon/star.svg" className="star-img"
                                                                        alt=""/> </label>
                    <input onChange={(e) => setSendData({...sendData, name: e.target.value})} type="text"/>
                </div>
                <div className="d-flex">
                    <div className="inputs-box w-100 mr-16">
                        <label className="font-family-medium">S/N Serial number <img src="/icon/star.svg"
                                                                                     className="star-img" alt=""/>
                        </label>
                        <input className="w-100"
                               onChange={(e) => setSendData({...sendData, ip_address: e.target.value})}
                               type="text"/>
                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">Host name <img src="/icon/star.svg" className="star-img"
                                                                             alt=""/> </label>
                        <input className="w-100" onChange={(e) => setSendData({...sendData, host_name: e.target.value})}
                               type="text"/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs-box w-100 mr-16">
                        <label className="font-family-medium">Mac address <img src="/icon/star.svg" className="star-img"
                                                                               alt=""/>
                        </label>
                        <InputMask mask="aa : bb : cc : dd : ee : ff"
                                   onChange={(e) => setSendData({...sendData, mac_address: e.target.value})}
                                   placeholder="aa : bb : cc : dd : ee : ff"
                                   replacement={{a: /\d/, b: /\d/, c: /\d/, d: /\d/, e: /\d/, f: /\d/,}}
                                 separate/>
                        {/*<input className="w-100" ref={inputRef}*/}
                        {/*       onChange={(e) => setSendData({...sendData, name: e.target.value})}*/}
                        {/*       type="text"/>*/}
                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">Port <img src="/icon/star.svg" className="star-img"
                                                                        alt=""/> </label>
                        <input className="w-100" onChange={(e) => setSendData({...sendData, port: e.target.value})}
                               type="text"/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs-box w-100 mr-16">
                        <label className="font-family-medium">User name<img src="/icon/star.svg" className="star-img"
                                                                            alt=""/> </label>
                        <input className="w-100" onChange={(e) => setSendData({...sendData, username: e.target.value})}
                               type="text"/>
                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">Password <img
                            src="/icon/star.svg" className="star-img" alt=""/> </label>
                        <div className="password-eye">
                            <input type={show ? "text" : "password"} className="w-100"
                                   onChange={(e) => setSendData({...sendData, password: e.target.value})}
                            />
                            <button onClick={() => setShow(!show)}><img src="/icon/eye.svg" alt=""/></button>
                        </div>

                    </div>
                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">Type <img src="/icon/star.svg" className="star-img" alt=""/>
                    </label>
                    <Select
                        className="w-100"
                        onChange={(e) => setSendData({...sendData, type: e})}
                        options={[
                            {value: 'Tashkent', label: 'Tashkent'},
                            {value: '1', label: '1'},
                            {value: '2', label: '2'},
                        ]}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default AddModuleModal;