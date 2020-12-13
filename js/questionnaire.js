"use strict"

//progress-bar shizzl
let getProgressbar = document.getElementsByClassName("progressBar");
let progressBar = getProgressbar[0];
window.progressWidth = 0;

let getBarContainer = document.getElementsByClassName("barContainer");
let barContainer = getBarContainer[0];


//  questionSwitch
let questionSwitch = [];

for (let i = 0; i < 15; i++) {
    let questionString = "questionBox" + (i + 1);
    let obj = document.getElementById(questionString);
    questionSwitch.push(obj);
}

questionSwitch.forEach(function(questionBox, index, arr) {
    let possibleButtons = [];
    possibleButtons = possibleButtons.concat([].slice.call(questionBox.getElementsByClassName("circle")));
    possibleButtons = possibleButtons.concat([].slice.call(questionBox.getElementsByClassName("choiceImage")));
    possibleButtons = possibleButtons.concat([].slice.call(questionBox.getElementsByClassName("choiceAnswer")));

    possibleButtons.forEach(function(button, buttonArrIndex) {
        if (index < arr.length) {
            button.addEventListener("click", function() {
                setTimeout(function() {
                    arr[index].style.display = "none";
                    arr[index + 1].style.display = "block";

                    //progress-bar
                    let progressPercentPerQ = 100 / (questionSwitch.length - 1);
                    window.progressWidth = window.progressWidth + progressPercentPerQ;
                    progressBar.style.width = window.progressWidth + '%';

                    //counter auf 0 setzen wenn button geklickt
                    //counter = 0;

                    //remove resetButton  and progressBar if questionBox15 is displayed
                    if (questionSwitch[14].style.display == 'block') {
                        barContainer.style.display = "none";
                    }
                }, 500);

            });
        }
    });
});

//reload all content
/*document.addEventListener("DOMContentLoaded", function() {
    socket.emit('answers', 0);
});*/


//start-button on homescreen
document.getElementById("start").addEventListener("click", function() {
    setTimeout(function() {
        questionBox1.style.display = "block";
        homescreen.style.display = "none";


        //progressBar display
        window.progressWidth = 0;
        progressBar.style.width = window.progressWidth + '%';
        resetCSS();
    }, 500);
    start.className = "button activeButton";
})

//restart-button on homescreen
document.getElementById("restart").addEventListener("click", function() {
    currentAnswerSwitchData = [0];
    console.log(currentAnswerSwitchData);
    questionBox1.style.display = "block";
    questionBox15.style.display = "none";


    //progressBar display
    window.progressWidth = 0;
    progressBar.style.width = window.progressWidth + '%';
    resetCSS();
    start.className = "button activeButton";
})

// save elements to local download folder
document.getElementById("save").addEventListener("click", function() {
    currentAnswerSwitchData = [0];
    endScreen.style.display = "block";
    questionBox15.style.display = "none";

    //set date for noumenon naming
    var today = new Date();
    let options = {
        year: "2-digit",
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }
    let name = "noumenon_" + today.toLocaleString("de-DE", options);
    let dateName = name.replace(/[\. ,:-]+/g, "");
    p5sketch.saveCanvas(dateName, 'png');


    //progressBar display
    window.progressWidth = 0;
    progressBar.style.width = window.progressWidth + '%';
    resetCSS();
    start.className = "button activeButton";
})


//remove all added classes from elements for active
function resetCSS() {
    var active = [
        'activeImage',
        'activeCircle',
        'activeAnswer',
        'activeButton',
        'activeEnd'
    ]

    for (let selector of active) {
        let elements = document.getElementsByClassName(selector)
        for (let element of elements) {
            element.classList.remove(selector)
        }
    }
}

//restart-button on last page
// document.getElementById("backto").addEventListener("click", function() {
//     setTimeout(function() {
//         homescreen.style.display = "block";
//         questionBox15.style.display = "none";
//         resetCSS();
//     }, 500);
//     backto.className = "endButton activeEnd";
// })

//print-button switch to screen active print
// document.getElementById("drucken").addEventListener("click", function() {
//     setTimeout(function() {
//         questionBox15.style.display = "none";
//         printBox.style.display = "block";
//         resetButton.style.display = "none";
//         resetCSS();
//     }, 500);
//     drucken.className = "printButton activeEnd";

//     //go back to homescreen after printing
//     setTimeout(backToStart, 70 * 1000);
// })

//back to start from print-window
function backToStart() {
    // socket.emit('answers', -1);
    currentAnswerSwitchData = [-1];
    printBox.style.display = "none";
    homescreen.style.display = "block";
}