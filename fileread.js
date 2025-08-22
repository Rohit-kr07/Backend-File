const fs = require('fs');


fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

fs.readFile('image.jpeg', (err, data) => {
  if (err) throw err;
  console.log('Image size:', data.length, 'bytes');
});