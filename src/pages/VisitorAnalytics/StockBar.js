import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Column, Stock} from '@ant-design/plots';
import {DatePicker} from "antd";

const StockBar = () => {
    const [data, setData] = useState([]);
    const dateSelect = () => {

    }
    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/antfincdn/qtQ9nYfYJe/stock-data.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                // console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'trade_date',
        yField: ['open', 'close', 'high', 'low'],
    };

    return (
        <div className="visitor visitor-box">
            <div className="chart-box">

            <div className="visitor-title">
                <h1><span>
                    Visitor
                </span>
                    <DatePicker onChange={dateSelect}/>
                </h1>
            </div>
                <Stock {...config} />

        </div>
        </div>
    );
    ;
};

export default StockBar
