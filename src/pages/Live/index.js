import React, {useEffect, useState} from 'react';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {toast} from "react-toastify";
import {Select} from "antd";
import ReactPlayer from "react-player";

const Live = () => {
    const [users, setUsers] = useState([])
    const [offices, setOffices] = useState([])
    const [rooms, setRooms] = useState([])
    const [cameras, setCameras] = useState([])
    const [selectOffices, setSelectOffices] = useState(null)
    const [selectRooms, setSelectRooms] = useState(null)
    const [selectCameras, setSelectCameras] = useState("")
    const [sendData, setSendData] = useState(null)

    const [message, setMessage] = useState({});

    const getUsers = () => {
        axios.get(API_PATH + "user/company/" + localStorage.getItem('id') + "/user/all", CONFIG)
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }

    const getBuilding = () => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/building/all", CONFIG)
            .then(res => {
                setOffices(res.data)
                setSendData({...sendData, buildings_id: res.data.id})

            })
            .catch(err => {
                toast.error("Ошибка")
            })

    }
    const getRooms = (id) => {
        getCameras(id)
        setSelectOffices(id)

        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/room/" + id + "/all", CONFIG)
            .then(res => {
                setRooms(res.data)
                setSendData({...sendData, room_id: res.data.id})
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getCameras = (id) => {
        setSelectRooms(id)

        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/smartcamera/all?building_id=" + id, CONFIG)
            .then(res => {
                setCameras(res.data)

            })
            .catch(err => {
                toast.error("Ошибка")
            })
        window.scrollTo(0, 0);

    }
    const getAll = (id) => {

        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/smartcamera/detail/" + id, CONFIG)
            .then(res => {
                setSelectCameras(res.data?.ddns_stream_url)
            })
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/visitor/" + id + "/captures", CONFIG)
            .then(res => {
                setUsers(res.data)
                console.log(res.data)
                console.log(res.data)
                console.log(res.data)
                console.log(res.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }


    useEffect(() => {
        localStorage.setItem("sec", "")
        getBuilding()

        const socket = new WebSocket('ws://43.202.168.206:9001/ws/2');

        socket.onmessage = (event) => {
            setMessage(JSON.parse(event?.data?.replace(/'/g, '"')));
            // testtest(JSON.parse(event?.data?.replace(/'/g, '"')))
            // if ( localStorage.getItem("sec")){
            //     axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/visitor/" + localStorage.getItem("sec") + "/captures" , CONFIG)
            //         .then(res => {
            //             setUsers(res.data)
            //         })
            //         .catch(err => {
            //             toast.error("Ошибка")
            //         })
            // }
            // setUsers(users.unshift(JSON.parse(event?.data?.replace(/'/g, '"'))))
            setUsers(prevUsers => [JSON.parse(event?.data?.replace(/'/g, '"')), ...prevUsers]);

            // setUsers(prevUsers => [...prevUsers, message]);

        };

        return () => {
            socket.close();
        };


    }, []);


    useEffect(() => {
        // console.log(message)

    }, [message])

    return (
        <div className="live-page">
            <div className="employees-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="left-head">
                        <h6>Smart Camera </h6>
                        <p>Camera List</p>
                    </div>
                    <div className="right-head d-flex">

                        <div className="inputs-box mr-16" style={{width: "200px"}}>
                            <Select
                                className="w-100"
                                onChange={(e) => getRooms(e)}
                            >
                                {
                                    offices?.map((item, index) => (
                                        <option value={item?.id} key={index}>{item?.name}</option>
                                    ))
                                }

                            </Select>
                        </div>
                        <div className="inputs-box mr-16" style={{width: "200px"}}>
                            <Select
                                className="w-100"
                                onChange={(e) => getCameras(e)}
                            >
                                {
                                    rooms?.map((item, index) => (
                                        <option value={item?.id} key={index}>{item?.name}</option>
                                    ))
                                }

                            </Select>
                        </div>
                        <div className="inputs-box" style={{width: "200px"}}>
                            <Select
                                className="w-100"
                                onChange={(e) => getAll(e)}
                            >
                                {
                                    cameras?.map((item, index) => (
                                        <option value={item?.id} key={index}>{item?.name}</option>
                                    ))
                                }
                            </Select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="live-page-box">
                <div className="live-page-box-header">
                    <div className="d-flex justify-content-between  ">
                        <div className="left-pair w-100">
                            {/*<video src="http://43.202.168.206:8080/stream/camera1/index.m3u8" autoPlay controls></video>*/}

                            {
                                selectCameras ? <ReactPlayer url={selectCameras}
                                                             className="w-100 h-100 " style={{borderRadius: "8px"}}
                                                             playing={true} muted/>
                                    :
                                    ""
                            }
                        </div>
                        <div className="right-pair">

                            {
                                users?.slice(0, 6)?.map((item) => (
                                    <div className="img-box">
                                        <img src={item?.image} alt=""/>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </div>
                {
                    (sendData?.buildings_id !== "" && users.length > 0)
                        ?
                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 650}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="pl20 table-head">Screenshot</TableCell>
                                        <TableCell className="table-head" align="right">Name</TableCell>
                                        <TableCell className="table-head" align="right">ID</TableCell>
                                        <TableCell className="table-head" align="right">Time</TableCell>
                                        <TableCell className="table-head" align="right">Gender</TableCell>
                                        <TableCell className="table-head" align="right">Age</TableCell>
                                        <TableCell className="pr20 table-head" align="right">Type</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        users?.slice(0, 20)?.map((item, index) => (
                                            <TableRow
                                                key={index}
                                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                            >
                                                <TableCell className="pl20" component="th" scope="row">
                                                    <img src={item?.image} alt="img" className="mr-8"
                                                         style={{width: "40px", borderRadius: "4px"}}/>


                                                </TableCell>

                                                <TableCell className="pr20 con-btns-all"
                                                           align="right">   <span>{item?.first_name ? item?.first_name : ""}</span>
                                                    <span style={{marginLeft: "5p"}}>{item?.last_name ? item?.last_name : ""}</span></TableCell>
                                                <TableCell className="pr20 con-btns-all"
                                                           align="right">{item?.id}</TableCell>
                                                <TableCell className="pr20 con-btns-all"
                                                           align="right">{item?.id}</TableCell>
                                                <TableCell className="pr20 con-btns-all"
                                                           align="right">{item?.gender}</TableCell>
                                                <TableCell className="pr20 con-btns-all"
                                                           align="right">{item?.age}</TableCell>
                                                <TableCell className="pr20 con-btns-all"
                                                           align="right">{item?.capture_type}</TableCell>

                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        :
                        ""
                }

            </div>
        </div>
    );
};
export default Live;