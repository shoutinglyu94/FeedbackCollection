const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();
//https://accounts.google.com/o/oauth2/v2/auth?
// response_type=code&
// redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&
require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);