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
import SearchTop from "../../components/SearchTop";
import {useHistory} from "react-router-dom";
import {Button, Modal} from "antd";

const Notification = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    let history = useHistory()

    const createPage = () => {
        history.push("/home/notification/notification-add")
    }
    const editPage = () => {
        history.push("/home/notification/notification-edit")
    }
    const handleOkDelete = () => {
        setIsModalOpen(false);
    };
    const handleCancelDelete = () => {
        setIsModalOpen(false);
    };
    const showModalDelete = () => {
        setIsModalOpen(true);
    };
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
        <div className="users notification">
            <div className="employees-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="left-head">
                        <h6>Уведомления</h6>
                    </div>
                    <div className="right-head">
                        <button className="add-btn font-family-medium"><img src="/icon/plus.svg"/> Отправить новый
                        </button>
                    </div>
                </div>
            </div>
            <SearchTop />
            <div className="emp-table mt-0">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="table-head">Сообщение</TableCell>
                                <TableCell className="table-head" align="right">Отдел</TableCell>
                                <TableCell className="table-head" align="right">Время</TableCell>
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
                                        <span className="t-name font-family-medium text-decoration-underline">Versions of the Lorem ipsum text have been used in typesetting at leas...</span>
                                    </TableCell>
                                    <TableCell className="twt" align="right"><span
                                        className="t-name font-family-medium">AUP, Кредитный отдел (12+)</span></TableCell>
                                    <TableCell className="twt" align="right"><span className="font-family-medium">18:45, 11.12.2023</span></TableCell>
                                    <TableCell className="twt" align="right">
                                        <div className="con-btns-all">
                                            <button className="t-delete-btn font-family-medium"
                                                    onClick={showModalDelete}>Удалить
                                            </button>
                                            <button className="t-edit-btn font-family-medium" onClick={editPage}>Изменить</button>
                                            <button className="t-send-btn font-family-medium" onClick={createPage}>Отправить снова</button>
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
                <p className="pt-2 pb-2">Вы уверены, что удалите этого уведомления? Это невозможно отменить</p>
            </Modal>
            <div className="pag-bottom">
                <Stack spacing={2}>
                    <Pagination count={10} shape="rounded"/>
                </Stack>
            </div>
        </div>
    );
};

export default Notification;