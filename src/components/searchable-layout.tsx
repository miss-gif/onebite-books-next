import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

const SearchableLayout = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          value={search}
          onKeyDown={onKeyDown}
          onChange={onChangSearch}
          type="text"
          placeholder="검색어를 입력하세요"
          className="border border-gray-300 p-2 rounded-md flex-1"
        />
        <button
          onClick={onSubmit}
          className="w-20  rounded-md bg-blue-600 text-white"
        >
          검색
        </button>
      </div>
      {children}
    </div>
  );
};

export default SearchableLayout;
