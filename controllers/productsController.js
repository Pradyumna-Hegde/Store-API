import Product from "../models/productsModel.js";

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ name: "dining table" });
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Products route" });
};

export { getAllProductsStatic, getAllProducts };
