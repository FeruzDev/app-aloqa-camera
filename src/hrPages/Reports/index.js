import React from 'react';
import { Bar } from '@ant-design/plots';
import Calendar from "../Home/Calendar";
import {Select} from "antd";

const Reports = () => {
    const data = [
        {
            label: 'Mon.',
            type: 'Пришёл поздно (минуты)',
            value: 2800,
        },
        {
            label: 'Mon.',
            type: 'Ушел рано (минуты)',
            value: 2260,
        },
        {
            label: 'Tues.',
            type: 'Пришёл поздно (минуты)',
            value: 1800,
        },
        {
            label: 'Tues.',
            type: 'Ушел рано (минуты)',
            value: 1300,
        },
        {
            label: 'Wed.',
            type: 'Пришёл поздно (минуты)',
            value: 950,
        },
        {
            label: 'Wed.',
            type: 'Ушел рано (минуты)',
            value: 900,
        },
        {
            label: 'Thur.',
            type: 'Пришёл поздно (минуты)',
            value: 500,
        },
        {
            label: 'Thur.',
            type: 'Ушел рано (минуты)',
            value: 390,
        },
        {
            label: 'Fri.',
            type: 'Пришёл поздно (минуты)',
            value: 170,
        },
        {
            label: 'Fri.',
            type: 'Ушел рано (минуты)',
            value: 100,
        },
    ];
    const config = {
        data,
        isGroup: true,
        xField: 'value',
        yField: 'label',
        seriesField: 'type',
        dodgePadding: 4,
        intervalPadding: 20,
        label: {
            position: 'middle',
            layout: [
                {
                    type: 'interval-adjust-position',
                },
                {
                    type: 'interval-hide-overlap',
                },
                {
                    type: 'adjust-color',
                },
            ],
        },
    };
    return (
        <div className="reports">
            <div className="audit-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="left-head">
                        <h6 className="font-family-medium">Аудит</h6>
                    </div>
                    <div className="right-head">
                        <button className="upload-btn font-family-medium ml-16 mr-16"><img src="/icon/upload.svg"/> Экспорт в Excel</button>
                    </div>
                </div>
            </div>
            <div className="rep-box">
                <div className="control-in">
                    <div className="inputs-box-cal">
                        <label  className="font-family-medium">Дата </label>
                        <Calendar />
                    </div>
                    <div className="inputs-box">
                        <label  className="font-family-medium">Отдел </label>

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
                <Bar {...config} />
            </div>
        </div>
    );
};

export default Reports;