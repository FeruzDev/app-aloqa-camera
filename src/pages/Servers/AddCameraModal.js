import React, {useEffect, useState} from 'react';
import {Button, Modal, Select} from "antd";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {toast} from "react-toastify";

const AddCameraModal = (props) => {
    const [offices, setOffices] = useState([])
    const [rooms, setRooms] = useState([])
    const [cameras, setCameras] = useState([])

    const [selectOffices, setSelectOffices] = useState(0)
    const [selectRooms, setSelectRooms] = useState(0)
    const [selectCameras, setSelectCameras] = useState(0)

    const [sendData, setSendData] = useState({
        cameras_id: [],
        module_id: null
    })


    const getBuilding = () => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/building/all", CONFIG)
            .then(res => {
                setOffices(res.data?.items)
                props.getData()
                setSendData({...sendData, buildings_id: res.data.id})
            })
            .catch(err => {
                toast.error("Ошибка")
            })

    }
    const getRooms = (id) => {
        console.log(selectRooms);
        setSelectOffices(id)

        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/room/" + id + "/all", CONFIG)
            .then(res => {
                setRooms(res.data?.items)
                setSendData({...sendData, room_id: res.data.id})
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getCameras = (id) => {

        setSelectRooms(id)
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/by/room/" + id + "/all", CONFIG)
            .then(res => {
                setCameras(res.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
        window.scrollTo(0, 0);

    }

    const sendAll = () => {
        axios.post(API_PATH + "company/" + localStorage.getItem('id') + "/camera/attach_to_module", {cameras_id: sendData.cameras_id, module_id: props.isAddCameraModalId}, CONFIG)
            .then(res => {
                toast.success("Добавлено успешно")
                props.getData()
                props.setIsAddCameraModal(false)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    useEffect(() => {
        getBuilding()
    }, []);
    return (
        <Modal title="Добавить камеру"
               open={props.isAddCameraModal}
               onCancel={() => props.setIsAddCameraModal(false)}
               footer={[
                   <Button key="submit" type="default" onClick={() => props.setIsAddCameraModal(false)}>
                       Отменить
                   </Button>,
                   <Button key="submit" type="primary" onClick={sendAll}>
                       Добавить
                   </Button>
               ]}
        >
            <div className="cam-add-modal">
                <div className="inputs-box">
                    <label className="font-family-medium">Выбрать здания </label>
                    <Select
                        className="w-100"
                        onChange={(e) => getRooms(e)}
                    >
                        {
                            offices?.map((item, index) =>(
                                <option value={item?.id} key={index}>{item?.name}</option>
                            ))
                        }

                    </Select>
                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">Выбрать комнату </label>
                    <Select
                        className="w-100"
                        onChange={(e) => getCameras(e)}
                    >
                        {
                            rooms?.map((item, index) =>(
                                <option value={item?.id} key={index}>{item?.name}</option>
                            ))
                        }

                    </Select>
                </div>
                <div className="inputs-box">
                    <label className="font-family-medium">Выбрать камеру </label>
                    <Select
                        className="w-100"
                        onChange={(e) => setSendData({...sendData, cameras_id: [e]})}
                    >
                        {
                            cameras?.map((item, index) =>(
                                <option value={item?.id} key={index}>{item?.name}</option>
                            ))
                        }
                    </Select>
                </div>
            </div>
        </Modal>
    );
};

export default AddCameraModal;