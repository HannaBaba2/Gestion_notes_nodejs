
DROP TABLE if exists students;

CREATE TABLE IF NOT EXISTS students(

    id INTEGER PRIMARY KEY autoincrement,
    firsname TEXT,
    lastname TEXT,
    sexe TEXT,
    birth_day DATE,
    check(sexe in('M','F'))

);


