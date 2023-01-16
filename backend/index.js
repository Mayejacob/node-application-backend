// import express
import express from "express";

// import cors to get data from frontend
import cors from "cors";

// import route
import Router from "./routes/routes.js";

// init express
const app = express();

// use express json
app.use(express.json());

// use cors
app.use(cors());

// use router
app.use(Router);

// port
app.listen(5000, () =>{
    console.log("Server running successfully")
})
