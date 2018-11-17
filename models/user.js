module.exports = (sequelize,DataTypes) => {
    return sequelize.define('users', {
        userName:DataTypes.STRING,
        password:DataTypes.STRING,
        loggedIn: DataTypes.BOOLEAN
    })
}
