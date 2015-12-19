var db = require('../db');

module.exports = {
  messages: {
    get: function(res) {
      db.connection.query('SELECT * FROM messages', function(err, result, fields) {
        res.send(result);
      });

    }, // a function which produces all the messages
    post: function(message) {
      db.connection.query('INSERT INTO messages SET ?', message, function(err, result) {
        console.log(err);
        console.log(result);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function() {},
    post: function() {}
  }
};

// GET
// var sorter = 'date';
// var sql    = 'SELECT * FROM posts ORDER BY ' + connection.escapeId(sorter);
// connection.query(sql, function(err, results) {
//   // ...
// });
