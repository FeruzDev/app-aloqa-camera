import React, {useState} from 'react';
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

const Branches = () => {
    let history = useHistory()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const showModalDelete = () => {
        setIsModalOpen(true);
    };
    const showModalBlock = () => {
        setIsModalOpen2(true);
    };
    const handleOkDelete = () => {
        setIsModalOpen(false);
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

    const createPage = () => {
        history.push("/home/branches/add")
    }
    const editPage = () => {
        history.push("/home/branches/edit")
    }

    function createData(name, calories, fat, carbs, protein) {
        return {name, calories, fat, carbs, protein};
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
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
                                <TableCell className="table-head">Имя</TableCell>
                                <TableCell className="table-head" align="right">Действие</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        <span className="t-name font-family-medium">Филиал 1</span>
                                    </TableCell>
                                     <TableCell className="twt" align="right">
                                        <div className="con-btns-all">
                                            <div className="con-btns-all">
                                                <button className="t-delete-btn font-family-medium"
                                                        onClick={showModalDelete}>Удалить
                                                </button>
                                                <button className="t-block-btn font-family-medium"
                                                        onClick={showModalBlock}>Блокировать
                                                </button>
                                                <button className="t-edit-btn font-family-medium" onClick={editPage}>Изменить</button>
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
                <Stack spacing={2}>
                    <Pagination count={10} shape="rounded"/>
                </Stack>
            </div>
        </div>
    );
};

export default Branches;