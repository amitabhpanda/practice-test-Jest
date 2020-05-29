const fetch = require("node-fetch");

//this is the promise based function to call the API.
const fetchfromSwapiPromise = (fetch)=>{
    return fetch("https://swapi.py4e.com/api/people")
    .then(response=>response.json())
    .then(data=> {
        return {
            count: data.count,
            results: data.results
        }
    })
}


// this is the async-await based function to call the API
const fetchfromSwapi = async (fetch) => {
    const response = await fetch("https://swapi.py4e.com/api/people")
    
    const data = await response.json();
    //console.log(data);
    return {
        count: data.count,
        results: data.results
    }
}

//fetchfromSwapi(fetch);


module.exports = {
    fetchfromSwapi,
    fetchfromSwapiPromise
}