// Imports small array of users
// Pretend it's an API request
const users = require("./data")
// Filters users by specific ID
function getUser(id) {
  return users.find((user) => user.id === id);
}

// test
// console.log(getUser(3));

module.exports = { getUser };

