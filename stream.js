const fs = require('fs');

const rs = fs.createReadStream('./lorem.txt',{encoding: 'utf8'});

const ws = fs.createWriteStream('./lorem-new.txt');

rs.on('data',(dataChunk)=>{
    ws.write(dataChunk);
})
