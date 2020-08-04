const path = require('path');

console.log('FileName:', path.basename(__filename));
//FileName: path.js

console.log('Directory name:', path.dirname(__filename));
//Directory name: D:\MY APP\NodeSandbox\demo

console.log('Extension file:', path.extname(__filename));
//Extension file: .js

console.log('Parse:', path.parse(__filename));
//Parse: {
//   root: 'D:\\',
//   dir: 'D:\\MY APP\\NodeSandbox\\demo',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path'
// }

console.log(path.join(__dirname, 'server', 'index.js'));
//D:\MY APP\NodeSandbox\demo\server\index.js
