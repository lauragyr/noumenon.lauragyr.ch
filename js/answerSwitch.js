"use strict"
let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14;

// ANSWER 1
var q1a1 = document.getElementById('q1a1'); // grab a reference to your element
q1a1.addEventListener('click', function() {
    setQ1Value(1)
});
var q1a2 = document.getElementById('q1a2'); // grab a reference to your element
q1a2.addEventListener('click', function() {
    setQ1Value(2)
});
var q1a3 = document.getElementById('q1a3'); // grab a reference to your element
q1a3.addEventListener('click', function() {
    setQ1Value(3)
});
var q1a4 = document.getElementById('q1a4'); // grab a reference to your element
q1a4.addEventListener('click', function() {
    setQ1Value(4)
});

function setQ1Value(value) {

    var elements = document.getElementsByClassName('activeImage');
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].className = "choiceImage";
        }
    }

    switch (value) {
        case 1:
            a1 = 6;
            q1a1.className = "choiceImage activeImage";
            break;

        case 2:
            a1 = 1;
            q1a2.className = "choiceImage activeImage";
            break;

        case 3:
            a1 = 5;
            q1a3.className = "choiceImage activeImage";
            break;

        case 4:
            a1 = 2;
            q1a4.className = "choiceImage activeImage";
            break;
    }
    console.log(a1);
    setAnswers();
}

// ANSWER 2
var q2a1 = document.getElementById('q2a1'); // grab a reference to your element
q2a1.addEventListener('click', function() {
    setQ2Value(1)
});
var q2a2 = document.getElementById('q2a2'); // grab a reference to your element
q2a2.addEventListener('click', function() {
    setQ2Value(2)
});
var q2a3 = document.getElementById('q2a3'); // grab a reference to your element
q2a3.addEventListener('click', function() {
    setQ2Value(3)
});
var q2a4 = document.getElementById('q2a4'); // grab a reference to your element
q2a4.addEventListener('click', function() {
    setQ2Value(4)
});
var q2a5 = document.getElementById('q2a5'); // grab a reference to your element
q2a5.addEventListener('click', function() {
    setQ2Value(5)
});
var q2a6 = document.getElementById('q2a6'); // grab a reference to your element
q2a6.addEventListener('click', function() {
    setQ2Value(6)
});

function setQ2Value(value) {
    var elements = document.getElementsByClassName('activeCircle');
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].className = "circle";
        }
    }

    switch (value) {
        case 1:
            a2 = 1;
            q2a1.className = "circle activeCircle";
            break;

        case 2:
            a2 = 2;
            q2a2.className = "circle activeCircle";
            break;

        case 3:
            a2 = 3;
            q2a3.className = "circle activeCircle";
            break;

        case 4:
            a2 = 4;
            q2a4.className = "circle activeCircle";
            break;

        case 5:
            a2 = 5;
            q2a5.className = "circle activeCircle";
            break;

        case 6:
            a2 = 6;
            q2a6.className = "circle activeCircle";
            break;
    }
    console.log(a2);
    setAnswers();
}

//ANSWER 3
var q3a1 = document.getElementById('q3a1'); // grab a reference to your element
q3a1.addEventListener('click', function() {
    setQ3Value(1)
});
var q3a2 = document.getElementById('q3a2'); // grab a reference to your element
q3a2.addEventListener('click', function() {
    setQ3Value(2)
});
var q3a3 = document.getElementById('q3a3'); // grab a reference to your element
q3a3.addEventListener('click', function() {
    setQ3Value(3)
});
var q3a4 = document.getElementById('q3a4'); // grab a reference to your element
q3a4.addEventListener('click', function() {
    setQ3Value(4)
});
var q3a5 = document.getElementById('q3a5'); // grab a reference to your element
q3a5.addEventListener('click', function() {
    setQ3Value(5)
});
var q3a6 = document.getElementById('q3a6'); // grab a reference to your element
q3a6.addEventListener('click', function() {
    setQ3Value(6)
});

function setQ3Value(value) {
    var elements = document.getElementsByClassName('activeCircle');
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].className = "circle";
        }
    }

    switch (value) {
        case 1:
            a3 = 1;
            q3a1.className = "circle activeCircle";
            break;

        case 2:
            a3 = 2;
            q3a2.className = "circle activeCircle";
            break;

        case 3:
            a3 = 3;
            q3a3.className = "circle activeCircle";
            break;

        case 4:
            a3 = 4;
            q3a4.className = "circle activeCircle";
            break;

        case 5:
            a3 = 5;
            q3a5.className = "circle activeCircle";
            break;

        case 6:
            a3 = 6;
            q3a6.className = "circle activeCircle";
            break;
    }
    console.log(a3);
    setAnswers();
}

