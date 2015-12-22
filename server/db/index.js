var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '');

//Checking connection status
db.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function(err) {
    console.log('Unable to connect to the database:', err);
  });

var User = db.define('users', {
  username: Sequelize.STRING
});

var Message = db.define('messages', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING,
  username: Sequelize.STRING
});

Message.belongsTo(User);
User.hasMany(Message);

User.sync();
Message.sync();
db.sync();

exports.User = User;
exports.Message = Message;
