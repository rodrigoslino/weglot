"use client";
import { headers } from "next/headers";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MyClientButtonProps {
  name: string;
  href: string;
}

export function MyClientButton({ name, href }: MyClientButtonProps) {
  const pathname = usePathname();

  // Extract the locale from the pathname
  const locale =
    process.env.NODE_ENV === "production" &&
    pathname.endsWith("/") &&
    pathname?.split("/")[1]
      ? `/${pathname?.split("/")[1]}`
      : !pathname.endsWith("/")
      ? pathname?.split("/")[0]
      : "";

  console.log(
    "my-client-button window.location.pathname",
    typeof window !== "undefined" ? window.location.pathname : ""
  );
  console.log("my-client-button pathname", pathname);
  console.log("my-client-button  locale", locale);

  return (
    <a
      href={`${locale}${href}`}
      style={{ border: "solid 1px white", backgroundColor: "#ff1111" }}
    >
      {name}
    </a>
  );
}
