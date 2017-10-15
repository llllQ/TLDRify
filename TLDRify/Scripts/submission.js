	
	
	console.log("test");

// document.getElementById("btnSubmit").onClick = function() {submit()};
var output1 ="placeholder";
var thing;
var test = "this is a test";
var userIn = "";

function submit(){
	document.getElementById("loadingBox").style.display = "block";
	var urlPt1 = "http://api.smmry.com/SM_API_KEY=8B5A9C1672&SM_LENGTH=3&SM_URL=https://en.wikipedia.org/wiki/"
	userIn = document.getElementById("userInput").value;
	while(userIn.indexOf(' ') >= 0){
    	updateKey();
	}
	console.log(userIn);
	var fullUrl = urlPt1.concat(userIn);
	console.log("The full URL is "+ fullUrl);
	// while (document.getElementById("txtOutput").innerHTML == ""){
	// 	document.getElementById("loadingBox").style.display = "block";
	// }
	// if (document.getElementById("txtOutput").innerHTML !== "") {
	// 			document.getElementById("loadingBox").style.display = "none";
	// }

	jQuery.getJSON(fullUrl, function(data) {
		console.log("1");
		var obj = data;
		// output1 = data.sm_api_content;
		console.log("2");
    	 output1 = obj.sm_api_content.toString();
    	 // output1 = obj.sm_api_content;
    	 updateResult();
    	 window.focus();
	});

	// var xhr = new XMLHttpRequest();
	// xhr.open("GET", fullUrl, false);
	// console.log(xhr);
	// output1 = xhr.sm_api_content
	// output1 = xhr.result['sm_api_content']; 
	console.log("3");
	
}

function onkeyup_return_check(e){
	var enterKey = 13;
        if (e.which == enterKey){
            submit();
        }
}

function resetTxtField(){
	document.getElementById("userInput").value="";
	document.getElementById("txtOutput").innerHTML = "";
}

function updateResult(){
	console.log("4");
	if (output1.length < 20){
		document.getElementById("txtOutputx").innerHTML = ":("<br>"This topic cannot be TL;DR-ified yet, please try another term"
	}else {
		document.getElementById("txtOutput").innerHTML = output1;	
	}
	document.getElementById("loadingBox").style.display = "none";
}

function updateKey()
{
    userIn=userIn.replace(" ","_");
    $("#url_key").val(userIn);
}