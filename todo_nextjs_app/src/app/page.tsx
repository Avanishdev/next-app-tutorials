import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Namaste Bharat</h1>
      <br />
      <Link href="/productlist">Go to Product List</Link>
      <br />
      <Link href="/study">Study</Link>
    </main>
  );
}
