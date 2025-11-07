// import http from "node:http";
// import fs from "node:fs/promises";



// // GET /students->Students list
// // GET /student/:id->Student details
// // POST /student->Student created
// // PUT | PATCH /student/:id-> Student updated
// // DELETE /student/:id ->Student Deleted

// http.createServer(async(req,res)=>{

//     console.log(req.method);
//     console.log(req.url);

//     res.writeHead(200,{
//         'content-type':'document'
//     });

//     res.end("Hello");

//     // const readableStream= fs.createReadStream('./src/index.html');

//     // readableStream.pipe(res);

//     // const eleve={

//     //     "name":"Tamba",
//     //     "phone":"+228 90909138",
//     //     "birthday":"15/02/2025",
//     // }
//     // res.end(JSON.stringify(eleve))
// }).listen(3000,()=>{
//     console.log("Serveur satrt............");
// });




import http from "node:http";
import fs from "node:fs/promises";



// GET /students->Students list
// GET /student/:id->Student details
// POST /student->Student created
// PUT | PATCH /student/:id-> Student updated
// DELETE /student/:id ->Student Deleted

http.createServer(async(req,res)=>{

    console.log(req.method);
    console.log(req.url);

    res.writeHead(200,{
        "Content-Type":"application/json"
    });


    if(req.method==="GET" && req.url==="/students"){
        const students=[
        
        {

        "name":"Tamba",
        "phone":"+228 90909138",
        "birthday":"15/02/2025",
        },
        {

        "name":"BABA",
        "phone":"+228 90909137",
        "birthday":"15/02/2024",
        },
    ]

    return res.end(JSON.stringify(students))

}

    if (req.method === "GET" && req.url.startsWith("/student/")) {
        const id = req.url.split("/")[2];
        const student = { id: id, name: "Tamba", phone: "+22890909138" };
        return res.end(JSON.stringify(student));
    }



    if (req.method === "POST" && req.url === "/student") {
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            const nouveauStudent = JSON.parse(body);
            nouveauStudent.id = 3;
            res.end(JSON.stringify({ message: "Étudiant créé", student: nouveauStudent }));
        });
        return;
    }


    if ((req.method === "PUT" || req.method === "PATCH") && req.url.startsWith("/student/")) {
        const id = req.url.split("/")[2];
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            const updates = JSON.parse(body);
            res.end(JSON.stringify({
                message: `Étudiant ${id} mis à jour`,
                updates
            }));
        });
        return;
    }

    if (req.method === "DELETE" && req.url.startsWith("/student/")) {
        const id = req.url.split("/")[2];
        return res.end(JSON.stringify({ message: `Étudiant ${id} supprimé` }));
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route introuvable" }));




    // res.end("Hello");

    // const readableStream= fs.createReadStream('./src/index.html');

    // readableStream.pipe(res);

    // const eleve={

    //     "name":"Tamba",
    //     "phone":"+228 90909138",
    //     "birthday":"15/02/2025",
    // }
    // res.end(JSON.stringify(eleve))
}).listen(3000,()=>{
    console.log("Serveur satrt............");
});




