import { Sequelize } from "sequelize";

const db = new Sequelize("railway", "root", "3JoHrALpX2jxV6mvyzMP", {
  host: "containers-us-west-201.railway.app",
  port: "6187",
  dialect: "mysql",
});

db.authenticate()
  .then(() => `Database sudah terhubung`)
  .catch((error) => console.log(error));

export default db;
