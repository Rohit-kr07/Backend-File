const path=require('path');
const filepath=path.join('folder','subfolder','pathfile.txt');
console.log('joined path:',filepath);

const absolutePath=path.resolve('pathfile.txt');
console.log('Absolute path:',absolutePath);

console.log('Basename:',path.basename(filepath));
console.log('Dirname:',path.dirname(filepath));
console.log('Extension:',path.extname(filepath));

//ye file folder ke andar ak folder(subfolder)ke andar
//bnaya huya file h
// path just firstpath or second path ko join krke show krta h
//basename show krta h jo textfile bnaya h
//directory show krta h means kon se folder ke andar dusra folder h
//extension btata h file ka 
