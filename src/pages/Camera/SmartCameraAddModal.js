import React, {useEffect, useState} from 'react';
import {Button, Modal, Select} from "antd";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {toast} from "react-toastify";
import {InputMask, useMask} from "@react-input/mask";
import {withMask} from 'use-mask-input';

const SmartCameraAddModal = (props) => {
    const [show, setShow] = useState(false)
    const [offices, setOffices] = useState([])
    const [rooms, setRooms] = useState([])
    const [sendData, setSendData] = useState({
        // name: "",
        // device_id: "",
        // device_mac: "",
        // lib_platform_version: "",
        // lib_ai_version: "",
        // software_version: "",
        // building_id: "",
        // room_id: "",
        // device_ip: "",
        // time_stamp: "",
        // device_name: "",
        // device_lat: "",
        // device_long: "",
        distance: 0
    })
    const getBuilding = () => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/building/all", CONFIG)
            .then(res => {
                setOffices(res.data)
                setSendData({...sendData, building_id: res.data.id})
            })
            .catch(err => {
                toast.error("Ошибка")
            })

    }
    const getRooms = (id) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/room/" + id + "/all", CONFIG)
            .then(res => {
                setRooms(res.data)
                // setSendData({...sendData, room_id: res.data.id})
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const sendAll = () => {
        axios.post(API_PATH + "company/" + localStorage.getItem('id') + "/camera/smartcamera/create", sendData, CONFIG)
            .then(res => {
                toast.success("Добавлено успешно")
                props.getData()
                props.setIsSmartCameraAdd(false)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const inputRef = useMask({mask: "aa - bb - cc - dd - ee - ff", replacement: {_: /\d/}})
    useEffect(() => {
        getBuilding()
    }, [])
    return (
        <Modal title="Добавить Smart Camera"
               open={props.isSmartCameraAdd}
               width={664}
               onCancel={() => props.setIsSmartCameraAdd(false)}
               footer={[
                   <Button key="submit" type="default" onClick={() => props.setIsSmartCameraAdd(false)}>
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
                        <label className="font-family-medium">Выбрать здания </label>
                        <Select
                            className="w-100"
                            onChange={(e) => {
                                setSendData({...sendData, building_id: e})
                                getRooms(e)
                            }}
                        >

                            {
                                offices?.map((item, index) => (
                                    <option value={item?.id} key={index}>{item?.name}</option>
                                ))
                            }

                        </Select>
                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">Выбрать комнату </label>
                        <Select
                            className="w-100"
                            onChange={(e) => setSendData({...sendData, room_id: e})}
                        >
                            {
                                rooms?.map((item, index) => (
                                    <option value={item?.id} key={index}>{item?.name}</option>
                                ))
                            }

                        </Select>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs-box w-100 mr-16">
                        <label className="font-family-medium">device_id <img src="/icon/star.svg"
                                                                             className="star-img" alt=""/>
                        </label>
                        <input className="w-100"
                               onChange={(e) => setSendData({...sendData, device_id: e.target.value})}
                               type="text"/>
                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">device_mac <img src="/icon/star.svg" className="star-img"
                                                                              alt=""/> </label>
                        <input className="w-100"
                               onChange={(e) => setSendData({...sendData, device_mac: e.target.value})}
                               type="text"/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs-box w-100 mr-16">
                        <label className="font-family-medium">lib_platform_version <img src="/icon/star.svg"
                                                                                        className="star-img"
                                                                                        alt=""/>
                        </label>
                        <input className="w-100"
                               onChange={(e) => setSendData({...sendData, lib_platform_version: e.target.value})}
                               type="text"/>
                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">software_version <img src="/icon/star.svg"
                                                                                    className="star-img"
                                                                                    alt=""/> </label>
                        <input className="w-100"
                               onChange={(e) => setSendData({...sendData, software_version: e.target.value})}
                               type="text"/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs-box w-100 mr-16">
                        <label className="font-family-medium">lib_ai_version <img src="/icon/star.svg"
                                                                                  className="star-img"
                                                                                  alt=""/>
                        </label>
                        <input className="w-100"
                               onChange={(e) => setSendData({...sendData, lib_ai_version: e.target.value})}
                               type="text"/>
                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">device_ip <img src="/icon/star.svg" className="star-img"
                                                                             alt=""/> </label>
                        <input className="w-100" onChange={(e) => setSendData({...sendData, device_ip: e.target.value})}
                               type="text"/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs-box w-100 mr-16">
                        <label className="font-family-medium">time_stamp <img src="/icon/star.svg" className="star-img"
                                                                              alt=""/>
                        </label>
                        <input className="w-100"
                               onChange={(e) => setSendData({...sendData, time_stamp: e.target.value})}
                               type="text"/>
                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">device_name <img src="/icon/star.svg" className="star-img"
                                                                               alt=""/> </label>
                        <input className="w-100"
                               onChange={(e) => setSendData({...sendData, device_name: e.target.value})}
                               type="text"/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs-box w-100 mr-16">
                        <label className="font-family-medium">device_lat <img src="/icon/star.svg" className="star-img"
                                                                              alt=""/>
                        </label>
                        <input className="w-100"
                               onChange={(e) => setSendData({...sendData, device_lat: e.target.value})}
                               type="text"/>
                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">device_long <img src="/icon/star.svg" className="star-img"
                                                                               alt=""/> </label>
                        <input className="w-100"
                               onChange={(e) => setSendData({...sendData, device_long: e.target.value})}
                               type="text"/>
                    </div>
                </div>
                <div className="inputs-box w-100">
                    <label className="font-family-medium">type </label>
                    <Select
                        className="w-100"
                        onChange={(e) => setSendData({...sendData, camera_type: e})}
                    >
                        <option value="entry">entry</option>
                        <option value="exit">exit</option>
                    </Select>
                </div>
                {/*<div className="d-flex">*/}
                {/*    <div className="inputs-box w-100 mr-16">*/}
                {/*        <label className="font-family-medium">User name<img src="/icon/star.svg" className="star-img"*/}
                {/*                                                            alt=""/> </label>*/}
                {/*        <input className="w-100" onChange={(e) => setSendData({...sendData, username: e.target.value})}*/}
                {/*               type="text"/>*/}
                {/*    </div>*/}
                {/*    <div className="inputs-box w-100">*/}
                {/*        <label className="font-family-medium">Password <img*/}
                {/*            src="/icon/star.svg" className="star-img" alt=""/> </label>*/}
                {/*        <div className="password-eye">*/}
                {/*            <input type={show ? "text" : "password"} className="w-100"*/}
                {/*                   onChange={(e) => setSendData({...sendData, password: e.target.value})}*/}
                {/*            />*/}
                {/*            <button onClick={() => setShow(!show)}><img src="/icon/eye.svg" alt=""/></button>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </Modal>
    );
};

export default SmartCameraAddModal;