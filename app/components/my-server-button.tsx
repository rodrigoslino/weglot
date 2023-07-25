import { headers } from "next/headers";
import Link from "next/link";

export interface MyServerButtonProps {
  name: string;
  href: string;
}

export async function MyServerButton({ name, href }: MyServerButtonProps) {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path");

  // Extract the locale from the pathname
  const locale =
    process.env.NODE_ENV === "production" && pathname?.split("/")[1]
      ? `/${pathname?.split("/")[1]}`
      : "";

  console.log("rodrigo ", locale);

  return (
    <Link
      href={`${locale}${href}`}
      style={{ border: "solid 1px white", backgroundColor: "#ff1111" }}
    >
      {name}
    </Link>
  );
}
