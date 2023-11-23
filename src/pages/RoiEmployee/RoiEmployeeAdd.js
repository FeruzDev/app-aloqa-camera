import React, {useEffect, useState} from 'react';
import {Select} from "antd";
import ReactPlayer from "react-player";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import axios from "axios";
import {API_PATH} from "../../components/const";
import {toast} from "react-toastify";
import DrawRoi from "./DrawRoi";

const RoiEmployeeAdd = () => {
    const [users, setUsers] = useState([])
    const [offices, setOffices] = useState([])
    const [isAddModal, setIsAddModal] = useState([])
    const [rooms, setRooms] = useState([])
    const [cameras, setCameras] = useState([])
    const [selectOffices, setSelectOffices] = useState(null)
    const [selectRooms, setSelectRooms] = useState(null)
    const [selectCameras, setSelectCameras] = useState("")
    const [sendData, setSendData] = useState(null)
    const [camId, setCamId] = useState(null)
    const [message, setMessage] = useState({});

    const getUsers = () => {
        axios.get(API_PATH + "user/company/" + localStorage.getItem('id') + "/user/all", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }

    const getBuilding = (val) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/building/all" + (val?.length > 0 ? "?search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setOffices(res?.data?.items)
                setSendData({...sendData, buildings_id: res.data.id})

            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getRooms = (id) => {
        getCameras(id)
        setSelectOffices(id)
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/room/" + id + "/all", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setRooms(res.data?.items)
                setSendData({...sendData, room_id: res.data.id})
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getRoomsSearch = (val) => {
        getCameras(selectOffices)
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/room/" + selectOffices + "/all" + (val?.length > 0 ? "?search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setRooms(res.data?.items)
                setSendData({...sendData, room_id: res.data.id})
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getCameras = (id) => {
        setSelectRooms(id)

        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/smartcamera/all?building_id=" + id, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setCameras(res?.data?.items)

            })
            .catch(err => {
                toast.error("Ошибка")
            })
        window.scrollTo(0, 0);

    }
    const getCamerasSearch = (val) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/smartcamera/all?building_id=" + selectRooms + (val?.length > 0 ? "?search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setCameras(res?.data?.items)

            })
            .catch(err => {
                toast.error("Ошибка")
            })
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        localStorage.setItem("sec", "")
        getBuilding()
    }, []);


    useEffect(() => {


    }, [message])

    return (
        <div className="live-page">
            <div className="employees-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="left-head">
                        <h6>ROI Visitor </h6>
                        <p>ROI reviewing</p>
                    </div>
                    <div className="right-head d-flex">
                        <div className="inputs-box mr-16" style={{width: "200px"}}>
                            <Select
                                showSearch
                                placeholder="Поиск, чтобы выбрать"
                                optionFilterProp="children"
                                className="w-100"
                                onSearch={getBuilding}
                                onChange={(e) => getRooms(e)}
                                // onChange={(e) => setCountry(e)}
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
                        <div className="inputs-box mr-16" style={{width: "200px"}}>
                            <Select
                                showSearch
                                placeholder="Поиск, чтобы выбрать"
                                optionFilterProp="children"
                                className="w-100"
                                onSearch={getRoomsSearch}
                                onChange={(e) => getCameras(e)}
                                // onChange={(e) => setCountry(e)}
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={rooms?.map((item) => {
                                    return {
                                        value: item.id,
                                        label:
                                        item?.name
                                    };
                                })}
                            />
                        </div>
                        <div className="inputs-box" style={{width: "200px"}}>
                            <Select
                                showSearch
                                placeholder="Поиск, чтобы выбрать"
                                optionFilterProp="children"
                                className="w-100"
                                onSearch={getCamerasSearch}
                                onChange={(e) => setCamId(e)}
                                // onChange={(e) => setCountry(e)}
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={cameras?.map((item) => {
                                    return {
                                        value: item.id,
                                        label:
                                        item?.name
                                    };
                                })}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="live-page-box">
                <div className="live-page-box-header">
                    <div className="d-flex justify-content-between  ">
                        <div className="left-pair-items">
                            {/*<video src="http://43.202.168.206:8080/stream/camera1/index.m3u8" autoPlay controls></video>*/}
                            {
                                selectCameras ? <ReactPlayer url={selectCameras}
                                                             className="w-100 h-100 " style={{borderRadius: "8px"}}
                                                             playing={true} muted/>
                                    :
                                    ""
                            }
                        </div>

                    </div>
                </div>

                <DrawRoi camId={camId} />

            </div>
        </div>
    );
};

export default RoiEmployeeAdd;