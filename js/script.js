
function updateDateTime() {
    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();

    document.getElementById("datetime-box").innerHTML =
        "Today's Date: " + date + " | Time: " + time;
}

setInterval(updateDateTime, 1000);  
updateDateTime();  

function calculateBMI(){
            let height = document.getElementById("height").value;
            let weight = document.getElementById("weight").value;
            let output = document.getElementById("bmiResult");

            if(!height || !weight){
                output.innerHTML = "⚠ Please enter both height and weight!";
                output.style.color = "red";
                return;
            }

            let h = height / 100; 
            let bmi = (weight / (h * h)).toFixed(2);

            let status = "";

            if(bmi < 18.5){
                status = "Underweight";
                output.style.color = "#d9534f"; 
            } 
            else if(bmi >= 18.5 && bmi <= 24.9){
                status = "Normal Weight";
                output.style.color = "#009688"; 
            }
            else if(bmi >= 25 && bmi <= 29.9){
                status = "Overweight";
                output.style.color = "#f0ad4e"; 
            }
            else{
                status = "Obese";
                output.style.color = "#d9534f"; 
            }

            output.innerHTML = `Your BMI is <strong>${bmi}</strong> (${status}).`;
        }
function calculateAge() {
            let dob = document.getElementById("dob").value;
            let output = document.getElementById("ageResult");

            if(!dob){
                output.innerHTML = "⚠ Please select your date of birth";
                output.style.color = "red";
                return;
            }

            let birthDate = new Date(dob);
            let today = new Date();

            let age = today.getFullYear() - birthDate.getFullYear();

            
            let monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            output.style.color = "#009688";
            output.innerHTML = `You are <strong>${age} years old</strong>.`;
        }
function calculateWater() {
            let weight = document.getElementById("waterWeight").value;
            let result = document.getElementById("waterResult");

            if(weight === ""){
                result.innerHTML = "⚠ Please enter your weight";
                result.style.color = "red";
                return;
            }

            let intake = weight * 0.033;  
            result.style.color = "#009688";
            result.innerHTML = `You need <strong>${intake.toFixed(2)} liters</strong> of water daily 💧`;
        }



