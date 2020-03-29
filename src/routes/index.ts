import express from 'express';
import path from 'path';

var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.sendFile(path.resolve('src/public/index.html'));
});

export default router;
