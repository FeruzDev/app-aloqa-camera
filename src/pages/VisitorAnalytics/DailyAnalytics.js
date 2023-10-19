import React, {useEffect, useState} from 'react';
import {DatePicker} from "antd";
import {Column} from "@ant-design/plots";

const DailyAnalytics = () => {
    const [data, setData] = useState([]);
    const dateSelect = () => {

    }
    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        isStack: true,
        xField: 'year',
        yField: 'value',
        seriesField: 'type',
        xAxis: {
            label: {
                style: {
                    fill: "#000",
                },
            },
        },
        yAxis: {
            count: {
                label: {
                    style: {
                        fill: "#000",
                    },
                },
            },
            value: {
                label: {
                    style: {
                        fill: "#000",
                    },
                },
            },
        },
        style: {fill: '#000'},
        geometryOptions: [
            {
                geometry: "line",
                color: ["#000", "#000"],
                seriesField: "type",
            },
            {
                geometry: "line",
                color: "#000",
                seriesField: "type",
            },
        ],
        label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            // 'top', 'bottom', 'middle'
            // 可配置附加的布局方法
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
            layout: [
                // 柱形图数据标签位置自动调整
                {
                    type: 'interval-adjust-position',
                }, // 数据标签防遮挡
                {
                    type: 'interval-hide-overlap',
                }, // 数据标签文颜色自动调整
                {
                    type: 'adjust-color',
                },
            ],
        },
    };
    return (
        <div className="visitor visitor-box ">
            <div className="chart-box">
            <div className="visitor-title">
                <h1><span>
                    Daily analytics
                </span>

                        <DatePicker onChange={dateSelect}/>

                </h1>
            </div>
            <Column {...config} />
        </div>
        </div>
    );
};

export default DailyAnalytics;