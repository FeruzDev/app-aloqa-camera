import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import {FormGroup} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Select} from "antd";

const NotificationEdit = () => {
    function createData(name, calories, fat, carbs, protein) {
        return {name, calories, fat, carbs, protein};
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
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
                Редактировать данные
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
                                className="w-100 mb-2"
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
                                className="w-100 mb-2"
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
                                className="w-100 mb-2"
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
                                className="w-100 mb-2"
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
                    <button className="font-family-medium send-btn-blue"><span>Сохранить изменения</span></button>
                    <button className="font-family-medium ml-8  ">Отменить</button>
                </div>
            </div>

            <h3 className="edit-user-title font-family-medium">
                История отправки
            </h3>
            <div className="emp-table mt-3 ml-24 mr-24 mb-5 ">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="table-head">Отправитель</TableCell>
                                <TableCell className="table-head" align="right">Роль</TableCell>
                                <TableCell className="table-head" align="right">Время</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        <span className="t-name font-family-medium ">
                                           A.Usmonov
                                        </span>
                                    </TableCell>
                                    <TableCell className="twt" align="right"><span
                                        className="t-name font-family-medium">AUP, Кредитный отдел (12+)</span></TableCell>
                                    <TableCell className="twt" align="right"><span className="font-family-medium">18:45, 11.12.2023</span></TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </div>
    );
};

export default NotificationEdit;