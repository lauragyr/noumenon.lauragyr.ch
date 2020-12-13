"using strict"

//data-stuff
let gegebenAntworten = 0;
let surveyData = [];


//parameter-stuff
let possibleParameters;
let lastQuestionAnswered = false;
let timeoutControl;
let rotationControl;
window.printed = false;


possibleParameters = {}

function resetAllParameters() {
    possibleParameters = {
        colorR: 0,
        colorG: 0,
        colorB: 0,
        angle: 1,
        pos: 60,
        npoints: 25,
        radius: 60,
        distance: 0.1,
        bgColor: "#ffffff",
        generalAngle: 1,
        alpha: 150,
        alphaStep: 1
    }
    lastQuestionAnswered = false;
    console.log(lastQuestionAnswered);
}
resetAllParameters();



function setupCanvas() {
    this.createCanvas(500, 500);
    p5sketch.frameRate(3);
    p5sketch.strokeWeight(0);
    //numbers for visuals on startscreen
    /*var today = new Date();
    let labelingNoumenon = document.getElementById("notDetectedBox");
    let options = {
        year: "2-digit",
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }
    let name = "Das ist Noumenon<br>" + today.toLocaleString("de-DE", options);
    nameNew = name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    labelingNoumenon.innerHTML = nameNew;*/
}

// which one is the last object
function pullData() {
    if (gegebenAntworten != Object.keys(currentAnswerSwitchData).length) {
        gegebenAntworten = Object.keys(currentAnswerSwitchData).length;
        possibleParameters.alpha = 50;
    }

    surveyData = [
        currentAnswerSwitchData[0],
        currentAnswerSwitchData[1],
        currentAnswerSwitchData[2],
        currentAnswerSwitchData[3],
        currentAnswerSwitchData[4],
        currentAnswerSwitchData[5],
        currentAnswerSwitchData[6],
        currentAnswerSwitchData[7],
        currentAnswerSwitchData[8],
        currentAnswerSwitchData[9],
        currentAnswerSwitchData[10],
        currentAnswerSwitchData[11],
        currentAnswerSwitchData[12],
        currentAnswerSwitchData[13]
    ];
}

function clear() {
    window.clearTimeout(timeoutControl);
    timeoutControl = undefined;
    window.clearTimeout(rotationControl);
    rotationControl = undefined;
    p5sketch.clear();
    resetAnswers();
    resetAllParameters();
}

function drawNoumenon() {
    p5sketch.translate(p5sketch.width / 2, p5sketch.height / 2);
    p5sketch.scale(0.7);
    pullData();


    //clearing canvas after generating visual – click on start button
    if (surveyData[0] === 0) {
        window.printed = false
        defaultCanvas0.classList.remove("rotation");

        clear();
        return;
    }

    //when qustionnaire is done and goes back to start
    if (currentAnswerSwitchData.length === (14)) {
        if (rotationControl === undefined) {
            rotationControl = window.setTimeout(() => {
                window.printed = false
                document.getElementById('defaultCanvas0');
                defaultCanvas0.classList.add("rotation");
            }, 5000);
        }

        p5sketch.copy(0, 500, 500, 500, 0, 50, 50, 50);


        //resetAllParameters();
        //clear();
        //return;
    }

    //writing png and printing functions.
    if (surveyData[0] === -2) {
        if (window.printed) return
        window.printed = true

        var dataURL = document.querySelector('.p5Canvas').toDataURL("image/png");
        document.getElementById('image').value = dataURL;
        document.forms["form1"].submit()

        resetAllParameters();
        return;
    }

    //stop drawing after last question with 5 sec. interval
    if (surveyData[13] != undefined) {
        if (timeoutControl === undefined) {
            timeoutControl = window.setTimeout(() => { lastQuestionAnswered = true; }, 5000);
        }
    }

    overwriteEachAnswer();
    visualize();
}

//create polygon
function polygon(x, y, radius, npoints) {
    let angle = p5sketch.TWO_PI / npoints;
    p5sketch.beginShape();
    for (let a = 0; a < p5sketch.TWO_PI; a += angle) {
        let sx = x + p5sketch.cos(a) * radius;
        let sy = y + p5sketch.sin(a) * radius;
        p5sketch.vertex(sx, sy);
    }
    p5sketch.endShape(p5sketch.CLOSE);
}

