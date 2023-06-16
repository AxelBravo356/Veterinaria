import { createPool } from "mysql2/promise";

// const pool = createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'n0m3l0s3',
//     port:3306,
//     database: 'Veterinaria',
// });
const pool = createPool({
    "database": "veterinaria",
  "user": "hya8s9jvx7tju3liqbme",
  "host": "aws.connect.psdb.cloud",
  "password": "pscale_pw_1nkmS748DdvaUP1POBSGiRQNEmQoa6IXrOITSZDXnrA",
    "ssl": {
        rejectUnauthorized: true
    }
});



export { pool };