const express = require ('express');
const app = express();

let projects = [
    {id:1, name: "Mi proyecto 1", img: "/assets/images/shop.svg" },
    {id:2, name: "Mi proyecto 2", img: "/assets/images/shop.svg" },
    {id:3, name: "Mi proyecto 3", img: "/assets/images/shop.svg" },
    {id:4, name: "Mi proyecto 4", img: "/assets/images/shop.svg" },
    ];

app.use (express.json());
    
app.get ('/projects/', (req,res)=> {
res.send (projects);
});

app.post ('/projects', (req,res)=> {
const project= req.body;
projects.push (project);
res.send ("okey");
});

app.get ('/projects/:id', (req,res)=> {
 const id =req.params.id;
 console.log("ID",id);
const project =projects.find((p)=> p.id == id);
console.log (project)
if (!project) {
    res.status (404);
}
res.send (project)
});

//elimina elemento
app.delete("/projects/:id", (req, res) => {
    const projectId = parseInt(req.params.id); // Obtener el parámetro id y convertirlo a número
  
    const projectIndex = projects.findIndex(project => project.id === projectId); // Obtener el índice del proyecto
  
    if (projectIndex !== -1) {
      projects.splice(projectIndex, 1); // Eliminar con splice
      res.send("OK");
    } else {
      res.status(404).send("Proyecto no encontrado");
    }
  });
  

//actualiza elemento
app.put("/projects/:id", (req,res)=> {
//extraer el id
const id= req.params.id;
// buscar proyecto
const project=projects.find (p=>p.id==id);
//validar si se encontro el proyecto
if (!project){
    res.status (404);
    res.send ("Proyecto no encontrado!")
}
//actualizar objeto proyecto con el body
const body=req.body;
project.name=body.name
    res.send ("ok")
})

app.listen (3000,() =>console.log ("Servidor listo en http://localhost:3000"))
