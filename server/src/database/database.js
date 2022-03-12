const { connect } = require("mongoose");

const connection = async () => {
  try {
    const config = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await connect(process.env.DATABASE_URL, config);
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
