import {readFile} from 'node:fs/promises';

import {dirname,join} from 'node:path'

const url = new URL(import.meta.url);


//pour avoir le repertoire parent on fait :

const parent_dir=dirname(url.pathname);

const base_dir=join(parent_dir,'..');

const file_path=join(base_dir,'eleves.txt');




try{
    const contents =await readFile(file_path,'utf8');
    console.log(contents);
}catch(error){
    console.log(error);
}