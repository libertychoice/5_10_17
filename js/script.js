"use strict";
class Api {
    constructor(){
        this.baseUrl = 'http://jsonplaceholder.typicode.com';
    }
}
document.querySelector("#get_data").addEventListener("click",()=>{
    console.log("click get_data");
});


document.querySelector("#send").addEventListener("click",()=>{
    console.log("click send");
});