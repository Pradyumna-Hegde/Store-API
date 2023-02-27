import Product from "../models/productsModel.js";

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).select("name price");
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;
  const queries = {};
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const result = Product.find(queries);

  if (featured) {
    queries.featured = featured === "true" ? true : false;
  }

  if (company) {
    queries.company = company;
  }

  if (name) {
    queries.name = { $regex: name, $options: "i" };
  }

  if (sort) {
    const sortList = sort.split(",").join(" ");
    result.sort(sortList);
  } else {
    result.sort("createAt");
  }

  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result.select(fieldsList);
  }

  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

export { getAllProductsStatic, getAllProducts };
