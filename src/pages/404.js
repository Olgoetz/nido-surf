import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const Custom404 = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push("/"), 3000);
  });
  return (
    <>
      <div className="w-full pt-16 px-4 h-screen bg-cover md:bg-fixed bg-center hero-image">
        <div className="max-w-[1024px] text-white flex flex-col text-center justify-center min-h-full py-8 mx-auto">
          <h1 className="mt-4 text-6xl uppercase font-bold">404</h1>
          <p className="mt-4 text-xl py-3">
            Ooooops! Diese Seite existiert nicht. Hier gelangst du zurück auf
            die{" "}
            <Link className="font-bold text-secondary-blue-400" href="/">
              Startseite
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Custom404;
