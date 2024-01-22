// Create logic for calculating BMI(body mass index). Also, check the below condition
//     1. If BMI is less than 18.5 print "Underweight"
//     2. If BMI is between 18.5 - 24.9 then print "Healthy weight"
//     3. If BMI is between 25 - 29.9 then print "Overweight"
//     4. Otherwise, print "Obesity"

var height = 5.8; //meters
var weight = 700; //kilogramas

var bmi = weight/(height*height);

if(bmi < 18.5)
{
    console.log("Underweight");
}
else if(bmi >=18.5 && bmi <= 24.9)
{
    console.log("Healthy weight");
}
else if(bmi >=25 && bmis <= 29.9)
{
    console.log("Overweight");
}
else
{
    console.log("Obesity");
}