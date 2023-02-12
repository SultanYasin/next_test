const fs = require("fs").promises;
const xml2js = require("xml2js");

const util = require("util");

const parser = new xml2js.Parser();

fs.readFile("nameOfTheFile", (err, data) => {
    parser.parseString(data, (err, result) => {
        console.log(util.inspect(result, false, null, true) )
    })
})