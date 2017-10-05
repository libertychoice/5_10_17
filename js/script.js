"use strict";
class Api {
    constructor(){
        this.baseUrl = 'http://jsonplaceholder.typicode.com';
    }

    _get(path){
       return fetch(`${this.baseUrl}${path}`,{
    method:"GET"})
    }

    _post(){
        return fetch(`${this.baseUrl}${path}`,{
            mode:"no-cors",
            method:"post"})

    }

    getPosts(){
        return this._get("/posts")
        .then(data=>{
            console.log(data);
            return data.json()
        })
        .catch(err=>{
            console.error(err);
            return Promise.resolve([])
        })
    }
}

const api = new Api();


document.querySelector("#get_data").addEventListener("click",()=>{
    console.log("click get_data");
    api.getPosts()
    .then(data=>{
    console.log(data)
});


});


document.querySelector("#send").addEventListener("click",()=>{
    console.log("click send");
});