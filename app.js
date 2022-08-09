const express = require('express');

const app = express();

const port = 5833;

app.get('/', (req, res) => {
  res.send('Index Sayfası');
});

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});



