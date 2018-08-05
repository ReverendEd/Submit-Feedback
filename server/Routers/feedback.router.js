const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res)=>{
    console.log('router is working', req.body);
    const newFeedback = req.body
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`, 
        [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then((results)=>{
        res.sendStatus(201);
    })
    .catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    })
});

router.get('/',(req, res)=>{
    pool.query(`SELECT * FROM "feedback";`)
    .then((results)=>{
        res.send(results.rows)
    })
    .catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    })
})

router.delete('/:id', (req, res)=>{
    pool.query(`DELETE FROM "feedback" WHERE "id" = $1`, [req.params.id])
    .then((results)=>{
        res.sendStatus(201)
    })
    .catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    })
})

console.log('router working');

module.exports = router;