module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.STRING(36),
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      email: {
        type: Sequelize.STRING(100),
      },
      password: {
        type: Sequelize.STRING(255),
      },
      created_by: {
        type: Sequelize.STRING(36),
      },
      created_on: {
        type: Sequelize.INTEGER(11),
      },
      edited_by: {
        type: Sequelize.STRING(36),
      },
      edited_on: {
        type: Sequelize.INTEGER(11),
      },
      deleted_by: {
        type: Sequelize.STRING(36),
      },
      deleted_on: {
        type: Sequelize.INTEGER(11),
      },
      deleted: {
        type: Sequelize.TINYINT(1),
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return user;
};
