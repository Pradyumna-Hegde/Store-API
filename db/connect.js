import mongoose, { mongo } from "mongoose";

function connect(uri) {
  mongoose.set("strictQuery", true);
  return mongoose.connect(uri);
}

export default connect;
