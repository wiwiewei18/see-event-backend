module.exports = (sequelize, Sequelize) => {
  const userProfile = sequelize.define(
    "user_profile",
    {
      id: {
        type: Sequelize.STRING(36),
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      user_id: {
        type: Sequelize.STRING(36),
      },
      first_name: {
        type: Sequelize.STRING(100),
      },
      last_name: {
        type: Sequelize.STRING(100),
      },
      user_image: {
        type: Sequelize.STRING(255),
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return userProfile;
};
