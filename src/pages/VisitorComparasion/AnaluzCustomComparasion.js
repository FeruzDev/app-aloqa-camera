import React, {useState} from 'react';
import {DatePicker} from "antd";
import {Line, Pie} from "@ant-design/plots";

const AnaluzCustomComparasion = () => {
    const dateSelect = () => {

    }
    const data = [
        {
            type: '分类一',
            value: 27,
        },
        {
            type: '分类二',
            value: 25,
        },
        {
            type: '分类三',
            value: 18,
        },
        {
            type: '分类四',
            value: 15,
        },
        {
            type: '分类五',
            value: 10,
        },
        {
            type: '其他',
            value: 5,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: '',
            },
        },
    };

    return (
        <div className="visitor visitor-box">
            <div className="chart-box">

                <div className="visitor-title">
                    <h1 ><span>
                    Sentiment Analysis
                </span>

                        <DatePicker onChange={dateSelect} />

                    </h1>
                </div>

                <div className="d-flex">
                    <div className="w-100">
                        <Pie {...config} />
                    </div>
                    <div className="w-100">
                        <Pie {...config} />
                    </div>
                    <div className="w-100">
                        <Pie {...config} />
                    </div>
                    <div className="w-100">
                        <Pie {...config} />
                    </div>
                    <div className="w-100">
                        <Pie {...config} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AnaluzCustomComparasion;