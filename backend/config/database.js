import mysql from "mysql2";

// create connection to DB
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_crud"
});

export default db;