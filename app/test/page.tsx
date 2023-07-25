import Link from "next/link";
import { headers } from "next/headers";
import { MyServerLink } from "../components/my-server-link";
import { MyClientLink } from "../components/my-client-link";

export default function Test() {
  return (
    <main>
      <div>
        <p>
          The sun is shining brightly in the sky. Birds are singing, and the
          gentle breeze rustles through the leaves. It`s a beautiful day,
          perfect for a relaxing picnic in the park with friends and family.
        </p>
        <p>This is a test</p>
      </div>
      <br />
      <div>
        <MyClientLink name="Back to home (Client Link)" href="/" />
        <br />
        <br />
        <MyServerLink name="Back to home (Server Link)" href="/" />
      </div>
    </main>
  );
}
