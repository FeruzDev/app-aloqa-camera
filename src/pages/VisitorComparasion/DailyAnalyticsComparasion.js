import React, {useState, useEffect} from 'react';
import {Column} from '@ant-design/plots';
import {DatePicker} from "antd";
import {API_PATH} from "../../components/const";

const DailyAnalyticsComparasion = () => {
    const [time, setTime] = useState(new Date());
    const [month, setMonth] = useState(time.getMonth());
    const [year, setYear] = useState(time.getFullYear());
    const [data, setData] = useState([]);
    function onChange(date, dateString) {
        if (dateString.length > 0){
            fetch(API_PATH + "company/" + localStorage.getItem('id') + "/analitics/peakhours/fourvalues/by/offices?date_str=" + dateString.slice(0, 4) + "-" + Number( dateString.slice(5, 7))+ "-" + Number(dateString.slice(8, 10)), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
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
        fetch(API_PATH + "company/" + localStorage.getItem('id') + "/analitics/peakhours/fourvalues/by/offices?date_str="+ time?.getFullYear() + "-" + Number(time?.getMonth() + 1) + "-" +  Number(time?.getDate()), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then((response) => response.json())
            // .then((json) => setData(json.map(item => {return {...item, date2: item.date.slice(5, 7)}})))
            .then((json) => setData(json))
            .catch((error) => {
                // console.log('fetch data failed', error);
            });
    };
    useEffect(() => {
        asyncFetch();
    }, []);
    const config = {
        data,
        xField: 'date',
        yField: 'value',
        seriesField: 'place_id',
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

                        <DatePicker onChange={onChange}/>

                    </h1>
                </div>
                <Column {...config} />
            </div>
        </div>);
};

export default DailyAnalyticsComparasion
