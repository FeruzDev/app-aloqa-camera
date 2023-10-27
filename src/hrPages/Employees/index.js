import React from 'react';
import Calendar from "../Home/Calendar";
import SearchTop from "../../components/SearchTop";
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

const Employees = () => {
    let history = useHistory()
    const createPage = () => {
      history.push("/home/employees/profile/create")
    }
    const editPage = () => {
      history.push("/home/employees/profile/edit")
    }
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
        <div className="employees-pair">
            <div className="employees-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="left-head">
                        <h6>Cотрудники <div>5</div></h6>
                        <p>Управление сотрудниками</p>
                    </div>
                    <div className="right-head">
                        <Calendar />
                        <button className="upload-btn font-family-medium ml-16 mr-16"><img src="/icon/upload.svg"/> Экспорт в Excel</button>
                        <button className="add-btn font-family-medium" onClick={createPage}><img src="/icon/plus.svg"/> Добавить новое</button>
                    </div>
                </div>
            </div>
            <SearchTop />
            <div className="emp-table">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="pl20 table-head" >Имя и фамилия</TableCell>
                                <TableCell className="table-head"  align="right">Логин</TableCell>
                                <TableCell className="table-head"  align="right">Дата рождения</TableCell>
                                <TableCell className="table-head"  align="right">Возраст</TableCell>
                                <TableCell className="table-head"  align="right">Пол</TableCell>
                                <TableCell className="table-head"  align="right">Отдел</TableCell>
                                <TableCell className="table-head"  align="right">Должность</TableCell>
                                <TableCell className="table-head"  align="right">Режим</TableCell>
                                <TableCell  className="pr20 table-head"  align="right">Эффективность</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell onClick={editPage} className="pl20" component="th" scope="row">
                                        <img src="/icon/Avatar.png" alt="img" className="mr-8"/>  {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell className="pr20" align="right"><button className="p-0 border-0 bg-transparent"><img src="/icon/verdot.svg" alt=""/></button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>

            <div className="pag-bottom">
                <Stack spacing={2}>
                    <Pagination count={10} shape="rounded" />
                </Stack>
            </div>
        </div>
    );
};

export default Employees;