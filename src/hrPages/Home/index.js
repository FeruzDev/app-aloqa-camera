import React, {useEffect, useState} from 'react';
import {DatePicker, Select} from 'antd';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import axios from "axios";
import {API_PATH} from "../../components/const";
import {toast} from "react-toastify";
import {PieChart} from "@mui/x-charts/PieChart";
import {styled} from "@mui/material/styles";
import {useDrawingArea} from "@mui/x-charts/hooks";
import dayjs from "dayjs";
import moment from "moment";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

const {RangePicker} = DatePicker;


const size = {
    width: 400,
    height: 200,
};

const StyledText = styled('text')(({theme}) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({children}) {
    const {width, height, left, top} = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}

const Home = () => {
    const [time, setTime] = useState(new Date());
    const [tabs, setTabs] = useState(1)
    const [tabsTitle, setTabsTitle] = useState("absent")
    const [age, setAge] = React.useState('');
    const [data2, setData2] = useState([])
    const [yesterday, setYesterday] = useState(getPreviousDay())
    const [absent_attendances_count, setabsent_attendances_count] = useState(0)
    const [late_attendances_count, setlate_attendances_count] = useState(0)
    const [on_time_attendances_count, seton_time_attendances_count] = useState(0)
    const [absent_attendances_count2, setabsent_attendances_count2] = useState(0)
    const [late_attendances_count2, setlate_attendances_count2] = useState(0)
    const [on_time_attendances_count2, seton_time_attendances_count2] = useState(0)
    const [topType, settopType] = useState(1)
    const dateFormat = 'YYYY-MM-DD';
    const [offices, setOffices] = useState([])
    const [building_id, setbuilding_id] = useState("")
    const [departments, setDepartments] = useState([])
    const [department_id, setdepartment_id] = useState("")
    const [dateFilter, setDateFilter] = useState(Number(time.getFullYear()) + "-" + Number(time.getMonth() + 1) + "-" + Number(time.getDate()))
    const [dateBuFilter, setDateBuFilter] = useState("")
    const [usersObj, setUsersObj] = useState({})
    const [current, setCurrent] = useState(1);

    const [dateDeFilter, setDateDeFilter] = useState("")
    let last_date = new Date(time.getFullYear(), time.getMonth() + 1, 0);
    const [data, setData] = useState([]);

    const getAll = (e) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/attendance/all?status=" + e + "&for_date=" + time?.getFullYear() + "-" + Number(time?.getMonth() + 1) + "-" + Number(time?.getDate()), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setData2(res.data?.items)
                setUsersObj(res?.data)
            })
    }


    function getPreviousDay(date = new Date()) {
        const previous = new Date(date.getTime());
        previous.getDay(date.getDay() - 1);

        return previous;
    }

    const getBuilding = (val) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/building/all" + (val?.length > 0 ? "?search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setOffices(res.data?.items)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const today = new Date() // get today's date
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1) // Add 1 to today's date and set it to tomorrow

    // const getStatistik = (e) => {
    //     axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/attendance/statisticsfrom_date=" + "&to_date=11&building_id=2&department_id=3" + Number(time?.getDate()), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
    //         .then(res => {
    //             setData(res.data)
    //         })
    // }
    const getStatistik1 = (from_date, to_date) => {
        // axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/attendance/statistics?from_date=" + from_date + "&to_date=" + to_date + "&building_id=" + building_id + "&department_id=" + department_id + Number(time?.getDate()), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/attendance/statistics?from_date=" + from_date + "&to_date=" + to_date, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                // setData(res?.data)
                setabsent_attendances_count(res?.data?.absent_attendances_count)
                seton_time_attendances_count(res?.data?.on_time_attendances_count)
                setlate_attendances_count(res?.data?.late_attendances_count)
                setData([{
                    value: res?.data?.absent_attendances_count,
                    label: 'Отсутствие'
                }, {
                    value: res?.data?.on_time_attendances_count,
                    label: 'Вовремя'
                }, {value: res?.data?.late_attendances_count, label: 'Опоздание'}])

            })
            .catch(err => {
                toast.error("No data")
            })
    }
    const getStatistik2 = (from_date, to_date) => {
        // axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/attendance/statistics?from_date=" + from_date + "&to_date=" + to_date + "&building_id=" + building_id + "&department_id=" + department_id + Number(time?.getDate()), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/attendance/statistics?from_date=" + from_date + "&to_date=" + to_date, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                // setData(res?.data)
                setabsent_attendances_count2(res?.data?.absent_attendances_count)
                seton_time_attendances_count2(res?.data?.on_time_attendances_count)
                setlate_attendances_count2(res?.data?.late_attendances_count)
            })
            .catch(err => {
                toast.error("No data")
            })
    }

    function onChangeBuDate(building_e) {
        // console.log(dateDeFilter)
        setDateBuFilter(building_e)
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/attendance/all?status=" + tabsTitle + "&for_date=" + dateFilter + "&building_id=" + building_e + (dateDeFilter > 0 ? "&department_id=" + dateDeFilter : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setData2(res.data?.items)
            })
    }

    function onChangeDeDate(department_e) {
        setDateDeFilter(department_e)
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/attendance/all?status=" + tabsTitle + "&for_date=" + dateFilter + (dateBuFilter ? "&building_id=" + dateBuFilter : "") + "&department_id=" + department_e, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setData2(res.data?.items)
            })
    }

    function onChange(date, dateString) {
        // console.log(dateString[0])
        // console.log(dateString[1])
        if (dateString[0] !== "" && dateString[1] !== ""){
            axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/attendance/statistics?from_date=" + dateString[0] + "&to_date=" + dateString[1], {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
                .then(res => {
                    // setData(res?.data)
                    setabsent_attendances_count(res?.data?.absent_attendances_count)
                    seton_time_attendances_count(res?.data?.on_time_attendances_count)
                    setlate_attendances_count(res?.data?.late_attendances_count)
                    setData([{
                        value: res?.data?.absent_attendances_count,
                        label: 'Отсутствие'
                    }, {
                        value: res?.data?.on_time_attendances_count,
                        label: 'Вовремя'
                    }, {value: res?.data?.late_attendances_count, label: 'Опоздание'}])

                })
                .catch(err => {
                    toast.error("No data")
                })
        } else {
            getStatistik1(Number(time?.getFullYear()) + "-" + Number(time?.getMonth() + 1) + "-" + Number(time?.getDate()), Number(time?.getFullYear()) + "-" + Number(time?.getMonth() + 1) + "-" + Number(time?.getDate()))

        }

    }

    function onChangeDate(date, dateString) {
        if (date !== null) {
            setDateFilter(dateString)
            // console.log("nul emas")
            axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/attendance/all?status=" + tabsTitle + "&for_date=" + dateString + (dateBuFilter > 0 ? "&building_id=" + dateBuFilter : "") + "" + (dateDeFilter > 0 ? "&department_id=" + dateDeFilter : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
                .then(res => {
                    setData2(res.data?.items)
                })
        } else {
            setDateFilter(Number(time.getFullYear()) + "-" + Number(time.getMonth()) + "-" + Number(time.getDate()))
            axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/attendance/all?status=" + tabsTitle + "&for_date=" + Number(time.getFullYear()) + "-" + Number(time.getMonth() + 1) + "-" + Number(time.getDate()) + (dateBuFilter ? "&building_id=" + dateBuFilter : "") + (dateDeFilter ? "&department_id=" + dateDeFilter : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
                .then(res => {
                    setData2(res.data?.items)
                })
        }

        // console.log(date)
    }


    const getDeps = (val) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/department/all" + (val?.length > 0 ? "?search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setDepartments(res.data?.items)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }

    const changePagination = (current, size) => {

        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/hr/attendance/all?status=" + tabsTitle + "&for_date=" + time?.getFullYear() + "-" + Number(time?.getMonth() + 1) + "-" + Number(time?.getDate()) + "&page=" + size, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            // axios.get(API_PATH + "user/company/" + localStorage.getItem('id') + "/user/all?page=" + size, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setData2(res.data?.items)
                setUsersObj(res.data)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }

    useEffect(() => {
        getAll('absent')
        getDeps()
        getBuilding()
        // getStatistik()
        getStatistik1(Number(time?.getFullYear()) + "-" + Number(time?.getMonth() + 1) + "-" + Number(time?.getDate()), Number(time?.getFullYear()) + "-" + Number(time?.getMonth() + 1) + "-" + Number(time?.getDate()))
        getStatistik2(Number(time?.getFullYear()) + "-" + Number(time?.getMonth() + 1) + "-" + Number(time?.getDate()), Number(time?.getFullYear()) + "-" + Number(time?.getMonth() + 1) + "-" + Number(time?.getDate()))
    }, [building_id]);

    return (
        <div className="home-style">
            <div className="home-left">
                <div className="d-flex justify-content-between mb-3">
                    <h3 className="page-title-main font-family-medium">
                        Обзор активности
                    </h3>
                    <DatePicker placeholder="Фильтр даты"
                        // format={dateFormat}
                        // defaultValue={moment()}
                        // value={time?.getFullYear() + "-" + Number(time?.getMonth() + 1) + "-" + Number(time?.getDate())}
                        // defaultValue={defaultMyValue}
                        // defaultValue={time?.getFullYear() + "-" + Number(time?.getMonth() + 1) + "-" + Number(time?.getDate())}
                                onChange={onChangeDate}/>

                </div>
                <div className="tabs-btns">
                    <button onClick={() => {
                        setTabs(1)
                        setTabsTitle("absent")
                        getAll('absent')
                        setDateBuFilter(null)
                        setDateDeFilter(null)
                    }}
                            className={tabs === 1 ? "font-family-medium active" : "font-family-medium"}>Отсутствие
                    </button>
                    <button onClick={() => {
                        setTabs(2)
                        setTabsTitle("late")
                        getAll('late')
                        setDateBuFilter(null)
                        setDateDeFilter(null)
                    }}
                            className={tabs === 2 ? "font-family-medium active" : "font-family-medium"}>Опоздание
                    </button>
                    <button onClick={() => {
                        setTabs(3)
                        setTabsTitle("on_time")
                        getAll('on_time')
                        setDateBuFilter(null)
                        setDateDeFilter(null)
                    }}
                            className={tabs === 3 ? "font-family-medium active" : "font-family-medium"}>Вовремя
                    </button>
                </div>
                <div className="tabs-content">
                    <div className="tabs-content-filter">
                        <div className="left-sv">
                            <label className="font-family-medium mb-2">Филиалы</label>
                            <Select
                                showSearch
                                placeholder="Поиск, чтобы выбрать"
                                optionFilterProp="children"
                                className="w-100"
                                value={dateBuFilter}
                                onSearch={getBuilding}
                                onChange={(building_e) => {
                                    onChangeBuDate(building_e)
                                }}
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={offices?.map((item) => {
                                    return {
                                        value: item.id,
                                        label:
                                        item?.name
                                    };
                                })}
                            />
                        </div>
                        <div className="center-sv">
                            <label className="font-family-medium mb-2">Отделы</label>
                            <Select
                                showSearch
                                placeholder="Поиск, чтобы выбрать"
                                optionFilterProp="children"
                                className="w-100"
                                value={dateDeFilter}
                                onSearch={getDeps}
                                onChange={(e) => {
                                    onChangeDeDate(e)
                                }}
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={departments?.map((item) => {
                                    return {
                                        value: item.id,
                                        label:
                                        item?.department_title
                                    };
                                })}
                            />
                        </div>
                    </div>
                    <div className="tabs-lists">
                        {
                            data2?.map((item, index) => (
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
                                            <h5 className="font-family-medium">{item?.entrance_time ? item?.entrance_time?.slice(0, 5) : "--:--"}</h5>
                                            <h5 className="font-family-medium">{item?.leave_time ? item?.leave_time?.slice(0, 5) : "--:--"}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="pag-bottom">
                            <Stack spacing={2}>
                                <Pagination count={usersObj?.pages} total={usersObj?.total} current={current}
                                            onChange={changePagination} shape="rounded"/>
                            </Stack>
                        </div>

                    </div>
                </div>
            </div>
            <div className="home-right">
                <div className="my-shadow-shokh">
                    <h3 className="page-title-main font-family-medium">
                        Количества зарегистрированных приходов
                    </h3>
                    <div className="bigSmallText">
                        <p className="bigText font-family-extra-bold">

                            {
                                Number(late_attendances_count2) + Number(on_time_attendances_count2)
                            }

                        </p>
                        <p className="smallText font-family-medium">
                     <span>
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
                                    defaultValue="prixod"
                                    name="radio-buttons-group"
                                >
                                    {/*<FormControlLabel value="all" control={<Radio onChange={() => settopType(2)}/>}*/}
                                    {/*                  label="Все"/>*/}
                                    <FormControlLabel value="prixod" control={<Radio onChange={() => settopType(1)}/>}
                                                      label="Приходов"/>
                                    {/*<FormControlLabel value="male" control={<Radio onChange={() => settopType(3)}/>}*/}
                                    {/*                  label="Уходов"/>*/}
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
                                    <FormControlLabel value="female" control={<Radio
                                        onChange={() => getStatistik2(time?.getFullYear() + "-" + Number(time?.getMonth() + 1) + "-" + Number(time?.getDate()), time?.getFullYear() + "-" + Number(time?.getMonth() + 1) + "-" + Number(time?.getDate()))}/>}
                                                      label="Сегодня"/>
                                    <FormControlLabel value="male" control={<Radio
                                        onChange={() => getStatistik2(time?.getFullYear() + "-" + Number(time?.getMonth() + 1) + "-" + Number(time?.getDate() - 7), time?.getFullYear() + "-" + Number(time?.getMonth() + 1) + "-" + Number(time?.getDate()))}/>}
                                                      label="На этой неделе"/>
                                    <FormControlLabel value="other" control={<Radio
                                        onChange={() => getStatistik2(time?.getFullYear() + "-" + Number(time?.getMonth() + 1) + "-1", time?.getFullYear() + "-" + Number(time?.getMonth() + 1) + "-" + Number(Number(JSON.stringify(last_date).slice(9, 11)) + 1))}/>}
                                                      label="Этот месяц"/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className="my-chart">
                    <div className="my-chart-title">
                        <h3 className="font-family-medium">Инфограмма по посещаемости</h3>
                        <RangePicker
                            defaultValue={[dayjs('2023-01-01', dateFormat), dayjs('2023-01-01', dateFormat)]}
                            onChange={onChange}
                            format={dateFormat}
                        />
                    </div>
                    <PieChart series={[{data, innerRadius: 80}]} {...size}>
                        <PieCenterLabel></PieCenterLabel>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Home;