const fs=require('fs').promises;
Promise.all([
      fs.readFile('dummyfile1.txt','utf8'),

       fs.readFile('dummyfile2.txt','utf8')
])
.then(([data1,data2])=>{
    console.log('dummyfile 1',data1);
    console.log('dummyfile 2',data2);
})
.catch(err => console.log('error:', err.message));