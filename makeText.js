/** Command-line tool to generate Markov text. */
const fs = require('fs');
const axios = require('axios')


function cat(path){
    fs.readFile(path, "utf8", (err, data)=>{
        if(err){
            console.log(`could not read path ${path}: ${err}`);
            process.exit(1); 
        } 
        console.log(data);
    })    
}

async function webCat(url){
    try{
        let res = await axios.get(url);
        console.log(res.data);  
    } catch(err){
        console.log(`could not fetch ${url} : ${err}`);
    }  
}

if (process.argv[2] == 'file'){
    cat(process.argv[3]);
} else {
    webCat(process.argv[3]);
}