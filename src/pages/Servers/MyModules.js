import React, {useState} from 'react';
import AddModuleModal from "./AddModuleModal";

const MyModules = () => {
    const [isModuleModal, setIsModuleModal] = useState(false)
    return (
        <div className="my-modules add-camera">
            <h2 className="modules-title font-family-medium">
                Мои модули
            </h2>
            <div className="row ">
                <div className="col-md-4">
                    <div className="office-box" >
                        <button className="hor-dot">
                            <img src="/icon/more_vert.svg" alt=""/>
                        </button>
                        <h6 className="office-box-title font-family-regular d-flex align-items-center"><img
                            src="/icon/cpu.svg" className="mr-8" alt="cpu"/>Главный модуль</h6>
                        <div className="row">
                            <div className="col-md-12  ">
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

                        </div>
                    </div>

                    <button className="add-btn-video mt-20 font-family-medium w-100"><img
                        src="/icon/addVideo.svg"/> Добавить камеру
                    </button>
                </div>
                <div className="col-md-4">
                    <div  className="office-box">
                        <button className="hor-dot">
                            <img src="/icon/more_vert.svg" alt=""/>
                        </button>
                        <h6 className="office-box-title font-family-regular d-flex align-items-center"><img
                            src="/icon/cpu.svg" className="mr-8" alt="cpu"/>Главный модуль</h6>
                        <div className="row">
                            <div className="col-md-12  ">
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

                        </div>
                    </div>

                    <button className="add-btn-video mt-20 font-family-medium w-100"><img
                        src="/icon/addVideo.svg"/> Добавить камеру
                    </button>
                </div>

                <div className="col-md-4">


                    <button className="add-btn-video mt-20 d-flex align-items-center font-family-medium" onClick={() => setIsModuleModal(true)}>
                        <img src="/icon/cpuActive.svg"/>
                        Добавить модуль
                    </button>

                </div>
            </div>
            <AddModuleModal
                isModuleModal={isModuleModal}
                setIsModuleModal={setIsModuleModal}
            />
        </div>
    );
};

export default MyModules;