import express from 'express';
import cors from 'cors';

const splitString = require('./functions');
const url         = require('url');
const isNull      = require('lodash.isnull');
const app         = express();
const port        = 80;

app.use(cors());
app.get('/task2B', (req, res) => {
  const query  = req.query,
        result = query.fullname,
        parse  = url.parse(result);

    if (isNull(parse.pathname)) {
      return res.send('Invalid fullname');
    } else {
      const finishedResult = splitString(result.trim()
                                               .replace(/ +/g, ' '), ' ');
      return res.send(finishedResult);
    }
});

app.listen(port, () => {
  console.log(`Your app listening on port ${port}!`);
});
