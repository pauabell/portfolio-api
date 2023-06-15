import express from "express";
import projectsRouter from "./routes/projects.routes.js";
const app = express();


//añadir middleware express.json
app.use(express.json());
app.use("/archivos", express.static("public"));
//añade la ruta de  projects.js
app.use("/projects",projectsRouter)


app.listen(3000, () => console.log("Servidor listo en http://localhost:3000"))
