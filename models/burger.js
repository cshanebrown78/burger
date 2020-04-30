var orm = require("../config/orm.js");

var burger = {
   all: function(cb) {
       orm.all("burgers", function(res) {
           cb(res);
       });
   },
   insertOne: function(vals, cb) {
       orm.insertOne("burgers", vals, function(res) {
           cb(res);
       });
   },
   updateOne: function(objColVals, condition, cb) {
       orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
       });
   }
};

module.exports = burger;