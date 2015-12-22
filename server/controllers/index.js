var bluebird = require('bluebird');
var db = require('../db');
var Message = db.Message;
var User = db.User;

module.exports = {
  messages: {
    get: function (req, res) {
      // fetch all messages
      Message.findAll({ incude: [ User ] })
        .then(function(results) {
          res.json(results);
        });
    },
    post: function (req, res) {
      User.findOrCreate( { where: { username: req.body['username'] } } )
        .spread(function(user, created) {
          if (!created) {console.log('Error creating message');}
          var param = {
            text: req.body['text'],
            roomname: req.body['roomname'],
            username: user.username,
            userId: user.id
          };
          Message.create(param)
            .then(function(result) {
              console.log('RESULTS: ', result);
              result.setUser(user);
              res.sendStatus(201);
            });
        });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // fetch all users
      User.findAll()
        .then(function(results) {
          res.json(results);
        });
    },
    post: function (req, res) {
      // create a user
      var param = {
        username: req.body['username']
      };
      User.create(param)
        .then(function() {
          res.sendStatus(201);
        });
    }
  }
};
