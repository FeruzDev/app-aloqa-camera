import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import {Select} from "antd";
import axios from "axios";
import {toast} from "react-toastify";
import {API_PATH} from "../../components/const";

const SmartCameraFilter = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [building_id, setbuilding_id] = useState("")
    const [offices, setOffices] = useState([])
    const [rooms, setRooms] = useState([])
    const [selectOffices, setSelectOffices] = useState(null)
    const [room_id, setroom_id] = useState("")
    const [camType, setCamType] = useState("")
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const getRooms = (id) => {
        setSelectOffices(id)
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/room/" + id + "/all", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setRooms(res.data?.items)
                // setSendData({...sendData, room_id: res.data.id})
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getRoomsSearch = (val) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/room/" + selectOffices + "/all" + (val?.length > 0 ? "?search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setRooms(res.data?.items)
                // setSendData({...sendData, room_id: res.data.id})
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getBuilding = (val) => {

        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/building/all" + (val?.length > 0 ? "?search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setOffices(res?.data?.items)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }

    const addFilter = (val) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/smartcamera/all?" + (building_id > 0 ? "building_id=" + building_id : "") + (room_id > 0 ? "&room_id=" + room_id : "") + (camType.length > 0 ? "&camera_type=" + camType : "") + (val?.length > 0 ? "&search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                props.setData(res.data?.items)
                setAnchorEl(null);
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const searchEmploye = (e) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/smartcamera/all?building_id=" + building_id + "&room_id=" + room_id + "&camera_type=" + camType + (e?.length > 0 ? "?search_str=" + e : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                props.setData(res.data?.items)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const selectRoomChange = (e) => {
        setbuilding_id(e)
        getRooms(e)
    }
    useEffect(() => {
        getBuilding()
    }, []);
    return (
        <div className="search-top">
            <div className="d-flex align-items-center">
                <div className="search-item w-100">
                    <label htmlFor="searchItem"><img src="/icon/Icon6.svg" alt="loupe"/></label>
                    <input type="text" placeholder="Искать в админке" onChange={(e) => addFilter(e.target.value)}
                           id="searchItem"/>
                </div>
                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className="filter-btn"
                >
                    <img src="/icon/filtr.svg" alt="filter"/> Фильтр

                </Button>
            </div>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <div className=" left-fl-big">
                    <div className="d-flex">
                        <div className="left-fl-pair">
                            <div className="inputs-box w-100">
                                <label className="font-family-medium">type </label>
                                <Select
                                    className="w-100"
                                    value={camType}
                                    onChange={(e) => setCamType(e)}
                                >
                                    <option value="entry">entry</option>
                                    <option value="exit">exit</option>
                                </Select>
                            </div>
                        </div>
                        <div className="left-fl-pair">
                            <div className="inputs-box">
                                <label className="font-family-medium">Филиалы</label>
                                <Select
                                    showSearch
                                    placeholder="Поиск, чтобы выбрать"
                                    optionFilterProp="children"
                                    className="w-100"
                                    onSearch={getBuilding}
                                    value={building_id}
                                    onChange={(e) => selectRoomChange(e)}
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

                            <div className="inputs-box">
                                <label className="font-family-medium">Комната</label>
                                {/*<Select*/}
                                {/*    className="w-100"*/}
                                {/*    onChange={(e) => setdepartment_id(e)}*/}
                                {/*>*/}
                                {/*    <option value="">Все</option>*/}
                                {/*    {*/}
                                {/*        departments?.map((item, index) => (*/}
                                {/*            <option value={item?.id} key={index}>{item?.department_title}</option>*/}
                                {/*        ))*/}
                                {/*    }*/}
                                {/*</Select>*/}
                                <Select
                                    showSearch
                                    placeholder="Поиск, чтобы выбрать"
                                    optionFilterProp="children"
                                    className="w-100"
                                    value={room_id}
                                    onSearch={getRoomsSearch}
                                    onChange={(e) => setroom_id(e)}
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
                        </div>
                    </div>
                    <div className="con-btn">
                        <button className="font-family-medium" onClick={addFilter}>
                            <img src="/icon/bird.svg" className="mr-8"/><span>Применить фильтры</span>
                        </button>
                        <button className="font-family-medium ml-8" onClick={handleClose}>Отменить</button>
                    </div>
                </div>
            </Menu>
        </div>
    );
};

export default SmartCameraFilter;