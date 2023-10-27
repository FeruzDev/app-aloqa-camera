import React from 'react';
import {Link} from "react-router-dom";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import Calendar from "../Home/Calendar";

const Profile = () => {
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    return (
        <div className="profile">
            <div className="progress-link">
                <img src="/icon/Icon1.svg" alt="."/>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Cотрудники</span>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Zarifa Bakirova</span>
            </div>

            <div className="profile-header">
                <h3 className="font-family-medium">Профиль сотрудника</h3>
                <div className="profile-header-box">
                    <div className="d-flex justify-content-between">
                        <div className="left-item">
                            <div className="img-box">
                                <img src="/img/profileAv.png" alt=""/>
                            </div>
                            <div className="title-box">
                                <h4 className="font-family-medium">Zarifa Bakirova</h4>
                                <h5 className="font-family-medium">99 728 3398 <span />19.02.1999 г. <span /> Женский <span />25 лет </h5>
                                <h6 className="font-family-medium">
                                    АУП-Менеджер, 9:00-18:00
                                </h6>

                                <Link  className="font-family-medium" to="/home/employees/profile/edit">Редактировать</Link>
                            </div>
                        </div>
                        <div className="right-item">
                           <div className="rounded-num">
                               <span className="font-family-bold"> 78%</span>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="emp-table">
                    <div className="emp-table-title">
                        <div className="left-top-title"><h4 className="emp-title font-family-medium">
                            Присутствие сотрудника
                        </h4></div>
                        <div className="left-top-title">
                            <Calendar />
                            <button className="upload-btn font-family-medium ml-16 mr-16"><img src="/icon/upload.svg"/> Экспорт в Excel</button>
                        </div>
                    </div>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell  className="pl20 table-head" >Date</TableCell>
                                    <TableCell  className="pl20 table-head" align="right">Приход</TableCell>
                                    <TableCell className="table-head" align="right">Уход</TableCell>
                                    <TableCell  className="pr20 table-head"  align="right">Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <img src="/icon/Avatar.png" alt="img" className="mr-8"/>  {row.name}
                                        </TableCell>
                                        <TableCell  className="twt"  align="right">{row.calories}</TableCell>
                                        <TableCell  className="twt"  align="right">{row.calories}</TableCell>
                                        <TableCell  className="twt" align="right">
                                            <div className="day-content">
                                                <div className="dots-light">
                                                    234 <div className="green-light dots-light-small ml-8"></div>
                                                </div>
                                            </div>
                                        </TableCell>
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
        </div>
    );
};

export default Profile;