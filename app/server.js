// =============================================================
const express = require("express");




// Sets up the Express App
// =============================================================
const app = express();
const PORT = 8080;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served HTML
// app.use(express.static(path.join(__dirname, '/app/public')));

// API Routes
// =============================================================
app.use('/api/friends', require('./routing/apiRoutes'))
app.use('/', require('./routing/htmlRoutes'))





// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
