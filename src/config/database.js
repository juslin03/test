import mongoose from "mongoose";
import constants from "./constants";

// remove warning with Promise
mongoose.Promise = global.Promise;

// connect to the url provided
try {
  mongoose.connect(constants.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
} catch (error) {
  if (error) {
    throw error;
  } else {
    mongoose.createConnection(constants.MONGO_URL);
  }
}

mongoose.connection
  .once("open", () => console.log("MongoDB running"))
  .on("error", (e) => {
    throw e;
  });
