// Require Mongoose
const mongoose = require('mongoose');

// Connect to DB
mongoose.connect('mongodb://localhost/authors');

// Require Models
require('./../models/models');