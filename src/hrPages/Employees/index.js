import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useHistory} from "react-router-dom";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {toast} from "react-toastify";
import {Button, Modal} from "antd";
import EmployeFilter from "./EmployeFilter";

const Employees = () => {
    const [current, setCurrent] = useState(1);
    let history = useHistory()
    const [users, setUsers] = useState([])
    const [usersObj, setUsersObj] = useState({})
    const [selectUser, setSelectUsers] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModalDelete = (e) => {
        setSelectUsers(e)
        setIsModalOpen(true);
    };
    const handleCancelDelete = () => {
        setIsModalOpen(false);
    };
    const createPage = () => {
      history.push("/main/hr-admin/employees/profile/create")
    }
    const editPage = (id) => {
      history.push("/main/hr-admin/employees/profile/edit/" + id)
    }
    const getUsers = () => {
        axios.get(API_PATH + "user/company/" + localStorage.getItem('id') + "/user/all", CONFIG)
            .then(res => {
                setUsers(res.data?.items)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }

    const handleOkDelete = (e) => {
        axios.delete(API_PATH + "user/company/" + localStorage.getItem('id') + "/delete/user/" + selectUser, CONFIG)
            .then(res => {
                setIsModalOpen(false);
                toast.success("Успех удален")
                getUsers()
            })
    };

    const changePagination = (current, size) => {

        axios.get(API_PATH + "user/company/" + localStorage.getItem('id') + "/user/all?page=" + size, CONFIG)
            .then(res => {
                setUsers(res.data?.items)
                setUsersObj(res.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <div className="employees-pair">
            <div className="employees-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="left-head">
                        <h6>Cотрудники <div>5</div></h6>
                        <p>Управление сотрудниками</p>
                    </div>
                    <div className="right-head">
                        <button className="upload-btn font-family-medium ml-16 mr-16"><img src="/icon/upload.svg"/> Экспорт в Excel</button>
                        <button className="add-btn font-family-medium" onClick={createPage}><img src="/icon/plus.svg"/> Добавить новое</button>
                    </div>
                </div>
            </div>
            <EmployeFilter
                setUsers={setUsers}
            />
            <div className="emp-table">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="pl20 table-head" >Имя и фамилия</TableCell>
                                <TableCell className="table-head"  align="right">Логин</TableCell>
                                <TableCell className="table-head"  align="right">Дата рождения</TableCell>
                                <TableCell className="table-head"  align="right">Отдел</TableCell>
                                <TableCell className="table-head"  align="right">Должность</TableCell>
                                <TableCell  className="pr20 table-head"  align="right">Эффективность</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell   className="pl20" component="th" scope="row">
                                        <img src={item?.image} alt="img" className="mr-8" style={{width: "40px", height: "40px", objectFit: "cover", borderRadius: "50%"}}/>
                                        {item.first_name + " " + item.last_name}
                                    </TableCell>
                                    <TableCell align="right">{item.username}</TableCell>
                                    <TableCell align="right">{item.date_of_birth}</TableCell>
                                    <TableCell align="right">{item?.department_id}</TableCell>
                                    <TableCell align="right">{item.position}</TableCell>
                                    <TableCell className="pr20 con-btns-all" align="right">
                                        <button className="t-delete-btn font-family-medium"
                                                onClick={ () => showModalDelete(item?.id)}>Удалить
                                        </button>
                                        <button className="t-edit-btn font-family-medium" onClick={() => editPage(item?.id)}>Изменить</button>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>

            <Modal title="Внимание!"
                   open={isModalOpen}
                   onCancel={handleCancelDelete}
                   footer={[
                       <Button key="submit" type="default" onClick={handleCancelDelete}>
                           Отменить
                       </Button>,
                       <Button key="submit" type="primary"  className="my-red-canc"  onClick={handleOkDelete}>
                           Да, удалить
                       </Button>
                   ]}
            >
                <p className="pt-2 pb-2">Вы уверены, что удалите этого пользователя? Это невозможно отменить</p>
            </Modal>

            <div className="pag-bottom">
                <Stack spacing={2}>
                    <Pagination  count={usersObj?.pages}   total={usersObj?.total} current={current}  onChange={changePagination} shape="rounded"/>
                </Stack>
            </div>
        </div>
    );
};

export default Employees;