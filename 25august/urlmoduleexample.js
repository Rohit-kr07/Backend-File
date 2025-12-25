const url=require('url');

const myurl=new URL('https://shop.com/products/shoes?color=red&size=10');
console.log('Hostname:',myurl.hostname);
console.log('Path:',myurl.pathname);
console.log('Quary:',myurl.search);
console.log('Hash:',myurl.hash);
