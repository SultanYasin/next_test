const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;



app.get('/users', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const data = response.data;
      console.log(...data, data.name);
      res.send(data.name);
    })
    .catch(error => {
      console.error(error);
      res.send(error);
    });
});

app.listen(5000, () => {
  console.log(`Server started on port ${port}`);

})
