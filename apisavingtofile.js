const fs = require('fs').promises;
const fetch = require("node-fetch");

async function processUser(userId) {
    try {

        const user = { id: userId, name: 'Rohit-kr07'};

        console.log('Fetched user:', user.name);

        const response = await fetch(`https://api.github.com/users/${user.name.
toLowerCase()}`);

    const githubData = await response.json();

    console.log('GitHub bio:', githubData.bio || 'No bio');

    await fs.writeFile('user-data.txt',JSON.stringify({ user, githubData }));

    console.log('Data saved to file');

} catch (err) {

    console.log('Error:', err.message);
  }
}
 


processUser(1);