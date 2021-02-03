import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('express');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});