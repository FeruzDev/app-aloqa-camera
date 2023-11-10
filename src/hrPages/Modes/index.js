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
import {Button, Modal} from 'antd';
import {useHistory} from "react-router-dom";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";

const Modes = () => {
    let history = useHistory()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenItem, setIsModalOpenItem] = useState(null);
    const [data, setData] = useState([])



    const handleCancelDelete = () => {
        setIsModalOpen(false);
    };
    const createPage = () => {
        history.push("/main/hr-admin/modes/add")
    }
    const editPage = (id) => {
        history.push("/main/hr-admin/modes/edit/" + id)
    }
    const getAll = (e) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/timerange/all", CONFIG)
            .then(res => {
                setData(res.data)
            })
    }
    const showModalDelete = (id) => {
        setIsModalOpen(true);
        setIsModalOpenItem(id)

    };
    const handleOkDelete = () => {
        axios.delete(API_PATH + "company/" + localStorage.getItem('id') + "/hr/timerange/" + isModalOpenItem, CONFIG)
            .then(res => {
                setIsModalOpen(false);
                setIsModalOpenItem(null)
                getAll()
            })
    };
    useEffect(() => {
        getAll()
    }, []);

    return (
        <div className="users">
            <div className="employees-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="left-head">
                        <h6 className="font-family-medium">Режимы</h6>
                    </div>
                    <div className="right-head">
                        <button className="upload-btn font-family-medium ml-16 mr-16"><img
                            src="/icon/upload.svg"/> Экспорт в Excel
                        </button>
                        <button className="add-btn font-family-medium" onClick={createPage}><img src="/icon/plus.svg"/> Добавить новое
                        </button>
                    </div>
                </div>
            </div>
            <div className="emp-table">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="table-head">Название</TableCell>
                                <TableCell className="table-head" >Рабочее время</TableCell>
                                <TableCell className="table-head" >Рабочие дни</TableCell>
                                <TableCell className="table-head" >Интервал</TableCell>
                                <TableCell className="table-head" align="right">Действие</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        <span className="t-name font-family-medium">Режим {index + 1}</span>
                                    </TableCell>
                                    <TableCell className="twt" ><span className="font-family-medium">{item?.from_time?.slice(0, 5) + " : " + item?.to_time?.slice(0, 5)}</span></TableCell>
                                    <TableCell className="twt" ><span className="font-family-medium">{item?.from_week_day + " - " +item?.to_week_day}</span></TableCell>
                                    <TableCell className="twt" ><span className="font-family-medium">{item?.interval}</span></TableCell>
                                    <TableCell className="twt" align="right">
                                        <div className="con-btns-all">
                                            <div className="con-btns-all">
                                                <button className="t-delete-btn font-family-medium"
                                                        onClick={() => showModalDelete(item?.id)}>Удалить
                                                </button>
                                                <button className="t-edit-btn font-family-medium" onClick={() => editPage(item?.id)}>Изменить</button>
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
                <p className="pt-2 pb-2">Вы уверены, что удалите этого режим? Это невозможно отменить</p>
            </Modal>

            <div className="pag-bottom">
                <Stack spacing={2}>
                    <Pagination count={10} shape="rounded"/>
                </Stack>
            </div>
        </div>
    );
};

export default Modes;