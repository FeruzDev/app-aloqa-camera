import React, {useEffect, useState} from 'react';
import {Button, Modal, Select} from "antd";
import axios from "axios";
import {API_PATH} from "../../components/const";
import {toast} from "react-toastify";
import {useMask} from "@react-input/mask";

const SmartCameraEditModal = (props) => {
    const [selectOffices, setSelectOffices] = useState(null)
    const [offices, setOffices] = useState([])

    const sendAll = () => {
        // axios.post(API_PATH + "company/" + localStorage.getItem('id') + "/module/create", props.sendData, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
        //     .then(res => {
        //         toast.success("Добавлено успешно")
        //         props.getData()
        //         props.setIsSmartCameraAdd(false)
        //     })
        //     .catch(err => {
        //         toast.error("Ошибка")
        //     })
        // console.log(props.sendData)
        axios.put(API_PATH + "company/" + localStorage.getItem('id') + "/camera/smartcamera/update/" + props.sendData?.id , props.sendData, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                toast.success("Добавлено успешно")
                props.getData()
                props.sendData({})
                props.setIsSmartCameraEdit(false)
            })
            .catch(err => {
                toast.error("Ошибка 2")
            })
    }
    const getRoomsSearch = (val) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/room/" + selectOffices + "/all" + (val?.length > 0 ? "?search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                props.setRooms(res.data?.items)
                props.setSendData({...props.sendData, room_id: res.data.id})
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }

    const getBuilding = (val) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/building/all" + (val?.length > 0 ? "?search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setOffices(res?.data?.items)
                props.setSendData({...props.sendData, buildings_id: res.data.id})

            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }

    useEffect(() => {
        getBuilding()
    }, [])


    return (
        <Modal title="Изменить камеру"
               open={props.isSmartCameraEdit}
               onCancel={() => props.setIsSmartCameraEdit(false)}
               width={664}
               footer={[
                   <Button key="submit" type="primary" onClick={sendAll}>
                       Изменить
                   </Button>,
                   <Button key="submit" type="default" onClick={() => {
                       props.setIsSmartCameraEdit(false)
                       props.setSendData({})

                   }}>
                       Отменить
                   </Button>
               ]}
        >
            <div className="cam-add-modal">
                <div className="inputs-box">
                    <label className="font-family-medium">Название <img src="/icon/star.svg" className="star-img"
                                                                        alt=""/> </label>
                    <input
                        value={props.sendData?.name}
                        onChange={(e) => props.setSendData({...props.sendData, name: e.target.value})} type="text"/>
                </div>
                <div className="d-flex">
                    <div className="inputs-box w-100 mr-16">
                        <label className="font-family-medium">Выбрать здания </label>
                        <Select
                            showSearch
                            placeholder="Поиск, чтобы выбрать"
                            optionFilterProp="children"
                            className="w-100"
                            onSearch={getBuilding}
                            value={props.sendData?.building_id}
                            onChange={(e) => {
                                props.setSendData({...props.sendData, building_id: e})
                                props.getRooms(e)
                            }}
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={offices?.map((item) => {
                                return {
                                    value: item.id,
                                    label:
                                    item?.name
                                };
                            })}
                        />

                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">Выбрать комнату </label>
                        <Select
                            showSearch
                            placeholder="Поиск, чтобы выбрать"
                            optionFilterProp="children"
                            className="w-100"
                            onSearch={getRoomsSearch}
                            value={props.sendData?.room_id}

                            onChange={(e) => props.setSendData({...props.sendData, room_id: e})}
                            // onChange={(e) => setCountry(e)}
                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={props.rooms?.map((item) => {
                                return {
                                    value: item.id,
                                    label:
                                    item?.name
                                };
                            })}
                        />

                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs-box w-100 mr-16">
                        <label className="font-family-medium">device_id
                            <img src="/icon/star.svg"
                            className="star-img" alt=""/>
                        </label>
                        <input className="w-100"
                               value={props.sendData?.device_id}
                               onChange={(e) => props.setSendData({...props.sendData, device_id: e.target.value})}
                               type="text"/>
                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">device_mac <img src="/icon/star.svg" className="star-img"
                                                                              alt=""/> </label>
                        <input className="w-100"
                               value={props.sendData?.device_mac}
                               onChange={(e) => props.setSendData({...props.sendData, device_mac: e.target.value})}
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
                               value={props.sendData?.lib_platform_version}
                               onChange={(e) => props.setSendData({
                                   ...props.sendData,
                                   lib_platform_version: e.target.value
                               })}
                               type="text"/>
                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">software_version <img src="/icon/star.svg"
                                                                                    className="star-img"
                                                                                    alt=""/> </label>
                        <input className="w-100"
                               value={props.sendData?.software_version}
                               onChange={(e) => props.setSendData({
                                   ...props.sendData,
                                   software_version: e.target.value
                               })}
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
                               value={props.sendData?.lib_ai_version}
                               onChange={(e) => props.setSendData({...props.sendData, lib_ai_version: e.target.value})}
                               type="text"/>
                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">device_ip <img src="/icon/star.svg" className="star-img"
                                                                             alt=""/> </label>
                        <input className="w-100"
                               value={props.sendData?.device_ip}
                               onChange={(e) => props.setSendData({...props.sendData, device_ip: e.target.value})}
                               type="text"/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs-box w-100 mr-16">
                        <label className="font-family-medium">time_stamp <img src="/icon/star.svg" className="star-img"
                                                                              alt=""/>
                        </label>
                        <input className="w-100"
                               value={props.sendData?.time_stamp}
                               onChange={(e) => props.setSendData({...props.sendData, time_stamp: e.target.value})}
                               type="text"/>
                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">device_name <img src="/icon/star.svg" className="star-img"
                                                                               alt=""/> </label>
                        <input className="w-100"
                               value={props.sendData?.device_name}
                               onChange={(e) => props.setSendData({...props.sendData, device_name: e.target.value})}
                               type="text"/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="inputs-box w-100 mr-16">
                        <label className="font-family-medium">device_lat <img src="/icon/star.svg" className="star-img"
                                                                              alt=""/>
                        </label>
                        <input className="w-100"
                               value={props.sendData?.device_lat}
                               onChange={(e) => props.setSendData({...props.sendData, device_lat: e.target.value})}
                               type="text"/>
                    </div>
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">device_long <img src="/icon/star.svg" className="star-img"
                                                                               alt=""/> </label>
                        <input className="w-100"
                               value={props.sendData?.device_long}
                               onChange={(e) => props.setSendData({...props.sendData, device_long: e.target.value})}
                               type="text"/>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="inputs-box w-100">
                        <label className="font-family-medium">type </label>
                        <Select
                            className="w-100"
                            value={props.sendData?.camera_type}
                            onChange={(e) =>  props.setSendData({...props.sendData, camera_type: e})}
                        >
                            <option value="entry">entry</option>
                            <option value="exit">exit</option>
                        </Select>
                    </div>
                    <div className="inputs-box w-100 ml-16">
                        <label className="font-family-medium">ddns_rtsp_url <img src="/icon/star.svg" className="star-img"
                                                                                 alt=""/> </label>
                        <input className="w-100"
                               value={props.sendData?.ddns_rtsp_url}
                               onChange={(e) => props.setSendData({...props.sendData, ddns_rtsp_url: e.target.value})}
                               type="text"/>
                    </div>
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

export default SmartCameraEditModal;