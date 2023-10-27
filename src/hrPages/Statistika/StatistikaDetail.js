import React from 'react';
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Calendar from "../Home/Calendar";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

const StatistikaDetail = () => {
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
        <div className="statistika-detail">
            <div className="progress-link">
                <img src="/icon/Icon1.svg" alt="."/>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Статистика</span>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Подробности 3 марта</span>
            </div>
            <div className="st-detail-box">
                <h3 className="font-family-medium">Подробная информация</h3>
                <div className="inputs-box for-radios">
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="v1" control={<Radio/>} label="Все"/>
                            <FormControlLabel value="v2" className="ml-8" control={<Radio/>} label="Опаздывал"/>
                            <FormControlLabel value="v3" className="ml-8" control={<Radio/>} label="Отсутствующий"/>
                            <FormControlLabel value="v4" className="ml-8" control={<Radio/>} label="Вовремя"/>
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className="emp-table">
                    <div className="emp-table-title">
                        <div className="left-top-title"><h4 className="emp-title font-family-medium">
                            Присутствие сотрудника
                        </h4></div>
                        <div className="left-top-title">
                            <button className="upload-btn font-family-medium"><img src="/icon/upload.svg"/> Экспорт в
                                Excel
                            </button>
                        </div>
                    </div>
                    <div className="search-item w-100">
                        <label htmlFor="searchItem" className="font-family-medium"><img src="/icon/Icon6.svg" alt="loupe"/></label>
                        <input type="text" placeholder="Искать в админке" id="searchItem"/>
                    </div>

                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="pl20 table-head">Date</TableCell>
                                    <TableCell className="pl20 table-head" align="right">Приход</TableCell>
                                    <TableCell className="table-head" align="right">Уход</TableCell>
                                    <TableCell className="pr20 table-head" align="right">Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell component="th" scope="row">
                                            <img src="/icon/Avatar.png" alt="img" className="mr-8"/> {row.name}
                                        </TableCell>
                                        <TableCell className="twt" align="right">{row.calories}</TableCell>
                                        <TableCell className="twt" align="right">{row.calories}</TableCell>
                                        <TableCell className="twt" align="right">
                                            <div className="day-content">
                                                <div className="dots-light">
                                                    <div className="green-light dots-light-big" />
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
                        <Pagination count={10} shape="rounded"/>
                    </Stack>
                </div>
            </div>
        </div>
    );
};

export default StatistikaDetail;