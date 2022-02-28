const mongoose = require("mongoose");

const setDatabaseConfig = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`database connecting`);
    })
    .catch((e) => console.log(e));
};

module.exports = setDatabaseConfig;
