module.exports = (sequelize, DataTypes) => {
    return sequelize.define('ideas', {
        topic:DataTypes.STRING,
        discussion: DataTypes.STRING,
        stage: DataTypes.STRING
    })
}