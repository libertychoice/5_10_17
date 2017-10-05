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

const createUl = ()=>document.createElement("ul")
const createLi = ()=>document.createElement("li")

const api = new Api();


document.querySelector("#get_data").addEventListener("click",()=>{
    const resultDiv = document.querySelector("#result");
    resultDiv.innerHTML = "";
    api.getPosts()
    .then(data=>{   
       const ul = createUl()
       data.map(el=>{
            const li=createLi()
            li.textContent = el.title
            ul.appendChild(li)
        })
        resultDiv.appendChild(ul)
       // document.querySelector("#result").appendChild(ul)
    })
       
});

document.querySelector("#get_data1").addEventListener("click",async ()=>{
    const resultDiv = document.querySelector("#result")
    resultDiv.innerHTML = "";
    const data = await api.getPosts()
    const ul = createUl()
    data.map(el=>{
            const li = createLi()
            li.textContent = el.title
            ul.appendChild(li)
        })
        resultDiv.appendChild(ul)
       // document.querySelector("#result").appendChild(ul)
       
});

//document.querySelector("#send").addEventListener("click",()=>{
//    console.log("click send");
//});