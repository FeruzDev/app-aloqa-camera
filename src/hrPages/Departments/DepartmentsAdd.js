import React, {useState} from 'react';
import {Select} from "antd";
import {toast} from "react-toastify";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {Link, useHistory} from "react-router-dom";

const DepartmentsAdd = () => {
    const [sendData, setSendData] = useState({})
    let history = useHistory()
    const sendAll = () => {
        axios.post(API_PATH + "company/" + localStorage.getItem('id') + "/hr/department/create", sendData, CONFIG)
            .then(res => {
                toast.success("Добавлено успешно")
                setSendData({...sendData, department_title: ""})
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    return (
        <div className="edit-user">
            <div className="progress-link">
                <Link to="/main/visitor-home" > <img src="/icon/Icon1.svg" alt="."/></Link>
                <img src="/icon/arrowleft.svg" alt="."/>
                <Link to="/main/hr-admin/departments"><span>Отделы</span></Link>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Добавить нового отдела</span>
            </div>
            <h3 className="edit-user-title font-family-medium ml-16">
                Добавить нового отдела
            </h3>
            <div className="edit-user-box">
                <div className="row">
                    <div className="col-md-4">
                        <div className="inputs-box w-100">
                            <label  className="font-family-medium">Названия отдела </label>
                            <input
                                value={sendData?.department_title}
                                onChange={(e) => setSendData({...sendData, department_title: e.target.value})}
                                type="text"
                                placeholder="Напишите названия" className="w-100"/>
                        </div>
                    </div>
                </div>
                <div className="con-btn mt-4 w-auto">
                    <button className="font-family-medium" onClick={sendAll}><span>Сохранить изменения</span></button>
                    <button className="font-family-medium ml-8" onClick={ () => history.push("/main/hr-admin/departments")}>Отменить</button>
                </div>
            </div>

        </div>
    );
};

export default DepartmentsAdd;