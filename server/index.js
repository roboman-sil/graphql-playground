import express from "express";
// before adding graphql API
import graphqlHTTP from "express-graphql";
// after adding graphql api
import mongoose from "mongoose";

//Later
import schema from "./graphql";
const app = express();

mongoose.connect("mongodb://localhost/portfolioex");
const db = mongoose.connection;
db.on("error", () => console.log("Failed to connect to DB.")).once("open", () =>
  console.log("Connected to DB. ")
);

app.get("/", (req, res) => {
  res.send("Hello World..");
});

// GraphQL API
app.use(
  "/graphiql",
  graphqlHTTP(() => ({
    schema,
    graphiql: true,
    pretty: true
  }))
);

app.listen(4000, () => {
  console.log("GraphQL server running at port 3000...");
});
