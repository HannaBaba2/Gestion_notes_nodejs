export default class Repository{

    constructor(){

        // throw new Error("Impossible d'extencier cette classe !!! ");

        // const repo = new Repository();        
        //console.log("Valeur de new.target :", new.target);

        if (new.target === Repository) {
            throw new Error("Impossible d'instancier !");
        }

    }

    

    
    save(student){}
    update(id_student,student_data){}
    find(id_student){}
    findAll(){}
    delete(id_student){}


}