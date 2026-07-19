var price=500;
var cloth="5 shirts 10% discount";
var extraOffer=true;
console.log(price);
console.log(cloth);
console.log(extraOffer);

//we dont use var cuz we may accidentally redeclare it
var e=10;
var d=20; //redeclaring
e=30; //reassigning
console.log(e);

//we use let to re assign
let a=10;
let b=20; //syntax error
console.log(b);

const c=40; 
//c=50; cannot re declare or re-assign
console.log(c);

a=10;
b=20;
console.log("arithmetic operators result");
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

console.log("relational (comparison) operators result");
let age=10;
console.log(age > 18);
console.log(age<18);
console.log(age ==20); //only checks the value, not the datatype
console.log(age !=20);

console.log("logical operators result");
let m=10;
let n=20;
let q=true;
console.log(a>=18 && n<=50);
console.log(a>=18 || n<=50);
console.log(!q);

//conditional statements (if,else,else if)
let ticket=false;
if(ticket==true)
{
console.log("You can watch the movie");
}
else
{
    console.log("You need a ticket to watch the movie");
}
let signal="error";
if(signal=="green")
{
    console.log("You can go");
}
else if(signal=="yellow")
{
    console.log("You can wait");
}
else if(signal=="red")
{
    console.log("You can stop");
}
else
{
    console.log("Signal is not working");
}
//switch case statements

let dept="IT";
switch(dept)
{
    case "CSE": //dept==="CSE" (checks the datatype too)
        console.log("CSE BLOCK 1");
        break;
    case "IT":
        console.log("IT BLOCK 2");
        break;
    case "ECE":
        console.log("ECE BLOCK 3");
        break;
    case "EEE":
        console.log("EEE BLOCK 4");
        break;
    case "MCT":
        console.log("MCT BLOCK 5");
        break;
    default:
        console.log("Invalid Department");
}
//