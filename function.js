// let bal=100;
// let val=5;
// if(val<=bal)
// {
//     console.log("Successfully paid");
//     bal-=val;
// }
// else
// {
//     console.log("Insufficient bank balance");
// }
// console.log(bal);

let bal=100;

function payment(wd)
{

let val=wd;
if(val<=bal)
{
    //console.log("Successfully paid");
    bal-=val;
    return "Successfully paid";
}
else
{
   // console.log("Insufficient bank balance");
   return "Insufficient bank balance";
}
}
function balCheck()
{
    return bal;
}
console.log(payment(50));
console.log(payment(40));
console.log(payment(20));
console.log(balCheck());

let f1=function() //variable function
{
    
}
f1();
let f2=()=> //arrow function - mostly backend
{

}
f2();

let arr=[1,2,3,4,5,6];
console.log(arr);
console.log(arr[3]);
console.log("length is:" + arr.length);
console.log(arr[arr.length-1]);
arr.push(8);
console.log(arr);
arr.pop(); //removes last element
console.log(arr);
arr.shift(); //removes first element
console.log(arr);
arr.unshift(9); //appends from the front side
console.log(arr);
arr.splice(1,2,"a","b"); // delete index, no of elements to remove, insert elements in that index
console.log(arr);
let str=arr.join("/"); //array to string
console.log(str);
let str1="a b c e d f g";
let array=str1.split(" "); //string to array
console.log(array);

//object
let student=
{
name:"sreshta",
id:"727724euee109",   //prperties with key and value
dept: "EEE"
}
console.log(student);
console.log(student.name); //DOT notation
console.log(student["id"]); //bracket notation

student.dept="CSE";
student.age="20";
console.log(student);




let laptop=
{
    brand:"HP",
    price:20000,
    detail: "i5 processor windows 11",
    warranty: "10 years",
    available:true
}
console.log(laptop);
console.log(laptop["brand"]);
console.log(laptop["price"]);
console.log(laptop["detail"]);
console.log(laptop["warranty"]);
console.log(laptop["available"]);








