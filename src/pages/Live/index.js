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

const Live = () => {
    const [users, setUsers] = useState([])
    const [users2, setUsers2] = useState([{
        "id": 200,
        "username": "visitor_81",
        "image": "http://hrpromain.s3.amazonaws.com/hrpromain/FACE_0_20231103205601960_8385.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQP3E3JZPRPD4PS7Q%2F20231103%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20231103T125619Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef70b9cd3c28087cfac505e2cc032d8629d8d304e611a6a1bde8e566f882e25a",
        "capture_type": "visitor"
    },
        {
            "id": 201,
            "username": "visitor_81",
            "image": "http://hrpromain.s3.amazonaws.com/hrpromain/FACE_0_20231103205601960_8385.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQP3E3JZPRPD4PS7Q%2F20231103%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20231103T125619Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef70b9cd3c28087cfac505e2cc032d8629d8d304e611a6a1bde8e566f882e25a",
            "capture_type": "visitor"
        },
        {
            "id": 202,
            "username": "visitor_81",
            "image": "http://hrpromain.s3.amazonaws.com/hrpromain/FACE_0_20231103205601960_8385.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQP3E3JZPRPD4PS7Q%2F20231103%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20231103T125619Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef70b9cd3c28087cfac505e2cc032d8629d8d304e611a6a1bde8e566f882e25a",
            "capture_type": "visitor"
        },
        {
            "id": 203,
            "username": "visitor_81",
            "image": "http://hrpromain.s3.amazonaws.com/hrpromain/FACE_0_20231103205601960_8385.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQP3E3JZPRPD4PS7Q%2F20231103%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20231103T125619Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef70b9cd3c28087cfac505e2cc032d8629d8d304e611a6a1bde8e566f882e25a",
            "capture_type": "visitor"
        },
        {
            "id": 204,
            "username": "visitor_81",
            "image": "http://hrpromain.s3.amazonaws.com/hrpromain/FACE_0_20231103205601960_8385.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQP3E3JZPRPD4PS7Q%2F20231103%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20231103T125619Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef70b9cd3c28087cfac505e2cc032d8629d8d304e611a6a1bde8e566f882e25a",
            "capture_type": "visitor"
        },
        {
            "id": 205,
            "username": "visitor_81",
            "image": "http://hrpromain.s3.amazonaws.com/hrpromain/FACE_0_20231103205601960_8385.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQP3E3JZPRPD4PS7Q%2F20231103%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20231103T125619Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef70b9cd3c28087cfac505e2cc032d8629d8d304e611a6a1bde8e566f882e25a",
            "capture_type": "visitor"
        }])
    const [offices, setOffices] = useState([])
    const [rooms, setRooms] = useState([])
    const [cameras, setCameras] = useState([])
    const [selectOffices, setSelectOffices] = useState(null)
    const [selectRooms, setSelectRooms] = useState(null)
    const [selectCameras, setSelectCameras] = useState(null)
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
        // setSelectCameras(id)

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
        localStorage.setItem("sec", id)
        setSelectCameras(id)
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/visitor/" + id + "/captures", CONFIG)
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }

    let obj = {
        "id": 206,
        "username": "visitor_81",
        "image": "http://hrpromain.s3.amazonaws.com/hrpromain/FACE_0_20231103205601960_8385.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQP3E3JZPRPD4PS7Q%2F20231103%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20231103T125619Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef70b9cd3c28087cfac505e2cc032d8629d8d304e611a6a1bde8e566f882e25a",
        "capture_type": "visitor"
    }

    function testtest(e) {
        console.log(e)
        // setUsers(prevUsers => [...prevUsers, e]);
        // setUsers([...users, e])
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
                    <div className="d-flex justify-content-between">
                        <div className="left-pair w-100">

                        </div>
                        <div className="right-pair">

                            {
                                users?.slice(0, 4)?.map((item) => (
                                    <div className="img-box">
                                        <img src={item?.image} alt=""/>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="pl20 table-head">Screenshot</TableCell>
                                <TableCell className="table-head" align="right">ID</TableCell>
                                <TableCell className="table-head" align="right">Time</TableCell>
                                <TableCell className="table-head" align="right">Gender</TableCell>
                                <TableCell className="table-head" align="right">Age</TableCell>
                                <TableCell className="pr20 table-head" align="right">Type</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users?.slice(0, 20)?.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell className="pl20" component="th" scope="row">
                                        <img src={item?.image} alt="img" className="mr-8"
                                             style={{width: "40px", borderRadius: "4px"}}/>

                                    </TableCell>

                                    <TableCell className="pr20 con-btns-all" align="right">{item?.id}</TableCell>
                                    <TableCell className="pr20 con-btns-all" align="right">{item?.id}</TableCell>
                                    <TableCell className="pr20 con-btns-all" align="right">{item?.gender}</TableCell>
                                    <TableCell className="pr20 con-btns-all" align="right">{item?.age}</TableCell>
                                    <TableCell className="pr20 con-btns-all" align="right">{item?.id}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};
export default Live;