import Link from "next/link";

export default function page() {
  return (
    <div>
      <h2>Hello Next.js</h2>
      <div>
        <Link href="/test/test1">test1</Link>
        <br />
        <Link href="/test/test2">test2</Link>
        <br />
        <Link href="/test/test3">test3</Link>
        <br />
        <Link href="/test/test4">test4</Link>
        <br />
      </div>
    </div>
  );
}
