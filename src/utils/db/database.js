import { createPool } from "mysql2/promise";

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'n0m3l0s3',
    port:3306,
    database: 'Veterinaria',
});
// const pool = createPool({
//     "database": "veterinaria",
//     "host": 'aws.connect.psdb.cloud',
//     "username": 'yv452r5emxa4t3i9zx22',
//     "password": 'pscale_pw_T1hUFPZ6POpzLoPGH22B8om6wTeHoyyIpLz1hThAd2E',
//     "ssl": {
//         rejectUnauthorized: true
//     }
// });

export { pool };