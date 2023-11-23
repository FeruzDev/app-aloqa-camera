import React, {useEffect, useState} from 'react';
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
import axios from "axios";
import {API_PATH} from "../../components/const";

const Audit = () => {
    const [data, setData] = useState([])
    const getList = () => {
         axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/audit/all", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res =>{
                setData(res.data)
            })
    }
    useEffect(() => {
        getList()
    }, []);
    return (
        <div className="audit">
            <div className="audit-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="left-head">
                        <h6 className="font-family-medium">Аудит</h6>
                    </div>
                    <div className="right-head">
                        {/*<button className="upload-btn font-family-medium ml-16 mr-16"><img src="/icon/upload.svg"/> Экспорт в Excel</button>*/}
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
                            {
                                data?.slice(0, 20).map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        {item?.employee?.first_name + "  "  + item?.employee?.last_name}
                                    </TableCell>
                                    <TableCell className="twt" align="right">none</TableCell>
                                    <TableCell className="twt" align="right">{item?.created_at.slice(11, 16)}</TableCell>
                                    <TableCell className="twt" align="right">
                                        <span className="font-family-medium">{item?.description}</span>
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