//canvas-stuff
let angle = 1;
let generalAngle = 5.4; //start of circle draw

//polygon-stuff
let pos = 70;

let npoints = 30;
let radius = 0;
let distance = 0.1;

//color-stuff
let colorR = 0;
let colorG = 0;
let colorB = 0;
let a = 70;


function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent('sketch');

    background(230);
    fill(colorR, colorG, colorB, a);
    //smooth();
}


function draw() {
    frameRate(2);
    translate(width / 2, height / 2);
    size();
    farbe();
    filterMode();
    form();
    positions();
    geschwindigkeit();
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
    a = 30;
}

// all functions
function size() {
    if (keyCode === UP_ARROW) {
        radius = 10;
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;

    } else if (keyCode === DOWN_ARROW) {
        radius = 30;
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;

    } else if (keyCode === 37) {
        radius = 60;
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
        a = 20;

    } else if (keyCode === 39) {
        radius = 120;
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;


    }
}

function form() {
    //q
    if (keyCode === 81) {
        rotate(-generalAngle);
        npoints = 50;
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
    } else if (keyCode === 87) {
        rotate(-generalAngle);
        npoints = 10;
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
    }

    //e
    else if (keyCode === 69) {
        rotate(-generalAngle);
        npoints = 3;
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
    }

    //r
    else if (keyCode === 82) {
        rotate(-generalAngle);
        npoints = 5;
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
    }

    //t
    else if (keyCode === 84) {
        rotate(-generalAngle);
        npoints = 30;
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
    }
}

function farbe() {
    //1
    if (keyCode === 49) {
        let colorR = 0;
        let colorG = random(200, 255);
        let colorB = random(200, 255);
        fill(colorR, colorG, colorB, a);
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
    }

    //2
    else if (keyCode === 50) {
        let colorR = 0;
        let colorG = random(100, 200);
        let colorB = random(200, 255);
        fill(colorR, colorG, colorB, a);
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
    }

    //3
    else if (keyCode === 51) {
        let colorR = 0;
        let colorG = random(0, 100);
        let colorB = random(200, 255);
        fill(colorR, colorG, colorB, a);
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
    }
}


function filterMode() {
    //a
    if (keyCode === 65) {
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
        blendMode(MULTIPLY);
    }

    // s
    else if (keyCode === 83) {
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
        blendMode(LIGHTEST);
    }

    //d
    else if (keyCode === 68) {
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
        blendMode(DIFFERENCE);
    }

    //m
    else if (keyCode === 77) {
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
        blendMode(SCREEN);
    }
}

function geschwindigkeit() {
    //h
    if (keyCode === 72) {
        distance = 0.5;
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
    }

    //j
    else if (keyCode === 74) {
        distance = 0.1;
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
    }

    //k
    else if (keyCode === 75) {
        distance = 0.2;
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
    }
}


function positions() {
    //5
    if (keyCode === 53) {
        pos = 80;
        generalAngle = 5.4;
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
    }

    //6
    else if (keyCode === 54) {
        pos = 80;
        generalAngle = 3;
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
    }

    //7
    else if (keyCode === 55) {
        pos = 150;
        generalAngle = 15;
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
    }

    //8
    else if (keyCode === 56) {
        pos = 120;
        generalAngle = 30;
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
    }

    //9
    else if (keyCode === 57) {
        pos = 50;
        generalAngle = 35;
        rotate(-generalAngle);
        polygon(pos, pos, radius, npoints);
        generalAngle = generalAngle + distance;
    }

}