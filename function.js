// function print()
// {
//     console.log(" hello i am  function ")
// }
// print()
// function print(name)
// {
//     console.log(" hello i am "+name)
// }
// print("ram")
// function add(a,b){
//     return a+b
//     console.log("hello");
// }
// let result = add(10,20)
// console.log(result)

// let print = function (){
// console.log( "hello");

// }
// print() 

// function add (a){
//     return a+100
// }
// let result = add(10)
// console.log(result);

// let adding = (a) =>{
//     return a+100
// }
// console.log(adding(10));

//&advantages
// let adding = _ => 10+100
// console.log(adding());

//find out the given number is odd or even using arrow function
let check = _ => {
    if (4 % 2 === 0)
        return "Even";
    else
        return "Odd";
};


console.log(check());


//find out the given number gretest of 3

const greatest = _ => {
    if (10 > 20 && 10 > 30)
        return 10;
    else if (20 > 30)
        return 20;
    else
        return 30;
};
console.log( greatest());
//get the factorial of given number
// const factorial = _ => {
//     let fact = 1;

//     for (let i = 1; i <= 3; i++) {
//         fact = fact * i;
//     }

//     return fact;
// };


// console.log( factorial(3));
// or
let f=3;
let ans=1;
let fact = (f)=>{
    for (let i=2; i<=f; i++){
        ans*=i;

    }
    return ans;
}
console.log(fact(f));
