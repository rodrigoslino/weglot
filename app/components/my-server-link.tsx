import { headers } from "next/headers";
import Link from "next/link";

export interface MyServerLinkProps {
  name: string;
  href: string;
}

export async function MyServerLink({ name, href }: MyServerLinkProps) {
  const available_locales = ["br", "es"];
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";

  // Extract the locale from the pathname
  const locale =
    process.env.NODE_ENV === "production" &&
    available_locales.includes(pathname.split("/")[1])
      ? `/${pathname.split("/")[1]}`
      : "";

  console.log("my-server-link pathname", pathname);
  console.log("my-server-link locale", locale);

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
      <Link
        href={`${locale}${href}`}
        style={{ border: "solid 1px white", backgroundColor: "#ff1111" }}
      >
        {name} (nextjs link)
      </Link>
      Nexjs link doesn`t work when a lang is set in the pathname
    </>
  );
}
