module.exports = (sequelize, DataTypes) => {
  return sequelize.define('votes', {
    topic: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey:true
    },
    upvote: {
      type: DataTypes.BOOLEAN,
    },
    downvote: {
      type: DataTypes.BOOLEAN,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id"
      },
      primaryKey:true
    }
  })
}