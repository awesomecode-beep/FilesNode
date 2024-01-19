const fs = require('fs');
const path  = require('path');

fs.readFile(path.join(__dirname,'./model.txt'),(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
})

fs.writeFile(path.join(__dirname,'./model.txt'),"My name is Ankith Nice to meet you",(err)=>{
    if (err) throw err;
    console.log("Operation Complete");
})