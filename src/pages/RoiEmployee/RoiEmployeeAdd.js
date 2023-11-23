import React, {useEffect, useState} from 'react';
import {Select} from "antd";
import ReactPlayer from "react-player";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import axios from "axios";
import {API_PATH} from "../../components/const";
import {toast} from "react-toastify";
import DrawRoi from "./DrawRoi";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {useParams} from "react-router-dom";

const RoiEmployeeAdd = () => {
    const [users, setUsers] = useState([])
    const [offices, setOffices] = useState([])
    const [isAddModal, setIsAddModal] = useState([])
    const [rooms, setRooms] = useState([])
    const [cameras, setCameras] = useState([])
    const [selectOffices, setSelectOffices] = useState(null)
    const [selectRooms, setSelectRooms] = useState(null)
    const [selectCameras, setSelectCameras] = useState("")
    const [sendData, setSendData] = useState(null)
    const [camId, setCamId] = useState(false)
    const [message, setMessage] = useState({});

    const [myArr, setMyArr] = useState([])
    const [myItem, setMyItem] = useState([])
    const [sendDataRoi, setSendDataRoi] = useState({})
    const [lineType, setLineType] = useState(false)
    const params = useParams()
    var color_choices = [
        "#00FF47",
    ];

    var img = new Image();
    var rgb_color = color_choices[Math.floor(Math.random() * color_choices.length)]
    var opaque_color = 'rgba(0, 255, 71, 0.22)';

    var scaleFactor = 1;
    var scaleSpeed = 0.01;

    var points = [];
    var regions = [];
    var masterPoints = [];
    var masterColors = [];

    var showNormalized = false;
    var drawMode = "polygon";

    var modeMessage = document.querySelector('#mode');
    var coords = document.querySelector('#coords');

    function drawroi() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/" + 1, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setMyItem(res.data)

                setLineType(false)
                drawMode = "polygon";
                canvas.style.cursor = 'crosshair';

                function clipboard(selector) {
                    var copyText = document.querySelector(selector).innerText;
                    navigator.clipboard.writeText(copyText);
                }

                function zoom(clicks) {
                    // if w > 60em, stop
                    if ((scaleFactor + clicks * scaleSpeed) * img.width > 40 * 16) {
                        return;
                    }
                    scaleFactor += clicks * scaleSpeed;
                    scaleFactor = Math.max(0.1, Math.min(scaleFactor, 0.8));
                    var w = img.width * scaleFactor;
                    var h = img.height * scaleFactor;
                    canvas.style.width = w + 'px';
                    canvas.style.height = h + 'px';
                }

// placeholder image
//         img.src = 'https://assets.website-files.com/5f6bc60e665f54545a1e52a5/63d3f236a6f0dae14cdf0063_drag-image-here.png';
                img.src = res?.data?.screenshot;
                img.onload = function () {
                    // scaleFactor = 0.5;
                    // canvas.style.width = '100%';
                    // canvas.style.height = '100%';
                    scaleFactor = 0.35;
                    canvas.style.width = img.width * scaleFactor + 'px';
                    canvas.style.height = img.height * scaleFactor + 'px';
                    canvas.width = img.width;
                    canvas.height = img.height;
                    canvas.style.borderRadius = '0px';
                    ctx.drawImage(img, 0, 0);
                };

                function drawLine(x1, y1, x2, y2) {
                    ctx.beginPath();
                    // set widht
                    ctx.lineWidth = 10;
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                }

                function getScaledCoords(e) {
                    var rect = canvas.getBoundingClientRect();
                    var x = e.clientX - rect.left;
                    var y = e.clientY - rect.top;
                    return [x / scaleFactor, y / scaleFactor];
                }

                function drawAllPolygons() {
                    // draw all points for previous regions
                    for (var i = 0; i < masterPoints.length; i++) {
                        var newpoints = masterPoints[i];
                        // set color
                        ctx.strokeStyle = masterColors[i];
                        for (var j = 1; j < newpoints.length; j++) {
                            // draw all lines
                            drawLine(newpoints[j - 1][0], newpoints[j - 1][1], newpoints[j][0], newpoints[j][1]);
                        }
                        drawLine(newpoints[newpoints.length - 1][0], newpoints[newpoints.length - 1][1], newpoints[0][0], newpoints[0][1]);
                        // draw arc around each point
                        for (var j = 0; j < newpoints.length; j++) {
                            ctx.beginPath();
                            ctx.strokeStyle = masterColors[i];
                            ctx.arc(newpoints[j][0], newpoints[j][1], 5, 0, 2 * Math.PI);
                            // fill with white
                            ctx.fillStyle = 'white';
                            ctx.fill();
                            ctx.stroke();
                        }
                        // fill
                        ctx.beginPath();
                        ctx.fillStyle = opaque_color;
                        ctx.moveTo(newpoints[0][0], newpoints[0][1]);
                        for (var j = 1; j < newpoints.length; j++) {
                            ctx.lineTo(newpoints[j][0], newpoints[j][1]);
                        }
                        ctx.closePath();
                        ctx.fill();
                    }
                }

                function clearall() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0);
                    points = [];
                    masterPoints = [];
                }

                document.querySelector('#clear').addEventListener('click', function (e) {
                    e.preventDefault();
                    clearall();
                    setMyArr([])
                });
                document.querySelector('#clear_btn').addEventListener('click', function (e) {
                    e.preventDefault();
                    clearall();
                    setMyArr([])
                });
                canvas.addEventListener('dragover', function (e) {
                    e.preventDefault();
                });
