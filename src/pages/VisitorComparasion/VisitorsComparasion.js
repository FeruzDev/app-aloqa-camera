import React, {useEffect, useState} from 'react';
import {DatePicker} from "antd";
import {Line} from "@ant-design/plots";
import {API_PATH} from "../../components/const";

const VisitorsComparasion = () => {
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
        fetch(API_PATH + "company/" + localStorage.getItem('id') + "/analitics/counting/by/offices/" + year + "/" + Number(month+1), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then((response) => response.json())
            .then((json) => {
                    setData(json)

                }
            )
            .catch((error) => {
                // console.log('fetch data failed', error);
            });
    };

    const config = {
        data,
        xField: 'date',
        yField: 'value',
        seriesField: 'place_id',
        // xAxis: {
        //     type: 'time',
        // },
        // yAxis: {
        //     label: {
        //         formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
        //     },
        // },
        yAxis: {
            label: {

                formatter: (v) => `${v.slice(0, 4)}`,
            },
        },
    };
    useEffect(() => {
        asyncFetch()
    }, []);
    return (
        <div>
            <div className="visitor visitor-box">
                <div className="chart-box">

                    <div className="visitor-title">
                        <h1 ><span className="font-family-medium">
                    Visitors
                </span>

                            <DatePicker onChange={onChange} />


                        </h1>
                    </div>
                    <Line {...config} />
                </div>
            </div>
        </div>
    );
};

export default VisitorsComparasion;