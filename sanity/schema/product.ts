const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the product",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      description: "The URL slug for the product",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "The main image of the product",
    },
    {
      name: "additionalImages",
      title: "Additional Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
      description:
        "Additional images of the product to be displayed in a swiper",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      description: "A brief description of the product",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "The price of the product",
    },

    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      description: "Features or specifications of the product",
    },
    {
      name: "relatedProducts",
      title: "Related Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
      options: {
        layout: "grid",
      },
      description: "Products related to this product",
    },
  ],
};

export default product;
