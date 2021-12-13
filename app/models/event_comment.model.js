module.exports = (sequelize, Sequelize) => {
  const eventComment = sequelize.define(
    "event_comment",
    {
      id: {
        type: Sequelize.STRING(36),
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      event_id: {
        type: Sequelize.STRING(36),
      },
      content: {
        type: Sequelize.TEXT,
      },
      created_by: {
        type: Sequelize.STRING(36),
      },
      created_on: {
        type: Sequelize.INTEGER(11),
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return eventComment;
};
