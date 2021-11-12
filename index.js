const express = require('express');
const app = express();

const port = process.env.PORT || 4200 ;
const www = process.env.WWW || './';
app.use(express.static(www));
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
