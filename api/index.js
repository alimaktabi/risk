const express = require('express');
const router = express.Router();
const sql = require('mysql');
const { body, validationResult } = require('express-validator');

// console.log(process.env.MYSQL_DB)

const connection = sql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

const fields = [
    'first_name', 'last_name',
    'national_code', 'age', 'FC',
    'NPR', 'ofBM', 'BS', 'ESR', 'HB',
    'ALB',
];

router.post('/record',
    body('first_name').notEmpty().trim().escape(),
    body('last_name').notEmpty().trim().escape(),
    body('national_code').isNumeric(),
    body('age').isNumeric(),
    body('FC').isNumeric(),
    body('NPR').isNumeric(),
    body('ofBM').isNumeric(),
    body('BS').isNumeric(),
    body('ESR').isNumeric(),
    body('HB').isNumeric(),
    body('ALB').isNumeric(),
    (req, res) => {
        let q = 'INSERT INTO risks (first_name, last_name, national_code, age, FC, NPR, ofBM, BS, ESR, HB, ALB) ' +
            'VALUES(';
        console.log(req.body);
        for (let field of fields)
        {
            q += `${connection.escape(req.body[field])}, `;
        }
        q = q.slice(0, -2);
        q += ')';
        // connection.connect();
        let seoIndex, riskScore;

        // try {
        //     connection.query(q);
        //     seoIndex = (60 * req.body.BS) + (13 * req.body.ofBM) +
        //         (0.5 * req.body.ESR) - (4 * req.body.HB) - (15 * req.body.ALB) + 200;
        //
        //     riskScore = (4 * seoIndex) + 2 * req.body.NPR + 2 * req.body.FC + req.body.age
        // } catch (e) {
        //     console.log(e);
        // }
        // connection.end();
        return res.json({
            seoIndex,
            riskScore
        });
    });

module.exports = router;







