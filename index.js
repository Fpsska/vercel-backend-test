const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();



// middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT, PATCH, UPDATE");
    next()
});

app.use(express.json());


// routes
app.get('/', (req, res) => {
    res.send('START route');
});


// connection
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

