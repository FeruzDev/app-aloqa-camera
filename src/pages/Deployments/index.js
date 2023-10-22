import React, {useEffect, useState} from 'react';
import AddDeployModal from "./AddDeployModal";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {useHistory} from "react-router-dom";

const Deployments = () => {
    const [isDeployModal, setIsDeployModal] = useState(false)
    const [depData, setDepData] = useState([])
    let history = useHistory()
    const getDep = () => {
        axios.get(API_PATH + "deployment/all" , CONFIG)
            .then(res =>{
                console.log(res.data)
                setDepData(res.data)
            })
    }
    useEffect(() => {
        getDep()
    }, []);
    return (
            <div className="my-modules add-camera">
                <h2 className="modules-title font-family-medium">
                    Deployments
                </h2>
                <div className="row ">
                   <div className="col-md-8">
                       <div className="row">
                           {
                               depData?.map((item, index) =>(
                                   <div className="col-md-6" onClick={() => history.push("deployments/" + item.id)}>
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
                                Server
                                </span>
                                                       <span className="office-box-item-count font-family-bold">
                                         {item?.module?.name}
                                </span>
                                                   </div>
                                               </div>

                                           </div>
                                           <div className="row">
                                               <div className="col-md-12">
                                                   <div className="office-box-item">
                                     <span className="office-box-item-title font-family-regular">
                               Service
                                </span>
                                                       <span className="office-box-item-count font-family-bold">
                                                                      {item?.service?.name}
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
                                               <div className="col-md-3 " style={{paddingLeft: "0px"}}>
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
                                           <div className="add-btn-green mt-20 font-family-medium align-items-center justify-content-center d-flex" >
                                               Deploy
                                           </div>
                                           <div className="add-btn mt-20 font-family-medium align-items-center justify-content-center d-flex" >
                                               Deploy
                                           </div>
                                       </div>

                                   </div>
                               ))
                           }
                       </div>
                   </div>
                    <div className="col-md-4">
                        <button className="add-btn-video mt-20 d-flex align-items-center font-family-medium" onClick={() => setIsDeployModal(true)}>
                            <img src="/icon/cpuActive.svg"/>
                            Добавить деплоймент
                        </button>
                    </div>
                </div>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <AddDeployModal
                    isDeployModal={isDeployModal}
                    setIsDeployModal={setIsDeployModal}
                />
            </div>

    );
};

export default Deployments;