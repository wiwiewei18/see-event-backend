const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  logging: process.env.ENV == "dev" ? console.log : false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// user
db.user = require("./user.model.js")(sequelize, Sequelize);
db.userProfile = require("./user_profile.model.js")(sequelize, Sequelize);

// event
db.event = require("./event.model.js")(sequelize, Sequelize);
db.eventImage = require("./event_image.model.js")(sequelize, Sequelize);
db.eventCategory = require("./event_category.model.js")(sequelize, Sequelize);
db.eventComment = require("./event_comment.model.js")(sequelize, Sequelize);

// event

module.exports = db;