// ANSWER 4
var q4a1 = document.getElementById('q4a1'); // grab a reference to your element
q4a1.addEventListener('click', function() {
    setQ4Value(1)
});
var q4a2 = document.getElementById('q4a2'); // grab a reference to your element
q4a2.addEventListener('click', function() {
    setQ4Value(2)
});
var q4a3 = document.getElementById('q4a3'); // grab a reference to your element
q4a3.addEventListener('click', function() {
    setQ4Value(3)
});
var q4a4 = document.getElementById('q4a4'); // grab a reference to your element
q4a4.addEventListener('click', function() {
    setQ4Value(4)
});

function setQ4Value(value) {

    var elements = document.getElementsByClassName('activeImage');
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].className = "choiceImage";
        }
    }

    switch (value) {
        case 1:
            a4 = 2;
            q4a1.className = "choiceImage activeImage";
            break;

        case 2:
            a4 = 5;
            q4a2.className = "choiceImage activeImage";
            break;

        case 3:
            a4 = 1;
            q4a3.className = "choiceImage activeImage";
            break;

        case 6:
            a4 = 1;
            q4a4.className = "choiceImage activeImage";
            break;
    }
    console.log(a4);
    setAnswers();
}

// ANSWER 5
var q5a1 = document.getElementById('q5a1'); // grab a reference to your element
q5a1.addEventListener('click', function() {
    setQ5Value(1)
});
var q5a2 = document.getElementById('q5a2'); // grab a reference to your element
q5a2.addEventListener('click', function() {
    setQ5Value(2)
});
var q5a3 = document.getElementById('q5a3'); // grab a reference to your element
q5a3.addEventListener('click', function() {
    setQ5Value(3)
});
var q5a4 = document.getElementById('q5a4'); // grab a reference to your element
q5a4.addEventListener('click', function() {
    setQ5Value(4)
});
var q5a5 = document.getElementById('q5a5'); // grab a reference to your element
q5a5.addEventListener('click', function() {
    setQ5Value(5)
});
var q5a6 = document.getElementById('q5a6'); // grab a reference to your element
q5a6.addEventListener('click', function() {
    setQ5Value(6)
});

function setQ5Value(value) {
    var elements = document.getElementsByClassName('activeCircle');
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].className = "circle";
        }
    }

    switch (value) {
        case 1:
            a5 = 1;
            q5a1.className = "circle activeCircle";
            break;

        case 2:
            a5 = 2;
            q5a2.className = "circle activeCircle";
            break;

        case 3:
            a5 = 3;
            q5a3.className = "circle activeCircle";
            break;

        case 4:
            a5 = 4;
            q5a4.className = "circle activeCircle";
            break;

        case 5:
            a5 = 5;
            q5a5.className = "circle activeCircle";
            break;

        case 6:
            a5 = 6;
            q5a6.className = "circle activeCircle";
            break;
    }
    console.log(a5);
    setAnswers();
}

// ANSWER 6
var q6a1 = document.getElementById('q6a1'); // grab a reference to your element
q6a1.addEventListener('click', function() {
    setQ6Value(1)
});
var q6a2 = document.getElementById('q6a2'); // grab a reference to your element
q6a2.addEventListener('click', function() {
    setQ6Value(2)
});
var q6a3 = document.getElementById('q6a3'); // grab a reference to your element
q6a3.addEventListener('click', function() {
    setQ6Value(3)
});
var q6a4 = document.getElementById('q6a4'); // grab a reference to your element
q6a4.addEventListener('click', function() {
    setQ6Value(4)
});
var q6a5 = document.getElementById('q6a5'); // grab a reference to your element
q6a5.addEventListener('click', function() {
    setQ6Value(5)
});
var q6a6 = document.getElementById('q6a6'); // grab a reference to your element
q6a6.addEventListener('click', function() {
    setQ6Value(6)
});

function setQ6Value(value) {
    var elements = document.getElementsByClassName('activeCircle');
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].className = "circle";
        }
    }

    switch (value) {
        case 1:
            a6 = 1;
            q6a1.className = "circle activeCircle";
            break;

        case 2:
            a6 = 2;
            q6a2.className = "circle activeCircle";
            break;

        case 3:
            a6 = 3;
            q6a3.className = "circle activeCircle";
            break;

        case 4:
            a6 = 4;
            q6a4.className = "circle activeCircle";
            break;

        case 5:
            a6 = 5;
            q6a5.className = "circle activeCircle";
            break;

        case 6:
            a6 = 6;
            q6a6.className = "circle activeCircle";
            break;
    }
    console.log(a6);
    setAnswers();
}

