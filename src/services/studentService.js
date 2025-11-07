import Database from "../config/database.js";
import uuid from "../generateur.js";
import StudentRepository from "../Repositories/studentRepository.js";



export default class StudentService{

    studentRepository;

    uuidGen;

    constructor(){
        this.uuidGen=uuid(1000);
        this.studentRepository=new StudentRepository();
    }


    async getAll(){
        // const db=await Database.getDatabaseInstance();
        // return await db.connection.all('SELECT * FROM students');
        return await this.studentRepository.findAll();

    }
    async get(id){

        // const db=await Database.getDatabaseInstance();
        //  //const db=await Database
        //    return await db.connection.get(
            
        //     'SELECT * from students WHERE id=:student_id ; ',
            
        //     {

        //     ':student_id':id
        //     }


        // );


        return await this.studentRepository.find(id);
    }

    async create(student_data){


        // const db=await Database.getDatabaseInstance();
        //const {firsname,lastname,sexe,birth_day} = student_data ;

        // const insert_sql =`
         
        // INSERT INTO students(firsname,lastname,sexe,birth_day)
        // VALUES (:firsname,:lastname,:sexe,:birth_day);
        // `;
        // const {lastID} =await db.connection.run(insert_sql,{

        //     ':firsname':firsname,
        //     ':lastname':lastname,
        //     ':sexe':sexe,
        //     ':birth_day':birth_day,
        // });

        const student=await this.studentRepository.save(student_data);
        return student;

        // return id;
        
    }



    /**
     * @param {*} id
     * @param {*} student_data
     */

    

    async update(id_student, student_data) {
    // const db = await Database.getDatabaseInstance();

    // const update_sql = `
    //     UPDATE students
    //     SET firsname = :firsname,
    //         lastname = :lastname,
    //         sexe = :sexe,
    //         birth_day = :birth_day
    //     WHERE id = :id;
    // `;

    // await db.connection.run(update_sql, {
    //     ':firsname': student_data.firsname,
    //     ':lastname': student_data.lastname,
    //     ':sexe': student_data.sexe,
    //     ':birth_day': student_data.birth_day,
    //     ':id': id
    // });

    // // Retourner l'étudiant mis à jour
    // return await this.get(id);
    
    return await this.studentRepository.update(id_student, student_data);

}


async delete(id) {
//     const db = await Database.getDatabaseInstance();

//     const delete_sql = `
//         DELETE FROM students WHERE id = :id;
//     `;

//     await db.connection.run(delete_sql, { ':id': id });

    return await this.studentRepository.delete(id);


}

        
}