// on canvas hover, if cursor is crosshair, draw line from last point to cursor
                canvas.addEventListener('mousemove', function (e) {
                    var x = getScaledCoords(e)[0];
                    var y = getScaledCoords(e)[1];
                    // round
                    x = Math.round(x);
                    y = Math.round(y);

                    // update x y coords
                    var xcoord = document.querySelector('#x');
                    var ycoord = document.querySelector('#y');
                    xcoord.innerHTML = x;
                    ycoord.innerHTML = y;

                    if (canvas.style.cursor == 'crosshair') {
                        //ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(img, 0, 0);
                        for (var i = 0; i < points.length - 1; i++) {
                            // draw arc around each point
                            ctx.beginPath();
                            ctx.strokeStyle = rgb_color;
                            ctx.arc(points[i][0], points[i][1], 5, 0, 2 * Math.PI);
                            // fill with white
                            ctx.fillStyle = 'white';
                            ctx.fill();
                            ctx.stroke();
                            drawLine(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1]);
                        }
                        if ((points.length > 0 && drawMode == "polygon") || (points.length > 0 && points.length < 2 && drawMode == "line")) {
                            ctx.beginPath();
                            ctx.strokeStyle = rgb_color;
                            ctx.arc(points[i][0], points[i][1], 5, 0, 2 * Math.PI);
                            // fill with white
                            ctx.fillStyle = 'white';
                            ctx.fill();
                            ctx.stroke();
                            drawLine(points[points.length - 1][0], points[points.length - 1][1], x, y);

                            if (points.length == 2 && drawMode == "line") {
                                // console.log("line");
                                // draw arc around each point
                                ctx.beginPath();
                                ctx.strokeStyle = rgb_color;
                                ctx.arc(points[0][0], points[0][1], 5, 0, 2 * Math.PI);
                                // fill with white
                                ctx.fillStyle = 'white';
                                ctx.fill();
                                ctx.stroke();
                                masterPoints.push(points);
                                points = [];
                            }
                        }
                        var parentPoints = [];

                        for (var i = 0; i < masterPoints.length; i++) {
                            parentPoints.push(masterPoints[i]);
                        }
                        parentPoints.push(points);

                        drawAllPolygons();
                    }
                });

                canvas.addEventListener('dblclick', function (e) {
                    // if (e.key === 'Enter') {
                    // console.log(points)
                    canvas.style.cursor = 'default';
                    drawLine(points[0][0], points[0][1], points[points?.length - 1][0], points[points?.length - 1][1]);
                    // fill polygon with color
                    if (drawMode == 'polygon') {
                        ctx.beginPath();
                        ctx.moveTo(points[0][0], points[0][1]);
                        ctx.fillStyle = opaque_color;
                        for (var i = 1; i < points.length; i++) {
                            ctx.lineTo(points[i][0], points[i][1]);
                        }
                        ctx.closePath();
                        ctx.fill();
                        // draw line connecting last two points
                    }
                    masterPoints.push(points);
                    // draw arc around last point
                    ctx.beginPath();
                    ctx.strokeStyle = rgb_color;
                    ctx.arc(points[points.length - 1][0], points[points.length - 1][1], 5, 0, 2 * Math.PI);
                    // fill with white
                    ctx.fillStyle = 'white';
                    ctx.fill();
                    ctx.stroke();
                    points = [];
                    // dont choose a color that has already been chosen
                    var remaining_choices = color_choices.filter(function (x) {
                        return !masterColors.includes(x);
                    });
                    if (remaining_choices.length == 0) {
                        remaining_choices = color_choices;
                    }
                    rgb_color = remaining_choices[Math.floor(Math.random() * remaining_choices.length)];

                    masterColors.push(rgb_color);
                    // setMyArr(masterPoints)
                    // }
                });

                function writePoints(parentPoints) {
                    var normalized = [];

                    // if normalized is true, normalize all points
                    var imgHeight = img.height;
                    var imgWidth = img.width;
                    if (showNormalized) {
                        for (var i = 0; i < parentPoints.length; i++) {
                            var normalizedPoints = [];
                            for (var j = 0; j < parentPoints[i].length; j++) {
                                normalizedPoints.push([
                                    Math.round(parentPoints[i][j][0] / imgWidth * 100) / 100,
                                    Math.round(parentPoints[i][j][1] / imgHeight * 100) / 100
                                ]);
                            }
                            normalized.push(normalizedPoints);
                        }
                        parentPoints = normalized;
                    }


                    var code_template = `
[

${parentPoints.map(function (points) {
                        return `np.array([
                                ${points.map(function (point) {
                            return `[${point[0]}, ${point[1]}]`;
                        }).join(',')}
                                    ])`;
                    }).join(',')}
]
    `;

                    setMyArr(parentPoints)
                    var json_template = `
{
            ${parentPoints.map(function (points) {
                        return `[
            ${points.map(function (point) {
                            return `{"x": ${point[0]}, "y": ${point[1]}}`;
                        }).join(',')}
]`;
                    }).join(',')}
}
    `;
                }

                canvas.addEventListener('click', function (e) {
                    // set cursor to crosshair
                    canvas.style.cursor = 'crosshair';
                    // if line mode and two points have been drawn, add to masterPoints
                    if (drawMode == 'line' && points.length == 2) {
                        masterPoints.push(points);
                        points = [];
                    }
                    var x = getScaledCoords(e)[0];
                    var y = getScaledCoords(e)[1];
                    x = Math.round(x);
                    y = Math.round(y);

                    points.push([x, y]);
                    ctx.beginPath();
                    ctx.strokeStyle = rgb_color;
                    // add rgb_color to masterColors

                    if (masterColors.length == 0) {
                        masterColors.push(rgb_color);
                    }

                    ctx.arc(x, y, 155, 0, 2 * Math.PI);
                    // concat all points into one array
                    var parentPoints = [];

                    for (var i = 0; i < masterPoints.length; i++) {
                        parentPoints.push(masterPoints[i]);
                    }
                    // add "points"
                    parentPoints.push(points);
                    writePoints(parentPoints);
                });
            })
    }

    const sendDots = () => {

        let bigArr = []
        myArr?.map((item, index) => {
            item?.map(item2 => {
                return bigArr.push(item2)
            })
        })

        axios.post(API_PATH + "company/" + localStorage.getItem('id') + "/roi_analytics/create", {
            points: myArr.reduce((acc, item, index) => {
                return [
                    ...acc,
                    ...item.map((item2, index2) => {
                        return {
                            x: item2[0],
                            y: item2[1],
                            order_number: index2 + 1,
                        }
                    })
                ]
            }, []),
            camera_id: sendDataRoi?.camera_id,
            name: sendDataRoi?.name,
            attached_employee_id: sendDataRoi?.attached_employee_id,
            kassa_number: Number(sendDataRoi?.kassa_number),
            roi_type: "employee",
        }, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                toast.success("SUCCEESS")
            })
    }



    const getBuilding = (val) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/building/all" + (val?.length > 0 ? "?search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setOffices(res?.data?.items)
                setSendData({...sendData, buildings_id: res.data.id})

            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getEmployee = (val) => {
        axios.get(API_PATH + "user/company/" + localStorage.getItem('id') + "/user/all", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setUsers(res.data?.items)
            })
            .catch(err => {
                toast.error("Ошибка")
            })

    }
    const getRooms = (id) => {
        getCameras(id)
        setSelectOffices(id)
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/room/" + id + "/all", {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setRooms(res.data?.items)
                setSendData({...sendData, room_id: res.data.id})
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getRoomsSearch = (val) => {
        getCameras(selectOffices)
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/room/" + selectOffices + "/all" + (val?.length > 0 ? "?search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setRooms(res.data?.items)
                setSendData({...sendData, room_id: res.data.id})
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    const getCameras = (id) => {
        setSelectRooms(id)

        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/smartcamera/all?building_id=" + id, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setCameras(res?.data?.items)

            })
            .catch(err => {
                toast.error("Ошибка")
            })
        window.scrollTo(0, 0);

    }
    const getCamerasSearch = (val) => {
        axios.get(API_PATH + "company/" + localStorage.getItem('id') + "/camera/smartcamera/all?building_id=" + selectRooms + (val?.length > 0 ? "?search_str=" + val : ""), {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                setCameras(res?.data?.items)

            })
            .catch(err => {
                toast.error("Ошибка")
            })
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        localStorage.setItem("sec", "")
        getBuilding()
    }, []);


    useEffect(() => {


    }, [message])

    return (
        <div className="live-page">
            <div className="employees-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="left-head">
                        <h6>ROI Visitor </h6>
                        <p>ROI reviewing</p>
                    </div>
                    <div className="right-head d-flex">
                        <div className="inputs-box mr-16" style={{width: "200px"}}>
                            <Select
                                showSearch
                                placeholder="Select building"
                                optionFilterProp="children"
                                className="w-100"
                                onSearch={getBuilding}
                                onChange={(e) => getRooms(e)}
                                // onChange={(e) => setCountry(e)}
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
                        <div className="inputs-box mr-16" style={{width: "200px"}}>
                            <Select
                                showSearch
                                placeholder="Select room"
                                optionFilterProp="children"
                                className="w-100"
                                onSearch={getRoomsSearch}
                                onChange={(e) => getCameras(e)}
                                // onChange={(e) => setCountry(e)}
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={rooms?.map((item) => {
                                    return {
                                        value: item.id,
                                        label:
                                        item?.name
                                    };
                                })}
                            />
                        </div>
                        <div className="inputs-box" style={{width: "200px"}}>
                            <Select
                                showSearch
                                placeholder="Select camera"
                                optionFilterProp="children"
                                className="w-100"
                                onSearch={getCamerasSearch}
                                onChange={(e) => {
                                    drawroi(e)
                                    getEmployee()
                                    setSendDataRoi({
                                        ...sendDataRoi,
                                        camera_id: e
                                    })
                                    setCamId(true)
                                }}

                                // onChange={(e) => setCountry(e)}
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={cameras?.map((item) => {
                                    return {
                                        value: item.id,
                                        label:
                                        item?.name
                                    };
                                })}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="live-page-box">
                <div className="live-page-box-header">
                    <div className="d-flex justify-content-between  ">
                        <div className="left-pair-items">
                            {/*<video src="http://43.202.168.206:8080/stream/camera1/index.m3u8" autoPlay controls></video>*/}
                            {
                                selectCameras ? <ReactPlayer url={selectCameras}
                                                             className="w-100 h-100 " style={{borderRadius: "8px"}}
                                                             playing={true} muted/>
                                    :
                                    ""
                            }
                        </div>

                    </div>
                </div>

                <div className="camera-get-dots-header-new">
                    <div>
                        <main>
                            <div className="flex">
                                <div className="left">
                                    <div className="canvas-control default-canvas-style">
                                        <canvas id="canvas"></canvas>
                                    </div>
                                </div>
                                {
                                    camId
                                        ?
                                        <div className="right">
                                            <span style={{opacity: "0"}} id="x"></span>
                                            <span style={{opacity: "0"}} id="y"></span>
                                        </div>
                                        :
                                        ""}
                            </div>
                        </main>


                    </div>
                    {
                        camId
                            ?
                            <div className="center-item mb-20">
                                <div className="values-list">

                                    <div className="tit-main d-flex justify-content-between mb-3 align-items-center ">
                                        <h4 className="m-0">ROI list</h4>
                                        <div>
                                            <a href="" id="clear" className="widgetButton-clear text-decoration-none">Clear
                                                all
                                                points</a>
                                        </div>
                                    </div>
                                    <div className="for-scrol-point">
                                        {
                                            myArr?.map((item0, index0) => {
                                                return item0?.map((item, index) => (
                                                    <div className="values">
                                                        <div className=" d-flex">
                                                            <p><img src="/icon/greendot.svg"
                                                                    alt="..."/> Point {index + 1}</p>
                                                        </div>
                                                        <div className="d-flex">
                                                            <p> X = {item[0]}  </p>
                                                            <p className="ml-16"> Y ={item[1]} </p>
                                                        </div>
                                                    </div>
                                                ))
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            :
                            ""}
                </div>
                {
                    camId
                        ?
                        <>
                            <div className="control-roi-boxs d-flex mt-3">
                                <div className="row w-100">
                                    <div className="col-md-3">
                                        <div className="inputs-box">
                                            <label className="font-family-medium">ROI name </label>
                                            <input type="text"
                                                   placeholder="ROI name"
                                                   onChange={(e) => setSendDataRoi({...sendDataRoi, name: e.target.value})}/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="inputs-box mb-0">
                                            <label className="font-family-medium">Assigned employee</label>
                                        </div>
                                        <Select
                                            showSearch
                                            placeholder="Search assigned employee"
                                            optionFilterProp="children"
                                            className="w-100"
                                            onSearch={getEmployee}
                                            onChange={(e) => setSendDataRoi({
                                                ...sendDataRoi,
                                                attached_employee_id: e
                                            })}
                                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                            filterSort={(optionA, optionB) =>
                                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                            }
                                            options={users?.map((item) => {
                                                return {
                                                    value: item.id,
                                                    label:
                                                    item?.last_name + " " + item?.first_name
                                                };
                                            })}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <div className="inputs-box">
                                            <label className="font-family-medium">Cash register number </label>
                                            <input type="number"
                                                   placeholder="Cash register number"
                                                   onChange={(e) => setSendDataRoi({
                                                       ...sendDataRoi,
                                                       kassa_number: e.target.value
                                                   })}/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="inputs-box">
                                            <label className="font-family-medium">ROI type</label>
                                            <FormControl>
                                                <RadioGroup
                                                    row
                                                    value="roi"
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                >
                                                    <FormControlLabel value="roi" control={<Radio/>}
                                                                      label="Employee ROI"/>
                                                </RadioGroup>
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="control-btn-roi">
                                <button type="submit" className="add-btn-video-roi" disabled={!myArr.length}
                                        onClick={sendDots}>Сохранить
                                </button>
                                <button type="submit" className="cancel-btn ml-16" id="clear_btn"
                                        disabled={!myArr.length}>Отменить
                                </button>
                            </div>
                        </>
                        :
                        ""
                }


            </div>
        </div>
    );
};

export default RoiEmployeeAdd;