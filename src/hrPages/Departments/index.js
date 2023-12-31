import React, {useEffect, useState} from 'react';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import {Button, Modal, Select} from 'antd';
import {useHistory} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../components/const";
import {toast} from "react-toastify";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const Departments = () => {
    let history = useHistory()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [departments, setDepartments] = useState([])
    const [departmentsObj, setDepartmentsObj] = useState({})
    const [selectDepartments, setSelectDepartments] = useState("")
    const [current, setCurrent] = useState(1);
    const createPage = () => {
        history.push("/main/hr-admin/departments/departments-add")
    }
    const editPage = (id) => {
        history.push("/main/hr-admin/departments/departments-edit/" + id)
    }
    const showModalDelete = (id) => {
        setSelectDepartments(id)
        setIsModalOpen(true);
    };
    const showModalBlock = () => {
        setIsModalOpen2(true);
    };
    const handleCancelDelete = () => {
        setIsModalOpen(false);
    };
    const handleOkBlock = () => {
        setIsModalOpen2(false);
    };
    const handleCancelBlock = () => {
        setIsModalOpen2(false);
    };
    const getDeps = () => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/department/all", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setDepartments(res.data?.items)
                setDepartmentsObj(res?.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const handleOkDelete = () => {
        axios.delete(API_PATH + "company/" + localStorage.getItem('id') + "/hr/department/" + selectDepartments, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                getDeps()
                setIsModalOpen(false);
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    };
    const changePagination = (current, size) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/department/all?page=" + size, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setDepartments(res.data?.items)
                setDepartmentsObj(res?.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }

    const searchEmploye = (e) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/department/all" + (e?.length > 0 ? "?search_str=" + e : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setDepartments(res.data?.items)
                setDepartmentsObj(res?.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    useEffect(() => {
        getDeps()
    }, []);
    return (
        <div className="users">
            <div className="employees-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="left-head">
                        <h6 className="font-family-medium">Отделы</h6>
                    </div>
                    <div className="right-head">
                        {/*<button className="upload-btn font-family-medium ml-16 mr-16"><img*/}
                        {/*    src="/icon/upload.svg"/> Экспорт в Excel*/}
                        {/*</button>*/}
                        <button className="add-btn font-family-medium" onClick={createPage}><img src="/icon/plus.svg"/> Добавить новое
                        </button>
                    </div>
                </div>
            </div>
            <div className="search-top">
                <div className="d-flex align-items-center">
                    <div className="search-item w-100">
                        <label htmlFor="searchItem"><img src="/icon/Icon6.svg" alt="loupe"/></label>
                        <input type="text" placeholder="Искать в админке" onChange={(e) => searchEmploye(e.target.value)}
                               id="searchItem"/>
                    </div>

                </div>

            </div>
            <div className="emp-table mt-0">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="table-head">Название</TableCell>
                                <TableCell className="table-head" align="right">Действие</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {departments?.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        <span className="t-name font-family-medium">{item?.department_title}</span>
                                    </TableCell>
                                    <TableCell className="twt" align="right">
                                        <div className="con-btns-all">
                                            <div className="con-btns-all">
                                                <button className="t-delete-btn font-family-medium"
                                                        onClick={() => showModalDelete(item?.id)}>Удалить
                                                </button>
                                                <button className="t-block-btn font-family-medium"
                                                        onClick={showModalBlock}>Блокировать
                                                </button>
                                                <button className="t-edit-btn font-family-medium" onClick={() => editPage(item.id)}>Изменить</button>
                                            </div>
                                        </div>
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
                <p className="pt-2 pb-2">Вы уверены, что удалите этого отделы? Это невозможно отменить</p>
            </Modal>
            <Modal title="Внимание!"
                   open={isModalOpen2}
                   onCancel={handleCancelBlock}
                   footer={[
                       <Button key="submit" type="default"   onClick={handleCancelBlock}>
                           Отменить
                       </Button>,
                       <Button key="submit" type="primary"   onClick={handleOkBlock}>
                           Да, подтверждаю
                       </Button>
                   ]}
            >
                <p className="pt-2 pb-2">Вы уверены, что заблокируете этого отделы?</p>
            </Modal>
            <div className="pag-bottom">
                <Stack spacing={2}>
                    <Pagination  count={departmentsObj?.pages}   total={departmentsObj?.total} current={current}  onChange={changePagination}  shape="rounded"/>
                </Stack>
            </div>
        </div>
    );
};

export default Departments;