const { Model, DataTypes } = require('sequelize');
const dbConnection = require('./../config/config'); // Ajusta la ruta a tu archivo de configuración de Sequelize

class EncuestaPoclac extends Model { }

EncuestaPoclac.init({
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    member: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    proveedor: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    squad: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    nombreRol: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'nombre_rol', 
    },
    encuestador: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    puntajeGeneral: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'desempeño_que',
    },
    desempeñoQue: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'desempeño_que',
    },
    desempeñoComo: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'desempeño_como',
    },
    feedbackApreciativo: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'feedback_apreciativo',
    },
    feedbackConstructivo: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'feedback_constructivo',
    },
}, {
    sequelize: dbConnection,
    modelName: 'EncuestaPoclac',
    tableName: 'vw_encuesta_poclac',
    timestamps: false,
    freezeTableName: true,
    primaryKey: false
});

module.exports = EncuestaPoclac;