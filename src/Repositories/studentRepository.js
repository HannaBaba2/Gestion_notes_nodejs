import Repository from "./repository.js";
import Database from "../config/database.js";

export default class StudentRepository extends Repository {

async save(student){

        const db = await Database.getDatabaseInstance();


        const {firsname,lastname,sexe,birth_day} = student ;

        const insert_sql =`
         
        INSERT INTO students(firsname,lastname,sexe,birth_day)
        VALUES (:firsname,:lastname,:sexe,:birth_day);
        `;
        const reponse =await db.connection.run(insert_sql,{

            ':firsname':firsname,
            ':lastname':lastname,
            ':sexe':sexe,
            ':birth_day':birth_day,
        });

        
        return this.find(reponse.lastID);
}


async find(id_student) {
        const db = await Database.getDatabaseInstance();

        return await db.connection.get(
            'SELECT * FROM students WHERE id = :id;',
            { ':id': id_student }
        );
    }

async findAll() {
        const db = await Database.getDatabaseInstance();

        return await db.connection.all('SELECT * FROM students;');
    }


async update(id_student, student_data) {
        const db = await Database.getDatabaseInstance();

        const update_sql = `
            UPDATE students
            SET firsname = :firsname,
                lastname = :lastname,
                sexe = :sexe,
                birth_day = :birth_day
            WHERE id = :id;
        `;

        await db.connection.run(update_sql, {
            ':firsname': student_data.firsname,
            ':lastname': student_data.lastname,
            ':sexe': student_data.sexe,
            ':birth_day': student_data.birth_day,
            ':id': id_student
        });

        return await this.find(id_student);
    }

    async delete(id_student) {
        const db = await Database.getDatabaseInstance();

        const delete_sql = `
            DELETE FROM students WHERE id = :id;
        `;

        await db.connection.run(delete_sql, { ':id': id_student });
    }







}


// new Repository();
// new StudentRepository();
