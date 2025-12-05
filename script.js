
function updateDateTime() {
    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();

    document.getElementById("datetime-box").innerHTML =
        "Today's Date: " + date + " | Time: " + time;
}

setInterval(updateDateTime, 1000);  
updateDateTime();  

function calculateBMI() {
    let weight = document.getElementById("bmiWeight").value;
    let height = document.getElementById("bmiHeight").value;

    if (!weight || !height) {
        document.getElementById("bmiResult").textContent = "Please enter both values.";
        return;
    }

    let h = height / 100;  
    let bmi = (weight / (h * h)).toFixed(1);

    let status = "";
    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 24.9) status = "Normal";
    else if (bmi < 29.9) status = "Overweight";
    else status = "Obese";

    document.getElementById("bmiResult").textContent = `Your BMI is ${bmi} (${status})`;
}
function calculateAge() {
    let dob = document.getElementById("dob").value;
    if (!dob) {
        document.getElementById("ageResult").textContent = "Please select a date.";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    document.getElementById("ageResult").textContent = "Your age is: " + age + " years";
}
function calculateWater() {
    let weight = document.getElementById("waterWeight").value;

    if (!weight) {
        document.getElementById("waterResult").textContent = "Please enter your weight.";
        return;
    }

    let water = (weight * 0.033).toFixed(2);

    document.getElementById("waterResult").textContent =
        `Recommended daily intake: ${water} liters`;
}



