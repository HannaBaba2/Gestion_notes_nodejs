import fs from "node:fs"
import {stat} from 'node:fs/promises';


const readableStream=fs.createReadStream('data.pdf');
const writetableStream=fs.createWriteStream('test1.pdf');


const filesize = (await stat('data.json')).size;
let percent=0;
// console.log(filesize);


readableStream.on('data',(chunk)=>{

    const chunk_size=chunk.length;
    percent +=(chunk_size/filesize)*100

    console.log(Math.round(percent));
    
    writetableStream.write(chunk);

    
})


readableStream.on('close',()=>{

    console.log("stream closed ..........");
})



