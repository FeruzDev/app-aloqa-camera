import React, {useEffect} from 'react';

const DetectCamera = () => {
    useEffect(()=>{

    var canvas = document.getElementById("mycanvas");
    var context = canvas?.getContext("2d");
    var infoPoints = document.querySelector(".points-   info");
    var picker = document.querySelector("#inputcam")
    var zoomWindow = document.querySelector(".zoom")
    var clickPoints = [];

    canvas?.addEventListener("click", evt => {
        clickPoints.push([evt.offsetX, evt.offsetY])
        drawDot(evt.offsetX, evt.offsetY)
        infoPoints.textContent = clickPoints.join(" : ")
        if (clickPoints.length >= 4) drawPoly(clickPoints)
    })

    picker.addEventListener("change", evt => {
        newImage(evt?.target?.value)
    })

// draw polygon from a list of 4 points
    const drawPoly = points => {
        context.lineWidth = 2
        context.clearRect(0, 0, canvas.width, canvas.height)
        var split = points.splice(0, 4)

        context.beginPath()
        context.moveTo(split[0][0], split[0][1])
        for(let i of split.reverse()) context.lineTo(i[0], i[1])
        context.stroke()
    }

// draw a dot.
    const drawDot = (x, y) => {
        context.beginPath()
        context.arc(x, y, 4, 0, 2*Math.PI);
        context.fill()
    }

// resize the canvas for the image
    var biggest = 500;
    var axis
    const resize = (x, y) => {
        // so that the biggest axis is always {biggest} px
        var ratio = x > y ? x / biggest : y / biggest
        axis = [x / ratio, y / ratio]
        canvas.height = axis[0]
        canvas.width = axis[1]
    }


// load a new image
    var rawImg = new Image()
    const newImage = src => {
        rawImg.src = src
        rawImg.onload = () => {
            canvas.style.backgroundImage = "url(" + src + ")"
            zoomWindow.style.backgroundImage = "url(" + src + ")"
            // console.log(canvas.style.backgroundImage, zoomWindow.style.backgroundImage)
            resize(rawImg.height, rawImg.width)
        };
    }

    newImage("https://previews.123rf.com/images/marysan9/marysan91905/marysan9190500016/122553443-set-of-realistic-vector-banana-branch-of-bananas-half-peeled-banan-and-single-banana-isolated-on-whi.jpg")

// move the preview to the mouse
    canvas.addEventListener("mousemove", (evt) => {
        drawZoom(evt.clientX, evt.clientY)
    })

    const drawZoom = (x, y) => {
        zoomWindow.style.backgroundPosition = x + "% " + y + "%"
        zoomWindow.position.top = x + "px"
    }

    }, [])
    return (
        <div>
            <div className="info">
                <p className="points-info">No points yet</p>
                <input type="text" id="inputcam" placeholder="Image URL" />
            </div>
            <div className="output">
                <canvas id="mycanvas" width="300" height="300"></canvas>
                <div className="zoom"></div>
            </div>
        </div>
    );
};

export default DetectCamera;