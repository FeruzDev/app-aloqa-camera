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
import {toast} from "react-toastify";
import ModalOffice from "../../pages/Camera/ModalOffice";
import ModalOfficeEdit from "./ModalOfficeEdit";

const Branches = () => {
    let history = useHistory()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [offices, setOffices] = useState([])
    const [officesObj, setOfficesObj] = useState({})
    const [current, setCurrent] = useState(1);
    const [buId, setBuId] = useState(null);
    const [isModalOffice, setIsModalOffice] = useState(false);
    const [isModalOfficeEdit, setIsModalOfficeEdit] = useState(false);
    const [deleteId, setDeleteId] = useState([]);
    const [sendData, setSendData] = useState({
        name: "",
        country_id: null,
        region_id: null,
        district_id: null,
        zip_code: "",
        address: "",
        latitude: 0,
        longitude: 0
    })
    const showModalDelete = (id) => {
        setIsModalOpen(true);
        setDeleteId(id)
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

    const editPage = (id) => {
        setBuId(id)
        // history.push("/main/hr-admin/branches/edit/" + id)
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/building/" + id, CONFIG)
            .then(res => {
                // setOffices(res.data?.items)
                // setOfficesObj(res?.data)
                setSendData(res?.data)
                setIsModalOfficeEdit(true)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getBuilding = () => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/building/all/?page=1", CONFIG)
            .then(res => {
                setOffices(res.data?.items)
                setOfficesObj(res?.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const changePagination = (current, size) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/building/all?page=" + size, CONFIG)
            .then(res => {
                setOffices(res.data?.items)
                setOfficesObj(res?.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const showModalBlock = () => {
        setIsModalOpen2(true);
    };
    const handleOkDelete = () => {

        axios.delete(API_PATH + "company/" + localStorage.getItem('id') + "/building/delete/" + deleteId, CONFIG)
            .then(res => {
                getBuilding()
                setIsModalOpen(false);

            })
            .catch(err => {
                toast.error("Ошибка")
            })
    };
    useEffect(() => {
        getBuilding()
    }, []);
    return (
        <div className="users">
            <div className="employees-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="left-head">
                        <h6 className="font-family-medium">Филиалы</h6>
                    </div>
                    <div className="right-head">
                        <button className="upload-btn font-family-medium ml-16 mr-16"><img
                            src="/icon/upload.svg"/> Экспорт в Excel
                        </button>
                        <button className="add-btn font-family-medium" onClick={() => setIsModalOffice(true)}><img src="/icon/plus.svg"/> Добавить новое
                        </button>
                    </div>
                </div>
            </div>
            <div className="emp-table">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="table-head">Имя</TableCell>
                                <TableCell className="table-head" align="right">Действие</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {offices?.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        <span className="t-name font-family-medium">{item?.name}</span>
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
            <ModalOffice
                isModalOffice={isModalOffice}
                setIsModalOffice={setIsModalOffice}
                getBuilding={getBuilding}
            />

            {
                isModalOfficeEdit
                ?
                    <ModalOfficeEdit
                        sendData={sendData}
                        buId={buId}
                        isModalOffice={isModalOfficeEdit}
                        setIsModalOffice={setIsModalOfficeEdit}
                        getBuilding={getBuilding}
                    />
                    :
                    ""

            }
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
                <p className="pt-2 pb-2">Вы уверены, что удалите этого филиаля? Это невозможно отменить</p>
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
                <p className="pt-2 pb-2">Вы уверены, что заблокируете этого филиаля?</p>
            </Modal>

            <div className="pag-bottom">
                {/*<Stack spacing={2}>*/}
                    <Pagination  count={officesObj?.pages}   total={officesObj?.total} current={current}  onChange={changePagination} shape="rounded"/>
                {/*    <Pagination  count={3}   total={offices.length} current={current}  onChange={changePagination} shape="rounded"/>*/}
                {/*</Stack>*/}
            </div>
        </div>
    );
};

export default Branches;