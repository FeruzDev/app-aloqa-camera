import React, {useEffect, useState} from 'react';
import {Select} from "antd";
import {TimePicker} from 'antd';
import dayjs from 'dayjs';
import axios from "axios";
import {API_PATH} from "../../components/const";
import {toast} from "react-toastify";
import {useHistory, useParams} from "react-router-dom";

const ModesEdit = () => {
    let history = useHistory()
    let params = useParams()
    const [sendData, setSendData] = useState({
        "from_time": "09:00",
        "to_time": "18:00",
        "color": "green"
    })

    function onChange(time, timeString) {
        setSendData({...sendData, from_time: timeString})
    }
    function onChange2(time, timeString) {
        setSendData({...sendData, to_time: timeString})
    }

    const sendAll = (id) => {
        axios.put(API_PATH + "company/" + localStorage.getItem('id') + "/hr/timerange/update/" + params.id,  sendData, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                toast.success("Измененный успешно")
                history.push("/main/hr-admin/modes")
            })
            .catch(err =>{
                toast.error("Ошибка")
            })
    }
    const format = 'HH:mm';
    useEffect(() => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/timerange/detail/" + params.id, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setSendData( res.data )
            })
    }, []);
    return (
        <div className="edit-user">
            <div className="progress-link">
                <img src="/icon/Icon1.svg" alt="."/>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Режимы</span>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Добавить нового режима</span>
            </div>
            <h3 className="edit-user-title font-family-medium">
                Добавить нового режима
            </h3>
            <div className="edit-user-box">
                <div className="row">
                    <div className="col-md-4">
                        <div className="inputs-box-clock w-100">
                            <label className="font-family-medium">Рабочее время</label>
                            <div className="d-flex">
                                <TimePicker className="w-100" defaultValue={dayjs(sendData?.from_time, format)}

                                            onChange={onChange}
                                            format={format}/>
                                <TimePicker className="w-100 ml-8" defaultValue={dayjs(sendData?.to_time, format)}
                                            onChange={onChange2}
                                            format={format}/>
                            </div>
                        </div>
                        <div className="inputs-box mt-3">
                            <label className="font-family-medium">Рабочие дни</label>

                            <div className="d-flex">
                                <div className="w-100">
                                    <Select
                                        className="w-100"
                                        value={sendData?.from_week_day}
                                        onChange={(e) => setSendData({...sendData, from_week_day: e})}
                                        options={[
                                            {value: 'Monday', label: 'Понедельник'},
                                            {value: 'Tuesday', label: 'Вторник'},
                                            {value: 'Wednesday', label: 'Среда'},
                                            {value: 'Thursday', label: 'Четверг'},
                                            {value: 'Friday', label: 'Пятница'},
                                            {value: 'Saturday', label: 'Суббота'},
                                            {value: 'Sunday ', label: 'Воскресенье'},
                                        ]}
                                    />
                                </div>
                                <div className="ml-8 w-100">
                                    <Select
                                        className="w-100"
                                        value={sendData?.to_week_day}
                                        onChange={(e) => setSendData({...sendData, to_week_day: e})}
                                        options={[
                                            {value: 'Monday', label: 'Понедельник'},
                                            {value: 'Tuesday', label: 'Вторник'},
                                            {value: 'Wednesday', label: 'Среда'},
                                            {value: 'Thursday', label: 'Четверг'},
                                            {value: 'Friday', label: 'Пятница'},
                                            {value: 'Saturday', label: 'Суббота'},
                                            {value: 'Sunday ', label: 'Воскресенье'},
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="inputs-box w-100   mt-3">
                                <label className="font-family-medium">Интервал</label>
                                <input className="w-100"
                                       value={sendData?.interval}
                                       onChange={(e) => setSendData({...sendData, interval: e.target.value})}
                                       type="text"/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="con-btn mt-4 w-auto">
                    <button className="font-family-medium" onClick={sendAll}><span>Подтверждать</span></button>
                    <button className="font-family-medium ml-8  ">Отменить</button>
                </div>
            </div>

        </div>
    );
};

export default ModesEdit;