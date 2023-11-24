import React, {useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
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

const ProfileCreate = () => {

    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    let history = useHistory()
    const [sendData, setSendData] = useState({
        phone: "+998751234567"
    })
    const [pic, setPic] = useState(null);
    const [offices, setOffices] = useState([])
    const [departments, setDepartments] = useState([])

    const bigData = new FormData()

    const sendAll = () => {

        if (pic.target.files[0]) {
            bigData.append("image", pic.target.files[0])
        }
        if (sendData?.first_name) {
            bigData.append("first_name", sendData?.first_name)
        }
        if (sendData?.last_name) {
            bigData.append("last_name", sendData?.last_name)
        }
        if (sendData?.username) {
            bigData.append("username", sendData?.username)

        }
        if (sendData?.email) {
            bigData.append("email", sendData?.email)

        }
        if (sendData?.password) {
            bigData.append("password", sendData?.password)

        }
        if (sendData?.position) {
            bigData.append("position", sendData?.position)

        }
        if (sendData?.date_of_birth) {
            bigData.append("date_of_birth", sendData?.date_of_birth)

        }
        if (sendData?.middle_name) {
            bigData.append("middle_name", sendData?.middle_name)

        }
        if (sendData?.phone) {
            bigData.append("phone", sendData?.phone)

        }
        if (sendData?.building_id) {
            bigData.append("building_id", sendData?.building_id)

        }
        if (sendData?.department_id) {
            bigData.append("department_id", sendData?.department_id)

        }
        if (sendData?.gender) {
            bigData.append("gender", sendData?.gender)

        }

        axios.post(API_PATH + "user/company/" + localStorage.getItem('id') + "/create/user", bigData, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                // console.log(res)
                toast.success("Добавлено успешно")
                // setSendData({
                //     "first_name": "",
                //     "last_name": "",
                //     "username": "",
                //     "email": "",
                //     "password": "",
                //     "position": "",
                //     "date_of_birth": "",
                //     "middle_name": "",
                //     "phone": "",
                //     "gender": "",
                //     "building_id": "",
                //     "department_id": "",
                // })
                history.push("/main/hr-admin/employees")
            })
    }
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
    const [photo123, setphoto123] = useState("/img/addphoto.png");

    const uploadImg = (event) => {
        setphoto123(URL.createObjectURL(event.target.files[0]));
        setPic(event);
    };
    useEffect(() => {
        getBuilding()
        getDeps()
    }, []);

    return (
        <div className="profile-edit">

            <div className="progress-link">
                <Link to="/main/visitor-home"> <img src="/icon/Icon1.svg" alt="."/></Link>
                <img src="/icon/arrowleft.svg" alt="."/>
                <Link to="/main/hr-admin/employees"> <span>Cотрудники</span></Link>
                <img src="/icon/arrowleft.svg" alt="."/>
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
                                        <input type="text" onChange={(e) => setSendData({
                                            ...sendData,
                                            first_name: e.target.value
                                        })}/>
                                    </div>
                                    <div className="inputs-box">
                                        <label className="font-family-medium">Фамилия </label>
                                        <input type="text"
                                               onChange={(e) => setSendData({...sendData, last_name: e.target.value})}/>
                                    </div>
                                    <div className="inputs-box">
                                        <label className="font-family-medium">Отчество </label>
                                        <input type="text" onChange={(e) => setSendData({
                                            ...sendData,
                                            middle_name: e.target.value
                                        })}/>
                                    </div>
                                    <div className="inputs-box">
                                        <label className="font-family-medium">Логин </label>
                                        <input onChange={(e) => setSendData({...sendData, username: e.target.value})}
                                               type="text"/>
                                    </div>
                                    <div className="inputs-box">
                                        <label className="font-family-medium">Парол </label>
                                        <input onChange={(e) => setSendData({...sendData, password: e.target.value})}
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
                                            onChange={(e) => setSendData({...sendData, email: e.target.value})}
                                               type="text"/>
                                    </div>
                                    <div className="inputs-box">
                                        <label className="font-family-medium">Дата рождения </label>
                                        <input type="date"
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
                                                onChange={(e) => setSendData({...sendData, gender: e.target.value})}
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel value="male" control={<Radio/>} label="Мужской"/>
                                                <FormControlLabel value="female" control={<Radio/>} label="Женский"/>
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                    <div className="inputs-box-2">
                                        <label className="font-family-medium">Филиал <button
                                            className="font-family-medium"
                                            onClick={() => history.push("/main/hr-admin/branches")}>
                                            Добавить новое
                                        </button>
                                        </label>
                                        <Select
                                            showSearch
                                            placeholder="Поиск, чтобы выбрать"
                                            optionFilterProp="children"
                                            className="w-100"
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
                                    {/*<div className="inputs-box">*/}
                                    {/*    <label  className="font-family-medium">Должность <button className="font-family-medium">Добавить новое</button></label>*/}
                                    {/*       <Select*/}
                                    {/*    className="w-100" */}
                                    {/*    options={[*/}
                                    {/*        { value: 'jack', label: 'Jack' },*/}
                                    {/*        { value: '1', label: '1' },*/}
                                    {/*        { value: 'Yiminghe', label: 'yiminghe' },*/}
                                    {/*        { value: 'disabled', label: 'Disabled', disabled: true },*/}
                                    {/*    ]}*/}
                                    {/*/>*/}
                                    {/*</div>*/}

                                    <div className="inputs-box">
                                        <label className="font-family-medium">Должность </label>
                                        <input type="text"
                                               onChange={(e) => setSendData({...sendData, position: e.target.value})}/>
                                    </div>
                                    {/*<div className="inputs-box">*/}
                                    {/*    <label  className="font-family-medium">Режим <button className="font-family-medium">Добавить новое</button> </label>*/}
                                    {/*       <Select*/}
                                    {/*    className="w-100" */}
                                    {/*    options={[*/}
                                    {/*        { value: 'jack', label: 'Jack' },*/}
                                    {/*        { value: '1', label: '1' },*/}
                                    {/*        { value: 'Yiminghe', label: 'yiminghe' },*/}
                                    {/*        { value: 'disabled', label: 'Disabled', disabled: true },*/}
                                    {/*    ]}*/}
                                    {/*/>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="con-btn">
                                <button className="font-family-medium" onClick={sendAll}><span>Подтверждать</span>
                                </button>
                                <button className="font-family-medium ml-8" onClick={() => history.goBack()}>Отменить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCreate;