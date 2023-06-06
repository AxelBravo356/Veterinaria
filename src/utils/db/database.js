import { createPool } from "mysql2/promise";

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'n0m3l0s3',
    port:3306,
    database: 'Veterinaria',
});

export {pool};