import Link from "next/link";
import { useRouter } from "next/router";

export default function TableDetail({ params }: { params: { id: string } }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Table {params.id}</h1>
      <p>This is the page for Table {params.id}.</p>
      <Link href="/table">Back to Tables</Link>
    </div>
  );
}