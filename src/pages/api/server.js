const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

export async function getStaticProps(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  console.log(data)

  return {
    props: {
      users: data
    }
  }

}

/* 

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

this should be the parser: 


const fs = require("fs").promises;
const xml2js = require("xml2js");

const util = require("util");

const parser = new xml2js.Parser();

fs.readFile("nameOfTheFile", (err, data) => {
    parser.parseString(data, (err, result) => {
        console.log(util.inspect(result, false, null, true) )
    })
})
*/