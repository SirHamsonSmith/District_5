module.exports = (sequelize,DataTypes) => {
    return sequelize.define('users', {
        userName:DataTypes.STRING(30),
        password:DataTypes.STRING(30),
        loggedIn: DataTypes.BOOLEAN
    })
}