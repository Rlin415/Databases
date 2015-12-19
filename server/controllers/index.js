var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      // parse req.data
      // models.get data from database
      console.log('get within controller', req.body);
      models.messages.get(res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
    	// parse '{username: "robert", text: "hello world", roomname: "inception"}'
    	// models.post data to database
    	models.messages.post(req.body);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(res);
    },
    post: function (req) {
      models.users.post(req.body);
    }
  }
};
