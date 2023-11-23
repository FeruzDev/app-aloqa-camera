import React, {useEffect, useState} from 'react';
import AddServiceModal from "./AddServiceModal";
import axios from "axios";
import {API_PATH} from "../../components/const";

const Services = () => {
    const [isServiceModal, setIsServiceModal] = useState(false)
    const [serviceData, setServiceData] = useState([])
    const getData = () => {
        axios.get(API_PATH + "service/all" , {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res =>{
                setServiceData(res.data)
            })
    }
    const addCameraFc = (id) => {
        setIsServiceModal(true)
    }
    useEffect(()=>{
        getData()
    }, [])
    return (
        <div className="my-modules add-camera">
            <h2 className="modules-title font-family-medium">
                Сервисы
            </h2>
            <div className="row ">


                <div className="col-md-8">
                    <div className="row">
                        {
                            serviceData?.map((item, index) =>(
                                <div className="col-md-6">
                                    <div className="office-box" >
                                        <button className="hor-dot">
                                            <img src="/icon/more_vert.svg" alt=""/>
                                        </button>
                                        <h6 className="office-box-title font-family-regular d-flex align-items-center"><img
                                            src="/icon/ser2.svg" className="mr-8" alt="cpu"/>{item?.name}</h6>
                                        <div className="row">
                                            <div className="col-md-12  ">
                                                <div className="office-box-item">
                                     <span className="office-box-item-title font-family-regular">
                                Github_repo
                                </span>
                                                    <span className="office-box-item-count font-family-bold">
                                    {item?.github_repo}
                                </span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-12  ">
                                                <div className="office-box-item">
                                     <span className="office-box-item-title font-family-regular">
                               Github_branch
                                </span>
                                                    <span className="office-box-item-count font-family-bold">
                                                                    {item?.github_branch}
                                </span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-12  ">
                                                <div className="office-box-item">
                                     <span className="office-box-item-title font-family-regular">
                               Github_username
                                </span>
                                                    <span className="office-box-item-count font-family-bold">
                                                                        {item?.github_username}
                                </span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-md-4">


                    <button className="add-btn-video mt-20 d-flex align-items-center font-family-medium" onClick={() => setIsServiceModal(true)}>
                        <img src="/icon/cpuActive.svg"/>
                        Добавить сервис
                    </button>

                </div>
            </div>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <AddServiceModal
                isServiceModal={isServiceModal}
                setIsServiceModal={setIsServiceModal}
                getData={getData}
            />
        </div>
    );
};

export default Services;