//*ex
// let arr=[1,2,3,4,5]
// console.log(arr);
// console.log(typeof(arr));
//*Heterogeneous
// let arr1=[1,2,3,4,5,'siri','sonu']
// console.log(arr1);
// console.log(typeof(arr1));
//*create array by using consractor
// let array=new Array(1,2,3,4,5) //to adding multiple values
// console.log(array);

//let array1=new Array(0) //to adding single value 
// console.log(array1);
//*acces the elements in array
// let array = [1,2,3,4,45]
// console.log(array[1]);

//*length is used to access the length
// let array = [1,2,3,4,45]
// console.log(array.length);
//*Array static method
//*1.Array.from only work with itterable data 
// let  array=Array.from("somu")
// console.log(array);
// let array1 = Array.from({
//     name:'somu',
//     age: 20
// })
// console.log(array1);
  
//*2.isarray
// let str='somu'
// console.log(array.isArray[str]);
//*3.array.of
// let array1 = Array.of(1,2,3,4,5)
// console.log(array1);
// let array = Array.of('s')
// console.log(array);
//*instance method of array
//*1.push() ://add the element at the end of the array
// let array=[1.2,3,4,5,6]
// array.push(3)
// console.log(array);
// console.log(array.length);
//*2.pop()://remove the last element
// array.pop()
// console.log(array);
// console.log(array.length);
//*3.shift()://remove element at first
// array.shift()
// console.log(array);
// console.log(array.length);
//*4.unshift()://adding element at first
// array.unshift(0)
// console.log(array);
// console.log(array.length);
//*5.slice()://i slice ing the string into new string//it always writen new array
// let array=[1.2,3,4,5,6]
// let noarray=array.slice(4) //+ve
// console.log(noarray);
// console.log(noarray.length);
// let no1array=array.slice(-4) //-ve
// console.log(no1array);
// console.log(no1array.length);
// let no2array=array.slice(5,3) //gerterthan length it give empty
// console.log(no2array);
// console.log(no2array.length);
// let no3array=array.slice(3,6) //lessthan length
// console.log(no3array);
// console.log(no3array.length);
//*6.splice()-->it change the content // it modifie the array //which writting the item which is deleted//it perform CRUD
// let array=[1,2,3,4,5,6]
 //let deletedata =array.splice(2,3) //starting index //it shows deleted element
// let deletedata =array.splice(2,5,'siri',0) //in deleted place it add new mentioned element
// console.log(deletedata);
// console.log(array);
//*7.concat //used to marge the two array it always written new array
// let newArray = array.concat(5,["siri","sonu"])
// console.log(newArray);
//*8.reverse()
// console.log(array.reverse());
// console.log(array);
//*9.join() -->convert array to string
// let array=[1,2,3,4,5,6]
// let newdata = array.join("-")
// console.log(newdata);
// console.log(typeof newdata);
//*10.indexof
// let array=[1,2,3,4,5,6,4]
// console.log(array.indexOf(5));
// console.log(array.indexOf(5));  //-1
//*11.lastindexof
// console.log(array.lastIndexOf(4));
//*12.includes()
// console.log(array.includes(5)); //true
// console.log(array.includes(5,6));//false
//*13.entries() -->it give itterater method//it give index with key//we use forof function to work with it
// console.log(array.entries());
//for()
// for (let x of array){
//     console.log(x);//it gives values
    
// }
// for(let data of array.entries()){
//     console.log(data); //it give index with values
    
// }
//*14.keys()
// let array=[1,2,3,4,5,6,4]
// for(let data of array.keys()){
//          console.log(data); //it give index
//      }
//*15.values
// for(let data of array.values()){
// console.log(data); //it give values
// }
//*16.sort()
// let colors = ["red","green","blue","pink","yellow"]
// console.log(colors.sort()); //based on asci value

let array=[1,3,6,8,3,6,75,8]
// console.log(array.sort((a,b)=>a-b)); //for same number sorting
//*17.find() //which is first greatest number
console.log(array.find((num)=>num>2));
//*18.findindex()
console.log(array.findIndex());
//*019.findlastindex()
// console.log(array.findLastIndex((num)=>num>200));

//assenments
//1.