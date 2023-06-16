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
    "user": "xhuv6nxfsmze2p1sbwdc",
    "host": "aws.connect.psdb.cloud",
    "password": "pscale_pw_EjAf92PovO4YtBMwDnQ23cDdEMv8by0BNIji8bbdSTt",
    "ssl": {
        rejectUnauthorized: true
    }
});



export { pool };