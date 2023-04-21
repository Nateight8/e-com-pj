import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import product from "./sanity/schema/product";
import schemas from "./sanity/schema";

const config = defineConfig({
  name: "e-commerce",
  title: "My Ecommerce",

  projectId: "jfuofpta",
  dataset: "production",
  basePath: "/admin",
  apiVersion: "2023-03-03",
  plugins: [deskTool()],

  schema: { types: schemas },
});

export default config;
