import React from "react";
import { BookDate } from "@/types";
import Link from "next/link";

const BookItem = ({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookDate) => {
  return (
    <Link
      href={`/book/${id}`}
      className="flex gap-4 pt-5 pb-5 border-b border-gray-300"
    >
      <img src={coverImgUrl} alt={title} className="w-20" />
      <div className="">
        <div className="font-bold">{title}</div>
        <div className="break-keep">{subTitle}</div>
        <br />
        <div className="text-gray-400">
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
};

export default BookItem;
