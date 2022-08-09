const http = require('http');

const express = require('express');

const app = express();

let users = ['John', 'Tom', 'Jenny'];

app.get('/', (request, response) => {
  response.end(`<h1>Welcome!</h1>`);
});

app.get('/users', (request, response) => {
  response.end(`<h1>${users}</h1>`);
});

app.get('/users/:id', (request, response) => {
  const userName = users[request.params.id - 1];
  response.end(`<h1>hello ${userName}!!</h1>`);
});

app.get('*', (request, response) => {
  response.end(`<h1>Page Not Available;</h1>`);
});

app.listen(3000);



// let server = http.createServer((request, response) => {
  
//   let _url = request.url;


//   if(_url === '/'){
//     response.end(`<h1>Welcome!!</h1>`);
//   } else if(_url === '/users'){
//     response.end(`<h1>${users}</h1>`)
//   } else if(_url.split('/')[1] === 'users'){
//     let userIdx = _url.split('/')[2];
//     let userName = users[userIdx - 1];

//     response.end(`<h1>User name is ${userName}!</h1>`);
    
//   } else {
//     response.end(`<h1>Page Not Available</h1>`);
//   }

// });

// server.listen(3000);