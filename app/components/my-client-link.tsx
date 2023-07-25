"use client";
import { headers } from "next/headers";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MyClientLinkProps {
  name: string;
  href: string;
}

export function MyClientLink({ name, href }: MyClientLinkProps) {
  const available_locales = ["br", "es"];
  const pathname = usePathname();

  // Extract the locale from the pathname
  const locale =
    process.env.NODE_ENV === "production" &&
    available_locales.includes(pathname.split("/")[1])
      ? `/${pathname.split("/")[1]}`
      : "";

  console.log(
    "my-client-button window.location.pathname",
    typeof window !== "undefined" ? window.location.pathname : ""
  );
  console.log("my-client-button pathname", pathname);
  console.log("my-client-button  locale", locale);

  return (
    <>
      <a
        href={`${locale}${href}`}
        style={{ border: "solid 1px white", backgroundColor: "#ff1111" }}
      >
        {name} (normal anchor from HTML)
      </a>
      <br />
      <br />
      <div>
        <Link
          href={`${locale}${href}`}
          style={{ border: "solid 1px white", backgroundColor: "#ff1111" }}
        >
          {name} (nextjs link)
        </Link>{" "}
        Nexjs link doesn`t work when a lang is set in the pathname
      </div>
    </>
  );
}
