var db = require('../utils/connectDB');

module.exports = {
  load: () => {
    return db.load('select * from Account');
  },
  addAccount: account => {
    return db.add('Account', account);
  },
  getUser: user =>{
    return db.load(`select * from Account where Username = '${user}' `);
  },
};