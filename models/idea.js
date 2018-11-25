module.exports = (sequelize, DataTypes) => {
    return sequelize.define('ideas', {
        topic: {
            type: DataTypes.STRING(100),
            allowNull: true,
            unique: true
        },
        discussion: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        declaration:{
            type: DataTypes.STRING(2000),
            allowNull: true
        },
        stage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        parent: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "users",
                key: "id"
            }
        }

    })
}