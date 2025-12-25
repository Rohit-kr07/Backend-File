const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

if(path==='/')
{
    res.end('Welcome to our store');

}
 else if (path === '/products') {
    const category = query.category || 'all';
    res.end(`Showing ${category} products`);
  }
    else if (path === '/search') {
    const term = query.q || 'nothing';
    res.end(`You searched for: ${term}`);


  }  else {
    res.end('Page not found');
  }
});
server.listen(3000);