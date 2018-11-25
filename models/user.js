module.exports = (sequelize,DataTypes) => {
    return sequelize.define('users', {
        firstName:DataTypes.STRING(30),
        lastName:DataTypes.STRING(30),
        userName:DataTypes.STRING(30),
        password:DataTypes.STRING(30),
        loggedIn: DataTypes.BOOLEAN
    })
}