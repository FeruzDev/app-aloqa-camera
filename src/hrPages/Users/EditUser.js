import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import {FormGroup} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import {Select} from "antd";

const EditUser = () => {
    return (
        <div className="edit-user">
            <div className="progress-link">
                <img src="/icon/Icon1.svg" alt="."/>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Пользователи</span>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Ali Muzaffarov</span>
            </div>
            <h3 className="edit-user-title font-family-medium">
                Редактировать данные
            </h3>
            <div className="edit-user-box">
                <div className="row">
                    <div className="col-md-4">
                        <div className="inputs-box">
                            <label  className="font-family-medium">Имя и фамилия </label>
                            <input type="text" className="w-100"/>
                        </div>
                        <div className="inputs-box">
                            <label  className="font-family-medium">Отдел </label>
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
                    <button className="font-family-medium"><span>Сохранить изменения</span></button>
                    <button className="font-family-medium ml-8  ">Отменить</button>
                </div>
            </div>

        </div>
    );
};

export default EditUser;