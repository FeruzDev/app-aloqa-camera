import React, {useEffect, useState} from 'react';
import {Select} from 'antd';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import MyChart from "./MyChart";
import Calendar from "./Calendar";
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {toast} from "react-toastify";
import {PieChart} from "@mui/x-charts/PieChart";
import {styled} from "@mui/material/styles";
import {useDrawingArea} from "@mui/x-charts/hooks";

const data = [
    { value: 5, label: 'Отсутствие' },
    { value: 10, label: 'Опоздание' },
    { value: 15, label: 'Вовремя' },
];

const size = {
    width: 400,
    height: 200,
};


const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}
const Home = () => {
    const [time, setTime] = useState(new Date());
    const [tabs, setTabs] = useState(1)
    const [age, setAge] = React.useState('');
    const [data, setData] = useState([])
    const [yesterday, setYesterday] = useState(getPreviousDay())
    const [absent_attendances_count, setabsent_attendances_count] = useState(0)
    const [late_attendances_count, setlate_attendances_count] = useState(0)
    const [on_time_attendances_count, seton_time_attendances_count] = useState(0)
    const [topType, settopType] = useState(1)

        const handleChange = (event) => {
        setAge(event.target.value);
    };
    const getAll = (e) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/attendance/all/?status=" + e + "&for_date=" + +time?.getFullYear() + "-" + Number(time?.getMonth() + 1) + "-" + Number(time?.getDate()), CONFIG)
            .then(res => {
                setData(res.data)
            })
    }
    function getPreviousDay(date = new Date()) {
        const previous = new Date(date.getTime());
        previous.getDay(date.getDay() - 1);

        return previous;
    }
    const today = new Date() // get today's date
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1) // Add 1 to today's date and set it to tomorrow

    // const getStatistik = (e) => {
    //     axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/attendance/statistics/from_date=" + "&to_date=11&building_id=2&department_id=3" + Number(time?.getDate()), CONFIG)
    //         .then(res => {
    //             setData(res.data)
    //         })
    // }
    const getStatistik1 = (to_date) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/attendance/statistics/?from_date=" +time?.getFullYear() + "-" + Number(time?.getMonth() + 1) + "-" + Number(time?.getDate()) + "&to_date="+time?.getFullYear() + "-" + Number(time?.getMonth() + 1) + "-" + Number(to_date) + "&building_id=1&department_id=1" + Number(time?.getDate()), CONFIG)
            .then(res => {
                // setData(res?.data)
                setabsent_attendances_count(res?.data?.absent_attendances_count)
                seton_time_attendances_count(res?.data?.on_time_attendances_count)
                setlate_attendances_count(res?.data?.late_attendances_count)
            })
            .catch(err =>{
                toast.error("No data")
            })
    }
    function calculate(fr, sc, th) {
        return console.log(fr + sc + th)
    }
    useEffect(() => {
        getAll('on_time')
        // getStatistik()
        getStatistik1(tomorrow.toDateString().slice(8, 10))
        console.log(tomorrow.toDateString().slice(8, 10))
        console.log(yesterday)
        console.log(yesterday)
        console.log(yesterday)
        console.log()
    }, []);

    return (
        <div className="home-style">
            <div className="home-left">
                <h3 className="page-title-main font-family-medium">
                    Обзор активности
                </h3>
                <div className="tabs-btns">
                    <button onClick={() => {
                        setTabs(1)
                        getAll('on_time')
                    }}
                            className={tabs === 1 ? "font-family-medium active" : "font-family-medium"}>Отсутствие
                    </button>
                    <button onClick={() => {
                        setTabs(2)
                        getAll('late')
                    }}
                            className={tabs === 2 ? "font-family-medium active" : "font-family-medium"}>Опоздание
                    </button>
                    <button onClick={() => {
                        setTabs(3)
                        getAll('absent')
                    }}
                            className={tabs === 3 ? "font-family-medium active" : "font-family-medium"}>Вовремя
                    </button>
                </div>
                <div className="tabs-content">
                    <div className="tabs-content-filter">
                        <div className="left-sv">
                            <label className="font-family-medium">Филиалы</label>
                            <Select
                                className="w-100"
                                onChange={handleChange}
                                options={[
                                    {value: 'jack', label: 'Jack'},
                                    {value: '1', label: '1'},
                                    {value: 'Yiminghe', label: 'yiminghe'},
                                    {value: 'Yiminghe', label: 'yiminghe'},
                                    {value: 'Yiminghe', label: 'yiminghe'},
                                    {value: 'Yiminghe', label: 'yiminghe'},
                                    {value: 'Yiminghe', label: 'yiminghe'},
                                    {value: 'disabled', label: 'Disabled', disabled: true},
                                ]}
                            />
                        </div>
                        <div className="center-sv">
                            <label className="font-family-medium">Отделы</label>
                            <Select
                                className="w-100"
                                onChange={handleChange}
                                options={[
                                    {value: 'jack', label: 'Jack'},
                                    {value: '1', label: '1'},
                                    {value: 'Yiminghe', label: 'yiminghe'},
                                    {value: 'Yiminghe', label: 'yiminghe'},
                                    {value: 'Yiminghe', label: 'yiminghe'},
                                    {value: 'Yiminghe', label: 'yiminghe'},
                                    {value: 'Yiminghe', label: 'yiminghe'},
                                    {value: 'disabled', label: 'Disabled', disabled: true},
                                ]}
                            />

                        </div>
                    </div>
                    <div className="tabs-lists">
                        {
                            data?.map((item, index) => (

                                <div className="tabs-list-item">
                                    <div className="tabs-img-box">
                                        <img src={item?.employee?.image} alt="avatar"/>
                                    </div>
                                    <div className="tabs-content-box">
                                        <div>
                                            <h5 className="font-family-medium">{item?.employee?.first_name + " " + item?.employee?.last_name}</h5>
                                            <h6>{item?.employee?.position}</h6>
                                        </div>
                                        <div className="time-at-work">
                                            <h5 className="font-family-medium">{item?.entrance_time?.slice(0, 5)}</h5>
                                            <h5 className="font-family-medium">{item?.leave_time ? item?.leave_time?.slice(0, 5) : "-"}</h5>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="home-right">
                <div className="my-shadow-shokh">
                    <h3 className="page-title-main font-family-medium">
                        Количества зарегистрированных приходов и уходов
                    </h3>
                    <div className="bigSmallText">
                        <p className="bigText font-family-extra-bold">
                            {


                                topType === 1 ?
                                    late_attendances_count + on_time_attendances_count  + absent_attendances_count
                                :   topType === 2 ?
                                        late_attendances_count + on_time_attendances_count  + absent_attendances_count
                                        :
                                        topType === 3 ?
                                            late_attendances_count + on_time_attendances_count  + absent_attendances_count
                                            :
                                   "0"
                            }
                        </p>
                        <p className="smallText font-family-medium">
                     <span>
                     <img src="/icon/pro.svg" alt="..."/>5%
                 </span>
                        </p>
                    </div>
                    <div className="radio-list">
                        <div className="left-items">
                            <FormControl>
                                <label id="demo-radio-buttons-group-label"
                                       className="font-family-medium ra-title"> Действие</label>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio onChange={() => settopType(2)}/>} label="Приходов"/>
                                    <FormControlLabel value="male" control={<Radio onChange={() => settopType(3)}/>} label="Уходов"/>
                                    <FormControlLabel value="other" control={<Radio onChange={() => settopType(1)}/>} label="Все"/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="left-items">
                            <FormControl>
                                <label id="demo-radio-buttons-group-label"
                                       className="font-family-medium ra-title"> Период</label>

                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio/>} label="Сегодня"/>
                                    <FormControlLabel value="male" control={<Radio/>} label="На этой неделе"/>
                                    <FormControlLabel value="other" control={<Radio/>} label="Этот месяц"/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className="my-chart">
                    <div className="my-chart-title">
                        <h3 className="font-family-medium">Инфограмма по посещаемости</h3>
                        <Calendar/>
                    </div>
                    <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
                        <PieCenterLabel></PieCenterLabel>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Home;