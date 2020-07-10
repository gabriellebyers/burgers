



var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = burger;













// // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var burger = {
//   selectAll: function(cb) {
//     orm.selectAll("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   insertOne: function(name, cb) {
//     orm.insertOne("burgers", [
//     "burger_name", "devoured"],  [
//       name, false
//     ], cb);
//   },
  

//   updateOne: function(id, cb) {
//     var condition = "id=" + id;
//     orm.updateOne("burgers", {
//       devoured: true
//     }, condition, cb);
//   }
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = burger;
