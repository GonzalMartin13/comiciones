const server = require("./src/server.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;

conn.sync({ force: false }).then(() => {
  server.listen({ port }, () => {
    console.log(`server conectado a base de datos,  ${port}`);
  });
});
