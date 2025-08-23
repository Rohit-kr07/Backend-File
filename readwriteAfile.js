const fs=require('fs').promises;
async function fileOperation(){
    try{

        //writing to a file
        await fs.writeFile('example.txt','hello,Node.js!');
        console.log('File Written Successfully');
        //Reading to a file
        const data=await fs.readFile('example.txt','utf8');
        console.log('File content:',data);

        //Append to a file
        await fs.appendFile("example.txt","\nAppended text!");
        console.log("Text Append Successfully");
        //Listing files in a directory
        const files=await fs.readdir(".");
        console.log("Directory content:",files);
    } catch(err){
        console.error("Error:",err.message);
    }
}
fileOperation();