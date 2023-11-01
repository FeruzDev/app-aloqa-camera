import React, {useEffect, useState} from 'react';
import {DatePicker} from "antd";
import {Line} from "@ant-design/plots";
import {API_PATH, CONFIG} from "../../components/const";

const PeakHours = () => {
    const [time, setTime] = useState(new Date());
    const [month, setMonth] = useState(time.getMonth());
    const [year, setYear] = useState(time.getFullYear());
    const [data, setData] = useState([]);

    function onChange(date, dateString) {
        console.log(dateString);
        if (dateString.length > 0){
            fetch(API_PATH + "company/" + localStorage.getItem('id') + "/analitics/hourly?date_str=" + dateString, CONFIG)
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
        fetch(API_PATH + "company/" + localStorage.getItem('id') + "/analitics/hourly?date_str=" + time?.getFullYear() + "-" + Number(time?.getMonth() + 1) + "-" +  Number(time?.getDate()) , CONFIG)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };

    const config = {
        data,
        xField: 'date',
        yField: 'value',
        label: {},
        point: {
            size: 5,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#5B8FF9',
                lineWidth: 2,
            },
        },
        tooltip: {
            showMarkers: false,
        },
        state: {
            active: {
                style: {
                    shadowBlur: 4,
                    stroke: '#000',
                    fill: 'red',
                },
            },
        },
        interactions: [
            {
                type: 'marker-active',
            },
        ],
    };
    useEffect(() => {
        asyncFetch();
        console.log(time.getFullYear())
        console.log(time.getMonth())
        console.log(time.getDate())
    }, []);
    return (
        <div className="visitor visitor-box">
            <div className="chart-box">

            <div className="visitor-title">
                <h1 ><span>
                    Visitor
                </span>

                     <DatePicker onChange={onChange} />


                </h1>
            </div>
            <Line {...config} />
        </div>
        </div>
    );
};

export default PeakHours;