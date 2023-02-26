import "dotenv/config";
import connect from "./db/connect.js";
import Product from "./models/productModel.js";
import jsonProducts from "./products.json" assert { type: "json" };

const uri = process.env.URI;

async function start() {
  try {
    await connect(uri);
    console.log(`Connected to Database`);
    await Product.deleteMany();
    console.log("Deleted the previous database records.");
    await Product.create(jsonProducts);
    console.log(
      "Created all the records and wrote in to the collection: Products"
    );
    console.log(`Operation Successfull...!`);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

start();
