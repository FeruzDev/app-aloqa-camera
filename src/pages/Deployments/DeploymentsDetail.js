import React, {useEffect, useState} from 'react';
import AddServiceModal from "../Services/AddServiceModal";
import AddDeployModal from "./AddDeployModal";
import DeploymentsDetailModal from "./DeploymentsDetailModal";
import DepMainModal from "./DepMainModal";
import {API_PATH, CONFIG} from "../../components/const";
import axios from "axios";
import {useParams} from "react-router-dom";

const DeploymentsDetail = () => {
        const [isDeployDetailModal, setIsDeployDetailModal] = useState(false)
        const [isDeployDetailModalId, setIsDeployDetailModalId] = useState(1)
        const [selectId, setSelectId] = useState(null)
        const [configsCam, setConfigsCam] = useState([])
        const [configs, setConfigs] = useState([])

        let params = useParams()
        const [data, setData] = useState([])

        const getAll = () => {
            axios.get(API_PATH + "camera/module/" + params.id + "/all", CONFIG)
                .then(res => {
                    setData(res?.data)
                })
                .catch(err =>{
                    setData([])
                })
        }

        const sendData = (id) => {
            getConfig(id)
            getConfigCam(id)
            setSelectId(id)
            setIsDeployDetailModal(true)

        }
    const getConfig = (id) => {
        axios.get(API_PATH + "line_crossing_analytics/" + id + "/all", CONFIG)
            .then(res => {
                setConfigs(res?.data)
            })

    }
    const getConfigCam = (id) => {
        axios.get(API_PATH + "config/" + params.id + "/"  + id, CONFIG)
            .then(res => {
                setConfigsCam(res?.data)
            })
    }
        useEffect(() => {
            getAll()

        }, [])
        return (
            <div className="box-with-url">
                <div className="link-stepper">
                    <img src="/icon/deployment.svg" alt=""/>
                    <img src="/icon/arrowleft.svg" className="arrow-items-link" alt=""/>
                    <span className="first-item">
                    Deployments
                </span>
                    <img src="/icon/arrowleft.svg" className="arrow-items-link" alt=""/>
                    <span className="second-item">
                    Deployment A
                </span>
                </div>
                <div className="my-modules add-camera">

                    <h2 className="modules-title font-family-medium">
                        Cameras
                    </h2>
                    <div className="row ">
                        <div className="col-md-8">
                            <div className="row">
                                {
                                    data?.map((item, index) => (
                                        <div className="col-md-6" onClick={() => sendData(item?.id)}>
                                            <div className="office-box">
                                                <button className="hor-dot">
                                                    <img src="/icon/more_vert.svg" alt=""/>
                                                </button>
                                                <h6 className="office-box-title font-family-regular d-flex align-items-center">
                                                    <img
                                                        src="/icon/cam.svg" className="mr-16" alt="cpu"/>Камера над дверю
                                                </h6>
                                                <div className="row">
                                                    <div className="col-md-12  ">
                                                        <img src={item?.screenshot} className="w-100"
                                                             style={{height: "240px"}} alt="rec..."/>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="office-box-item">
                                     <span className="office-box-item-title font-family-regular">
                               Configs:
                                </span>
                                                            <span className="office-box-item-count font-family-bold">
                                  0
                                </span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="mt-20">
                                <button className="add-btn">
                                    <img src="/icon/depo.svg" alt="..."/>
                                    Деплой
                                </button>
                                <button className="ml-16 cancel-btn">
                                    Отмена
                                </button>
                            </div>
                        </div>
                        <div className="col-md-4">

                            <button className="add-btn-video mt-20 d-flex align-items-center font-family-medium"
                                    onClick={() => setIsDeployDetailModal(true)}
                            >
                                Добавить сервис
                            </button>
                        </div>
                    </div>
                    {
                        isDeployDetailModal
                            ?
                            <DeploymentsDetailModal
                                isDeployDetailModal={isDeployDetailModal}
                                setIsDeployDetailModal={setIsDeployDetailModal}
                                getConfig={getConfig}
                                configs={configs}
                            />
                            :
                            ""
                    }
                </div>
            </div>
        );
    }
;

export default DeploymentsDetail;