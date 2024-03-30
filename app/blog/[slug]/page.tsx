import React from "react";
import { client, urlFor } from "../../lib/sanity";
import { AtrticleBlog } from "../../lib/interface";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export const revalidate = 30;

const fetchData = async (slug: string) => {
  const query = `
    *[_type  == 'blog' && slug.current == '${slug}'] {
        "currentSlug":slug.current,
        title,
        content,
        titleImage,
        _createdAt,
      }[0]
    `;
  const data = await client.fetch(query);
  return data;
};

const BlogArticle = async ({ params }: { params: { slug: string } }) => {
  const data: AtrticleBlog = await fetchData(params.slug);
  console.log(data);

  return (
    <div className="px-4 py-6 md:px-6 lg:py-10">
      <article className="space-y-4 prose prose-gray mx-auto dark:prose-invert">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-[40px]">
          {data.title}
        </h1>
        <Image
          className="rounded-xl w-[100%] h-96 object-cover"
          src={urlFor(data.titleImage).url()}
          alt="sdfsfs"
          width={200}
          height={200}
        />
        <div className="space-y-2 not-prose">
          <p className="text-gray-500 dark:text-gray-400 p-3">
            {data._createdAt}
          </p>
        </div>
        <div className="prose prose-blue prose-xl dark:prose-invert ">
          <PortableText value={data.content} />
        </div>
      </article>
    </div>
  );
};

export default BlogArticle;