function overwriteEachAnswer() {
    possibleParameters.generalAngle -= possibleParameters.distance;
    possibleParameters.alpha -= possibleParameters.alphaStep;
    if (possibleParameters.alpha < 0) {
        possibleParameters.alpha = 0;
    }

    surveyData.forEach(
        function handleAnswers(value, index, array) {
            if (typeof(value) != "undefined") {
                // console.log("surveyNumber" + index + "answer:" + value);
                changeValuesBasedOnSurvey(index, value);
            }
        }
    );
}

function setParams(obj) {
    if (typeof(obj.angle) != "undefined") {
        possibleParameters.angle = obj.angle;
    }
    if (typeof(obj.generalAngle) != "undefined") {
        possibleParameters.generalAngle = obj.generalAngle;
    }
    if (typeof(obj.pos) != "undefined") {
        possibleParameters.pos = obj.pos;
    }
    if (typeof(obj.npoints) != "undefined") {
        possibleParameters.npoints = obj.npoints;
    }
    if (typeof(obj.radius) != "undefined") {
        possibleParameters.radius = obj.radius;
    }
    if (typeof(obj.distance) != "undefined") {
        possibleParameters.distance = obj.distance;
    }
    if (typeof(obj.colorR) != "undefined") {
        possibleParameters.colorR = obj.colorR;
    }
    if (typeof(obj.colorG) != "undefined") {
        possibleParameters.colorG = obj.colorG;
    }
    if (typeof(obj.colorB) != "undefined") {
        possibleParameters.colorB = obj.colorB;
    }
    if (typeof(obj.bgColor) != "undefined") {
        possibleParameters.bgColor = obj.bgColor;
    }
    if (typeof(obj.alphaStep) != "undefined") {
        possibleParameters.alphaStep = obj.alphaStep;
    }
}

function visualize() {
    console.log();
    if (lastQuestionAnswered) {
        return;
    }

    document.getElementById("sketch").style.background = possibleParameters.bgColor;

    p5sketch.fill(
        possibleParameters.colorR,
        possibleParameters.colorG,
        possibleParameters.colorB,
        possibleParameters.alpha
    );
    p5sketch.rotate(possibleParameters.generalAngle);

    polygon
        (
            possibleParameters.pos,
            possibleParameters.pos,
            possibleParameters.radius,
            possibleParameters.npoints
        );
}

