const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes'); 

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));
 console.log(1)

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
