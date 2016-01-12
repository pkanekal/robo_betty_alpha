/**
 * Config var for app
**/
process.env.MONGODB_URL = 'mongodb://heroku_1zm72tdd:ppeo8mhp9ao849s1g639rm32lv@ds043605.mongolab.com:43605/heroku_1zm72tdd';
module.exports = {
  mongoDBUrl: process.env.MONGODB_URL || 'mongodb://localhost:27017/test',
  port: process.env.PORT || 4941,
  secret: process.env.SECRET || 'mysecret'
};