// ANSWER 7
var q7a1 = document.getElementById('q7a1'); // grab a reference to your element
q7a1.addEventListener('click', function() {
    setQ7Value(1)
});
var q7a2 = document.getElementById('q7a2'); // grab a reference to your element
q7a2.addEventListener('click', function() {
    setQ7Value(2)
});
var q7a3 = document.getElementById('q7a3'); // grab a reference to your element
q7a3.addEventListener('click', function() {
    setQ7Value(3)
});
var q7a4 = document.getElementById('q7a4'); // grab a reference to your element
q7a4.addEventListener('click', function() {
    setQ7Value(4)
});

function setQ7Value(value) {

    var elements = document.getElementsByClassName('activeImage');
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].className = "choiceImage";
        }
    }

    switch (value) {
        case 1:
            a7 = 1;
            q7a1.className = "choiceImage activeImage";
            break;

        case 2:
            a7 = 5;
            q7a2.className = "choiceImage activeImage";
            break;

        case 3:
            a7 = 6;
            q7a3.className = "choiceImage activeImage";
            break;

        case 4:
            a7 = 2;
            q7a4.className = "choiceImage activeImage";
            break;
    }
    console.log(a7);
    setAnswers();
}

// ANSWER 8
var q8a1 = document.getElementById('q8a1'); // grab a reference to your element
q8a1.addEventListener('click', function() {
    setQ8Value(1)
});
var q8a2 = document.getElementById('q8a2'); // grab a reference to your element
q8a2.addEventListener('click', function() {
    setQ8Value(2)
});
var q8a3 = document.getElementById('q8a3'); // grab a reference to your element
q8a3.addEventListener('click', function() {
    setQ8Value(3)
});
var q8a4 = document.getElementById('q8a4'); // grab a reference to your element
q8a4.addEventListener('click', function() {
    setQ8Value(4)
});

function setQ8Value(value) {
    var elements = document.getElementsByClassName('activeAnswer');
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].className = "choiceAnswer row2";
        }
    }

    switch (value) {
        case 1:
            a8 = 6;
            q8a1.className = "choiceAnswer row2 activeAnswer";
            break;

        case 2:
            a8 = 1;
            q8a2.className = "choiceAnswer row2 activeAnswer";
            break;

        case 3:
            a8 = 5;
            q8a3.className = "choiceAnswer row2 activeAnswer";
            break;

        case 4:
            a8 = 2;
            q8a4.className = "choiceAnswer row2 activeAnswer";
            break;
    }
    console.log(a8);
    setAnswers();
}

// ANSWER 9
var q9a1 = document.getElementById('q9a1'); // grab a reference to your element
q9a1.addEventListener('click', function() {
    setQ9Value(1)
});
var q9a2 = document.getElementById('q9a2'); // grab a reference to your element
q9a2.addEventListener('click', function() {
    setQ9Value(2)
});
var q9a3 = document.getElementById('q9a3'); // grab a reference to your element
q9a3.addEventListener('click', function() {
    setQ9Value(3)
});
var q9a4 = document.getElementById('q9a4'); // grab a reference to your element
q9a4.addEventListener('click', function() {
    setQ9Value(4)
});
var q9a5 = document.getElementById('q9a5'); // grab a reference to your element
q9a5.addEventListener('click', function() {
    setQ9Value(5)
});
var q9a6 = document.getElementById('q9a6'); // grab a reference to your element
q9a6.addEventListener('click', function() {
    setQ9Value(6)
});

function setQ9Value(value) {
    var elements = document.getElementsByClassName('activeCircle');
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].className = "circle";
        }
    }

    switch (value) {
        case 1:
            a9 = 1;
            q9a1.className = "circle activeCircle";
            break;

        case 2:
            a9 = 2;
            q9a2.className = "circle activeCircle";
            break;

        case 3:
            a9 = 3;
            q9a3.className = "circle activeCircle";
            break;

        case 4:
            a9 = 4;
            q9a4.className = "circle activeCircle";
            break;

        case 5:
            a9 = 5;
            q9a5.className = "circle activeCircle";
            break;

        case 6:
            a9 = 6;
            q9a6.className = "circle activeCircle";
            break;
    }
    console.log(a9);
    setAnswers();
}

