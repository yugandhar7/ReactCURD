const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "#include<Mysql>",
    database: "todo"
})
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.get("/i", (req, res) => {
//     const x = "insert into curd(name,age,gender)values('yuganhdar',22,'male' )";
//     db.query(x, (error, result) => {
//         console.log(error);
//         console.log("data inserted sucesssfully");

//     })
app.get("/get", (req, res) => {
    const get = "select * from curd";
    db.query(get, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    })
})


app.post('/post', (req, res) => {
    const { name, age, gender } = req.body;
    const post = "insert into curd (name,age,gender)values(?,?,?)"
    db.query(post, [name, age, gender], (error, result) => {
        if (error) {
            console.log(error)
        }
        res.send("data inserted sucessfully")
    })
})
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    const remove = "DELETE FROM curd where id=?";
    db.query(remove, id, (error, result) => {
        if (error) {
            console.log(error)
        }
        res.send(result)
    })
})
app.get("/get/:id", (req, res) => {
    const id = req.params.id;
    const get = "select * from curd where id=?";
    db.query(get, id, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    })
})
app.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const { name, age, gender } = req.body;
    const update = "UPDATE  curd SET name=?,age=?,gender=? where id=? ";
    db.query(update, [name, age, gender, id], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    })
})


app.listen(5000, () => {
    console.log("!@#5000#@!");
})