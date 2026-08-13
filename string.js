// let str="javascript"
// console.log(str);
// console.log(typeof str);

//  let str1="javascript"
// console.log(str1);
// console.log(typeof str1);

// let str3=`javascript`
// console.log(str3);
// console.log(typeof str3);
//using backtick
// let name="siri"
// let age=23
// console.log("hi, my name is"+name, " and my age is " +age);

//by using string interpulation -->$()
// let name="siri"
// let age=23
// console.log(`hi, my name is ${name} and my age is  ${age}`);  //template
// //string consroctor
// let data= new String(`siri`)
// console.log(data);
// console.log(typeof data);

//length propertie
// let data= new String(`siri`)
// console.log(data);
// console.log(typeof data);
// console.log(data.length);
// //indexing
// let str1="javascript"
// console.log(str1[0]);
// console.log(str1[str1.length-1]);

// //string method --> static/unicode /asci value

// let output=String.fromCharCode(73,78,79,69)
// console.log(output);
// //fromcharcode
// console.log(String.fromCharCode(128583));
// //fromcodepoint
// console.log(String.fromCodePoint(128583));
// console.log(String.fromCharCode(74,65,86,65,83,67,82,73,80,84));
//.raw
// let str = string.raw`hello\nworld ${6+9}`
// console.log(str);
//.at() works with both +ve and -ve
// let data ="javascript"
// console.log(data.at(3));
// console.log(data.at(-3));

//.charat() works with only positive index
// let data ="javascript"
// console.log(data.at(3));
//.charCodeAt:give asci values of specifed indexing value
// let data ="javascript"
// console.log(data.charCodeAt(3));

//concat()
// let str1='hello'
// let str2='world'
// console.log(str1.concat(" ",str2));

//include() it writen boolen data 
//synt ::console.log(data.includes(string,strtingindex));

// let data = 'welcome to javascript'
// console.log(data.includes("to",9));
//indexof() if string is not there it give -1 it there it give index
// let data = 'welcome to javascript'
// console.log(data.indexOf("to",1));

//startswith()

// let data = 'welcome to javascript'
// console.log(data.startsWith("to",1));

//lastindexof
// let data = 'welcome to javascript to to'
// console.log(data.lastIndexOf("to",1));

//split() :convert string to array with the help of separator
// let data = 'welcome to javascript to to'
// console.log(data.split());
// console.log(data.split(""));
// console.log(data.split(" "));
// console.log(data.split("o"));

//To uppercase

// let data = 'welcome to javascript to to'
// console.log(data.toUpperCase());
// console.log(data.toLocaleLowerCase());
//Trim
// let Data = ' React  '
// console.log(Data.length);
// Data.trim()
// console.log(Data.length);
// let result = Data.trim();
// console.log(Data.trim().length);
// console.log(Data.trimStart());
// console.log(Data.trimEnd());

//startswith
// let data = 'welcome to javascript to to'
// console.log(data.startsWith('welcome',4));

//endswith
// console.log(data.endsWith('to' ,0));

//repeat
// console.log(data.repeat(10));

//padstart used to add anything at the start of the string

// let data ='React'
// console.log(data.padStart(7,"0k"));
//padend
// console.log(data.padEnd(6,"j"));

//replace()
// let data = 'welcome to javascript javascript'
// console.log(data.replace('javascript',"React"));
// console.log(data.replaceAll('javascript',"React"));
//search
// console.log(data.search(/to/));

//match
// console.log(data.match(/to/));
// console.log(data.matchAll("to"));

// let str=new String("hello")
// console.log(typeof str.toString());
//slice it accept what index you give if starting index is greter than string it give empty
let data = 'welcome to javascript javascript'
// console.log(data.slice(21,8));
console.log(data.substring(8,21));
console.log(data.substring(-5));
console.log(data.substring(-5,2));
//substring it acceptt -ve index as 0 if starting index is greater than string it swap it

// let data = 'welcome to javascript javascript'
// console.log(data.substring(9));
// console.log(data.substring(21,8));
// console.log(data.substring(8,21));
// console.log(data.substring(-5));
// console.log(data.substring(-5,2));















