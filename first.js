//console.log(" Welcome Akash Sahu");



//    comments 
//     //    ->  single line  comment
//    /*  */ -> multiple line comment

/*
// Arthmatic operators 
let a=5;
let b=2;
       // work on two operents   
console.log(a+b);  // additional operator
console.log(a-b);  // substraction operator
console.log(a*b);  // multiplication
console.log(a/b);  // division
console.log(a%b);  //  modulus=remender
console.log(a**b);  //Exponential a ki power b
        // work on single operent(unary operator)
// pre-increment and decrement(pahle increment & decrement baad me print)
console.log(++a);   // increament a++ -> a=a+1
console.log(--b);   // decreament b-- -> b=b-1
// post-increment and decrement (pahle print baad me increment & decrement  )
console.log(a++);   // increament a++ -> a=a+1
console.log(b--);   // decreament b-- -> b=b-1         */
/* 
// Assignment operators(assign values)
let a=5;
a=6 ; // a= a
console.log(a);
a+=4;  // a= a+4
console.log(a);
a-=4;  // a= a-4
console.log(a);
a*=4;  // a= a*4
console.log(a);
a/=4;  // a= a/4
console.log(a);
a**=4;  // a= a**4
console.log(a);   */
/*
// comparision operators 
let a=5;
let b="5";
let c=6;
console.log(a==b);  // true    == is check olny value not data type but === is check value with data  type
console.log(a!=b);  // false   != is check olny value not data type but !== is check value with data  type

console.log(a===b); // false  === is check value with data type  // strict version
console.log(a!==b); // true   !== is check value with data type  // strict version

console.log(a>c); // false
console.log(a>=c);  // false
console.log(a<c);  // true
console.log(a<=c);  // true   */
/*
// logical operators
let a=5;
let b =6;
// && -> if both are true then true 
console.log(a===b && a<b); //  false (a===b ->false and a<b -> true)
// || -> if anyone is true then true
console.log(a===b || a<b); //  true (a===b ->false or a<b -> true) 
// ! -> if true then false and if false then true
console.log(!(a===b) ); // true (a===b->false)    */
/*
// conditional statement 
// if statement
let age =25;
age=15;
if(age>18){
    console.log("you can vote");
}
if(age<18){
    console.log("you can not vote");
}  

// if-else statement
let mode ="light";
let color;

if(mode==="dark"){
    color="black";
}else{
    color="white";
}
console.log(color);

// else-if statement
let Age =25;
if(Age<5){
    console.log("child");
}else if(Age<18){
    console.log("young");
}else if(Age<60){
    console.log("adult");
}else{
    console.log("old");
}

// nested if else
if(age >= 18) {           // outer if
    if(id == true) {      // inner if
        print("Eligible");
    }
    else {
        print("ID required");
    }
}
else {
    print("Not eligible");
}

//switch
let choice = prompt("Enter a number between 1 and 3:");

switch(choice) {
    case "1":
        alert("You selected One");
        break;
    case "2":
        alert("You selected Two");
        break;
    case "3":
        alert("You selected Three");
        break;
    default:
        alert("Invalid Choice");
}

  

// ternaty operators
// condition ? true_output : false_output
let myAge = 16;
let a;
a = myAge > 18 ? "adult" : "not adult";
console.log(a);
*/
/*
// loops 
// for loop
for(let i=1;i<=5;i++){
console.log("Akash Sahu");
}

// while loop
let i;
while(i<=5){
    console.log("Akash Sahu");
    i++;
}

// do-while loop
let count;
do {
    console.log(count);
    count++;
}while(count<=5);

// for-of loop - for iterating of srings and arrays 
let a = "AkashSahu";
for(let i of a){
    console.log(i);
    i++;
}

// for-in loop - for iterating of objects
let student ={
    name:"akash",
    age:22,
    cgpa:8.9,
    ispass:true

};
for(let i in student){
    console.log(i,":",student[i]);
    i++;
}
*/
/*
// Strings 
// create string
let str1 ="akash sahu"; // double coats
let str2 ='akash sahu'; // single coats
// inbuild properties & function(methods) in js

// 1.string length
l1 = str1.length;  
l2 = str2.length;  
console.log(l1,l2);

// string index
console.log(str1[0],str1[1],str2[3]);

// template literals(specials type strings) we use " BackTecks" -> ` `
let specialString = `thie is a templete literals`;
console.log( specialString );
console.log(typeof specialString );

// sring interpolation (we add place holders ) 
let obj = {
    item:"pen",
    price:10,
    peace:2
};
console.log("the cost of",obj.item,"is",obj.price,"rupees."); //  using normal string
     // OR
let output = `the cost of ${obj.item} is ${obj.price} rupees.`; // using template literals & interpolation
console.log(output);

// we can add expression in interpolation
let total= `the total is ${2+3+4-4}`;
console.log(total);

// escape charecters (\n - for next line ,\t - for one tab space )
// escape charecters always count as a single charecter when we calculate string length
console.log("akash \nsahu");
console.log("aman \tsahu");

// strings methods(functions)
//upper case
let str3 = `   Akash Sahu  `;
s3 = str3.toUpperCase();
console.log(s3);
// lower case 
s4 = str3.toLowerCase();
console.log(s4);
//trim (remove white spaces in starting and ending)
s5 = str3.trim();
console.log(s5);
// slice (print any prat of string)
s6 = str3.slice(2,5);

console.log(s6);
// concatinatin(to concatinate two strings) and we can concatinate strings by + ;
let strs1 = "akash sahu";
let strs2 = "akhari";
 res = strs1.concat(strs2);
 console.log(res);
 //replace 
 console.log(strs1.replace("a","y")); // replace-only first one "a" replace by "y"
 console.log(strs1.replaceAll("a","y"));// replaceAll-all "a" replace by "y"
 //char at - to print any index char frpm string
 let n="Tree";
 console.log(n.charAt(0));//T

 // practice question
 let fullName = prompt("Enter the Full Name without spaces in small letter:" );
 console.log("fullname is :", fullName,"\n", "username is: ","@"+fullName+fullName.length);
*/
  /*              // array

 // arrays - collection of items in linear and type of array is object with index and  it is mutable .
 // properties of array
 //create arrays
 let heroes = ["ironman","hulk","thor","batman"];
 console.log(heroes);
 console.log(heroes.length);// to print length of array
 console.log(typeof heroes); // to print type of array is object with index(property of array)

 // array index
 let marks =[97,82,75,64,36];
 console.log(marks); // to print all element of array  ->  [97,82,75,64,36]
 console.log(marks.length); // to print length of array ->  5
 console.log(typeof marks); // to print typeof array  ->     object

 console.log(marks[3],marks[5],marks[0]);// to print any particular element from the array using index -> 64 undefined 97
 console.log(typeof marks[2]); // to print type of element of array -> number
 marks[0]=37; // to change any particular element from the array
 console.log(marks); // to print new array -> [37, 82, 75, 64, 36]

 // looping over an array(print all element an array using loops)
 // we can apply all methons in array using loop
 let total =[97,82,75,64,36];
 // using for loop
 for(let idx =0;idx<total.length;idx++){
   console.log(total[idx]); 
 }
 //using for of loop
 for(let num of total){          
    console.log(num); 
 }
// practice question-> to find avg of marks
let numbers =[85,97,44,37,76,60];
let sum =0;
let ln=numbers.length;
 for(let number of numbers){     
      sum+=number; 
 }
 console.log(`the sum is :${sum},total numbers of marks:${ln}`);
 let avg = sum/ln; 
console.log(`the avg is :${avg}`);

// practice question
let prices =[250,645,300,900,50];
console.log("the prices of five items",prices);
console.log("the final prices after applying offer of 10%");
for(let price of prices){
    finalprice = price - price/10;
    console.log(`${price}: ${finalprice}`);
}

//methods fo array
let foodItems=["potato","apple","litchi","tomato"];
console.log(foodItems);
// push- to add element from the end in original array
foodItems.push("chips","burger","paneer");
console.log(foodItems);
//pop- to delete from the end & return in the original array without giving element
console.log(foodItems.pop()); // it is return poped(deleted element) element 
console.log(foodItems);       // it is print poped array
// tostring- change array to string not change in the original array
console.log(foodItems.toString());  // return a new strings after changing into string
console.log(foodItems);   // not changing  in the original array
// concate- to joins multiple arrays & returns result  , it is not chage original array
let foodItem1=["potato","apple","litchi","tomato"];
let foodItem2=["chips","burger","paneer"];
let totalFoodItems = foodItem1.concat(foodItem2);
console.log(totalFoodItems);  
// unshift() - it is work as push(add to start an element) in original array
let foodItem=["potato","apple","litchi","tomato"];
foodItem.unshift("mango"); // add to start
console.log(foodItem);  // in original array
//shift()- it is work as pop(delete to start an element) in original array
foodItem.shift(); // delete to start
console.log(foodItem);  // in original array
//slice()- returns a piece of an array , it is not chnge in original array-slice(starting idx , ending idx)
console.log(foodItem.slice(1,3));  //  not change in original array
//splice()-change original array(add , remove,replace)-splice(starting idx,element count,new elements)
let nums =[97,82,75,64,36];
//nums.splice(2,2,101,102);
//console.log(nums);

// add element
  // nums.splice(2,0,101);
  // console.log(nums);
// delete element
  // nums.splice(3,1);
  // console.log(nums);
//replace element
   nums.splice(3,1,101);
   console.log(nums);

*/
/*
// functions in js
//block of code that performs a specific task , we can be invoke whenever needed
// function definition
function myFunction(){
    console.log("Akash Sahu");
    console.log("Akhari Narwal Kanpur Nagar");

}
// function call/invoke
myFunction();

// parameted function
function myFun(name,address){ // parameters -> local variable of function ,it has block scope
    console.log(name,address);
   
}
myFun("Akash Sahu","Akhari"); //  -> arguments
 
// practice question
// kind of function 

// simple print function
function sum(a,b){
    console.log(a+b);
}
sum(1,3);

      // OR

//return function
function sumNum(a,b){ 
    s=a+b;     // retuen a+b;
    return s;    
}
console.log(sumNum(4,6));

       //OR

// arrow function in modern js
const arrowSum = (a,b) => {
      console.log(a+b);
};
arrowSum(3,5);

// practice question
function countVowels( str1){
    let cnt=0;
    let str = str1;
    let vowels = ["a","e","i","o","u","A","E","I","O","U"];
    console.log(`The vowels are :`);
    for(let v of vowels){
       for(let i=0;i<str.length;i++){
        if(str[i]==v){
            cnt++;
     console.log(`${cnt}:${str[i]}`);
        }
       }
    } 
    console.log("Number of Vowels in String:",cnt);       
}
countVowels( "Aeiousjkhkxopwijnjxcfaseq");

// ForEach(function) loop in array
// arr.forEach( callBackFunction )- callBackFun-> it is a function to execute for each element in the array
// callback-> it is a fun passed as an argument to anathor function.
// forEach fin in java is a higher order function/methodes(jo kisi dusre fun ko as a parameter lete ye use karte hai ya return kar rha ho fun ko)

let arr = [1,2,3,4,5,6];
arr.forEach( function printVal(val) {
    console.log(val);
});

//or

let arr1 =["agra","delhi","kanpur","lacknow"];  // forEach function we can use only for array not strings 
arr1.forEach((val,idx,arr1) => {                 // we can use only these three parameters like  val,idx,arr1 
    console.log(val.toUpperCase(),idx,arr1);    // we can apply any methodes of array in this 
});

//practice question
let arr2 =[1,2,3,4,5,6,7,8,9];  
arr2.forEach((val) => {             
    console.log(val*val);   
});
*/
// some more array methodes
//map = creates a new array with the results of some operations .the value its comeback returns are used to form new array 
let nums =[1,2,3,4,5,6,7,8,9]; 
let newarr = nums.map((val) => {
    return val*val;
});
console.log(newarr);
console.log(nums);

//filter - creates a new array of elements that give true for a condition/filter.
let evenArr = nums.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);
console.log(nums);

//reduce - performs some operations & reduces the array to a single  value .it returns that single value.
let sumArr = nums.reduce((val,curr) => {

    return val+curr;
});
console.log(sumArr);
console.log(nums);







