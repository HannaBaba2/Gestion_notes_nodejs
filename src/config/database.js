import sqlite3 from 'sqlite3'
import {open} from 'sqlite'
import {readFile} from 'node:fs/promises';
import fs from "node:fs/promises";
import path, { dirname,join } from 'node:path';

// const url=new URL(import.meta.url);

// const parent_dir=dirname(url.pathname);

// const base_dir=join(parent_dir,'src/tests');

// const file_path=join(base_dir,'database.sqlite3')


export default class Database{

    connection;

    static instance;
    static db_path="/home/hanna-traore/Dossier_L3/Node_Js/gestion_notes/src/tests/database.sqlite3";
    // static db_path="file_path";


    constructor(){}
    static async getDatabaseInstance(){

        if(Database.instance == undefined){
            Database.instance=new Database();
            await Database.instance.openDb(Database.db_path);
        }

        return Database.instance;

    }
    

    async  openDb(db_path) {
   

        this.connection=await open({

             filename:db_path,
             driver:sqlite3.Database 
        });

        await this.initDb();
 }

 async initDb(){

    //Crée les tables ddl.sql
    
    console.log('Création des tables');

    const base_dir=path.dirname(new URL(import.meta.url).pathname);
    // console.log(base_dir);
    const ddl_sql=await fs.readFile(path.join(base_dir,'ddl.sql'),{

        encoding:'utf-8'
    });

    await this.connection.exec(ddl_sql);

    //Inserer des n-uplet dml.sql

    console.log("Insertion des n-uplets");


    const dml_sql=await fs.readFile(path.join(base_dir,'dml.sql'),{

        encoding:'utf-8'
    });

    await this.connection.exec(dml_sql);
    
 };


}





    
