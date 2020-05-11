//data-stuff
let gegebenAntworten;
let data;
let surveyData = [];


//parameter-stuff
let possibleParameters;
let lastQuestionAnswered = false;
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
        abe
        bgColor: "#ffffff",
        generalAngle: 1,
        alpha: 150,
        alphaStep: 1
    }
    lastQuestionAnswered = false;
}
resetAllParameters();

function setup() {
    let canvas = createCanvas(1000, 1000);
    canvas.parent('sketch');
    noStroke();
    background(0);


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
function drawData(currentAnswerSwitchData) {
    if (gegebenAntworten != Object.keys(data).length) {
        gegebenAntworten = Object.keys(data).length;
        possibleParameters.alpha = 50;
    }

    surveyData = [
        data.antwort1,
        data.antwort2,
        data.antwort3,
        data.antwort4,
        data.antwort5,
        data.antwort6,
        data.antwort7,
        data.antwort8,
        data.antwort9,
        data.antwort10,
        data.antwort11,
        data.antwort12,
        data.antwort13,
        data.antwort14,
    ];
}

function draw() {
    frameRate(3);
    translate(width / 2, height / 2);
    scale(3.2);
    drawData();

    //clearing canvas after generating visual – click on start button
    if (surveyData[0] === 0) {
        window.printed = false
        defaultCanvas0.classList.remove("rotation");


        resetAllParameters();
        return clear();
    }

    //when qustionnaire is done and goes back to start
    if (surveyData[0] === -1) {
        window.printed = false
        document.getElementById('defaultCanvas0');
        defaultCanvas0.classList.add("rotation");

        resetAllParameters();
        return;
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
        setTimeout(function() {
            lastQuestionAnswered = true;
        }, 5000);
    }
    overwriteEachAnswer();
    visualize();
}

//create polygon
function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
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
                //console.log("surveyNumber " + index + " answer: " + value);
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
    if (lastQuestionAnswered) {
        return;
    }

    document.body.style.background = possibleParameters.bgColor;

    fill
        (
            possibleParameters.colorR,
            possibleParameters.colorG,
            possibleParameters.colorB,
            possibleParameters.alpha
        );
    rotate(possibleParameters.generalAngle);

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
            blendMode(BLEND);
            switch (answerNumber) // 1 - 4 oder 6
            {
                case 6:
                    changedParams.pos = 40;
                    changedParams.radius = 40;
                    changedParams.npoints = 3;
                    changedParams.alphaStep = 3;

                    //rot
                    changedParams.colorR = random(200, 220);
                    changedParams.colorG = random(20, 40);
                    changedParams.colorB = random(20, 40);
                    break;
                case 1:
                    changedParams.pos = 140;
                    changedParams.radius = 120;
                    changedParams.npoints = 50;
                    changedParams.alphaStep = 3;

                    //blau
                    changedParams.colorR = 0;
                    changedParams.colorG = random(170, 190);
                    changedParams.colorB = random(230, 250);
                    break;
                case 5:
                    changedParams.pos = 60;
                    changedParams.radius = 60;
                    changedParams.npoints = 6;

                    //gelb
                    changedParams.colorR = random(235, 255);
                    changedParams.colorG = random(220, 240);
                    changedParams.colorB = 0;
                    break;
                case 2:
                    changedParams.pos = 120;
                    changedParams.radius = 100;
                    changedParams.npoints = 25;
                    changedParams.alphaStep = 3;

                    //grün
                    changedParams.colorR = random(100, 120);
                    changedParams.colorG = random(230, 250);
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
                    blendMode(DODGE);

                    //rot
                    changedParams.colorR = 255;
                    changedParams.colorG = 0;
                    changedParams.colorB = random(20, 40);
                    break;
                case 2:
                    changedParams.pos = 130;
                    changedParams.radius = 88;
                    changedParams.alphaStep = 3;
                    blendMode(DODGE);

                    //pink
                    changedParams.colorR = random(180, 200);
                    changedParams.colorG = 0;
                    changedParams.colorB = random(80, 100);
                    break;
                case 3:
                    changedParams.pos = 110;
                    changedParams.radius = 77;
                    changedParams.alphaStep = 1;
                    blendMode(OVERLAY);

                    //gelb
                    changedParams.colorR = 255;
                    changedParams.colorG = random(220, 240);
                    changedParams.colorB = 0;
                    break;
                case 4:
                    changedParams.pos = 90;
                    changedParams.radius = 66;
                    changedParams.alphaStep = 1;
                    blendMode(EXCLUSION);

                    //grün
                    changedParams.colorR = random(140, 160);
                    changedParams.colorG = random(235, 255);
                    changedParams.colorB = 0;
                    break;
                case 5:
                    changedParams.pos = 70;
                    changedParams.radius = 55;
                    changedParams.alphaStep = 1;
                    blendMode(MULTIPLY);

                    //violet
                    changedParams.colorR = random(170, 190);
                    changedParams.colorG = 0;
                    changedParams.colorB = random(150, 170);
                    break;
                case 6:
                    changedParams.pos = 50;
                    changedParams.radius = 44;
                    changedParams.alphaStep = 3;
                    blendMode(MULTIPLY);

                    //blau
                    changedParams.colorR = random(60, 80);
                    changedParams.colorG = random(210, 230);
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
                    blendMode(DODGE)
                    break;
                case 2:
                    changedParams.pos = 115;
                    changedParams.distance = 0.27;
                    blendMode(OVERLAY)
                    break;
                case 3:
                    changedParams.pos = 95;
                    changedParams.distance = 0.24;
                    blendMode(OVERLAY)
                    break;
                case 4:
                    changedParams.pos = 75;
                    changedParams.distance = 0.21;
                    blendMode(EXCLUSION)
                    break;
                case 5:
                    changedParams.pos = 55;
                    changedParams.distance = 0.18;
                    blendMode(MULTIPLY)
                    break;
                case 6:
                    changedParams.pos = 35;
                    changedParams.distance = 0.15;
                    blendMode(BURN)
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
                    blendMode(DIFFERENCE);
                    break;
                case 5:
                    changedParams.pos = 50;
                    changedParams.radius = 60;
                    blendMode(MULTIPLY);
                    break;
                case 1:
                    changedParams.pos = 145;
                    changedParams.radius = 130;
                    changedParams.alphaStep = 3;
                    blendMode(OVERLAY);
                    break;
                case 6:
                    changedParams.pos = 40
                    changedParams.radius = 40;
                    changedParams.alphaStep = 3;
                    blendMode(EXCLUSION);
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
                    blendMode(OVERLAY);

                    //rot
                    changedParams.colorG = random(20, 40);
                    changedParams.colorB = random(30, 50);
                    changedParams.colorR = random(235, 255);
                    break;
                case 2:
                    changedParams.pos = 135;
                    changedParams.npoints = 15;
                    blendMode(OVERLAY);

                    //pink
                    changedParams.colorR = random(180, 200);
                    changedParams.colorG = 0;
                    changedParams.colorB = random(80, 100);
                    break;
                case 3:
                    changedParams.pos = 110;
                    changedParams.npoints = 10;
                    blendMode(BURN);

                    //gelb
                    changedParams.colorB = 0;
                    changedParams.colorR = random(235, 255);
                    changedParams.colorG = random(220, 240);
                    break;
                case 4:
                    changedParams.pos = 85;
                    changedParams.npoints = 8;
                    blendMode(EXCLUSION);

                    //grün
                    changedParams.colorG = random(230, 250);
                    changedParams.colorB = 0;
                    changedParams.colorR = random(100, 120);
                    break;
                case 5:
                    changedParams.pos = 60;
                    changedParams.npoints = 5;
                    blendMode(MULTIPLY);

                    //violet
                    changedParams.colorR = random(170, 190);
                    changedParams.colorG = 0;
                    changedParams.colorB = random(150, 170);
                    break;
                case 6:
                    changedParams.pos = 35;
                    changedParams.npoints = 3;
                    blendMode(MULTIPLY);

                    //blau
                    changedParams.colorG = random(150, 170);
                    changedParams.colorB = random(230, 250);
                    changedParams.colorR = 0;
                    break;
            }
            break;
        case 6:
            changedParams.bgColor = "#2D2D2D";
            changedParams.colorG = 255;
            changedParams.colorR = 255;
            changedParams.colorB = 255;
            blendMode(BLEND);

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
                    blendMode(DODGE);

                    //rot
                    changedParams.colorG = random(20, 40);
                    changedParams.colorB = random(30, 50);
                    changedParams.colorR = random(235, 255);
                    break;
                case 2:
                    changedParams.pos = 118;
                    changedParams.radius = 100;
                    blendMode(OVERLAY);

                    //gelb
                    changedParams.colorB = 0;
                    changedParams.colorR = random(235, 255);
                    changedParams.colorG = random(220, 240);
                    break;
                case 5:
                    changedParams.pos = 55;
                    changedParams.radius = 50;
                    blendMode(EXCLUSION)

                    //grün
                    changedParams.colorG = random(230, 250);
                    changedParams.colorB = 0;
                    changedParams.colorR = random(100, 120);
                    break;
                case 6:
                    changedParams.pos = 44;
                    changedParams.radius = 40;
                    blendMode(MULTIPLY)

                    //blau
                    changedParams.colorG = random(150, 170);
                    changedParams.colorB = random(230, 250);
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
                    blendMode(MULTIPLY);

                    //blau
                    changedParams.colorG = random(150, 170);
                    changedParams.colorB = random(230, 250);
                    changedParams.colorR = 0;
                    break;
                case 1:
                    changedParams.pos = 122;
                    changedParams.radius = 80;
                    changedParams.npoints = 50;
                    blendMode(OVERLAY);

                    //rot
                    changedParams.colorG = random(20, 40);
                    changedParams.colorB = random(30, 50);
                    changedParams.colorR = random(235, 255);
                    break;
                case 5:
                    changedParams.pos = 55;
                    changedParams.radius = 50;
                    changedParams.npoints = 6;
                    blendMode(EXCLUSION);

                    //grün
                    changedParams.colorG = random(230, 250);
                    changedParams.colorB = 0;
                    changedParams.colorR = random(100, 120);
                    break;
                case 2:
                    changedParams.pos = 100;
                    changedParams.radius = 70;
                    changedParams.npoints = 20;
                    blendMode(DODGE);

                    //gelb
                    changedParams.colorB = 0;
                    changedParams.colorR = random(235, 255);
                    changedParams.colorG = random(220, 240);
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
                    blendMode(BURN);

                    //blau
                    changedParams.colorR = 0;
                    changedParams.colorG = random(170, 190);
                    changedParams.colorB = random(230, 250);
                    break;
                case 2:
                    changedParams.pos = 75;
                    changedParams.radius = 40;
                    blendMode(BURN);

                    //violet
                    changedParams.colorR = random(170, 190);
                    changedParams.colorG = 0;
                    changedParams.colorB = random(150, 170);
                    break;
                case 3:
                    changedParams.pos = 90;
                    changedParams.radius = 50;
                    blendMode(DODGE);

                    //grün
                    changedParams.colorG = random(230, 250);
                    changedParams.colorB = 0;
                    changedParams.colorR = random(100, 120);
                    break;
                case 4:
                    changedParams.pos = 105;
                    changedParams.radius = 80;
                    blendMode(EXCLUSION);

                    //gelb
                    changedParams.colorB = 0;
                    changedParams.colorR = random(235, 255);
                    changedParams.colorG = random(220, 240);
                    break;
                case 5:
                    changedParams.pos = 115;
                    changedParams.radius = 90;
                    blendMode(EXCLUSION);

                    //pink
                    changedParams.colorR = random(180, 200);
                    changedParams.colorG = 0;
                    changedParams.colorB = random(80, 100);
                    break;
                case 6:
                    changedParams.pos = 135;
                    changedParams.radius = 100;
                    changedParams.alphaStep = 3;
                    blendMode(MULTIPLY);

                    //rot
                    changedParams.colorG = random(20, 40);
                    changedParams.colorB = random(30, 50);
                    changedParams.colorR = random(235, 255);
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
                    blendMode(DODGE);
                    break;
                case 2:
                    changedParams.pos = 115;
                    changedParams.radius = 100;
                    changedParams.distance = 0.27;
                    changedParams.alphaStep = 3;
                    blendMode(DODGE);
                    break;
                case 3:
                    changedParams.pos = 95;
                    changedParams.radius = 90;
                    changedParams.distance = 0.24;
                    changedParams.alphaStep = 1;
                    blendMode(OVERLAY);
                    break;
                case 4:
                    changedParams.pos = 75;
                    changedParams.radius = 70;
                    changedParams.distance = 0.21;
                    changedParams.alphaStep = 1;
                    blendMode(EXCLUSION);
                    break;
                case 5:
                    changedParams.pos = 55;
                    changedParams.radius = 50;
                    changedParams.distance = 0.18;
                    changedParams.alphaStep = 2.5;
                    blendMode(DIFFERENCE);
                    break;
                case 6:
                    changedParams.pos = 35;
                    changedParams.radius = 30;
                    changedParams.distance = 0.15;
                    changedParams.alphaStep = 3;
                    blendMode(MULTIPLY);
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
                    blendMode(MULTIPLY);
                    break;
                case 2:
                    changedParams.pos = 112;
                    changedParams.radius = 105;
                    changedParams.distance = 0.27;
                    changedParams.alphaStep = 3;
                    blendMode(EXCLUSION);
                    break;
                case 3:
                    changedParams.pos = 102;
                    changedParams.radius = 95;
                    changedParams.distance = 0.24;
                    changedParams.alphaStep = 1;
                    blendMode(EXCLUSION);
                    break;
                case 4:
                    changedParams.pos = 82;
                    changedParams.radius = 65;
                    changedParams.distance = 0.21;
                    changedParams.alphaStep = 1;
                    blendMode(OVERLAY);
                    break;
                case 5:
                    changedParams.pos = 62;
                    changedParams.radius = 55;
                    changedParams.distance = 0.18;
                    changedParams.alphaStep = 2.5;
                    blendMode(OVERLAY);
                    break;
                case 6:
                    changedParams.pos = 50;
                    changedParams.radius = 45;
                    changedParams.distance = 0.15;
                    changedParams.alphaStep = 2.5;
                    blendMode(DODGE);
                    break;
            }
            break;
        case 12:
            blendMode(BLEND);
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
                    blendMode(MULTIPLY);

                    //rot
                    changedParams.colorG = random(20, 40);
                    changedParams.colorB = random(30, 50);
                    changedParams.colorR = random(200, 220);
                    break;
                case 2:
                    changedParams.pos = 108;
                    blendMode(EXCLUSION);

                    //pink
                    changedParams.colorG = 0;
                    changedParams.colorR = random(230, 250);
                    changedParams.colorB = random(80, 100);
                    break;
                case 3:
                    changedParams.pos = 88;
                    blendMode(BURN);

                    //gelb
                    changedParams.colorB = 0;
                    changedParams.colorR = random(235, 255);
                    changedParams.colorG = random(200, 220);
                    break;
                case 4:
                    changedParams.pos = 68;
                    blendMode(OVERLAY);

                    //grün
                    changedParams.colorG = random(210, 230);
                    changedParams.colorB = 0;
                    changedParams.colorR = random(120, 140);
                    break;
                case 5:
                    changedParams.pos = 48;
                    blendMode(OVERLAY);

                    //violet
                    changedParams.colorR = random(100, 120);
                    changedParams.colorG = random(30, 50);
                    changedParams.colorB = random(100, 120);
                    break;
                case 6:
                    changedParams.pos = 28;
                    blendMode(DODGE);

                    //blau
                    changedParams.colorG = random(170, 190);
                    changedParams.colorB = random(230, 250);
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
                    blendMode(OVERLAY);
                    break;
                case 2:
                    changedParams.pos = 110;
                    changedParams.radius = 90;
                    changedParams.distance = 0.25;
                    blendMode(OVERLAY);
                    break;
                case 5:
                    changedParams.pos = 64;
                    changedParams.radius = 50;
                    changedParams.distance = 0.15;
                    blendMode(MULTIPLY);
                    break;
                case 6:
                    changedParams.pos = 44;
                    changedParams.radius = 40;
                    changedParams.distance = 0.1;
                    blendMode(MULTIPLY);
                    break;
            }
            break;
        default:
            break;
    }
    setParams(changedParams);
}