import sqlite3 from 'sqlite3'

import {open} from 'sqlite'

import { dirname,join } from 'node:path';


const url=new URL(import.meta.url);

const parent_dir=dirname(url.pathname);

const base_dir=join(parent_dir,'src/tests');

const file_path=join(base_dir,'database.sqlite3')


export async function openDb() {
    return open({

        filename:'/home/hanna-traore/Dossier_L3/Node_Js/gestion_notes/src/tests/database.sqlite3',
        driver:sqlite3.Database 
    })
}

const db=await openDb();
// console.log(db);







