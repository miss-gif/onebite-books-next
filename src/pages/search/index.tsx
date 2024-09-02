import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();

  const { q } = router.query;

  return <div>Page {q}</div>;
};

export default Page;
