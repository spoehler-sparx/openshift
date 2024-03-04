
module.exports.params = {
  dbname: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  params: {
      host: '10.168.168.2',
      port: '30306',
      dialect: 'mysql'
  }
};
