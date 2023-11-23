import React, {useEffect, useState} from 'react';
import SearchTop from "../../components/SearchTop";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import axios from "axios";
import {API_PATH} from "../../components/const";
import {toast} from "react-toastify";
import SmartCameraEditModal from "./SmartCameraEditModal";
import SmartCameraDeleteModal from "./SmartCameraDeleteModal";
import SmartCameraAddModal from "./SmartCameraAddModal";
import SmartCameraFilter from "./SmartCameraFilter";

const SmartCamera = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectCam, setSelectCam] = React.useState(null);
    const [data, setData] = useState([])
    const [dataObj, setDataObj] = useState([])
    const [offices, setOffices] = useState([])
    const [current, setCurrent] = useState(1);
    const [rooms, setRooms] = useState([])
    const [isSmartCameraEdit, setIsSmartCameraEdit] = useState(false)
    const [isSmartCameraDelete, setIsSmartCameraDelete] = useState(false)
    const [isSmartCameraAdd, setIsSmartCameraAdd] = useState(false)
    const [sendData, setSendData] = useState({})
    const open = Boolean(anchorEl);

    const deletePage = (id) => {
        setSelectCam(id)
        setIsSmartCameraDelete(true)
    }
    const getData = () => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/smartcamera/all?page=1", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setData(res.data?.items)
                setDataObj(res.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getBuilding = () => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/building/all", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setOffices(res.data?.items)
                // setSendData({...sendData, building_id: res.data.id})
            })
            .catch(err => {
                toast.error("Ошибка")
            })

    }
    const getRooms = (id) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/room/" + id + "/all", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setRooms(res.data?.items)
                // setSendData({...sendData, room_id: res.data.id})
            })
            .catch(err => {
                // toast.error("Ошибка")
            })
    }
    const changePagination = (current, size) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/smartcamera/all?page=" + size, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setData(res.data?.items)
                setDataObj(res.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const createPage = () => {
        // history.push("/home/employees/profile/create")
        getBuilding()
        // getRooms()
        setIsSmartCameraAdd(true)
    }
    const editPage = (e) => {
        // setSelectCamera(id)
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/smartcamera/detail/" + e.id, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setSendData(res.data)
                // console.log(res.data)
            })
        getBuilding()
        getRooms(e?.building_id)
            setIsSmartCameraEdit(true)

    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="employees-pair">
            <div className="employees-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="left-head">
                        <h6>Smart Camera </h6>
                        <p>Camera List</p>
                    </div>
                    <div className="right-head">
                        {/*<button className="upload-btn font-family-medium ml-16 mr-16"><img*/}
                        {/*    src="/icon/upload.svg"/> Экспорт в Excel*/}
                        {/*</button>*/}
                        <button className="add-btn font-family-medium" onClick={createPage}><img
                            src="/icon/plus.svg"/> Добавить новое
                        </button>
                    </div>
                </div>
            </div>
            <SmartCameraFilter
                setData={setData} />
            <div className="emp-table">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="pl20 table-head" align="left">№</TableCell>
                                <TableCell className="table-head" align="left">name</TableCell>
                                <TableCell className="table-head" align="left">device_mac</TableCell>
                                <TableCell className="table-head" align="left">lib_platform_version</TableCell>
                                {/*<TableCell className="table-head" align="left">software_version</TableCell>*/}
                                <TableCell className="table-head" align="left">lib_ai_version</TableCell>
                                <TableCell className="table-head" align="left">device_ip</TableCell>
                                <TableCell className="table-head" align="left">building_id</TableCell>
                                <TableCell className="table-head" align="left">room_id</TableCell>
                                <TableCell className="table-head" align="left">camera_type</TableCell>
                                <TableCell className="table-head" align="left">device_name</TableCell>
                                <TableCell className="pr20 table-head" align="right">
                                    Действие
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map((row, index) => (
                                <TableRow
                                    key={row.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell className="pl20" component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="left">{row.device_mac}</TableCell>
                                    <TableCell align="left">{row.lib_platform_version}</TableCell>
                                    <TableCell align="left">{row.lib_ai_version}</TableCell>
                                    <TableCell align="left">{row.device_ip}</TableCell>
                                    <TableCell align="left">{row.building?.name}</TableCell>
                                    <TableCell align="left">{row.room?.name}</TableCell>
                                    {/*<TableCell align="left">{row.lib_ai_version}</TableCell>*/}
                                    <TableCell align="left">{row.camera_type}</TableCell>
                                    <TableCell align="left">{row.device_name}</TableCell>
                                    <TableCell className="twt" align="right">
                                        <div className="con-btns-all">
                                            <div className="con-btns-all">
                                                <button className="t-delete-btn font-family-medium"
                                                        onClick={() => deletePage(row.id)}>Удалить
                                                </button>
                                                <button className="t-edit-btn font-family-medium"
                                                        onClick={() => editPage(row)}>Изменить
                                                </button>
                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="pag-bottom">
                <Pagination  count={dataObj?.pages}   total={dataObj?.total} current={current}   onChange={changePagination} shape="rounded"/>
            </div>

            <SmartCameraEditModal
                isSmartCameraEdit={isSmartCameraEdit}
                setIsSmartCameraEdit={setIsSmartCameraEdit}
                setSendData={setSendData}
                sendData={sendData}
                getRooms={getRooms}
                getData={getData}
                getBuilding={getBuilding}
                offices={offices}
                rooms={rooms}
            />
            <SmartCameraDeleteModal
                setIsSmartCameraDelete={setIsSmartCameraDelete}
                isSmartCameraDelete={isSmartCameraDelete}
                selectCam={selectCam}
                getData={getData}
            />
            <SmartCameraAddModal
                setIsSmartCameraAdd={setIsSmartCameraAdd}
                isSmartCameraAdd={isSmartCameraAdd}
                getData={getData}
            />
        </div>
    );
};

export default SmartCamera;