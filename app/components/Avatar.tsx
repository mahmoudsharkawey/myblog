import Image from "next/image";

export function AvatarDemo() {
  return (
    <>
      <div className="flex items-center justify-center flex-col	sm:flex-row gap-7 mt-5 font-bold mb-10">
        <div>
          <Image
            className=" rounded-full mr-4"
            priority
            width={200}
            height={200}
            alt="MG Image"
            src="/WhatsApp Image 2024-03-20 at 23.49.03_382de109.jpg"
          />
        </div>

        <div className="animate-pulse flex flex-col">
          <h1 className="text-3xl sm:text-5xl">Hello and Welcome </h1>
          <br />
          <h2 className="text-3xl sm:text-5xl">👋 Im Mahmoud </h2>
        </div>
      </div>
    </>
  );
}
