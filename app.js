const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors);
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello world !' });
})

app.listen(3000, () => {
  console.log('Started listening on port:', 3000);
  console.log('use your browser to reach `localhost:3000/`');
});