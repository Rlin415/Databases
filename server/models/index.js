var db = require('../db');

module.exports = {
  messages: {
    get: function(res) {
      db.connection.query('SELECT * FROM messages', function(err, result) {
        if (err) throw err;
        res.send(result);
      });
    },

    post: function(message) {
      db.connection.query('INSERT INTO messages SET ?', message, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function(res) {
      db.connection.query('SELECT * FROM users', function(err, result) {
        if (err) throw err;
        res.send(result);
      }); 
    },
    post: function(user) {
      db.connection.query('INSERT INTO users SET ?', user, function(err, result) {
        if (err) throw err;
        console.log("models poast", result);
      });
    }
  }
};

// GET
// var sorter = 'date';
// var sql    = 'SELECT * FROM posts ORDER BY ' + connection.escapeId(sorter);
// connection.query(sql, function(err, results) {
//   // ...
// });
