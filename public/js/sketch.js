// global variable to hold JSON
var weatherJSON;

// p5 preload function
function preload() {
    // p5 specific function to load JSON
    weatherJSON = loadJSON('https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=417941f8eb6ef816314244950431636b');
}

function setup() {
    // make a variable called 'canvas'
    var canvas = createCanvas(windowWidth, windowHeight);

    // add the canvas to the 'drawingCanvas' div in the html
    canvas.parent("drawingCanvas");

    // change the frame rate to go slower
    frameRate(2);

    // display the API data in the console
    console.log(weatherJSON);

    // different ways to access different pieces of the data
    // console.log(weatherJSON.cod);
    // console.log(weatherJSON.cnt);
    // console.log("This is an array: " + weatherJSON.list[1]);
    // console.log("There are " + weatherJSON.list[0].clouds.all + " clouds");
    // console.log("Humidity is " + weatherJSON.list[0].main.humidity);
}

function draw() {
    background('black');
    textSize(32);
    fill('white');

    // iterate through every item in the weatherJSON.list array
    for (var i = 0; i < weatherJSON.list.length; i++) {
        // make a variable to hold each item in the weatherJSON.list array
        var weatherInfo = weatherJSON.list[i];
        // make a variable to hold the description from the first item in the weather array
        var description = weatherInfo.weather[0].description;
        // write the description to the p5 canvas. x position is somewhere random in the width of the window. y position is i variable * 10
        text(description, random(0, windowWidth), i * 10);
    }

    // a simpler example of writing some text to the p5 canvas
    text("Humidity is " + weatherJSON.list[0].main.humidity, 50, 50);
}

// function to resize the p5 canvas when the window is resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}