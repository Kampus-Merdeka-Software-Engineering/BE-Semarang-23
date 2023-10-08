import { Sequelize } from "sequelize";

const db = new Sequelize("formshipp", "root", "", {
  host: "127.0.0.1",
  // port: "3000",
  dialect: "mysql",
});

db.authenticate()
  .then(() => `Database sudah terhubung`)
  .catch((error) => console.log(error));

export default db;
