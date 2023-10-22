import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_PATH, CONFIG} from "../../components/const";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";

const DepMainModal = () => {
    const [myArr, setMyArr] = useState([])
    const [myItem, setMyItem] = useState([])
    const [lineType, setLineType] = useState(false)
    const mock = [[581, 358], [1718, 418], [998, 731], [485, 481], [431, 318], [431, 318]]
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

    useEffect(() => {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        axios.get(API_PATH + "camera/" + params.id, CONFIG)
            .then(res => {
                setMyItem(res.data)

                // if user presses L key, change draw mode to line and change cursor to cross hair
                document.getElementById('lineType').addEventListener('click', function (e) {
                    setLineType(true)
                    drawMode = "line";
                    canvas.style.cursor = 'crosshair';
                });
                document.getElementById('polygonType').addEventListener('click', function (e) {
                    setLineType(false)
                    drawMode = "polygon";
                    canvas.style.cursor = 'crosshair';
                });
                // if user presses L key, change draw mode to line and change cursor to cross hair
                // document.getElementById('lineType').addEventListener('keydown', function (e) {
                //     if (e.key == 'l') {
                //         setLineType(true)
                //         drawMode = "line";
                //         canvas.style.cursor = 'crosshair';
                //     }
                //     if (e.key == 'p') {
                //         setLineType(false)
                //         drawMode = "polygon";
                //         canvas.style.cursor = 'crosshair';
                //     }
                // });


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
                    scaleFactor = 0.3;
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
                });


                canvas.addEventListener('dragover', function (e) {
                    e.preventDefault();
                });


// on canvas hover, if cursor is crosshair, draw line from last point to cursor
                canvas.addEventListener('click', function (e) {
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
                                console.log("line");
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
                    console.log(points)
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
                    // document.querySelector('#python').innerHTML = code_template;

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
                    // document.querySelector('#json').innerHTML = json_template;
                }
                //
                // canvas.addEventListener('click', function (e) {
                //     // set cursor to crosshair
                //     console.log("WwwwwW")
                //     masterPoints.push(mock);
                //
                //     canvas.style.cursor = 'crosshair';
                //     // if line mode and two points have been drawn, add to masterPoints
                //     if (drawMode == 'line' && points.length == 2) {
                //         masterPoints.push(points);
                //         points = [];
                //     }
                //     var x = getScaledCoords(e)[0];
                //     var y = getScaledCoords(e)[1];
                //     x = Math.round(x);
                //     y = Math.round(y);
                //
                //     points.push([x, y]);
                //     ctx.beginPath();
                //     ctx.strokeStyle = rgb_color;
                //     // add rgb_color to masterColors
                //
                //     if (masterColors.length == 0) {
                //         masterColors.push(rgb_color);
                //     }
                //
                //     ctx.arc(x, y, 155, 0, 2 * Math.PI);
                //     // concat all points into one array
                //     var parentPoints = [];
                //
                //     for (var i = 0; i < masterPoints.length; i++) {
                //         parentPoints.push(masterPoints[i]);
                //     }
                //     // add "points"
                //     parentPoints.push(points);
                //
                //     writePoints(parentPoints);
                // });
                //


                canvas.addEventListener('click', function (e) {
                    // set cursor to crosshair
                    console.log("WwwwwW")
                    masterPoints.push(mock);

                    canvas.style.cursor = 'crosshair';
                    // if line mode and two points have been drawn, add to masterPoints
                    // if (drawMode == 'line' && points.length == 2) {
                    //     masterPoints.push(points);
                    //     points = [];
                    // }
                    // var x = getScaledCoords(e)[0];
                    // var y = getScaledCoords(e)[1];
                    // x = Math.round(x);
                    // y = Math.round(y);
                    //
                    // points.push([x, y]);
                    // ctx.beginPath();
                    ctx.strokeStyle = rgb_color;
                    // // add rgb_color to masterColors
                    //
                    if (masterColors.length == 0) {
                        masterColors.push(rgb_color);
                    }
                    //
                    // ctx.arc(x, y, 155, 0, 2 * Math.PI);
                    // // concat all points into one array
                    var parentPoints = [];
                    //
                    // for (var i = 0; i < masterPoints.length; i++) {
                    //     parentPoints.push(masterPoints[i]);
                    // }
                    // // add "points"
                    parentPoints.push(points);

                    writePoints(parentPoints);
                });


                // document.querySelector('#normalize_checkbox').addEventListener('change', function (e) {
                //     showNormalized = e.target.checked;
                //     // normalize all
                //     var parentPoints = [];
                //
                //     for (var i = 0; i < masterPoints.length; i++) {
                //         parentPoints.push(masterPoints[i]);
                //     }
                //
                //     parentPoints.push(points);
                //
                //     writePoints(parentPoints);
                // });
            })
            .finally(() => {
                document.getElementById('canvas').click()
            })
        // return () => document.body.style.zoom = "100%";

        // setTimeout(() => {
        //     document.getElementById('canvas').click()
        // }, 5000)
    }, [])

    const sendDots = () => {


        if (lineType === true) {
            // let arr1 = myArr?.map((item2, index2)=>{
            //  return   item2.reduce((acc, item, index) => {
            //         return {...acc, ["x" + (index + 1)]: item[0], ["y" + (index + 1)]: item[1]}
            //     }, {})
            // })
            console.log(myArr[0][0][0])
            axios.post(API_PATH + "line_crossing_analytics/create",
                {
                    x1d: myArr[0][0][0],
                    y1d: myArr[0][0][1],
                    x2d: myArr[0][1][0],
                    y2d: myArr[0][1][1],
                    // x1c: myArr[1][0][0],
                    // y1c: myArr[1][0][1],
                    x1c: (myArr[0][0][0] + myArr[0][1][0]) / 2,
                    y1c: (myArr[0][0][1] + myArr[0][1][1]) / 2,
                    x2c: myArr[1][1][0],
                    y2c: myArr[1][1][1],
                    camera_id: Number(params.id),
                    name: myItem?.name
                },
                CONFIG)
                .then(res => {
                    toast.success("SUCCEESS LINE")
                })
        } else if (lineType === false) {

            let bigArr = []
            myArr?.map((item, index) => {
                item?.map(item2 => {
                    return bigArr.push(item2)
                })
            })
            // setMyArr(myArr.filter((item10, index10) => {
            //     return index === 0 ? item.filter((item11, index11) => {
            //         return index11 === index ? [e.target.value, item11[1]]: item11
            //     }) : item
            // }))
            let arr1 = bigArr.reduce((acc, item, index) => {
                return {...acc, ["x" + (index + 1)]: item[0], ["y" + (index + 1)]: item[1]}
            }, {})
            axios.post(API_PATH + "roi_analytics/create", {...arr1, camera_id: params.id, name: myItem?.name}, CONFIG)
                .then(res => {
                    toast.success("SUCCEESS")
                })

        }
    }
    const changeDots = (e, index) => {
        let newArr = myArr[0][index][0] = e.target.value
    }
    const selectType = (bool, type) => {
        var canvas = document.getElementById('canvas');
        drawMode = "line";
        setLineType(true)
        drawMode = "line";
        canvas.style.cursor = 'crosshair';
        if (bool) {
            drawMode = "line";

            // modeMessage.innerHTML = "Draw Mode: Line (press <kbd>p</kbd> to change to polygon drawing)";
        }
        if (!bool) {
            drawMode = "polygon";
            // modeMessage.innerHTML = 'Draw Mode: Polygon (press <kbd>l</kbd> to change to line drawing)';
        }
    }
    return (
        <div>
            <div className="camera-get-dots-header">
                <div className="left-item">
                    <button id="polygonType" className={lineType ? "" : "active-type"}>Region of
                        interest analytics
                    </button>
                    <button id="lineType" className={lineType ? "active-type" : ""}>Line crossing
                        analytics
                    </button>
                </div>
                <div className="center-item">
                    <div className="values-list">
                        {
                            myArr?.map((item0, index0) => {
                                return item0?.map((item, index) => (
                                    <div className="values">
                                        <p> x{index + 1}: <span>{item[0]} </span></p>
                                        <p> y{index + 1}: <span>{item[1]}</span></p>
                                    </div>
                                ))
                            })
                        }
                    </div>
                </div>
                <div className="right-item">

                    <button type="button" disabled={myArr.length ? false : true} onClick={sendDots}>Сохранить</button>
                </div>
            </div>
            <main>

                <div className="flex">
                    <div className="left">
                        <div style={{marginTop: "20px", marginLeft: "20px"}}>
                            <a href="" id="clear" className="widgetButton text-decoration-none">Clear Draws</a>
                            <button onClick={() => document.getElementById("canvas").click()} type="button">nimadir</button>
                        </div>
                        <div className="canvas-control">
                            <canvas id="canvas"></canvas>
                        </div>

                    </div>
                    <div className="right">
                        <span style={{opacity: "0"}} id="x"></span>
                        <span style={{opacity: "0"}} id="y"></span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DepMainModal;