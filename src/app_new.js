import http, { request, Server } from "node:http";
import fs from "node:fs/promises";
import StudentController from "./controllers/studentController.js";
import { log } from "node:console";
import dotenv  from 'dotenv';
import {HTTP_STATUS_CODE} from "./constants/httpStatus.js";
import Database  from './config/database.js';
import { openDb } from "./tests/database.js";




dotenv.config();

// const db_path="/home/hanna-traore/Dossier_L3/Node_Js/gestion_notes/src/tests/database.sqlite3";

const db=Database.getDatabaseInstance();


 await db.initDb;


// console.log(db);



const studentController=new StudentController();

const server=http.createServer(async(req,res)=>{

    const method=req.method;
    const url=new URL(req.url,`http://${req.headers.host}`);
    
    const endpoints=method+":"+url.pathname;
    res.setHeader('Content-Type','application/json');

    // console.log(req.url);
    // console.log(req.method);

    switch (endpoints) {
        case 'GET:/students':
            studentController.read(req,res);
            break;
        case 'GET:/student':
             studentController.get(req,res);
            break;

        case 'POST:/students':
             studentController.create(req,res);
            break;
        case 'PUT:/student':
            studentController.update(req,res);
            break;

        case 'DELETE:/student':
            // console.log("Students Deleted");
            studentController.delete(req,res);
            break;
        default:

            res.writeHead(HTTP_STATUS_CODE.NOT_FOUND);
            res.end(JSON.stringify({

                "message":"Page not Found !"
            }));
            break;
    }

    



});

    
server.listen(process.env.PORT || 3000,()=>{
    console.log("Serveur satrt............");
});




