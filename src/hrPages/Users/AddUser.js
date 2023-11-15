import React, {useEffect, useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import {FormGroup} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import {Select} from "antd";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {toast} from "react-toastify";

const AddUser = () => {
    const [users, setUsers] = useState([])
    const [departments, setDepartments] = useState([])

    const getUsers = () => {
        axios.get(API_PATH + "user/company/" + localStorage.getItem('id') + "/user/all", CONFIG)
            .then(res => {
                setUsers(res.data?.items)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getDeps = () => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/department/all", CONFIG)
            .then(res => {
                setDepartments(res.data?.items)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    useEffect(() =>{
        getUsers()
        getDeps()
    }, [])
    return (
        <div className="edit-user">
            <div className="progress-link">
                <img src="/icon/Icon1.svg" alt="."/>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Пользователи</span>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>item</span>
            </div>
            <h3 className="edit-user-title font-family-medium">
                Добавить нового пользователя
            </h3>
            <div className="edit-user-box">
                <div className="row">
                    <div className="col-md-4">
                        <div className="inputs-boxw">
                            <label  className="font-family-medium mb-2">Имя и фамилия </label>
                            <Select
                                showSearch
                                placeholder="Поиск, чтобы выбрать"
                                optionFilterProp="children"
                                className="w-100"
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={users?.map((item) => {
                                    return {
                                        value: item.id,
                                        label:
                                        item?.first_name + " " +  item?.last_name
                                    };
                                })}
                            />
                        </div>
                        <div className="inputs-box mt-2">
                            <label  className="font-family-medium">Отдел </label>
                            <Select
                                className="w-100"
                                options={departments?.map((item) => {
                                    return {
                                        value: item.id,
                                        label:
                                            item?.department_title
                                    };
                                })}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label  className="font-family-medium">Привилегии</label>
                        <FormGroup>
                            {/*<FormControlLabel control={<Checkbox defaultChecked />} label="Label" />*/}
                            <FormControlLabel   control={
                                <Checkbox/>
                            }
                                                label="Добавить нового сотрудника"/>
                            <FormControlLabel   control={
                                <Checkbox/>
                            }
                                                label="Изменить информацию о сотруднике"/>
                            <FormControlLabel   control={
                                <Checkbox/>
                            }
                                                label="Удалить сотрудника"/>
                            <FormControlLabel   control={
                                <Checkbox/>
                            }
                                                label="Посмотреть статистику"/>
                            <FormControlLabel   control={
                                <Checkbox/>
                            }
                                                label="Просмотр страницы аудита"/>
                            <FormControlLabel   control={
                                <Checkbox/>
                            }
                                                label="Добавление администраторов"/>
                            <FormControlLabel   control={
                                <Checkbox/>
                            }
                                                label="Экспорт данных"/>
                            <FormControlLabel   control={
                                <Checkbox/>
                            }
                                                label="Импортировать данные"/>

                        </FormGroup>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div className="con-btn">
                    <button className="font-family-medium"><span>Подтверждать</span></button>
                    <button className="font-family-medium ml-8  ">Отменить</button>
                </div>
            </div>

        </div>
    );
};

export default AddUser;