import React, {useEffect, useState} from 'react';
import {Column} from '@ant-design/plots';
import {DatePicker} from "antd";
import DailyAnalytics from "./DailyAnalytics";
import {API_PATH} from "../../components/const";
import axios from "axios";

const Visitor = () => {
    const [time, setTime] = useState(new Date());
    const [month, setMonth] = useState(time.getMonth());
    const [year, setYear] = useState(time.getFullYear());
    const [data, setData] = useState([]);

    function onChange(date, dateString) {
        if (dateString.length > 0){
            fetch(API_PATH + "company/" + localStorage.getItem('id') + "/analitics/gender/" + dateString.slice(0, 4) + "/" + Number( dateString.slice(5, 7)), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
                .then((response) => response.json())
                .then((json) => setData(json))
                .catch((error) => {
                    // console.log('fetch data failed', error);
                });
        }
        else (
            asyncFetch()
        )
    }
    const asyncFetch = () => {
        fetch(API_PATH + "company/" + localStorage.getItem('id') + "/analitics/gender/" + year + "/" + Number(month+1), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then((response) => response.json())
            // .then((json) => setData(json.map(item => {return {...item, date2: item.date.slice(5, 7)}})))
            .then((json) => setData(json))
            .catch((error) => {
                // console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        isStack: true,
        xField: 'date',
        yField: 'value',
        seriesField: 'type',
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

    useEffect(() => {

        asyncFetch();

    }, []);
    return (
        <div className="visitor visitor-box">
            <div className="chart-box">

                <div className="visitor-title">
                    <h1><span>
                    Visitor
                </span>

                        <DatePicker picker="month" onChange={onChange}/>

                    </h1>
                </div>
                <Column {...config} />
            </div>
        </div>
    );
};

export default Visitor;