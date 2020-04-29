const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports.Todo = require('./todo');