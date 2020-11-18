const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = process.env.VCAP_APP_PORT || process.env.PORT || '3000';
console.log("port: ", port);

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});