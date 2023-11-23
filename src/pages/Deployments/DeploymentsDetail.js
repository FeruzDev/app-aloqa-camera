import React, {useEffect, useState} from 'react';
import AddServiceModal from "../Services/AddServiceModal";
import AddDeployModal from "./AddDeployModal";
import DeploymentsDetailModal from "./DeploymentsDetailModal";
import DepMainModal from "./DepMainModal";
import {API_PATH} from "../../components/const";
import axios from "axios";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";

const DeploymentsDetail = () => {
        const [isDeployDetailModal, setIsDeployDetailModal] = useState(false)
        const [isDeployDetailModalId, setIsDeployDetailModalId] = useState(null)
        const [selectId, setSelectId] = useState(null)
        const [configsCam, setConfigsCam] = useState([])
        const [configs, setConfigs] = useState([])
        const [configsList, setConfigList] = useState([])
        let img = new Image();

        let params = useParams()
        const [data, setData] = useState([])

        // const getAll = () => {
        //     axios.get(API_PATH + "camera/module/" + params.id + "/all", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
        //         .then(res => {
        //             setData(res?.data)
        //         })
        //         .catch(err => {
        //             setData([])
        //         })
        // }

        const getDep = () => {
            axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/deployment/" + params.id, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
                .then(res => {
                    // console.log(res.data)

                    axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/module/" + res.data?.module?.id + "/all", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
                        .then(res => {
                            setData(res?.data)
                        })
                        .catch(err => {
                            setData([])
                        })
                })
        }
        const deploy = () => {

            axios.post(API_PATH + API_PATH + "company/" + localStorage.getItem('id') + "/deploy/deploy_analytics_service", {deployment_id: params.id}, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
                .then(res => {
                    toast.success("SUCCESS")
                })

        }
        const sendData = (id) => {
            getConfig(id)
            setSelectId(id)
            getConfigCam(id)
            getImg(id)
            setIsDeployDetailModal(true)
        }
        function getImg(imgId) {
            axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/" + imgId, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
                .then(res => {
                    img.src = res?.data?.screenshot;
                    img.onload = function () {
                        let scaleFactor = 0.3;
                        document.getElementById('canvas').style.width = img.width * scaleFactor + 'px';
                        document.getElementById('canvas').style.height = img.height * scaleFactor + 'px';
                        document.getElementById('canvas').width = img.width;
                        document.getElementById('canvas').height = img.height;
                        document.getElementById('canvas').style.borderRadius = '0px';
                        document.getElementById('canvas').getContext('2d').drawImage(img, 0, 0);
                    };
                })
        }

        const getConfig = (id) => {
            axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/line_crossing_analytics/" + id + "/all", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
                .then(res => {
                    setConfigs(res?.data)
                })
        }
        const getConfigCam = (id) => {
            axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/config/deployment/camera/" + params.id + "/" + id, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
                .then(res => {
                    // setConfigsCam(res?.data?.line_crossing_analytics?.map((item, index) => {
                    //     return item?.id
                    // }))
                    setIsDeployDetailModalId(res.data?.id)

                    axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/line_crossing_analytics/" + id + "/all/" +  res.data?.id, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
                        .then(res => {
                            setConfigs(res?.data)
                            setConfigList(res?.data?.filter(item => item.is_true).map(item => item.id))
                        })
                })
        }
        useEffect(() => {
            getDep()
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
                                                        src="/icon/cam.svg" className="mr-16" alt="cpu"/>{item?.name}
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
                                <button className="add-btn" onClick={deploy}>
                                    <img src="/icon/depo.svg" alt="..."/>
                                    Деплой
                                </button>
                                <button className="ml-16 cancel-btn">
                                    Отмена
                                </button>
                            </div>
                        </div>
                        <div className="col-md-4">

                            {/*<button className="add-btn-video mt-20 d-flex align-items-center font-family-medium"*/}
                            {/*        onClick={() => setIsDeployDetailModal(true)}*/}
                            {/*>*/}
                            {/*    Добавить сервис*/}
                            {/*</button>*/}
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
                                configsCam={configsCam}
                                getConfigCam={getConfigCam}
                                getImg={getImg}
                                selectId={selectId}
                                isDeployDetailModalId={isDeployDetailModalId}
                                configsList={configsList}
                                setConfigList={setConfigList}
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