const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())

const morgan = require('morgan')
app.use(morgan('dev'))

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)    
})