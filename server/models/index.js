var db = require('../db');

module.exports = {
  messages: {
    get: function(res) {
    //   db.connection.query('SELECT * FROM messages', function(err, result) {
    //     if (err) throw err;
    //     res.send(result);
    //   });
    console.log(db.messages);
    console.log(db.db.models['messages']);
    db.db.models['messages'].findAll().then(function(data) {
      console.log(data);
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

//Inserting Data into database
// db.db.models['messages'].save().complete(function (err) {
//  if (err) {
//     console.log('Error in Inserting Record');
//  } else {
//     console.log('Data successfully inserted');
//  }
// });


// Messages
//   .findAll({})
  // .then(function(err, johnDoe) {
  //   if (!johnDoe) {
  //     console.log('No user with the username "john-doe" has been found.');
  //   } else {
  //     console.log('Hello ' + johnDoe.username + '!');
  //     console.log('All attributes of john:', johnDoe.get());
  //   }
  // });
