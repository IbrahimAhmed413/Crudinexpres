const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("hehehehehehehehe");
    next(); 
});

app.use((req, res, next) => {
    const isAuthenticated = true; 
    if (isAuthenticated) {
        console.log('User is authenticated');
        next();
    } else {
        console.log('User is not authenticated');
        res.status(403).send('Access denied'); 
    }
});

app.get('/', (req, res) => {
    res.send('Welcome to the homepage!'); 
});

app.listen(3000, () => {
    console.log('Server running on port http://localhost:3000');
});