function changeValuesBasedOnSurvey(surveyNumber, answerNumber) {
    let changedParams = {};

    switch (surveyNumber + 1) // 1 - 17
    {
        case 1:
            p5sketch.blendMode(p5sketch.BLEND);
            switch (answerNumber) // 1 - 4 oder 6
            {
                case 6:
                    changedParams.pos = 40;
                    changedParams.radius = 40;
                    changedParams.npoints = 3;
                    changedParams.alphaStep = 3;

                    //rot
                    changedParams.colorR = p5sketch.random(200, 220);
                    changedParams.colorG = p5sketch.random(20, 40);
                    changedParams.colorB = p5sketch.random(20, 40);
                    break;
                case 1:
                    changedParams.pos = 140;
                    changedParams.radius = 120;
                    changedParams.npoints = 50;
                    changedParams.alphaStep = 3;

                    //blau
                    changedParams.colorR = 0;
                    changedParams.colorG = p5sketch.random(170, 190);
                    changedParams.colorB = p5sketch.random(230, 250);
                    break;
                case 5:
                    changedParams.pos = 60;
                    changedParams.radius = 60;
                    changedParams.npoints = 6;

                    //gelb
                    changedParams.colorR = p5sketch.random(235, 255);
                    changedParams.colorG = p5sketch.random(220, 240);
                    changedParams.colorB = 0;
                    break;
                case 2:
                    changedParams.pos = 120;
                    changedParams.radius = 100;
                    changedParams.npoints = 25;
                    changedParams.alphaStep = 3;

                    //grün
                    changedParams.colorR = p5sketch.random(100, 120);
                    changedParams.colorG = p5sketch.random(230, 250);
                    changedParams.colorB = 0;
                    break;
            }
            break;
        case 2:
            switch (answerNumber) // 0 - 4 oder 6
            {
                case 1:
                    changedParams.pos = 150;
                    changedParams.radius = 99;
                    changedParams.alphaStep = 3;
                    p5sketch.blendMode(p5sketch.DODGE);

                    //rot
                    changedParams.colorR = 255;
                    changedParams.colorG = 0;
                    changedParams.colorB = p5sketch.random(20, 40);
                    break;
                case 2:
                    changedParams.pos = 130;
                    changedParams.radius = 88;
                    changedParams.alphaStep = 3;
                    p5sketch.blendMode(p5sketch.DODGE);

                    //pink
                    changedParams.colorR = p5sketch.random(180, 200);
                    changedParams.colorG = 0;
                    changedParams.colorB = p5sketch.random(80, 100);
                    break;
                case 3:
                    changedParams.pos = 110;
                    changedParams.radius = 77;
                    changedParams.alphaStep = 1;
                    p5sketch.blendMode(p5sketch.OVERLAY);

                    //gelb
                    changedParams.colorR = 255;
                    changedParams.colorG = p5sketch.random(220, 240);
                    changedParams.colorB = 0;
                    break;
                case 4:
                    changedParams.pos = 90;
                    changedParams.radius = 66;
                    changedParams.alphaStep = 1;
                    p5sketch.blendMode(p5sketch.EXCLUSION);

                    //grün
                    changedParams.colorR = p5sketch.random(140, 160);
                    changedParams.colorG = p5sketch.random(235, 255);
                    changedParams.colorB = 0;
                    break;
                case 5:
                    changedParams.pos = 70;
                    changedParams.radius = 55;
                    changedParams.alphaStep = 1;
                    p5sketch.blendMode(p5sketch.MULTIPLY);

                    //violet
                    changedParams.colorR = p5sketch.random(170, 190);
                    changedParams.colorG = 0;
                    changedParams.colorB = p5sketch.random(150, 170);
                    break;
                case 6:
                    changedParams.pos = 50;
                    changedParams.radius = 44;
                    changedParams.alphaStep = 3;
                    p5sketch.blendMode(p5sketch.MULTIPLY);

                    //blau
                    changedParams.colorR = p5sketch.random(60, 80);
                    changedParams.colorG = p5sketch.random(210, 230);
                    changedParams.colorB = 255;
                    break;
            }
            break;
        case 3:
            changedParams.bgColor = "#000000";
            changedParams.alphaStep = 1.5;
            switch (answerNumber) // 0 - 4 oder 6
            {
                case 1:
                    changedParams.pos = 135;
                    changedParams.distance = 0.3;
                    p5sketch.blendMode(p5sketch.DODGE)
                    break;
                case 2:
                    changedParams.pos = 115;
                    changedParams.distance = 0.27;
                    p5sketch.blendMode(p5sketch.OVERLAY)
                    break;
                case 3:
                    changedParams.pos = 95;
                    changedParams.distance = 0.24;
                    p5sketch.blendMode(p5sketch.OVERLAY)
                    break;
                case 4:
                    changedParams.pos = 75;
                    changedParams.distance = 0.21;
                    p5sketch.blendMode(p5sketch.EXCLUSION)
                    break;
                case 5:
                    changedParams.pos = 55;
                    changedParams.distance = 0.18;
                    p5sketch.blendMode(p5sketch.MULTIPLY)
                    break;
                case 6:
                    changedParams.pos = 35;
                    changedParams.distance = 0.15;
                    p5sketch.blendMode(p5sketch.BURN)
                    break;
            }
            break;
        case 4:
            switch (answerNumber) // 1 - 4 oder 6
            {
                case 2:
                    changedParams.pos = 125;
                    changedParams.radius = 110;
                    changedParams.alphaStep = 3;
                    p5sketch.blendMode(p5sketch.DIFFERENCE);
                    break;
                case 5:
                    changedParams.pos = 50;
                    changedParams.radius = 60;
                    p5sketch.blendMode(p5sketch.MULTIPLY);
                    break;
                case 1:
                    changedParams.pos = 145;
                    changedParams.radius = 130;
                    changedParams.alphaStep = 3;
                    p5sketch.blendMode(p5sketch.OVERLAY);
                    break;
                case 6:
                    changedParams.pos = 40
                    changedParams.radius = 40;
                    changedParams.alphaStep = 3;
                    p5sketch.blendMode(p5sketch.EXCLUSION);
                    break;
            }
            break;
        case 5:
            changedParams.alphaStep = 1.5;
            switch (answerNumber) // 0 - 4 oder 6
            {
                case 1:
                    changedParams.pos = 160;
                    changedParams.npoints = 50;
                    p5sketch.blendMode(p5sketch.OVERLAY);

                    //rot
                    changedParams.colorG = p5sketch.random(20, 40);
                    changedParams.colorB = p5sketch.random(30, 50);
                    changedParams.colorR = p5sketch.random(235, 255);
                    break;
                case 2:
                    changedParams.pos = 135;
                    changedParams.npoints = 15;
                    p5sketch.blendMode(p5sketch.OVERLAY);

                    //pink
                    changedParams.colorR = p5sketch.random(180, 200);
                    changedParams.colorG = 0;
                    changedParams.colorB = p5sketch.random(80, 100);
                    break;
                case 3:
                    changedParams.pos = 110;
                    changedParams.npoints = 10;
                    p5sketch.blendMode(p5sketch.BURN);

                    //gelb
                    changedParams.colorB = 0;
                    changedParams.colorR = p5sketch.random(235, 255);
                    changedParams.colorG = p5sketch.random(220, 240);
                    break;
                case 4:
                    changedParams.pos = 85;
                    changedParams.npoints = 8;
                    p5sketch.blendMode(p5sketch.EXCLUSION);

                    //grün
                    changedParams.colorG = p5sketch.random(230, 250);
                    changedParams.colorB = 0;
                    changedParams.colorR = p5sketch.random(100, 120);
                    break;
                case 5:
                    changedParams.pos = 60;
                    changedParams.npoints = 5;
                    p5sketch.blendMode(p5sketch.MULTIPLY);

                    //violet
                    changedParams.colorR = p5sketch.random(170, 190);
                    changedParams.colorG = 0;
                    changedParams.colorB = p5sketch.random(150, 170);
                    break;
                case 6:
                    changedParams.pos = 35;
                    changedParams.npoints = 3;
                    p5sketch.blendMode(p5sketch.MULTIPLY);

                    //blau
                    changedParams.colorG = p5sketch.random(150, 170);
                    changedParams.colorB = p5sketch.random(230, 250);
                    changedParams.colorR = 0;
                    break;
            }
            break;
        case 6:
            changedParams.bgColor = "#2D2D2D";
            changedParams.colorG = 255;
            changedParams.colorR = 255;
            changedParams.colorB = 255;
            p5sketch.blendMode(p5sketch.BLEND);

            switch (answerNumber) // 0 - 4 oder 6
            {
                case 1:
                    changedParams.pos = 140;
                    changedParams.radius = 100;
                    changedParams.alphaStep = 3;
                    break;
                case 2:
                    changedParams.pos = 115;
                    changedParams.radius = 90;
                    break;
                case 3:
                    changedParams.pos = 100;
                    changedParams.radius = 80;
                    break;
                case 4:
                    changedParams.pos = 80;
                    changedParams.radius = 60;
                    break;
                case 5:
                    changedParams.pos = 60;
                    changedParams.radius = 50;
                    changedParams.alphaStep = 3;
                    break;
                case 6:
                    changedParams.pos = 35;
                    changedParams.radius = 40;
                    changedParams.alphaStep = 3;
                    break;
            }
            break;
        case 7:
            changedParams.alphaStep = 3;
            switch (answerNumber) // 0 - 4 oder 6
            {
                case 1:
                    changedParams.pos = 133;
                    changedParams.radius = 110;
                    p5sketch.blendMode(p5sketch.DODGE);

                    //rot
                    changedParams.colorG = p5sketch.random(20, 40);
                    changedParams.colorB = p5sketch.random(30, 50);
                    changedParams.colorR = p5sketch.random(235, 255);
                    break;
                case 2:
                    changedParams.pos = 118;
                    changedParams.radius = 100;
                    p5sketch.blendMode(p5sketch.OVERLAY);

                    //gelb
                    changedParams.colorB = 0;
                    changedParams.colorR = p5sketch.random(235, 255);
                    changedParams.colorG = p5sketch.random(220, 240);
                    break;
                case 5:
                    changedParams.pos = 55;
                    changedParams.radius = 50;
                    p5sketch.blendMode(p5sketch.EXCLUSION)

                    //grün
                    changedParams.colorG = p5sketch.random(230, 250);
                    changedParams.colorB = 0;
                    changedParams.colorR = p5sketch.random(100, 120);
                    break;
                case 6:
                    changedParams.pos = 44;
                    changedParams.radius = 40;
                    p5sketch.blendMode(p5sketch.MULTIPLY)

                    //blau
                    changedParams.colorG = p5sketch.random(150, 170);
                    changedParams.colorB = p5sketch.random(230, 250);
                    changedParams.colorR = 0;
                    break;
            }
            break;
        case 8:
            changedParams.alphaStep = 1.5;
            switch (answerNumber) // 0 - 4 oder 6
            {
                case 6:
                    changedParams.pos = 44;
                    changedParams.radius = 40;
                    changedParams.npoints = 3;
                    p5sketch.blendMode(p5sketch.MULTIPLY);

                    //blau
                    changedParams.colorG = p5sketch.random(150, 170);
                    changedParams.colorB = p5sketch.random(230, 250);
                    changedParams.colorR = 0;
                    break;
                case 1:
                    changedParams.pos = 122;
                    changedParams.radius = 80;
                    changedParams.npoints = 50;
                    p5sketch.blendMode(p5sketch.OVERLAY);

                    //rot
                    changedParams.colorG = p5sketch.random(20, 40);
                    changedParams.colorB = p5sketch.random(30, 50);
                    changedParams.colorR = p5sketch.random(235, 255);
                    break;
                case 5:
                    changedParams.pos = 55;
                    changedParams.radius = 50;
                    changedParams.npoints = 6;
                    p5sketch.blendMode(p5sketch.EXCLUSION);

                    //grün
                    changedParams.colorG = p5sketch.random(230, 250);
                    changedParams.colorB = 0;
                    changedParams.colorR = p5sketch.random(100, 120);
                    break;
                case 2:
                    changedParams.pos = 100;
                    changedParams.radius = 70;
                    changedParams.npoints = 20;
                    p5sketch.blendMode(p5sketch.DODGE);

                    //gelb
                    changedParams.colorB = 0;
                    changedParams.colorR = p5sketch.random(235, 255);
                    changedParams.colorG = p5sketch.random(220, 240);
                    break;
            }
            break;
        case 9:
            changedParams.bgColor = "#ffffff";
            switch (answerNumber) // 0 - 4 oder 6
            {
                case 1:
                    changedParams.pos = 60;
                    changedParams.radius = 30;
                    changedParams.alphaStep = 3;
                    p5sketch.blendMode(p5sketch.BURN);

                    //blau
                    changedParams.colorR = 0;
                    changedParams.colorG = p5sketch.random(170, 190);
                    changedParams.colorB = p5sketch.random(230, 250);
                    break;
                case 2:
                    changedParams.pos = 75;
                    changedParams.radius = 40;
                    p5sketch.blendMode(p5sketch.BURN);

                    //violet
                    changedParams.colorR = p5sketch.random(170, 190);
                    changedParams.colorG = 0;
                    changedParams.colorB = p5sketch.random(150, 170);
                    break;
                case 3:
                    changedParams.pos = 90;
                    changedParams.radius = 50;
                    p5sketch.blendMode(p5sketch.DODGE);

                    //grün
                    changedParams.colorG = p5sketch.random(230, 250);
                    changedParams.colorB = 0;
                    changedParams.colorR = p5sketch.random(100, 120);
                    break;
                case 4:
                    changedParams.pos = 105;
                    changedParams.radius = 80;
                    p5sketch.blendMode(p5sketch.EXCLUSION);

                    //gelb
                    changedParams.colorB = 0;
                    changedParams.colorR = p5sketch.random(235, 255);
                    changedParams.colorG = p5sketch.random(220, 240);
                    break;
                case 5:
                    changedParams.pos = 115;
                    changedParams.radius = 90;
                    p5sketch.blendMode(p5sketch.EXCLUSION);

                    //pink
                    changedParams.colorR = p5sketch.random(180, 200);
                    changedParams.colorG = 0;
                    changedParams.colorB = p5sketch.random(80, 100);
                    break;
                case 6:
                    changedParams.pos = 135;
                    changedParams.radius = 100;
                    changedParams.alphaStep = 3;
                    p5sketch.blendMode(p5sketch.MULTIPLY);

                    //rot
                    changedParams.colorG = p5sketch.random(20, 40);
                    changedParams.colorB = p5sketch.random(30, 50);
                    changedParams.colorR = p5sketch.random(235, 255);
                    break;
            }
            break;
        case 10:
            switch (answerNumber) // 0 - 4 oder 6
            {
                case 1:
                    changedParams.pos = 135;
                    changedParams.radius = 110;
                    changedParams.distance = 0.3;
                    changedParams.alphaStep = 3;
                    p5sketch.blendMode(p5sketch.DODGE);
                    break;
                case 2:
                    changedParams.pos = 115;
                    changedParams.radius = 100;
                    changedParams.distance = 0.27;
                    changedParams.alphaStep = 3;
                    p5sketch.blendMode(p5sketch.DODGE);
                    break;
                case 3:
                    changedParams.pos = 95;
                    changedParams.radius = 90;
                    changedParams.distance = 0.24;
                    changedParams.alphaStep = 1;
                    p5sketch.blendMode(p5sketch.OVERLAY);
                    break;
                case 4:
                    changedParams.pos = 75;
                    changedParams.radius = 70;
                    changedParams.distance = 0.21;
                    changedParams.alphaStep = 1;
                    p5sketch.blendMode(p5sketch.EXCLUSION);
                    break;
                case 5:
                    changedParams.pos = 55;
                    changedParams.radius = 50;
                    changedParams.distance = 0.18;
                    changedParams.alphaStep = 2.5;
                    p5sketch.blendMode(p5sketch.DIFFERENCE);
                    break;
                case 6:
                    changedParams.pos = 35;
                    changedParams.radius = 30;
                    changedParams.distance = 0.15;
                    changedParams.alphaStep = 3;
                    p5sketch.blendMode(p5sketch.MULTIPLY);
                    break;
            }
            break;
        case 11:
            changedParams.bgColor = "#2D2D2D";
            switch (answerNumber) // 0 - 4 oder 6
            {
                case 1:
                    changedParams.pos = 142;
                    changedParams.radius = 115;
                    changedParams.distance = 0.3;
                    changedParams.alphaStep = 3;
                    p5sketch.blendMode(p5sketch.MULTIPLY);
                    break;
                case 2:
                    changedParams.pos = 112;
                    changedParams.radius = 105;
                    changedParams.distance = 0.27;
                    changedParams.alphaStep = 3;
                    p5sketch.blendMode(p5sketch.EXCLUSION);
                    break;
                case 3:
                    changedParams.pos = 102;
                    changedParams.radius = 95;
                    changedParams.distance = 0.24;
                    changedParams.alphaStep = 1;
                    p5sketch.blendMode(p5sketch.EXCLUSION);
                    break;
                case 4:
                    changedParams.pos = 82;
                    changedParams.radius = 65;
                    changedParams.distance = 0.21;
                    changedParams.alphaStep = 1;
                    p5sketch.blendMode(p5sketch.OVERLAY);
                    break;
                case 5:
                    changedParams.pos = 62;
                    changedParams.radius = 55;
                    changedParams.distance = 0.18;
                    changedParams.alphaStep = 2.5;
                    p5sketch.blendMode(p5sketch.OVERLAY);
                    break;
                case 6:
                    changedParams.pos = 50;
                    changedParams.radius = 45;
                    changedParams.distance = 0.15;
                    changedParams.alphaStep = 2.5;
                    p5sketch.blendMode(p5sketch.DODGE);
                    break;
            }
            break;
        case 12:
            p5sketch.blendMode(p5sketch.BLEND);
            switch (answerNumber) // 0 - 4 oder 6
            {
                case 1:
                    changedParams.pos = 153;
                    changedParams.radius = 100;
                    changedParams.npoints = 50;
                    changedParams.distance = 0.2;
                    changedParams.alphaStep = 3;
                    break;
                case 6:
                    changedParams.pos = 53;
                    changedParams.radius = 40;
                    changedParams.npoints = 3;
                    changedParams.distance = 0.05;
                    changedParams.alphaStep = 1;
                    break;
                case 2:
                    changedParams.pos = 115;
                    changedParams.radius = 80;
                    changedParams.npoints = 25;
                    changedParams.distance = 0.15;
                    changedParams.alphaStep = 1;
                    break;
                case 5:
                    changedParams.pos = 73;
                    changedParams.radius = 60;
                    changedParams.npoints = 5;
                    changedParams.distance = 0.1;
                    changedParams.alphaStep = 2.5;
                    break;
            }
            break;
        case 13:
            changedParams.alphaStep = 1.5;
            changedParams.bgColor = "#ffffff";
            switch (answerNumber) // 0 - 4 oder 6
            {
                case 1:
                    changedParams.pos = 128;
                    p5sketch.blendMode(p5sketch.MULTIPLY);

                    //rot
                    changedParams.colorG = p5sketch.random(20, 40);
                    changedParams.colorB = p5sketch.random(30, 50);
                    changedParams.colorR = p5sketch.random(200, 220);
                    break;
                case 2:
                    changedParams.pos = 108;
                    p5sketch.blendMode(p5sketch.EXCLUSION);

                    //pink
                    changedParams.colorG = 0;
                    changedParams.colorR = p5sketch.random(230, 250);
                    changedParams.colorB = p5sketch.random(80, 100);
                    break;
                case 3:
                    changedParams.pos = 88;
                    p5sketch.blendMode(p5sketch.BURN);

                    //gelb
                    changedParams.colorB = 0;
                    changedParams.colorR = p5sketch.random(235, 255);
                    changedParams.colorG = p5sketch.random(200, 220);
                    break;
                case 4:
                    changedParams.pos = 68;
                    p5sketch.blendMode(p5sketch.OVERLAY);

                    //grün
                    changedParams.colorG = p5sketch.random(210, 230);
                    changedParams.colorB = 0;
                    changedParams.colorR = p5sketch.random(120, 140);
                    break;
                case 5:
                    changedParams.pos = 48;
                    p5sketch.blendMode(p5sketch.OVERLAY);

                    //violet
                    changedParams.colorR = p5sketch.random(100, 120);
                    changedParams.colorG = p5sketch.random(30, 50);
                    changedParams.colorB = p5sketch.random(100, 120);
                    break;
                case 6:
                    changedParams.pos = 28;
                    p5sketch.blendMode(p5sketch.DODGE);

                    //blau
                    changedParams.colorG = p5sketch.random(170, 190);
                    changedParams.colorB = p5sketch.random(230, 250);
                    changedParams.colorR = 0;
                    break;
            }
            break;
        case 14:
            switch (answerNumber) // 0 - 4 oder 6
            {
                case 1:
                    changedParams.pos = 124;
                    changedParams.radius = 100;
                    changedParams.distance = 0.3;
                    changedParams.alphaStep = 3;
                    p5sketch.blendMode(p5sketch.OVERLAY);
                    break;
                case 2:
                    changedParams.pos = 110;
                    changedParams.radius = 90;
                    changedParams.distance = 0.25;
                    p5sketch.blendMode(p5sketch.OVERLAY);
                    break;
                case 5:
                    changedParams.pos = 64;
                    changedParams.radius = 50;
                    changedParams.distance = 0.15;
                    p5sketch.blendMode(p5sketch.MULTIPLY);
                    break;
                case 6:
                    changedParams.pos = 44;
                    changedParams.radius = 40;
                    changedParams.distance = 0.1;
                    p5sketch.blendMode(p5sketch.MULTIPLY);
                    break;
            }
            break;
        default:
            break;
    }
    setParams(changedParams);
}