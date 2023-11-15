import React, {useEffect, useState} from 'react';
import {Select} from "antd";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {Link, useHistory, useParams} from "react-router-dom";
import {toast} from "react-toastify";

const DepartmentsEdit = () => {
    const [sendData, setSendData] = useState({})
    let history = useHistory()
    let params = useParams()
    const getItem = () => {
      axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/department/" + params.id, CONFIG)
          .then(res => {
              setSendData(res.data)
          })
          .catch(err => {

          })
    }
    const sendAll = () => {
        axios.put(API_PATH + "company/" + localStorage.getItem('id') + "/hr/department/update/" + params.id, sendData, CONFIG)
            .then(res => {
                toast.success("Измененный успешно")
                setSendData({...sendData, department_title: ""})
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    useEffect(() => {
        getItem()
    }, []);
    return (
        <div className="edit-user">
            <div className="progress-link">
                <Link to="/main/visitor-home" > <img src="/icon/Icon1.svg" alt="."/></Link>
                <img src="/icon/arrowleft.svg" alt="."/>
                <Link to="/main/hr-admin/departments"><span>Отделы</span></Link>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>{sendData?.department_title}</span>
            </div>
            <h3 className="edit-user-title font-family-medium ml-16">
                Редактировать данные
            </h3>
            <div className="edit-user-box">
                <div className="row">
                    <div className="col-md-4">
                        <div className="inputs-box w-100">
                            <label  className="font-family-medium">Названия отдела </label>
                            <input
                                value={sendData?.department_title}
                                type="text"
                                onChange={(e) => setSendData({...sendData, department_title : e.target.value})}
                                className="w-100"/>
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

export default DepartmentsEdit;