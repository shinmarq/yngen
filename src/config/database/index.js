/**
 * @Dependencies
 */
const mongoose = require('mongoose');

const connection = dbCon => {
  const opts = {
    useNewUrlParser: true,
    useFindAndModify: false,
    autoReconnect: true,
  };

  mongoose.connect(dbCon, opts);
  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('connected:', dbCon);
  });
};

exports.connection = connection;
