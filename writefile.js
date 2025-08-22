const fs = require('fs').promises;

async function writeFileExample() {
  try {
    // Write text to a file
    await fs.writeFile('myfile.txt', 'Hello, World!', 'utf8');

    console.log('Files created successfully');
  } catch (err) {
    console.error('Error writing files:', err);
  }
}

writeFileExample();