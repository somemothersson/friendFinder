
const express = require("express");


const app = express();
const PORT = 8080;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static Route
app.use(express.static("./public"));
// API and HTM Routes
// =============================================================
app.use('/api/friends', require('./routing/apiRoutes'))
app.use('/', require('./routing/htmlRoutes'))



// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`));