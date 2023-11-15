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
import {API_PATH, CONFIG} from "../../components/const";

const EmployeFilter = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [building_id, setbuilding_id] = useState("")
    const [offices, setOffices] = useState([])
    const [departments, setDepartments] = useState([])
    const [department_id, setdepartment_id] = useState("")
    const [age, setAge] = useState("")
    const [position, setPosition] = useState("")
    const [gender, setGender] = useState("")
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const getDeps = (val) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/department/all" + (val?.length > 0 ? "?search_str=" + val : ""), CONFIG)
            .then(res => {
                setDepartments(res?.data?.items)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getBuilding = (val) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/building/all" + (val?.length > 0 ? "?search_str=" + val : ""), CONFIG)
            .then(res => {
                setOffices(res?.data?.items)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }

    const addFilter = () => {
        axios.get(API_PATH + "user/company/" + localStorage.getItem('id') + "/user/all" + (building_id ? "?building_id=" + building_id + "&" : "?") + (department_id ? "department_id=" + department_id : "") + (gender ? "&gender=" + gender  : "") + (position ? "&position=" + position : "") + (age ? "&dob=" + age  : ""), CONFIG)
            .then(res => {
                props.setUsers(res.data?.items)
                setAnchorEl(null);
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const searchEmploye = (e) => {
        axios.get(API_PATH + "user/company/" + localStorage.getItem('id') + "/user/all" + (e?.length > 0 ? "?search_str=" + e : ""), CONFIG)
            .then(res => {
                props.setUsers(res.data?.items)

            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    useEffect(() => {
        getBuilding()
        getDeps()
    }, []);
    return (
        <div className="search-top">
            <div className="d-flex align-items-center">
                <div className="search-item w-100">
                    <label htmlFor="searchItem"><img src="/icon/Icon6.svg" alt="loupe"/></label>
                    <input type="text" placeholder="Искать в админке" onChange={(e) => searchEmploye(e.target.value)}
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
                            <div className="inputs-box">
                                <label className="font-family-medium">Дата рождения </label>
                                <input type="date" onChange={(e) => setAge(e.target.value)}/>
                            </div>
                            <div className="inputs-box">
                                <label className="font-family-medium">Должность </label>
                                <input type="text" onChange={(e) => setPosition(e.target.value)}/>
                            </div>
                            <div className="inputs-box">
                                <label className="font-family-medium">Пол </label>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        onChange={(e) => setGender(e.target.value)}
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="male" control={<Radio/>} label="Мужской"/>
                                        <FormControlLabel value="female" control={<Radio/>} label="Женский"/>
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="left-fl-pair">
                            <div className="inputs-box">
                                <label className="font-family-medium">Отделы</label>
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
                                    onSearch={getDeps}
                                    onChange={(e) => setdepartment_id(e)}
                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={departments?.map((item) => {
                                        return {
                                            value: item.id,
                                            label:
                                            item?.department_title
                                        };
                                    })}
                                />


                            </div>
                            <div className="inputs-box">
                                <label className="font-family-medium">Филиалы</label>
                                <Select
                                    showSearch
                                    placeholder="Поиск, чтобы выбрать"
                                    optionFilterProp="children"
                                    className="w-100"
                                    onSearch={getBuilding}
                                    onChange={(e) => setbuilding_id(e)}
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

export default EmployeFilter;