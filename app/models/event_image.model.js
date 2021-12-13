module.exports = (sequelize, Sequelize) => {
  const eventImage = sequelize.define(
    "event_image",
    {
      id: {
        type: Sequelize.STRING(36),
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      event_id: {
        type: Sequelize.STRING(36),
      },
      file: {
        type: Sequelize.STRING(255),
      },
      uploaded_by: {
        type: Sequelize.STRING(36),
      },
      uploaded_on: {
        type: Sequelize.INTEGER(11),
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return eventImage;
};
