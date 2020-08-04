const os = require('os');

console.log('Operation system:', os.platform());
//Operation system: win32

console.log('Processor architecture:', os.arch());
//Processor architecture: x64

console.log('Processor info:', os.cpus());

console.log('Free memory:', os.freemem());
//7990386688

console.log('Home dir:', os.homedir());
//Home dir: C:\Users\vadim.voytkus

console.log('Working:', os.uptime());
//Working: 1698285  (in sec)
