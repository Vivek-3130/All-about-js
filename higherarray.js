// import { multiply } from "./javascript.js";
// import { multiply as mul } from "./javascript.js";
// import {add} from "./javascript.js";

// import * as javacript from "./javascript.js"
/*------------------------HIGHER ORDER FUNCTIONS & ARRAYS METHODS-------------------------------------*/
// const result = mul(2,3,5);
// const result1=add(5,9,6);

// const result = javacript.mul(2,3,5);
// const result1= javacript.add(5,9,6);
// console.log("The Result Of exported function : ",result," & ",result1);
// console.log("The Variable that got exported is: ",javacript.student_rollno);

// const companies = [
//     {name: "Company One"  , category: "Finance"   , start: 1981, end: 2003},
//     {name: "Company Two"  , category: "Retail"    , start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto"      , start: 1999, end: 2007},
//     {name: "Company Four" , category: "Retail"    , start: 1989, end: 2010},
//     {name: "Company Five" , category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six"  , category: "Finance"   , start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto"      , start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine" , category: "Finance"   , start: 1981, end: 1989},
// ];

// const ages=[33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//Normal For Loop
// for(let i=0; i< companies.length; i++){
//     console.log(companies[i]);
// }

//For each
// companies.forEach(company=>{
//     console.log(`Name : ${company.name}`);
// });

//Filter
// let canDrink=[];
// for(let i =0; i< ages.length; i++){
//     if(ages[i] >=21){
//         canDrink.push(ages[i]);
//     }
// }

// console.log("These ages can drink",canDrink)

// const canDrink = ages.filter((x)=>{
//     return x>=21 ; //returns true or false based on condition
// })
// console.log('these people are eligible to drink', canDrink);


// const retailname=companies.filter((x)=>{
//     return (x.category === 'Retail');
// })
// console.log('retail names:',retailname );


// const eightiescomp=companies.filter((eighties)=>{
//     return ((eighties.start>1980 && eighties.end <1990));
// });
// console.log("Companies started in 80's are as follows: ",eightiescomp);


// Maps

// Create array of companies name

// const companyNames = companies.map(function(company){
//     return company.name;
// })
// console.log(companyNames)

// const testMaps = companies.map(function(company){
//     return `${company.name} : [${company.start} - ${company.end}]`;
// })
// console.log(testMaps);

// const sqrAges=ages.map((x)=>{
//     return Math.pow(x,2);
// })
// console.log(sqrAges)

// sort

// const sortComp= companies.sort((c1,c2)=>{
//     if(c1.start > c2.start){
//         return 1;
//     }
//     else{
//         return -1
//     }
// });
// console.log(`Sorted Companies by start date`,sortComp );

// const sortedCompanies =  companies.sort((a,b)=>{
//     a.start > b.start ? 1: -1;
// })
// console.log(sortedCompanies)


// Reduce
// let sum = 0;
// for(let i =0; i< ages.length; i++){
//     sum=sum+ages[i];
// }
// console.log(sum)

// const ageSum =  ages.reduce((total,age)=>{
//     return total=total+age;
// },0);
// console.log("Age Sum: ",ageSum );

// GEt total years for all companies

// const totalYears = companies.reduce((total,years)=>{
//     return (total + (years.end - years.start)); //total sum of year till companies run
//     // return (total + (years.start + years.end)); //total year sum
// },0) //here total = 0
// console.log('Total Years:',totalYears );

// Combine methods

// const combined = ages
// .map(age => age *2) //this will double the value of every element present in array ages
// .filter(age => age >=40) //this will filter the ages above 40
// .sort((a,b) => a-b) //it will sort the array in asecending order
// .reduce((total,age)=>{
//     return total+=age;
// } ,0 ) //after this the sum will get printed


// console.log(combined);


/*-----------------------------------------Try & Catch Blocks In Javacript----------------------------------------------*/
// try and catch blocks
// try{
//     console.log(age);
// }
// catch(err){
//     alert(err.name);
//     console.log(err.message);
// }
// finally{
//     console.log(`This is always executed`);
// }

// const a = 2*9;
// console.log(`The result is ${a}`);

// try {
//     const res = prompt("Are You A Robot?");
//     if(res ==='Y'){
//         throw new Error('Robot Found')
//     }
// }
// catch (error) {
//     console.log(error.name,error.message);
// }