// ANSWER 10
var q10a1 = document.getElementById('q10a1'); // grab a reference to your element
q10a1.addEventListener('click', function() {
    setQ10Value(1)
});
var q10a2 = document.getElementById('q10a2'); // grab a reference to your element
q10a2.addEventListener('click', function() {
    setQ10Value(2)
});
var q10a3 = document.getElementById('q10a3'); // grab a reference to your element
q10a3.addEventListener('click', function() {
    setQ10Value(3)
});
var q10a4 = document.getElementById('q10a4'); // grab a reference to your element
q10a4.addEventListener('click', function() {
    setQ10Value(4)
});
var q10a5 = document.getElementById('q10a5'); // grab a reference to your element
q10a5.addEventListener('click', function() {
    setQ10Value(5)
});
var q10a6 = document.getElementById('q10a6'); // grab a reference to your element
q10a6.addEventListener('click', function() {
    setQ10Value(6)
});

function setQ10Value(value) {
    var elements = document.getElementsByClassName('activeCircle');
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].className = "circle";
        }
    }

    switch (value) {
        case 1:
            a10 = 1;
            q10a1.className = "circle activeCircle";
            break;

        case 2:
            a10 = 2;
            q10a2.className = "circle activeCircle";
            break;

        case 3:
            a10 = 3;
            q10a3.className = "circle activeCircle";
            break;

        case 4:
            a10 = 4;
            q10a4.className = "circle activeCircle";
            break;

        case 5:
            a10 = 5;
            q10a5.className = "circle activeCircle";
            break;

        case 6:
            a10 = 6;
            q10a6.className = "circle activeCircle";
            break;
    }
    console.log(a10);
    setAnswers();
}

// ANSWER 11
var q11a1 = document.getElementById('q11a1'); // grab a reference to your element
q11a1.addEventListener('click', function() {
    setQ11Value(1)
});
var q11a2 = document.getElementById('q11a2'); // grab a reference to your element
q11a2.addEventListener('click', function() {
    setQ11Value(2)
});
var q11a3 = document.getElementById('q11a3'); // grab a reference to your element
q11a3.addEventListener('click', function() {
    setQ11Value(3)
});
var q11a4 = document.getElementById('q11a4'); // grab a reference to your element
q11a4.addEventListener('click', function() {
    setQ11Value(4)
});
var q11a5 = document.getElementById('q11a5'); // grab a reference to your element
q11a5.addEventListener('click', function() {
    setQ11Value(5)
});
var q11a6 = document.getElementById('q11a6'); // grab a reference to your element
q11a6.addEventListener('click', function() {
    setQ11Value(6)
});

function setQ11Value(value) {
    var elements = document.getElementsByClassName('activeCircle');
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].className = "circle";
        }
    }

    switch (value) {
        case 1:
            a11 = 1;
            q11a1.className = "circle activeCircle";
            break;

        case 2:
            a11 = 2;
            q11a2.className = "circle activeCircle";
            break;

        case 3:
            a11 = 3;
            q11a3.className = "circle activeCircle";
            break;

        case 4:
            a11 = 4;
            q11a4.className = "circle activeCircle";
            break;

        case 5:
            a11 = 5;
            q11a5.className = "circle activeCircle";
            break;

        case 6:
            a11 = 6;
            q11a6.className = "circle activeCircle";
            break;
    }
    console.log(a11);
    setAnswers();
}

// ANSWER 12
var q12a1 = document.getElementById('q12a1'); // grab a reference to your element
q12a1.addEventListener('click', function() {
    setQ12Value(1)
});
var q12a2 = document.getElementById('q12a2'); // grab a reference to your element
q12a2.addEventListener('click', function() {
    setQ12Value(2)
});
var q12a3 = document.getElementById('q12a3'); // grab a reference to your element
q12a3.addEventListener('click', function() {
    setQ12Value(3)
});
var q12a4 = document.getElementById('q12a4'); // grab a reference to your element
q12a4.addEventListener('click', function() {
    setQ12Value(4)
});

function setQ12Value(value) {
    var elements = document.getElementsByClassName('activeAnswer');
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].className = "choiceAnswer row2";
        }
    }

    switch (value) {
        case 1:
            a12 = 1;
            q12a1.className = "choiceAnswer row2 activeAnswer";
            break;

        case 2:
            a12 = 6;
            q12a2.className = "choiceAnswer row2 activeAnswer";
            break;

        case 3:
            a12 = 2;
            q12a3.className = "choiceAnswer row2 activeAnswer";
            break;

        case 4:
            a12 = 5;
            q12a4.className = "choiceAnswer row2 activeAnswer";
            break;
    }
    console.log(a12);
    setAnswers();
}

