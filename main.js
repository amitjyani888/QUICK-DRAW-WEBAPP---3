function setup(){
canvas = createCanvas(280 , 280);
canvas.center();
background("white");
canvas.mouseRelesed(ClassifyCanvas);
synth = window.speechSynthesis;

}

function clearCanvas(){
    
    background("white");

}
 
function preload(){
    classifier = ml5.imageClassifier('DoodleNet');

}

function draw(){
    strokeWieght(13);
    stroke(0);
if (mouseIspressed){
    line(pmouseX ,pmouseY ,mouseX ,mouseY);

}
}

function ClassifyCanvas(){
    classifier.Classify(canvas ,gotResults);
}

function gotResults(error ,result){
    if (error){
        console.error(error);

    }
    console.log(results);
    document.getElementById('label').innerHTML = 'Label: '+ results[0].label;
    document.getElementById('confidence').innerHTML = 'confidence: ' + Math.round(results[0].confidence * 100) + '%';
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}

let classifier;

function preload() {
  classifier = ml5.imageClassifier('DoodleNet', modelLoaded);
}

function setup() {
  createCanvas(400, 400);
  strokeWeight(4);
  stroke(0);
  back

  canvas.mouseReleased(classifyCanvas);
}

function draw() {
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function classifyCanvas() {
  classifier.classify(canvas, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    let drawn_sketch = results[0].label;

    // Update HTML tag with the drawn sketch
    document.getElementById('yourSketch').innerText = "Your Sketch: " + drawn_sketch;


    // Update HTML tag with the confidence percentage
    let confidencePercentage = nf(results[0].confidence * 100, 2, 2);
    document.getElementById('confidence').innerText = "Confidence: " + confidencePercentage + "%";
  }
}