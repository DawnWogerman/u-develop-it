const db = require('./db/connection');
const express = require('express');
const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use('/api', apiRoutes);







//default respone for any other request (Not Found)
app.use((req, res) =>{
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`);
});