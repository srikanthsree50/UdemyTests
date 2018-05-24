const express = require('express');

var app = express();

app.get('/',(req,res) => {
res.send('hello world');
});

app.get('/users',(req,res) => {
    res.send([{
        name:'sree',
        age:33
    },
    {
        name:'sr',age:3
    }
]);
    });

app.listen(3000);

module.exports.app = app;