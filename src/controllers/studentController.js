import { json } from "node:stream/consumers";
import uuid from "../generateur.js";
import StudentService from "../services/studentService.js";
import {HTTP_STATUS_CODE} from "../constants/httpStatus.js";

export default class StudentController{

    
    studentService;

    constructor(){
        this.studentService=new StudentService;
    }
    async read(req,res){

        res.writeHead(HTTP_STATUS_CODE.SUCCESS);
        res.end(JSON.stringify(await this.studentService.getAll()));

        
    }
    async get(req,res){


        const url=new URL(req.url,`http://${req.headers.host}`);
        // const id =url.searchParams.get("id");
        const id=Number.parseInt(url.searchParams.get("id"));
        const student=await this.studentService.get(id);

        if(student===undefined){
            res.writeHead(HTTP_STATUS_CODE.NOT_FOUND);
            res.end(JSON.stringify({
                "message":'Ressource not-found !!'
            }));
        

        }else{

            res.writeHead(HTTP_STATUS_CODE.SUCCESS);
            res.end(JSON.stringify(student))
        }
        
        
    }
    async create(req,res){
        
        const {firsname,lastname,sexe,birth_day} =await json(req);
         
        
    
        const student={

            'firsname':firsname !==undefined ? firsname:"",
            'lastname':lastname !==undefined ? lastname:"",
            'sexe':sexe !==undefined ? sexe:"M",
            'birth_day':birth_day !==undefined? birth_day:"",

        };
        const new_student=await this.studentService.create(student);
        // console.log(new_student);
                       

        res.writeHead(HTTP_STATUS_CODE.SUCCESS);
        res.end(JSON.stringify(new_student));
    
    }

    async update(req,res){
        

        const url=new URL(req.url,`http://${req.headers.host}`);
        const id =Number.parseInt(url.searchParams.get("id"));


        const {firsname,lastname,sexe,birth_day} =await json(req); 
        // console.log(firsname);
        // console.log(lastname);
        // console.log(sexe);
        // console.log(birth_day);
        
        
        
          
        const student={

            'id':null,
            'firsname':firsname !==undefined ? firsname : "",
            'lastname':lastname !==undefined ? lastname : "",
            'sexe':sexe !==undefined ? sexe:"M",
            'birth_day':birth_day !==undefined? birth_day:"",

            };  


            console.log(student);
        const updated_student=this.studentService.update(id,student);
        


        if(updated_student){
            res.writeHead(HTTP_STATUS_CODE.SUCCESS);
            res.end(JSON.stringify(updated_student));
            return;
        

        }else{       
            res.writeHead(HTTP_STATUS_CODE.NOT_FOUND);
            res.end(JSON.stringify({
                "message":"Page not Found !"
            }))
            
        }
        
        
    }



    delete(req,res){

        const url=new URL(req.url,`http://${req.headers.host}`);
        const id =Number.parseInt(url.searchParams.get("id"));
        this.students=this.studentService.delete(id);

        res.writeHead(HTTP_STATUS_CODE.NO_CONTENT);
        res.end("Student successfuly deleted");


    }
    

}