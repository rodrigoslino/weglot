import Link from "next/link";
import { headers } from "next/headers";
import { MyServerButton } from "../components/my-server-button";
import { MyClientButton } from "../components/my-client-button";

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
        <MyClientButton name="Back to home (Client Button)" href="/" />
        <br />
        <br />
        <MyServerButton name="Back to home (Server Button)" href="/" />
      </div>
    </main>
  );
}
