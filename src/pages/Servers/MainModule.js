import React, {useState} from 'react';
import AddCameraModal from "./AddCameraModal";

const MainModule = () => {
    const [isAddCameraModal, setIsAddCameraModal] = useState(false)
    return (
        <div className="main-module add-camera">
            <h2 className="modules-title font-family-medium">
                Главный модуль
            </h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="office-box">
                        <button className="hor-dot">
                            <img src="/icon/more_vert.svg" alt=""/>
                        </button>
                        <h6 className="office-box-title-child font-family-regular">
                            <img src="/icon/cam.svg"
                                 alt="cam"
                                 className="mr-8"/>Lorem ipsum dolor.</h6>
                        <div className="row">
                        </div>
                        <div className="row rec-img">
                            <img src="/img/rec1.png" alt="rec..."/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="office-box">
                        <button className="hor-dot">
                            <img src="/icon/more_vert.svg" alt=""/>
                        </button>
                        <h6 className="office-box-title-child font-family-regular">
                            <img src="/icon/cam.svg"
                                 alt="cam"
                                 className="mr-8"/>Lorem ipsum dolor.</h6>
                        <div className="row">
                        </div>
                        <div className="row rec-img">
                            <img src="/img/rec1.png" alt="rec..."/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <button className="add-btn-video mt-20 font-family-medium w-100" onClick={() => setIsAddCameraModal(true)}>
                        <img src="/icon/addVideo.svg"/>
                        Добавить камеру
                    </button>
                </div>
            </div>
            <AddCameraModal
                isAddCameraModal={isAddCameraModal}
                setIsAddCameraModal={setIsAddCameraModal}
                // getBuilding={getBuilding}
            />
        </div>
    );
};

export default MainModule;