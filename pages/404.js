import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  
  return (
    <div className="container" dir="rtl">
      <h1>page Not Found</h1>
      <Link href="/">
        <a className="btn btn-dark"> Go To Home</a>
      </Link>
    </div>
  );
};

export default Error;
