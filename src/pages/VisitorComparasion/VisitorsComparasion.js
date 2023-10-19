import React, {useEffect, useState} from 'react';
import {DatePicker} from "antd";
import {Line} from "@ant-design/plots";

const VisitorsComparasion = () => {
    const [data, setData] = useState([]);
    const dateSelect = () => {
      
    }
    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'year',
        yField: 'value',
        seriesField: 'category',
        xAxis: {
            type: 'time',
        },
        yAxis: {
            label: {
                // 数值格式化为千分位
                formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
            },
        },
    };
    return (
        <div>
            <div className="visitor visitor-box">
                <div className="chart-box">

                    <div className="visitor-title">
                        <h1 ><span className="font-family-medium">
                    Visitors
                </span>

                            <DatePicker onChange={dateSelect} />


                        </h1>
                    </div>
                    <Line {...config} />
                </div>
            </div>
        </div>
    );
};

export default VisitorsComparasion;