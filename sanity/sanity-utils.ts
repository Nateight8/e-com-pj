import { createClient, groq } from "next-sanity";

export async function getProducts() {
  const client = createClient({
    projectId: "jfuofpta",
    dataset: "production",
    apiVersion: "2023-03-03",
  });

  return client.fetch(
    groq`*[_type == "product"] {
        _id,
        title,
        slug,
        mainImage,
        additionalImages,
        description,
        price,
        "category": category->{
          _id,
          title,
          slug
        },
        features,
        "relatedProducts": relatedProducts[]{
          _id,
          title,
          slug,
          mainImage
        }
      }`
  );

  return client;
}
