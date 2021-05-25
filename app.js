const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Listening on ${ PORT }`);
});