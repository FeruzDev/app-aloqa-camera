import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Modal,} from "antd";
import {Radio, Space} from 'antd';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../components/const";
import {toast} from "react-toastify";

const DeploymentsDetailModal = (props) => {
    const [fixCon, setFixCon] = useState(null)
    const [configsCam, setConfigsCam] = useState([])

    const sendAll = () => {

        axios.post(API_PATH + "line_crossing_analytics/attach_linecrossing_to_config/",
            {
                "config_id": props.isDeployDetailModalId,
                "line_crossing_analytics_ids": props.configsList
            }, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                toast.success("Добавлено успешно")
                // props.getBuilding()
                props.setIsDeployDetailModal(false)
                props.getConfigCam(props.selectId)
            })
            .catch(err => {
                toast.error("Ошибка")
            })
    }
    var canvas = document.getElementById('canvas');
    var ctx = canvas?.getContext('2d');
    const [myArr, setMyArr] = useState([])
    const [myItem, setMyItem] = useState([])
    const [needData, setNeedData] = useState([])
    const [lineType, setLineType] = useState(false)
    const [mock, setMock] = useState([[581, 358], [1718, 418], [998, 731], [485, 481], [431, 318], [431, 318]])
    const mock2 = [[781, 658], [1218, 118], [598, 331], [385, 281], [431, 318], [631, 918]]
    const [masterPoints, setMasterPoints] = useState([]);
    const params = useParams()
    let color_choices = [
        "#00FF47",
    ];

    let img = new Image();
    let rgb_color = color_choices[Math.floor(Math.random() * color_choices.length)]
    let opaque_color = 'rgba(0, 255, 71, 0.22)';
    let scaleFactor = 1;
    let scaleSpeed = 0.01;
    let points = [];
    let regions = [];

    let masterColors = [];
    let showNormalized = false;
    let drawMode = "polygon";
    let modeMessage = document.querySelector('#mode');
    let coords = document.querySelector('#coords');

    function mainFc(mainMock, id) {
        // console.log(mainMock)
        document.getElementById("canvas").click()

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

        document.getElementById('canvas').addEventListener('click', function (e) {
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
        document.getElementById('canvas').addEventListener('dblclickw', function (e) {
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

        document.getElementById('canvas').addEventListener('click', function (e) {
            // masterPoints.push(mock);
            // console.log("2")
            // console.log(mainMock)
            masterPoints.push(mainMock)
            canvas.style.cursor = 'crosshair';
            ctx.strokeStyle = rgb_color;
            if (masterColors.length == 0) {
                masterColors.push(rgb_color);
            }
            var parentPoints = [];
            parentPoints.push(points);
            writePoints(masterPoints);
        });

    }

    const getConfigCam = (id) => {
        axios.get(API_PATH + "config/deployment/camera/" + params.id + "/" + props.selectId, {headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
            .then(res => {
                // console.log(res.data?.line_crossing_analytics)
                setConfigsCam(res?.data?.line_crossing_analytics?.map((item, index) => {
                    return item?.id
                }))
                // console.log(res?.data?.line_crossing_analytics)
                setTimeout(()=>{
                    // console.log(configsCam)
                }, 1000)

            })
    }

    const onChange = (e) => {
        // console.log(e)
        if (props.configsList.includes(e)){
            props.setConfigList(props.configsList.filter(item => item != e))
        } else {
            props.configsList.push(e)
        }
        // console.log(props.configsList)
    }

    useEffect(() => {


        // getConfigCam()
        props.getConfigCam(props.selectId)
        // console.log(props.configsCam)

    }, [])

    return (
        <Modal title="Добавить конфиг"
               open={props.isDeployDetailModal}
               onCancel={() => props.setIsDeployDetailModal(false)}
               width={1090}
               footer={[
                   <Button key="submit" type="default" onClick={() => props.setIsDeployDetailModal(false)}>
                       Отменить
                   </Button>,
                   <Button key="submit" type="primary" onClick={sendAll}>
                       Добавить
                   </Button>
               ]}
        >
            <div>
                <main>
                    <div className="flex">
                        <div className="left row cam-add-modal-deploy">
                            <div className="col-md-3">
                                <p className="cam-add-modal-deploy-title">
                                    Building A
                                </p>
                                <p className="cam-add-modal-deploy-title">
                                    Room 001
                                </p>
                                <p className="cam-add-modal-deploy-title">
                                    Камера над дверю
                                </p>
                                <div className="check-list-main mt-4">
                                    {
                                        props.configs?.map((item, index) => (
                                            <div className="check-list-main-item" key={index}>
                                                {/*<input typeof="checkbox" value={item} type="checkbox"*/}
                                                {/*/>*/}

                                                <input type="checkbox" defaultChecked={item?.is_true} onClick={(e) => onChange(item?.id)}/>
                                                <button className="check-list-main-item-span"
                                                        onClick={() => {
                                                            document.getElementById("canvas").click()
                                                            mainFc([[item?.x1d,  item?.y1d], [item?.x2d, item?.y2d]], item?.camera_id)
                                                            mainFc([[item?.x1c, item?.y1c], [item?.x2c, item?.y2c]], item?.camera_id)
                                                            setTimeout(() => {
                                                                document.getElementById("canvas").click()
                                                                document.getElementById("canvas").click()
                                                            }, 300)
                                                        }}
                                                        type="button"
                                                >
                                                    Option {index + 1}
                                                </button>
                                            </div>
                                        ))
                                    }
                                    {/*<div className="check-list-main-item">*/}
                                    {/*    <input type="checkbox"/>*/}
                                    {/*    <button className="check-list-main-item-span"*/}
                                    {/*            onClick={() => {*/}
                                    {/*                mainFc(mock2)*/}


                                    {/*            }}*/}
                                    {/*            type="submit"*/}
                                    {/*    >*/}
                                    {/*        Option A*/}
                                    {/*    </button>*/}
                                    {/*</div>*/}

                                </div>
                            </div>
                            <div className="col-md-9">
                                <canvas id="canvas"></canvas>
                            </div>
                            <div className="canvas-control">
                            </div>
                        </div>
                        <div className="right opacity-0 position-absolute">
                            <span style={{opacity: "0"}} id="x"></span>
                            <span style={{opacity: "0"}} id="y"></span>
                        </div>
                    </div>
                </main>
            </div>
        </Modal>
    );
};

export default DeploymentsDetailModal;