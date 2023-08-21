import Image from "next/image";

import data from "./data.json";

const Card = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="relative m-4 h-80 w-72">
      <Image
        src={src}
        alt={title}
        fill={true}
        className="rounded-md border-2 border-slate-500"
      />
      <div className="absolute inset-x-0 bottom-0 h-16 flex justify-center items-center bg-slate-800 bg-opacity-50 overflow-scroll text-slate-100 text-lg rounded-md">
        <p className="px-2 py-4">{title}</p>
      </div>
    </div>
  );
};

export default function page() {
  console.log(process.env.PORT); // logging in server-side

  type imageType = { id: number; previewImage: string; title: string };

  return (
    <div className="flex flex-wrap">
      {(data as imageType[]).map((each) => (
        <Card key={each.id} src={each.previewImage} title={each.title} />
      ))}
    </div>
  );
}
