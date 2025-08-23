const fs=require('fs').promises;
async function writeFileExample(){
    try{
        await fs.writeFile('mytext.txt','hello world','utf8');
        console.log('File created successfuly ');
    }catch(err){
      console.error('Error writing files:',err);
    }
}
writeFileExample();