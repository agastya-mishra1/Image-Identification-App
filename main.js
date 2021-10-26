Webcam.set({
width:350,
height:250,
image_format:"png",
png_quality:90,
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snap(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="capture" src="'+data_uri+'">';
});
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4PtQIfDSR/model.json',modelLoaded);

function modelLoaded(){
console.log("Model is loaded");
}

function check(){
img=document.getElementById("capture");
classifier.classify(img,gotResult);
}

function gotResult(error,results){
if(error){
console.error(error);
}
else{
console.log(results);
document.getElementById("result_object").innerHTML=results[0].label;
document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}
