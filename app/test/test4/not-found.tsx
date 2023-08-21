import Link from "next/link";

export default function notFound() {
  return (
    <div>
      <h2>404 - Not Found</h2>
      <Link href="/test">return test-home</Link>
    </div>
  );
}
