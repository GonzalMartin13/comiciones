require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require("pg");
const path = require("path");
const fs = require("fs");

const { DB_USER, DB_PASSWORD, DB_HOST,SECRET } = process.env;

let sequelize; // Declara sequelize fuera del bloque try-catch

try {
  sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/comisiones`, {
    logging: false,
    native: false,
    dialectModule: pg,
  }); 

/*   sequelize = new Sequelize(SECRET, {
    logging: false,
    native: false,
    dialectModule: pg,
  }); */

  const basename = path.basename(__filename);

  // Lectura y carga dinámica de modelos desde la carpeta 'models'
  const modelDefiners = [];

  // usamos filesystem para extraer de la carpeta models el nombre de cada modelo y pushearlo al array modelDefiners
  fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
      (file) =>
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
    .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, "/models", file)));
    });

  // Injectamos la conexión (sequelize) a todos los modelos que están en el Array modelDefiners
  modelDefiners.forEach((model) => model(sequelize));

  // Capitalizamos los nombres de los modelos, es decir, product => Product
  const entries = Object.entries(sequelize.models);

  const capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
  ]);

  sequelize.models = Object.fromEntries(capsEntries);

  const { Ventas } = sequelize.models


} catch (error) {
  console.error('Error de conexión a la base de datos:', error);
}

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
