import express from "express";
import { json } from "express";

const app = express();
app.use(json());

app.get('/api/users/currentuser', (req, res) => {
    res.send('test success!');
})

app.listen(3000, () => { 
    console.log('Listening on port 3000!');
} )

