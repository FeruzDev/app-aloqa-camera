import React, {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import Calendar from "../Home/Calendar";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {Select} from "antd";
import axios from "axios";
import {API_PATH} from "../../components/const";
import {toast} from "react-toastify";
import {de} from "date-fns/locale";

const ProfileEdit = () => {

    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    let history = useHistory()
    let params = useParams()
    const [sendData, setSendData] = useState({})
    const [pic, setPic] = useState(null);
    const [offices, setOffices] = useState([])
    const [departments, setDepartments] = useState([])

    const bigData = new FormData()


    const getDeps = (val) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/department/all" + (val?.length > 0 ? "?search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setDepartments(res.data?.items)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getBuilding = (val) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/building/all" + (val?.length > 0 ? "?search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setOffices(res.data?.items)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getItem = () => {
        axios.get(API_PATH + "user/company/" + localStorage.getItem('id') + "/user/" + params.id, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setSendData(res.data)
                getDeps(res.data?.department?.department_title)

                // setSendData({...sendData, building_id: res.data.building_id})
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const sendAll = () => {
        if (pic?.target?.files[0]) {
            bigData.append("image", pic?.target?.files[0])
        }
        bigData.append("first_name", sendData?.first_name)
        bigData.append("last_name", sendData?.last_name)
        bigData.append("username", sendData?.username)
        bigData.append("email", sendData?.email)
        bigData.append("password", sendData?.password)
        bigData.append("gender", sendData?.gender)
        bigData.append("position", sendData?.position)
        bigData.append("date_of_birth", sendData?.date_of_birth)
        bigData.append("middle_name", sendData?.middle_name)
        bigData.append("phone", sendData?.phone)
        bigData.append("building_id", sendData?.building_id)
        bigData.append("department_id", sendData?.department_id)

        axios.put(API_PATH + "user/company/" + localStorage.getItem('id') + "/update/user/" + params.id, bigData, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                // console.log(res)
                toast.success("Изменить сотрудника")
                getItem()
            })
    }
    const [photo123, setphoto123] = useState(sendData?.image);

    const uploadImg = (event) => {
        setphoto123(URL.createObjectURL(event.target.files[0]));
        setPic(event);
        setSendData({...sendData, image: event?.target?.files[0]})
    };

    useEffect(() => {
        getBuilding(1)
        // getDeps(1)
        getItem()
    }, []);

    return (
        <div className="profile-edit">
            <div className="progress-link">
                <Link to="/main/visitor-home" > <img src="/icon/Icon1.svg" alt="."/></Link>
                <img src="/icon/arrowleft.svg" alt="."/>
                <Link to="/main/hr-admin/employees"  > <span>Cотрудники</span></Link>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>{sendData?.first_name + " " + sendData?.last_name}</span>
            </div>

            <div className="profile-header">
                <h3 className="font-family-medium">Информация о новом сотруднике</h3>
                <div className="profile-header-box-update">
                    <div className="row">
                        <div className="col-md-2 text-center">
                            {/*<img src="/img/addphoto.png" alt="."/>*/}
                            {/*<input type="file"*/}
                            {/*       onChange={(e) => setPic(e.target.files[0])}*/}
                            {/*/>*/}
                            <div className="userPhoto">
                                <label htmlFor="userPhoto" id="img1">
                                    {" "}
                                    {
                                        sendData?.image ?
                                            <img src={sendData?.image} alt=""/>
                                            :
                                            <img src={photo123} alt=""/>

                                    }
                                    <img src={photo123} alt=""/>

                                </label>
                                <input
                                    type="file"

                                    onChange={(e) => uploadImg(e)}
                                    id="userPhoto"
                                />
                                <p className="font-family-bold">Фотография</p>
                                {/*<p className="open-sans-semibold">{getText("photo")}</p>*/}
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="inputs-box">
                                        <label className="font-family-medium">Имя </label>
                                        <input type="text"
                                               value={sendData?.first_name}
                                               onChange={(e) => setSendData({
                                                   ...sendData,
                                                   first_name: e.target.value
                                               })}/>
                                    </div>
                                    <div className="inputs-box">
                                        <label className="font-family-medium">Фамилия </label>
                                        <input type="text"
                                               value={sendData?.last_name}
                                               onChange={(e) => setSendData({...sendData, last_name: e.target.value})}/>
                                    </div>
                                    <div className="inputs-box">
                                        <label className="font-family-medium">Отчество </label>
                                        <input type="text"
                                               value={sendData?.middle_name}
                                               onChange={(e) => setSendData({
                                                   ...sendData,
                                                   middle_name: e.target.value
                                               })}/>
                                    </div>
                                    <div className="inputs-box">
                                        <label className="font-family-medium">Логин </label>
                                        <input
                                            value={sendData?.username}
                                            onChange={(e) => setSendData({...sendData, username: e.target.value})}
                                            type="text"/>
                                    </div>
                                    <div className="inputs-box">
                                        <label className="font-family-medium">Парол </label>
                                        <input
                                            value={sendData?.password}
                                            onChange={(e) => setSendData({...sendData, password: e.target.value})}
                                            type="text"/>
                                    </div>
                                    <div className="inputs-box">
                                        <label className="font-family-medium">Номер телефона </label>
                                        <input
                                            value={sendData?.phone}
                                            onChange={(e) => setSendData({...sendData, phone: e.target.value})}
                                            type="text"/>
                                    </div>

                                    {/*<div className="inputs-box">*/}
                                    {/*    <label  className="font-family-medium">Возраст </label>*/}
                                    {/*    <input type="text"  />*/}
                                    {/*</div>*/}
                                </div>
                                <div className="col-md-6">
                                    <div className="inputs-box">
                                        <label className="font-family-medium">Email</label>
                                        <input
                                            value={sendData?.email}
                                            onChange={(e) => setSendData({...sendData, email: e.target.value})}
                                            type="text"/>
                                    </div>
                                    <div className="inputs-box">
                                        <label className="font-family-medium">Дата рождения </label>
                                        <input type="date"
                                               value={sendData?.date_of_birth}
                                               onChange={(e) => setSendData({
                                                   ...sendData,
                                                   date_of_birth: e.target.value
                                               })}
                                        />
                                    </div>
                                    <div className="inputs-box for-select">
                                        <label className="font-family-medium">Пол </label>
                                        <FormControl>

                                            <RadioGroup
                                                row
                                                defaultValue={sendData?.gender}

                                                onChange={(e) => setSendData({...sendData, gender: e.target.value})}
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel value="male" control={
                                                    <Radio/>} label="Мужской"/>
                                                <FormControlLabel value="female" control={
                                                    <Radio/>} label="Женский"/>
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                    <div className="inputs-box-2">
                                        <label className="font-family-medium">Филиал <button
                                            className="font-family-medium"
                                            onClick={() => history.push("/main/hr-admin/branches")}>
                                            Добавить новое
                                        </button></label>
                                        <Select
                                            showSearch
                                            placeholder="Поиск, чтобы выбрать"
                                            optionFilterProp="children"
                                            className="w-100"
                                            value={sendData?.building_id}
                                            onSearch={getBuilding}
                                            onChange={(e) => setSendData({...sendData, building_id: e})}
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
                                    <div className="inputs-box-2">
                                        <label className="font-family-medium">Отдел
                                            <button
                                                className="font-family-medium"
                                                onClick={() => history.push("/main/hr-admin/departments/departments-add")}>
                                                Добавить новое
                                            </button>
                                        </label>
                                        <Select
                                            showSearch
                                            placeholder="Поиск, чтобы выбрать"
                                            optionFilterProp="children"
                                            className="w-100"
                                            value={sendData?.department_id}
                                            onSearch={getDeps}
                                            onChange={(e) => setSendData({...sendData, department_id: e})}
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
                                        <label className="font-family-medium">Должность </label>
                                        <input type="text"
                                               value={sendData?.position}
                                               onChange={(e) => setSendData({...sendData, position: e.target.value})}/>
                                    </div>

                                </div>
                            </div>
                            <div className="con-btn">
                                <button className="font-family-medium" onClick={sendAll}><span>Изменить</span>
                                </button>
                                <button className="font-family-medium ml-8  ">Отменить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileEdit;