import React, {useState, useEffect} from 'react';
import {Column} from '@ant-design/plots';
import {DatePicker} from "antd";

const DailyAnalyticsComparasion = () => {
    const [data, setData] = useState([]);
    const dateSelect = () => {

    }
    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'city',
        yField: 'value',
        seriesField: 'type',
        isGroup: true,
        columnStyle: {
            radius: [20, 20, 0, 0],
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
        </div>);
};

export default DailyAnalyticsComparasion
