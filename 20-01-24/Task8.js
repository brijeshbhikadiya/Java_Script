//Create a calculator using if else(do Addition, subtraction, division, multiplication, modulo).

var operater = '+';
var value1 = 30;
var value2 = 20;

if(operater === '+')
{
    console.log(value1+value2);
}
else if(operater === '-')
{
    console.log(value1-value2);
}
else if(operater === '/')
{
    console.log(value1/value2);
}
else if(operater === '*')
{
    console.log(value1*value2);
}
else if(operater === '%')
{
    console.log(value1%value2);
}
else{
    console.log("Invalid operater");
}