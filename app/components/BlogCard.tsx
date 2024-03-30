import { blogCard } from "../lib/interface";
import { getData, urlFor } from "../lib/sanity";
import Image from "next/image";
export const revalidate = 30;

const BlogCard = async () => {
  const data: blogCard[] = await getData();
  return (
    <div>
      {data.map((post, idx) => {
        return (
          <div className="sm:flex p-8 justify-between " key={idx}>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <a href={`/blog/${post.currentSlug}`}>
                  <h1 className="text-3xl font-bold hover:underline hover:cursor-pointer">
                    {post.title}
                  </h1>
                </a>
                <p className="mt-2 text-sm text-gray-400">
                  {post._createdAt}
                  <span aria-hidden="true"> </span>
                  <ClockIcon className="inline-block w-4 h-4 text-gray-400" /> 
                </p>
                <p className="mt-4 text-lg ">{post.smallDescription}</p>
              </div>
            </div>

            <Image
              className="rounded-xl w-[100%] sm:w-48"
              src={urlFor(post.titleImage).url()}
              alt={`${post.title}-cover `}
              width={200}
              height={200}
            />
          </div>
        );
      })}
    </div>
  );
};
export default BlogCard;

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
