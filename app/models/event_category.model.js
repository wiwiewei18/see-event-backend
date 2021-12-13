module.exports = (sequelize, Sequelize) => {
  const eventCategory = sequelize.define(
    "event_category",
    {
      id: {
        type: Sequelize.STRING(36),
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING(100),
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

  return eventCategory;
};
