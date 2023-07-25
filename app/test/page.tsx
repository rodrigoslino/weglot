import Link from "next/link";
import { headers } from "next/headers";
import { MyButton } from "../components/my-button";

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

      <MyButton name="Back to home" href="/" />
    </main>
  );
}
