const connect = require('connect');
const http = require('http');
const url = require('url');

const app = connect();

app.use((req, res) => {
  const query = url.parse(req.url, true).query;
  const method = query.method;
  const x = parseFloat(query.x);
  const y = parseFloat(query.y);
  let result = '';

  switch (method) {
    case 'add': result = x + y; break;
    case 'subtract': result = x - y; break;
    case 'multiply': result = x * y; break;
    case 'divide': result = y !== 0 ? x / y : 'Cannot divide by zero'; break;
    default: result = 'Invalid method';
  }

  res.end(`Result: ${result}`);
});

http.createServer(app).listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
