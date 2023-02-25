import express from "express";
import connect from "./db/connect.js";
import "dotenv/config";
import errorHandlerMiddleware from "./middlewares/error-handler.js";
import notFound from "./middlewares/not-found.js";

const port = process.env.PORT || 6000;
const uri = process.env.URI;
const app = express();
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send(
    '<h1>Welcome to Store API Project</h1><a href="/api/v1/products">All Products</a>'
  );
});

// middlewares.
app.use(errorHandlerMiddleware);
app.use(notFound);

const start = async () => {
  try {
    // connect()
    await connect(uri);
    app.listen(port, () =>
      console.log(
        `Connected to the Database and Listening at the Server: http://localhost:${port}`
      )
    );
  } catch (error) {
    console.log(error);
  }
};

start();
