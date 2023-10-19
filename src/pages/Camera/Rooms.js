import React, {useEffect, useState} from 'react';
import ModalOffice from "./ModalOffice";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import ModalRoom from "./ModalRoom";
import {toast} from "react-toastify";
import ModalCamera from "./ModalCamera";
import {useHistory, useParams} from "react-router-dom";

const Rooms = () => {

    const [isModalOffice, setIsModalOffice] = useState(false);
    const [isModalRoom, setIsModalRoom] = useState(false);
    const [isModalCamera, setIsModalCamera] = useState(false);

    const [offices, setOffices] = useState([])
    const [rooms, setRooms] = useState([])
    const [cameras, setCameras] = useState([])

    const [selectOffices, setSelectOffices] = useState(0)
    const [selectRooms, setSelectRooms] = useState(0)
    const params = useParams()

    const history = useHistory()
    const getBuilding = () => {
        axios.get(API_PATH + "building/all", CONFIG)
            .then(res => {
                setOffices(res.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getRooms = (id) => {
        window.scrollTo(0, 0);
        console.log(selectRooms);
        setSelectOffices(id)
        // setSelectRooms(id)
        axios.get(API_PATH + "room/" + params.room_id + "/all", CONFIG)
            .then(res => {
                setRooms(res.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getCameras = (id) => {
        history.push(""+ params.room_id + "/camera-list/" + id)
        setSelectRooms(id)
        axios.get(API_PATH + "camera/" + id + "/all", CONFIG)
            .then(res => {
                setCameras(res.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
        window.scrollTo(0, 0);

    }
    const openROI = (id) => {
        history.push("/detect-camera/" + id)
    }
    useEffect(() => {
        getBuilding()
        getRooms()
    }, [params.room_id]);
    return (<div className="add-camera">
        <div className="row ">
            <div className="col-md-4">
                <h3 className="cam-title">
                    Мои инфраструктуры
                    <img src="/icon/rightArrow.png" alt=""/>
                </h3>
                {
                    offices?.map((item, index) => (
                        <div
                            key={index}
                            className={selectOffices !== 0 && selectOffices === item?.id ? "office-box office-box-active" : "office-box"}
                            onClick={() => {
                                // setSelectOffices(item.id)
                                history.push("/main/building/"+ item.id)
                            }}>
                            <button className="hor-dot">
                                <img src="/icon/more_vert.svg" alt=""/>
                            </button>
                            <h6 className="office-box-title font-family-regular">{item.name}</h6>
                            <div className="row">
                                <div className="col-md-9  ">
                                    <div className="office-box-item">
                                        <span className="office-box-item-title font-family-regular">
                                    <img src="/icon/count.svg" alt="."/>
                                    Количество комнат:
                                </span>
                                        <span className="office-box-item-count font-family-bold">
                                    3
                                </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-9  ">
                                    <div className="office-box-item">
                                     <span className="office-box-item-title font-family-regular">
                                    <img src="/icon/cam.svg" alt="."/>
                                    Количество камер:
                                </span>
                                        <span className="office-box-item-count font-family-bold">
                                    3
                                </span>
                                    </div>
                                </div>
                                <div className="col-md-3 p-0">
                                    <div className="office-box-item">
                                    <span className="office-box-item-title font-family-regular">
                                    <img src="/icon/wireless.svg" alt="."/>
                                </span>
                                        <span className="office-box-item-count-danger font-family-bold">
                                    3
                                </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                }
                <button className="add-btn mt-20 font-family-medium" onClick={() => setIsModalOffice(true)}><img
                    src="/icon/plus.svg"/> Добавить здания
                </button>
            </div>
            <div className="col-md-4">
                <h3 className="cam-title">
                    Привязанные комнаты
                    <img src="/icon/rightArrow.png" alt=""/>
                </h3>
                {
                    rooms?.map((item, index) => (
                        <div key={index}
                             className={(selectRooms !== 0 && selectRooms === item?.id) ? "office-box office-box-active" : "office-box"}
                             onClick={() => {
                                 // setSelectOffices(item.id)
                                 getCameras(item.id)
                             }}>
                            <button className="hor-dot">
                                <img src="/icon/more_vert.svg" alt=""/>
                            </button>
                            <h6 className="office-box-title-child font-family-regular">
                                <img src="/icon/cam.svg"
                                     alt="cam"
                                     className="mr-8"/>{item?.name}</h6>
                            <div className="row">
                            </div>
                            <div className="row">
                                <div className="col-md-9  ">
                                    <div className="office-box-item">
                                     <span className="office-box-item-title font-family-regular">
                                    <img src="/icon/cam.svg" alt="."/>
                                    Количество камер:
                                </span>
                                        <span className="office-box-item-count font-family-bold">
                                    3
                                </span>
                                    </div>
                                </div>
                                <div className="col-md-3 p-0">
                                    <div className="office-box-item">
                                    <span className="office-box-item-title font-family-regular">
                                    <img src="/icon/wireless.svg" alt="."/>
                                </span>
                                        <span className="office-box-item-count-danger font-family-bold">
                                    3
                                </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                }
                        <button className="add-btn mt-20 font-family-medium" onClick={() => setIsModalRoom(true)}><img
                            src="/icon/plus.svg"/>
                            Добавить комната
                        </button>

            </div>
            <div className="col-md-4">
                <h3 className="cam-title">
                    Привязанные камеры
                    <img src="/icon/rightArrow.png" alt=""/>
                </h3>

                {
                    cameras?.map((item, index) => (
                        <div key={index} className="office-box" onClick={() => openROI(item?.id)}>
                            <button className="hor-dot">
                                <img src="/icon/more_vert.svg" alt=""/>
                            </button>
                            <h6 className="office-box-title-child font-family-regular">
                                <img src="/icon/cam.svg"
                                     alt="cam"
                                     className="mr-8"/>{item?.name}</h6>
                            <div className="row">
                            </div>
                            <div className="row rec-img">
                                {/*<img src="/img/rec1.png" alt="rec..."/>*/}
                                {
                                    item?.screenshot ?
                                        <img src={item?.screenshot} alt="rec..."/>
                                        :
                                        <img src="/img/img12.png" alt=""/>
                                }

                                {/*<ReactPlayer  url={"rtsp://" + item?.ip_address}  playing={true} />*/}
                            </div>
                        </div>
                    ))
                }
                {selectRooms !== 0 ?

                    <button className="add-btn mt-20 font-family-medium" onClick={() => setIsModalCamera(true)}><img
                        src="/icon/plus.svg"/>
                        Добавить камера
                    </button>
                    :
                    ""
                }
            </div>
        </div>
        <ModalOffice
            isModalOffice={isModalOffice}
            setIsModalOffice={setIsModalOffice}
            getBuilding={getBuilding}
        />

        <ModalRoom
            isModalRoom={isModalRoom}
            getRooms={getRooms}
            selectOffices={selectOffices}
            setIsModalRoom={setIsModalRoom}
        />

        <ModalCamera
            isModalCamera={isModalCamera}
            getCameras={getCameras}
            selectRooms={selectRooms}
            setIsModalCamera={setIsModalCamera}/>
    </div>);
};

export default Rooms;