import React, {useState} from 'react';
import {Button, Modal, Select} from "antd";

const Camera = () => {

    const [isModalOffice, setIsModalOffice] = useState(false);
    const [isModalRoom, setIsModalRoom] = useState(false);
    const [isModalCamera, setIsModalCamera] = useState(false);

    return (<div className="add-camera">
        <div className="row ">
            <div className="col-md-4">
                <h3 className="cam-title">
                    Мои инфраструктуры
                    <img src="/icon/rightArrow.png" alt=""/>
                </h3>
                <div className="office-box">
                    <button className="hor-dot">
                        <img src="/icon/more_vert.svg" alt=""/>
                    </button>
                    <h6 className="office-box-title font-family-regular">Мой офис</h6>
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
                <button className="add-btn mt-20 font-family-medium" onClick={() => setIsModalOffice(true)}><img src="/icon/plus.svg"/> Добавить здания
                </button>
            </div>
            <div className="col-md-4">
                <h3 className="cam-title">
                    Привязанные комнаты
                    <img src="/icon/rightArrow.png" alt=""/>
                </h3>
                <div className="office-box">
                    <button className="hor-dot">
                        <img src="/icon/more_vert.svg" alt=""/>
                    </button>
                    <h6 className="office-box-title-child font-family-regular">
                        <img src="/icon/cam.svg"
                             alt="cam"
                             className="mr-8"/>Большой зал</h6>
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
                <div className="office-box">
                    <button className="hor-dot">
                        <img src="/icon/more_vert.svg" alt=""/>
                    </button>
                    <h6 className="office-box-title-child font-family-regular">
                        <img src="/icon/cam.svg"
                             alt="cam"
                             className="mr-8"/>Большой зал</h6>
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
                <div className="office-box">
                    <button className="hor-dot">
                        <img src="/icon/more_vert.svg" alt=""/>
                    </button>
                    <h6 className="office-box-title-child font-family-regular">
                        <img src="/icon/cam.svg"
                             alt="cam"
                             className="mr-8"/>Большой зал</h6>
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
                <div className="office-box">
                    <button className="hor-dot">
                        <img src="/icon/more_vert.svg" alt=""/>
                    </button>
                    <h6 className="office-box-title-child font-family-regular">
                        <img src="/icon/cam.svg"
                             alt="cam"
                             className="mr-8"/>Большой зал</h6>
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
                <button className="add-btn mt-20 font-family-medium" onClick={() => setIsModalRoom(true)}><img src="/icon/plus.svg"/>
                    Добавить комната
                </button>
            </div>
            <div className="col-md-4">
                <h3 className="cam-title">
                    Привязанные камеры
                    <img src="/icon/rightArrow.png" alt=""/>
                </h3>
                <div className="office-box">
                    <button className="hor-dot">
                        <img src="/icon/more_vert.svg" alt=""/>
                    </button>
                    <h6 className="office-box-title-child font-family-regular">
                        <img src="/icon/cam.svg"
                             alt="cam"
                             className="mr-8"/>Большой зал</h6>
                    <div className="row">
                    </div>
                    <div className="row rec-img">
                        <img src="/img/rec1.png" alt="rec..."/>
                    </div>
                </div>
                <div className="office-box">
                    <button className="hor-dot">
                        <img src="/icon/more_vert.svg" alt=""/>
                    </button>
                    <h6 className="office-box-title-child font-family-regular">
                        <img src="/icon/cam.svg"
                             alt="cam"
                             className="mr-8"/>Большой зал</h6>
                    <div className="row">
                    </div>
                    <div className="row rec-img">
                        <img src="/img/rec1.png" alt="rec..."/>
                    </div>
                </div>
                <button className="add-btn mt-20 font-family-medium" onClick={() => setIsModalCamera(true)}><img src="/icon/plus.svg"/>
                    Добавить камера
                </button>
            </div>
        </div>
        <Modal title="Добавить здания"
               open={isModalOffice}
               onCancel={() => setIsModalOffice(false)}
               footer={[
                   <Button key="submit" type="primary"   onClick={() => setIsModalOffice(true)}>
                       Добавить
                   </Button>,
                   <Button key="submit" type="default"   onClick={() => setIsModalOffice(false)}>
                       Отменить
                   </Button>

               ]}
        >
            <div className="cam-add-modal">
                <div className="inputs-box">
                    <label  className="font-family-medium">Название здания  </label>
                    <input type="text" />
                </div>
                <div className="inputs-box">
                    <label  className="font-family-medium">Страна </label>
                <Select
                    className="w-100"
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: '1', label: '1' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}
                />
                </div>
                <div className="inputs-box">
                    <label  className="font-family-medium">Город </label>
                <Select
                    className="w-100"
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: '1', label: '1' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}
                />
                </div>
                <div className="inputs-box">
                    <label  className="font-family-medium">Район </label>
                <Select
                    className="w-100"
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: '1', label: '1' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}
                />
                </div>
                <div className="inputs-box">
                    <label  className="font-family-medium">Адрес </label>
                <Select
                    className="w-100"
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: '1', label: '1' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}
                />
                </div>
            </div>
        </Modal>
        <Modal title="Добавить камера"
               open={isModalCamera}
               onCancel={() => setIsModalCamera(false)}
               footer={[
                   <Button key="submit" type="primary"   onClick={() => setIsModalCamera(true)}>
                       Добавить
                   </Button>,
                   <Button key="submit" type="default"   onClick={() => setIsModalCamera(false)}>
                       Отменить
                   </Button>

               ]}
        >
            <div className="cam-add-modal">
                <div className="inputs-box">
                    <label  className="font-family-medium">Название камера  </label>
                    <input type="text" />
                </div>
                <div className="inputs-box">
                    <label  className="font-family-medium">IP - камера  </label>
                    <input type="text" />
                </div>
                <div className="inputs-box">
                    <label  className="font-family-medium">User name  </label>
                    <input type="text" />
                </div>
                <div className="inputs-box">
                    <label  className="font-family-medium">Пароль камеры  </label>
                    <input type="text" />
                </div>

            </div>
        </Modal>

        <Modal title="Добавить комната"
               open={isModalRoom}
               onCancel={() => setIsModalRoom(false)}
               footer={[
                   <Button key="submit" type="primary"   onClick={() => setIsModalRoom(false)}>
                       Добавить
                   </Button>,
                   <Button key="submit" type="default"   onClick={() => setIsModalRoom(false)}>
                       Отменить
                   </Button>

               ]}
        >
            <div className="cam-add-modal">
                <div className="inputs-box">
                    <label  className="font-family-medium">Название комната </label>
                    <input type="text" />
                </div>


            </div>
        </Modal>
    </div>);
};

export default Camera;