// ANSWER 13
var q13a1 = document.getElementById('q13a1'); // grab a reference to your element
q13a1.addEventListener('click', function() {
    setQ13Value(1)
});
var q13a2 = document.getElementById('q13a2'); // grab a reference to your element
q13a2.addEventListener('click', function() {
    setQ13Value(2)
});
var q13a3 = document.getElementById('q13a3'); // grab a reference to your element
q13a3.addEventListener('click', function() {
    setQ13Value(3)
});
var q13a4 = document.getElementById('q13a4'); // grab a reference to your element
q13a4.addEventListener('click', function() {
    setQ13Value(4)
});
var q13a5 = document.getElementById('q13a5'); // grab a reference to your element
q13a5.addEventListener('click', function() {
    setQ13Value(5)
});
var q13a6 = document.getElementById('q13a6'); // grab a reference to your element
q13a6.addEventListener('click', function() {
    setQ13Value(6)
});

function setQ13Value(value) {
    var elements = document.getElementsByClassName('activeCircle');
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].className = "circle";
        }
    }

    switch (value) {
        case 1:
            a13 = 1;
            q13a1.className = "circle activeCircle";
            break;

        case 2:
            a13 = 2;
            q13a2.className = "circle activeCircle";
            break;

        case 3:
            a13 = 3;
            q13a3.className = "circle activeCircle";
            break;

        case 4:
            a13 = 4;
            q13a4.className = "circle activeCircle";
            break;

        case 5:
            a13 = 5;
            q13a5.className = "circle activeCircle";
            break;

        case 6:
            a13 = 6;
            q13a6.className = "circle activeCircle";
            break;
    }
    console.log(a13);
    setAnswers();
}

// ANSWER 14
var q14a1 = document.getElementById('q14a1'); // grab a reference to your element
q14a1.addEventListener('click', function() {
    setQ14Value(1)
});
var q14a2 = document.getElementById('q14a2'); // grab a reference to your element
q14a2.addEventListener('click', function() {
    setQ14Value(2)
});
var q14a3 = document.getElementById('q14a3'); // grab a reference to your element
q14a3.addEventListener('click', function() {
    setQ14Value(3)
});
var q14a4 = document.getElementById('q14a4'); // grab a reference to your element
q14a4.addEventListener('click', function() {
    setQ14Value(4)
});

function setQ14Value(value) {

    var elements = document.getElementsByClassName('activeImage');
    if (elements.length > 0) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].className = "choiceImage";
        }
    }

    switch (value) {
        case 1:
            a14 = 1;
            q14a1.className = "choiceImage activeImage";
            break;

        case 2:
            a14 = 2;
            q14a2.className = "choiceImage activeImage";
            break;

        case 3:
            a14 = 5;
            q14a3.className = "choiceImage activeImage";
            break;

        case 4:
            a14 = 6;
            q14a4.className = "choiceImage activeImage";
            break;
    }
    console.log(a14);
    setAnswers();
}

function setAnswers()
{
    if (typeof a1 != 'undefined') {
        currentAnswerSwitchData[0] = a1;
    }
    if (typeof a2 != 'undefined') {
        currentAnswerSwitchData[1] = a2;
    }
    if (typeof a3 != 'undefined') {
        currentAnswerSwitchData[2] = a3;
    }
    if (typeof a4 != 'undefined') {
        currentAnswerSwitchData[3] = a4;
    }
    if (typeof a5 != 'undefined') {
        currentAnswerSwitchData[4] = a5;
    }
    if (typeof a6 != 'undefined') {
        currentAnswerSwitchData[5] = a6;
    }
    if (typeof a7 != 'undefined') {
        currentAnswerSwitchData[6] = a7;
    }
    if (typeof a8 != 'undefined') {
        currentAnswerSwitchData[7] = a8;
    }
    if (typeof a9 != 'undefined') {
        currentAnswerSwitchData[8] = a9;
    }
    if (typeof a10 != 'undefined') {
        currentAnswerSwitchData[9] = a10;
    }
    if (typeof a11 != 'undefined') {
        currentAnswerSwitchData[10] = a11;
    }
    if (typeof a12 != 'undefined') {
        currentAnswerSwitchData[11] = a12;
    }
    if (typeof a13 != 'undefined') {
        currentAnswerSwitchData[12] = a13;
    }
    if (typeof a14 != 'undefined') {
        currentAnswerSwitchData[13] = a14;
    }
}