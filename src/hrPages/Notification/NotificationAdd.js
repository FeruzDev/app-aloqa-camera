import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import {FormGroup} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import {Select} from "antd";

const NotificationEdit = () => {
    return (
        <div className="edit-user">
            <div className="progress-link">
                <img src="/icon/Icon1.svg" alt="."/>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Уведомления </span>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Versions of the Lorem ipsum text have been used in typesetting at ...</span>
            </div>
            <h3 className="edit-user-title font-family-medium">
                Отправить новое уведомление
            </h3>
            <div className="edit-user-box">
                <div className="row">
                    <div className="col-md-4">
                        <div className="inputs-box h-100 pb-3">
                            <label  className="font-family-medium">Текст уведомления </label>
                            <textarea placeholder="Макс. 1200 символов"/>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <label  className="font-family-medium">Отдел</label>
                        <FormGroup>
                            {/*<FormControlLabel control={<Checkbox defaultChecked />} label="Label" />*/}
                            <FormControlLabel   control={
                                <Checkbox/>
                            }
                                                label="Выбрать все"/>
                            <FormControlLabel   control={
                                <Checkbox/>
                            }
                                                label="Инвестиционная деятельность  "/>
                            <FormControlLabel   control={
                                <Checkbox/>
                            }
                                                label="Персональный банкинг"/>
                            <FormControlLabel   control={
                                <Checkbox/>
                            }
                                                label="Информационные технологии"/>
                            <FormControlLabel   control={
                                <Checkbox/>
                            }
                                                label="Аудит"/>
                            <FormControlLabel   control={
                                <Checkbox/>
                            }
                                                label="Бухгалтерский учет"/>
                            <FormControlLabel   control={
                                <Checkbox/>
                            }
                                                label="Денежно-кредитная политика"/>
                            <FormControlLabel   control={
                                <Checkbox/>
                            }
                                                label="Департамент валютного менеджмента"/>
                            <FormControlLabel   control={
                                <Checkbox/>
                            }
                                                label="Отдел валютной инспекции"/>

                        </FormGroup>
                    </div>
                    <div className="col-md-4 not-add-edit">
                        <h4 className="font-family-medium">Бухгалтерский учет</h4>
                        <div className="inputs-box">
                            <label  className="font-family-medium">Пол </label>
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
                            <label  className="font-family-medium">Сотрудники </label>
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
                            <label  className="font-family-medium">Режим </label>
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
                            <label  className="font-family-medium">Эффективность </label>
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
                <div className="con-btn-not">
                    <button className="font-family-medium send-btn-blue"><span>Отправить</span></button>
                    <button className="font-family-medium ml-8  ">Отменить</button>
                </div>
            </div>

        </div>
    );
};

export default NotificationEdit;