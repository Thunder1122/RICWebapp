var breaks_counter = 0;
var current_speed = 0;
var current_distance = 0;
var patient_weight = null;
var is_counting = false;

function setCounterToZero(){
	document.getElementById("breaksNum").innerHTML = "0";
	breaks_counter = 0;
}

function addOne(){
	if (breaks_counter<99){
		breaks_counter += 1;
	}
	document.getElementById("breaksNum").innerHTML = breaks_counter;
}

function setDistanceToZero(){
	document.getElementById("distanceNum").innerHTML = "0";
	current_distance = 0;
}

function updateDistance(){
	m_speed = current_speed * .44704;
	if (is_counting == true){
		current_distance += m_speed;
		document.getElementById("distanceNum").innerHTML = Math.round(current_distance);		
	}
}

function setTreadSpeed(){
	is_counting =false;
	var speed=prompt("Please enter the treadmill speed.");
	if (speed!=null){
		current_speed = parseFloat(speed);
		document.getElementById("speedNum").innerHTML = speed;
	}
}

function setSpeedZero(){
	current_speed = 0;
	document.getElementById("speedNum").innerHTML = "0.0";
}

function setWeight(){
	stopSeconds();
	patient_weight = prompt("Please enter the patient's weight in pounds.");
	startSeconds();
}

function setWeightToZero(){
	patient_weight = null;
}

function startSeconds(){
	is_counting = true;
}

function stopSeconds(){
	is_counting = false;
}

function refreshWeight(){
	var iframe = document.getElementById("weightFrame")
	iframe.src = iframe.src;
}

var update_timer = setInterval(updateDistance, 1000);
var refresh = setInterval(refreshWeight, 1000)