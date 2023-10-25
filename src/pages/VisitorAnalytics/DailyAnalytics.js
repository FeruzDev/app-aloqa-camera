import React, {useEffect, useState} from 'react';
import {DatePicker} from "antd";

import {Column} from "@ant-design/plots";

import {API_PATH, CONFIG} from "../../components/const";
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const DailyAnalytics = () => {
    const [time, setTime] = useState(new Date());
    const [month, setMonth] = useState(time.getMonth());
    const [year, setYear] = useState(time.getFullYear());
    const [data, setData] = useState([]);

    function onChange(date, dateString) {
        console.log(date)
        console.log(dateString[0])
        console.log(dateString[1])
        if (dateString.length > 0){
            fetch(API_PATH + "analitics/age?start_date_str=" + dateString[0] +"&end_date_str=" + dateString[1], CONFIG)
                .then((response) => response.json())
                .then((json) => setData(json))
                .catch((error) => {
                    console.log('fetch data failed', error);
                });
        }
        else (
            asyncFetch()
        )
    }
    const asyncFetch = () => {
        fetch(API_PATH + "analitics/age?start_date_str=2023-09-01&end_date_str=2023-10-31", CONFIG)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        isStack: true,
        xField: 'age_range',
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
            position: 'middle',
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
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
    useEffect(() => {
        asyncFetch()
    }, []);
    return (
        <div className="visitor visitor-box ">
            <div className="chart-box">
            <div className="visitor-title">
                <h1><span>
                    Daily analytics
                </span>
                    <RangePicker
                        // defaultValue={[dayjs('2023-01-01', dateFormat), dayjs('2023-0-01', dateFormat)]}
                        format={dateFormat}
                        onChange={onChange}
                    />
                </h1>
            </div>
            <Column {...config} />
        </div>
        </div>
    );
};

export default DailyAnalytics;