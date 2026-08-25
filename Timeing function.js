//*setTimeout:-it execute code at only once
//console.log("started....");
//console.log("Fatching DataTransfer.......");
//setTimeout() =>{
    // }, timeout();

    //setTimeout(()=>{
        //console.log("fatching data..");
        
   // }, 10000)
   // console.log("ended...");
   // console.log("iokkjkjkdjk");
//*setinterval:- it execute code repetedly
//console.log("started....");
//console.log("Fatching DataTransfer.......");
//setTimeout() =>{
    // }, timeout();

   // setInterval(()=>{
    //    console.log("fatching data..");
        
   // }, 1000)
   // console.log("ended...");
   // console.log("iokkjkjkdjk");

   //*clearTimeout:-stops a timeout set by settimeout()
//    console.log("started...");
//    setTimeout(()=>{
//     alert("login page alert..(After seat delay)");
//    },5000)

//    login ? clearTimeout(logintimer):" "
   
//*clearinterval

let login = false
console.log("started...");

let logintimer = setInterval(()=>{
alert("login page alert..(After seat delay)");
   },3000)
   setTimeout(()=>{
    clearInterval(logintimer)
   },9000)

   login ? clearInterval(logintimer):" "

