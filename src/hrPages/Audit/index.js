import React from 'react';
import SearchTop from "../../components/SearchTop";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import AuditSearchTop from "./AuditSearchTop";

const Audit = () => {
    function createData(name, calories, fat, carbs, protein) {
        return {name, calories, fat, carbs, protein};
    }

    const rows = [
        createData('Ali Muzaffarovt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    return (
        <div className="audit">
            <div className="audit-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="left-head">
                        <h6 className="font-family-medium">Аудит</h6>
                    </div>
                    <div className="right-head">
                        <button className="upload-btn font-family-medium ml-16 mr-16"><img src="/icon/upload.svg"/> Экспорт в Excel</button>
                    </div>
                </div>
            </div>
            <AuditSearchTop />
            <div className="emp-table">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="pl20 table-head">Имя</TableCell>
                                <TableCell className="pl20 table-head" align="right">Роль</TableCell>
                                <TableCell className="table-head" align="right">Время</TableCell>
                                <TableCell className="pr20 table-head" align="right">Действие</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell className="twt" align="right">{row.calories}</TableCell>
                                    <TableCell className="twt" align="right">{row.calories}</TableCell>
                                    <TableCell className="twt" align="right">
                                        <span className="font-family-medium">Добавил нового сотрудника</span>
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

export default Audit;