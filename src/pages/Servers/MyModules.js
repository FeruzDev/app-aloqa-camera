import React, {useEffect, useState} from 'react';
import AddModuleModal from "./AddModuleModal";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import AddCameraModal from "./AddCameraModal";

const MyModules = () => {
    const [isModuleModal, setIsModuleModal] = useState(false)
    const [moduleData, setModuleData] = useState([])
    const [isAddCameraModal, setIsAddCameraModal] = useState(false)
    const [isAddCameraModalId, setIsAddCameraModalId] = useState("")


    const getData = () => {
        axios.get(API_PATH + "module/all" , CONFIG)
            .then(res =>{
                setModuleData(res.data)
            })
    }
    const addCameraFc = (id) => {
        setIsAddCameraModal(true)
        setIsAddCameraModalId(id)
    }
    useEffect(()=>{
        getData()
    }, [])
    return (
        <div className="my-modules add-camera">
            <h2 className="modules-title font-family-medium">
                Мои модули
            </h2>
            <div className="row ">
                <div className="col-md-8">
                    <div className="row">
                        {
                            moduleData?.map((item, index) =>(
                                <div className="col-md-6" key={index}>
                                    <div className="office-box" >
                                        <button className="hor-dot">
                                            <img src="/icon/more_vert.svg" alt=""/>
                                        </button>
                                        <h6 className="office-box-title font-family-regular d-flex align-items-center"><img
                                            src="/icon/cpu.svg" className="mr-8" alt="cpu"/>{item?.name}</h6>
                                        <div className="row">
                                            <div className="col-md-12  ">
                                                <div className="office-box-item">
                                     <span className="office-box-item-title font-family-regular">
                                    <img src="/icon/cam.svg" alt="."/>
                                    Количество камер:
                                </span>
                                                    <span className="office-box-item-count font-family-bold">
                                    {item?.cameras_count}
                                </span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <button type="submit" className="add-btn-video mt-20 font-family-medium w-100" onClick={()=> addCameraFc(item?.id)}><img
                                        src="/icon/addVideo.svg"/> Добавить камеру
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className="col-md-4">


                    <button type="submit" className="add-btn-video mt-20 d-flex align-items-center font-family-medium" onClick={() => setIsModuleModal(true)}>
                        <img src="/icon/cpuActive.svg"/>
                        Добавить модуль
                    </button>

                </div>
            </div>
            <AddModuleModal
                isModuleModal={isModuleModal}
                setIsModuleModal={setIsModuleModal}
                getData={getData}
            />
            <AddCameraModal
                isAddCameraModal={isAddCameraModal}
                setIsAddCameraModal={setIsAddCameraModal}
                isAddCameraModalId={isAddCameraModalId}
                getData={getData}
            />
        </div>
    );
};

export default MyModules;