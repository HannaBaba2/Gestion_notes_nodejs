import {readFile,readFileSync,writeFile} from 'node:fs';

// const fs=require('node:fs');

// const {readFile} = require('node:fs');

const file_path='eleves.txt';

readFile(file_path,'utf-8',(err,data)=>{

    if(err) throw err;
    console.log(data);
});



console.log(readFileSync(file_path,'utf8'));

writeFile(file_path,'nouvelle_ligne',{flag:'a',encoding:'utf-8'},(err)=>{
    console.log("write successfuly !");
})


