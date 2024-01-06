const {DataTypes} = require ("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Ventas', {
        ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, // Establece ID como clave primaria
            validate: {
              isInt: true, // Asegura que sea un número entero
              min: 1,      // Valor mínimo
              max: 999,    // Valor máximo
            },
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        estado: {
            type: DataTypes.ENUM('Pendiente', 'Entregado'),
            allowNull: false,
        },
        comentario: {
            type: DataTypes.TEXT,
        },
    },
    {timestamps: false}
    )
}