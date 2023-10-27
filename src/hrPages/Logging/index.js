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
import SearchTop from "../../components/SearchTop";
import LoggingSearchTop from "./LoggingSearchTop";

const Logging = () => {
    const editNot = () => {

    }
    const deleteNot = () => {

    }
    const sendNot = () => {

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
        <div className="users notification">
            <div className="employees-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="left-head">
                        <h6>Логирование</h6>
                    </div>
                    <div className="right-head">
                        <button className="add-btn font-family-medium"><img src="/icon/plus.svg"/> Отправить новый
                        </button>
                    </div>
                </div>
            </div>
            <LoggingSearchTop />
            <div className="emp-table mt-0">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="table-head">Имя устройства</TableCell>
                                <TableCell className="table-head" align="right">Операционная система</TableCell>
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
                                        <span className="t-name font-family-medium text-decoration-underline">
                                            Iphone 12 pro max 64GB
                                        </span>
                                    </TableCell>
                                    <TableCell className="twt" align="right"><span
                                        className="t-name font-family-medium">AiOS 16.1.4</span></TableCell>
                                    <TableCell className="twt" align="right"><span className="font-family-medium">18:45, 11.12.2023</span></TableCell>
                                    <TableCell className="twt" align="right">
                                        <span className="font-family-medium">Ошибка приложения 3249898</span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
            <div className="pag-bottom">
                <Stack spacing={2}>
                    <Pagination count={10} shape="rounded"/>
                </Stack>
            </div>
        </div>
    );
};

export default Logging;