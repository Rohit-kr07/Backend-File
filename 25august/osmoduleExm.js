const os=require('os');

console.log('platform:',os.platform());
console.log('CPU Cores:',os.cpus().length);
console.log('Total Memory:',os.totalmem()/1024/1024,'MB');
console.log('Free Memory:',os.freemem()/1024/1024,'MB');
console.log('Home Directory:',os.homedir());
