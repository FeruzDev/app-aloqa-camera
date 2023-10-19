import React, {useState} from 'react';
import {Button, Modal, Select} from "antd";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {toast} from "react-toastify";
import {InputMask, useMask} from "@react-input/mask";

const AddModuleModal = (props) => {
    const [show, setShow] = useState([])
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
    const inputRef = useMask({mask: '+0 (___) ___-__-__', replacement: {_: /\d/}})
    return (
        <Modal title="Добавить модуль"
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
                        <input className="w-100" onChange={(e) => setSendData({...sendData, name: e.target.value})}
                               type="text"/>
                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">Host name <img src="/icon/star.svg" className="star-img"
                                                                             alt=""/> </label>
                        <input className="w-100" onChange={(e) => setSendData({...sendData, name: e.target.value})}
                               type="text"/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs-box w-100 mr-16">
                        <label className="font-family-medium">Mac address <img src="/icon/star.svg" className="star-img"
                                                                               alt=""/>
                        </label>
                        <InputMask mask="aa : bb : cc : dd : ee : ff" placeholder="aa : bb : cc : dd : ee : ff" replacement={{ a: /\d/, b: /\d/, c: /\d/, d: /\d/,e: /\d/, f: /\d/, }}  onChange={(e) =>{console.log(e)}} separate />
                        {/*<input className="w-100" ref={inputRef}*/}
                        {/*       onChange={(e) => setSendData({...sendData, name: e.target.value})}*/}
                        {/*       type="text"/>*/}
                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">Port <img src="/icon/star.svg" className="star-img"
                                                                        alt=""/> </label>
                        <input className="w-100" onChange={(e) => setSendData({...sendData, name: e.target.value})}
                               type="text"/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs-box w-100 mr-16">
                        <label className="font-family-medium">User name<img src="/icon/star.svg" className="star-img"
                                                                            alt=""/> </label>
                        <input className="w-100" onChange={(e) => setSendData({...sendData, name: e.target.value})}
                               type="text"/>
                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">Password <img
                            src="/icon/star.svg" className="star-img" alt=""/> </label>
                        <div className="password-eye">
                            <input type={show ? "text" : "password"} className="w-100"
                                   onChange={(e) => setSendData({...sendData, name: e.target.value})}
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
                        onChange={(e) => setSendData({...sendData, country: e})}
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