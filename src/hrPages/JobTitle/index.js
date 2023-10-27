import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Button, Modal} from "antd";

const JobTitle = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModalDelete = () => {
        setIsModalOpen(true);
    };
    const handleOkDelete = () => {
        setIsModalOpen(false);
    };
    const handleCancelDelete = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="profile-edit">
            <div className="profile-header">
                <h3 className="font-family-medium mt-4">Профиль</h3>
                <div className="profile-header-box-update bg-transparent">
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <img src="/img/profileAv.png" alt="."/>
                            <Link className="link-edit font-family-medium"
                                  to="/home/employees/profile/edit">Изменить</Link>
                        </div>

                        <div className="col-md-4">
                            <div className="inputs-box">
                                <label className="font-family-medium">Имя и фамилия </label>
                                <input type="text"/>
                            </div>
                            <div className="inputs-box">
                                <label className="font-family-medium">Логин / Номер телефона </label>
                                <input type="text"/>
                            </div>
                            <div className="con-btn justify-content-end">
                                <button className="font-family-medium"><span>Сохранить изменения</span></button>
                                <button className="font-family-medium ml-8  ">Отменить</button>
                            </div>
                        </div>
                    </div>
                    <div className="exit-btn">
                        <button className="font-family-medium" onClick={showModalDelete}>Выйти</button>
                    </div>
                </div>
            </div>
            <Modal title="Внимание!"
                   open={isModalOpen}
                   onCancel={handleCancelDelete}
                   footer={[
                       <Button key="submit" type="default" onClick={handleCancelDelete}>
                           Отменить
                       </Button>,
                       <Button key="submit" type="primary" className="my-red-canc" onClick={handleOkDelete}>
                           Да, выйти
                       </Button>
                   ]}
            >
                <p className="pt-2 pb-2">Вы хотите выйти из системы?</p>
            </Modal>
        </div>
    );
};

export default JobTitle;