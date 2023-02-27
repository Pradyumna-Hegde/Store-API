import "dotenv/config";
import connect from "./db/connect.js";
import Product from "./models/productsModel.js";
import jsonProducts from "./products.json" assert { type: "json" };

const uri = process.env.URI;

async function start() {
  try {
    await connect(uri);
    console.log(`Connected to Database`);
    console.log(`Operation Successfull...!`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

start();
