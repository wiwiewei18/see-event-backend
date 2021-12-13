module.exports = (sequelize, Sequelize) => {
  const event = sequelize.define(
    "event",
    {
      id: {
        type: Sequelize.STRING(36),
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      category_id: {
        type: Sequelize.STRING(36),
      },
      title: {
        type: Sequelize.STRING(100),
      },
      content: {
        type: Sequelize.TEXT,
      },
      start_date: {
        type: Sequelize.INTEGER(11),
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

  return event;
};
