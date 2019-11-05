// global variable to hold JSON
var weatherJSON;

// p5 preload function
function preload() {
    weatherJSON = loadJSON('https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=417941f8eb6ef816314244950431636b');
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("drawingCanvas");
    frameRate(2);
    console.log(weatherJSON);
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

    for (var i = 0; i < weatherJSON.list.length; i++) {
        var weatherInfo = weatherJSON.list[i];
        // var temperature = weatherInfo.main.temp;
        var description = weatherInfo.weather[0].description;
        text(description, random(0, windowWidth), i * 10);
    }

    text("Humidity is " + weatherJSON.list[0].main.humidity, 50, 50);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}