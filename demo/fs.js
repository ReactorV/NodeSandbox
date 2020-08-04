//File system
const fs = require('fs');
const path = require('path');

/*
fs.mkdir(path.join(__dirname, 'test'), (error) => {
   if (err) throw err;

   console.log('Folder is created');
});
*/

const filePath = path.join(__dirname, 'test', 'text.txt');

//Create new file
/*fs.writeFile(filePath, "Hello I'am a new file", err => {
    if (err) throw err;

    console.log('File is created');

    //Add text to created file
    fs.appendFile(filePath, '\nAdd something', err => {
        if (err) throw err;

        console.log('Text is added');
    })
});*/

fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) throw err;

    //Without second parameter utf-8
    //const text = Buffer.from(content);
    //console.log('Content:', text.toString());

    console.log('Content:', content);
});
