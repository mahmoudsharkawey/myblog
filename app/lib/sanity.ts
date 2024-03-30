import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2013-05-03",
  dataset: "production",
  projectId: "1txje8su",
  useCdn: false,
});

export const getData = async () => {
  const query = `
          *[_type  == 'blog']| order(_createdAt asc){
              title,
                smallDescription,
                "currentSlug":slug.current,
                titleImage,
                _createdAt
            }
          `;
  const data = await client.fetch(query);
  return data;
};

const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
  return builder.image(source);
}
