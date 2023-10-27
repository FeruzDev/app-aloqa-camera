import React from 'react';
import {Select} from "antd";
import { TimePicker } from 'antd';
import dayjs from 'dayjs';

const ModesEdit = () => {
    const handleChange = () => {

    }
    const format = 'HH:mm';

    return (
        <div className="edit-user">
            <div className="progress-link">
                <img src="/icon/Icon1.svg" alt="."/>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Режимы</span>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Режимы 1</span>
            </div>
            <h3 className="edit-user-title font-family-medium">
                Редактировать данные
            </h3>
            <div className="edit-user-box">
                <div className="row">
                    <div className="col-md-4">
                        <div className="inputs-box w-100">
                            <label  className="font-family-medium">Режимы   </label>
                            <input type="text" placeholder="Напишите названия" className="w-100"/>
                        </div>
                        <div className="inputs-box-clock w-100">
                            <label  className="font-family-medium">Рабочее время</label>
                            <div className="d-flex">
                                <TimePicker className="w-100" defaultValue={dayjs('09:00', format)} format={format} />
                                <TimePicker  className="w-100 ml-8" defaultValue={dayjs('18:00', format)} format={format} />
                            </div>
                        </div>
                        <div className="inputs-box  mt-3">
                            <label  className="font-family-medium">Рабочие дни</label>
                            <Select
                                className="w-100"
                                onChange={handleChange}
                                options={[
                                    { value: '2', label: '2' },
                                    { value: '1', label: '1' },
                                ]}
                            />
                        </div>

                    </div>
                </div>
                <div className="con-btn mt-4 w-auto">
                    <button className="font-family-medium"><span>Подтверждать</span></button>
                    <button className="font-family-medium ml-8  ">Отменить</button>
                </div>
            </div>

        </div>
    );
};

export default ModesEdit;