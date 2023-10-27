import React from 'react';

const BranchesEdit = () => {
    return (
        <div className="edit-user">
            <div className="progress-link">
                <img src="/icon/Icon1.svg" alt="."/>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Филиалы</span>
                <img src="/icon/arrowleft.svg" alt="."/>
                <span>Филиалы 1</span>
            </div>
            <h3 className="edit-user-title font-family-medium">
                Редактировать данные
            </h3>
            <div className="edit-user-box">
                <div className="row">
                    <div className="col-md-4">
                        <div className="inputs-box w-100">
                            <label  className="font-family-medium">Названия филиала</label>
                            <input type="text" placeholder="Напишите названия" className="w-100"/>
                        </div>
                    </div>
                </div>
                <div className="con-btn mt-4 w-auto">
                    <button className="font-family-medium"><span>Подтверждать</span></button>
                    <button className="font-family-medium ml-8  ">Отменить</button>
                </div>
            </div>

        </div>
    );
};

export default BranchesEdit;