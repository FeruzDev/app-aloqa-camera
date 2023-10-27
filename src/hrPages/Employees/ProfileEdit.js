import React from 'react';
import {Link} from "react-router-dom";
import Calendar from "../Home/Calendar";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {Select} from "antd";

const ProfileEdit = () => {

    return (
        <div className="profile-edit">
            <div className="progress-link">
                <img src="/icon/Icon1.svg" alt="."/>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Cотрудники</span>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Zarifa Bakirova</span>
            </div>

            <div className="profile-header">
                <h3 className="font-family-medium">Профиль сотрудника</h3>
                <div className="profile-header-box-update">
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <img src="/img/profileAv.png" alt="."/>
                            <Link className="link-edit font-family-medium" to="/home/employees/profile/edit">Изменить</Link>
                        </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="inputs-box">
                                    <label  className="font-family-medium">Имя и фамилия </label>
                                    <input type="text" />
                                </div>
                                <div className="inputs-box">
                                    <label  className="font-family-medium">Логин / Номер телефона </label>
                                    <input type="text"  />
                                </div>
                                <div className="inputs-box">
                                    <label  className="font-family-medium">Дата рождения </label>
                                    <input type="date" />
                                </div>
                                <div className="inputs-box">
                                    <label  className="font-family-medium">Возраст </label>
                                    <input type="text"  />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="inputs-box for-select">
                                    <label  className="font-family-medium">Пол </label>
                                    <FormControl>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="Мужской" />
                                            <FormControlLabel value="male" control={<Radio />} label="Женский" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <div className="inputs-box">
                                    <label  className="font-family-medium">Филиал <button className="font-family-medium">Добавить новое</button></label>
                                    <Select
                                        className="w-100"
                                        options={[
                                            { value: 'jack', label: 'Jack' },
                                            { value: '1', label: '1' },
                                            { value: 'Yiminghe', label: 'yiminghe' },
                                            { value: 'disabled', label: 'Disabled', disabled: true },
                                        ]}
                                    />
                                </div>
                                <div className="inputs-box">
                                    <label  className="font-family-medium">Отдел <button className="font-family-medium">Добавить новое</button></label>
                                    <Select
                                        className="w-100"
                                        options={[
                                            { value: 'jack', label: 'Jack' },
                                            { value: '1', label: '1' },
                                            { value: 'Yiminghe', label: 'yiminghe' },
                                            { value: 'disabled', label: 'Disabled', disabled: true },
                                        ]}
                                    />
                                </div>
                                <div className="inputs-box">
                                    <label  className="font-family-medium">Должность <button className="font-family-medium">Добавить новое</button></label>
                                    <Select
                                        className="w-100"
                                        options={[
                                            { value: 'jack', label: 'Jack' },
                                            { value: '1', label: '1' },
                                            { value: 'Yiminghe', label: 'yiminghe' },
                                            { value: 'disabled', label: 'Disabled', disabled: true },
                                        ]}
                                    />
                                </div>
                                <div className="inputs-box">
                                    <label  className="font-family-medium">Режим <button className="font-family-medium">Добавить новое</button> </label>
                                    <Select
                                        className="w-100"
                                        options={[
                                            { value: 'jack', label: 'Jack' },
                                            { value: '1', label: '1' },
                                            { value: 'Yiminghe', label: 'yiminghe' },
                                            { value: 'disabled', label: 'Disabled', disabled: true },
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="con-btn">
                            <button className="font-family-medium"><span>Сохранить изменения</span></button>
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