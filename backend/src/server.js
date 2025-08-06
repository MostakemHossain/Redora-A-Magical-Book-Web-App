import mongoose from "mongoose";
import config from "./config/index.js";
import app from "./app.js";

async function main() {
  try {
    await mongoose.connect(config.db_url);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
