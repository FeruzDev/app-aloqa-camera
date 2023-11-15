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
import Stack from '@mui/material/Stack';
import {useHistory} from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {Select} from "antd";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {toast} from "react-toastify";
import SmartCameraEditModal from "./SmartCameraEditModal";
import SmartCameraDeleteModal from "./SmartCameraDeleteModal";
import SmartCameraAddModal from "./SmartCameraAddModal";

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
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/smartcamera/all?page=1", CONFIG)
            .then(res => {
                setData(res.data?.items)
                setDataObj(res.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getBuilding = () => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/building/all", CONFIG)
            .then(res => {
                setOffices(res.data?.items)
                // setSendData({...sendData, building_id: res.data.id})
            })
            .catch(err => {
                toast.error("Ошибка")
            })

    }
    const getRooms = (id) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/room/" + id + "/all", CONFIG)
            .then(res => {
                setRooms(res.data?.items)
                // setSendData({...sendData, room_id: res.data.id})
            })
            .catch(err => {
                // toast.error("Ошибка")
            })
    }
    const changePagination = (current, size) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/smartcamera/all?page=" + size, CONFIG)
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
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/smartcamera/detail/" + e.id, CONFIG)
            .then(res => {
                setSendData(res.data)
                console.log(res.data)
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
                        <button className="upload-btn font-family-medium ml-16 mr-16"><img
                            src="/icon/upload.svg"/> Экспорт в Excel
                        </button>
                        <button className="add-btn font-family-medium" onClick={createPage}><img
                            src="/icon/plus.svg"/> Добавить новое
                        </button>
                    </div>
                </div>
            </div>
            {/*<div className="search-top">*/}
            {/*    <div className="d-flex align-items-center justify-content-between">*/}
            {/*        <div className="w-100"></div>*/}
            {/*        <Button*/}
            {/*            id="fade-button"*/}
            {/*            aria-controls={open ? 'fade-menu' : undefined}*/}
            {/*            aria-haspopup="true"*/}
            {/*            aria-expanded={open ? 'true' : undefined}*/}
            {/*            onClick={handleClick}*/}
            {/*            className="filter-btn"*/}
            {/*        >*/}
            {/*            <img src="/icon/filtr.svg" alt="filter"/> Фильтр*/}
            {/*        </Button>*/}
            {/*    </div>*/}
            {/*    <Menu*/}
            {/*        id="fade-menu"*/}
            {/*        MenuListProps={{*/}
            {/*            'aria-labelledby': 'fade-button',*/}
            {/*        }}*/}
            {/*        anchorEl={anchorEl}*/}
            {/*        open={open}*/}
            {/*        onClose={handleClose}*/}
            {/*        TransitionComponent={Fade}*/}
            {/*    >*/}
            {/*        <div className=" left-fl-big">*/}
            {/*            <div className="d-flex">*/}
            {/*                <div className="left-fl-pair">*/}
            {/*                    <div className="inputs-box">*/}
            {/*                        <label className="font-family-medium">Дата рождения </label>*/}
            {/*                        <input type="date"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="inputs-box">*/}
            {/*                        <label className="font-family-medium">Возраст </label>*/}
            {/*                        <input type="text"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="inputs-box">*/}
            {/*                        <label className="font-family-medium">Пол </label>*/}
            {/*                        <FormControl>*/}
            {/*                            <RadioGroup*/}
            {/*                                row*/}
            {/*                                aria-labelledby="demo-row-radio-buttons-group-label"*/}
            {/*                                name="row-radio-buttons-group"*/}
            {/*                            >*/}
            {/*                                <FormControlLabel value="female" control={<Radio/>} label="Мужской"/>*/}
            {/*                                <FormControlLabel value="male" control={<Radio/>} label="Женский"/>*/}
            {/*                            </RadioGroup>*/}
            {/*                        </FormControl>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="left-fl-pair">*/}
            {/*                    <div className="inputs-box">*/}
            {/*                        <label className="font-family-medium">Отдел </label>*/}
            {/*                        <Select*/}
            {/*                            className="w-100"*/}
            {/*                            options={[*/}
            {/*                                {value: 'jack', label: 'Jack'},*/}
            {/*                                {value: '1', label: '1'},*/}
            {/*                                {value: 'Yiminghe', label: 'yiminghe'},*/}
            {/*                                {value: 'disabled', label: 'Disabled', disabled: true},*/}
            {/*                            ]}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                    <div className="inputs-box">*/}
            {/*                        <label className="font-family-medium">Должность </label>*/}
            {/*                        <Select*/}
            {/*                            className="w-100"*/}
            {/*                            options={[*/}
            {/*                                {value: 'jack', label: 'Jack'},*/}
            {/*                                {value: '1', label: '1'},*/}
            {/*                                {value: 'Yiminghe', label: 'yiminghe'},*/}
            {/*                                {value: 'disabled', label: 'Disabled', disabled: true},*/}
            {/*                            ]}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                    <div className="inputs-box">*/}
            {/*                        <label className="font-family-medium">Режим </label>*/}
            {/*                        <Select*/}
            {/*                            className="w-100"*/}
            {/*                            options={[*/}
            {/*                                {value: 'jack', label: 'Jack'},*/}
            {/*                                {value: '1', label: '1'},*/}
            {/*                                {value: 'Yiminghe', label: 'yiminghe'},*/}
            {/*                                {value: 'disabled', label: 'Disabled', disabled: true},*/}
            {/*                            ]}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="con-btn">*/}
            {/*                <button className="font-family-medium"><img src="/icon/bird.svg" className="mr-8"/><span>Применить фильтры</span>*/}
            {/*                </button>*/}

            {/*                <button className="font-family-medium ml-8 " onClick={handleClose}>Отменить</button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </Menu>*/}
            {/*</div>*/}

            <div className="emp-table">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="pl20 table-head">№</TableCell>
                                <TableCell className="table-head" align="right">name</TableCell>
                                <TableCell className="table-head" align="right">device_mac</TableCell>
                                <TableCell className="table-head" align="right">lib_platform_version</TableCell>
                                <TableCell className="table-head" align="right">software_version</TableCell>
                                <TableCell className="table-head" align="right">lib_ai_version</TableCell>
                                <TableCell className="table-head" align="right">device_ip</TableCell>
                                <TableCell className="table-head" align="right">camera_type</TableCell>
                                <TableCell className="table-head" align="right">device_name</TableCell>
                                <TableCell className="pr20 table-head" align="right">Эффективность</TableCell>
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
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.device_mac}</TableCell>
                                    <TableCell align="right">{row.lib_platform_version}</TableCell>
                                    <TableCell align="right">{row.lib_ai_version}</TableCell>
                                    <TableCell align="right">{row.device_ip}</TableCell>
                                    <TableCell align="right">{row.lib_ai_version}</TableCell>
                                    <TableCell align="right">{row.camera_type}</TableCell>
                                    <TableCell align="right">{row.device_name}</TableCell>
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